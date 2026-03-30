(function fxController() {
  const root = document.documentElement;
  const storageKey = 'ui-effects-mode';
  const pulseKey = 'ui-effects-pulse';
  const scanlineKey = 'ui-effects-scanline';

  const allowedModes = new Set(['minimal', 'standard', 'scanline']);

  function safeGet(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* no-op for privacy mode */
    }
  }

  function applyMode(mode) {
    const nextMode = allowedModes.has(mode) ? mode : 'standard';
    root.dataset.fx = nextMode;
    root.dataset.fxScanline = nextMode === 'scanline' ? 'on' : 'off';
    safeSet(storageKey, nextMode);
  }

  function applyPulse(enabled) {
    const state = enabled ? 'on' : 'off';
    root.dataset.fxPulse = state;
    safeSet(pulseKey, state);
  }

  function applyScanline(enabled) {
    const state = enabled ? 'on' : 'off';
    root.dataset.fxScanline = state;
    safeSet(scanlineKey, state);
  }

  const mode = safeGet(storageKey, 'standard');
  const pulse = safeGet(pulseKey, 'on') === 'on';
  const scanline = safeGet(scanlineKey, 'off') === 'on';

  applyMode(mode);
  applyPulse(pulse);
  applyScanline(scanline);

  window.UIEffects = {
    setMode: applyMode,
    setPulse: applyPulse,
    setScanline: applyScanline,
  };
})();
