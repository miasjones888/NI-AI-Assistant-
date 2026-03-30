# Model Configuration (AI Studio Baseline)

Use these baseline settings for launch. Adjust only after eval review.

## Generation settings
- **Temperature:** 0.4  
  Rationale: stable, predictable responses while preserving some flexibility.
- **Top P:** 0.9  
  Rationale: controls tail sampling while keeping natural language fluid.
- **Top K:** 40 (if exposed)  
  Rationale: additional stability guard for production behavior.
- **Max output tokens:** 900  
  Rationale: enough room for structured plans without excessive verbosity.

## Safety settings (recommended defaults)
Use platform categories available in AI Studio and set to **block high-risk content** while allowing benign coaching language.

Suggested baseline:
- Harassment / abuse: **Block high severity**
- Hate / extremist content: **Block medium+ severity**
- Sexual content: **Block medium+ severity**
- Dangerous acts / self-harm facilitation: **Block medium+ severity**

## Policy overlays
- Add instruction-layer refusal for:
  - self-harm encouragement
  - violence facilitation
  - illegal activity instructions
  - targeted harassment
- Allow supportive, de-escalating language and referral to professional help.

## Runtime controls
- Enable server-side logging of:
  - prompt class (normal/freeze/overload/failure)
  - latency
  - safety blocks triggered
  - fallback path invoked
- Redact personal identifiers in logs where possible.

## Change control
- Any config change requires:
  1. reason for change
  2. before/after metric comparison on eval set
  3. sign-off by product + safety reviewer
