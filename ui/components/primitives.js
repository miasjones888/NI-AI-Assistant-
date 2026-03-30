const icon = {
  minimize: "_",
  maximize: "□",
  close: "✕",
};

function buttonMarkup(type, title) {
  const glyph = icon[type] ?? "□";
  return `<button class="pixel-btn" type="button" aria-label="${title}">${glyph}</button>`;
}

class WindowFrame extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") ?? "Untitled Window";
    this.classList.add("window-frame");
    this.innerHTML = `
      <header class="window-titlebar">
        <span class="window-title">${title}</span>
        <div class="window-controls" role="group" aria-label="Window controls">
          ${buttonMarkup("minimize", "Minimize")}
          ${buttonMarkup("maximize", "Maximize")}
          ${buttonMarkup("close", "Close")}
        </div>
      </header>
      <section class="window-content"><slot></slot></section>
      <footer><slot name="status"></slot></footer>
    `;
  }
}

class NIPanel extends HTMLElement {
  connectedCallback() {
    const inset = this.hasAttribute("inset") ? " inset" : "";
    this.className = `ni-card${inset}`;
  }
}

class PixelButton extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") ?? this.textContent?.trim() ?? "Button";
    this.innerHTML = `<button class="pixel-btn" type="button">${label}</button>`;
  }
}

class PixelInput extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") ?? "input";
    const placeholder = this.getAttribute("placeholder") ?? "";
    this.innerHTML = `<input class="pixel-input" name="${name}" placeholder="${placeholder}" />`;
  }
}

class LinkList extends HTMLElement {
  connectedCallback() {
    this.classList.add("link-list");
    this.setAttribute("role", "navigation");
    this.setAttribute("aria-label", this.getAttribute("aria-label") ?? "Directory links");
  }
}

class StatusBar extends HTMLElement {
  connectedCallback() {
    const left = this.getAttribute("left") ?? "Ready";
    const right = this.getAttribute("right") ?? "00:00";
    this.classList.add("status-strip");
    this.innerHTML = `
      <span class="status-cell">${left}</span>
      <span class="status-cell">${right}</span>
    `;
  }
}

customElements.define("window-frame", WindowFrame);
customElements.define("ni-panel", NIPanel);
customElements.define("pixel-button", PixelButton);
customElements.define("pixel-input", PixelInput);
customElements.define("link-list", LinkList);
customElements.define("status-bar", StatusBar);
