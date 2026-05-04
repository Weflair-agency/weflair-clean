import re

filepath = 'build_saas.py'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

css = """
      /* Process grid (imported from B2B) */
      .b2b-process-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }
      .b2b-process-step {
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--saas-border);
        border-top: 3px solid transparent;
        transition: all 0.3s ease;
      }
      .b2b-process-step:hover {
        border-top-color: var(--saas-brand);
      }
      .b2b-process-step span {
        display: block;
        font-size: 0.85rem;
        color: var(--saas-brand);
        margin-bottom: 2rem;
        letter-spacing: 0.1em;
      }
      .b2b-process-step h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
      .b2b-process-step p {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }
      @media (max-width: 1024px) {
        .b2b-process-grid { grid-template-columns: 1fr; }
      }
"""

content = content.replace('/* Interactive Services Grid */', css + '\n      /* Interactive Services Grid */')
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated CSS in build_saas.py")
