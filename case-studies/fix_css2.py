import re

css_path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\case-studies\case-studies.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

new_css = '''

/* --- NEW COLORFUL LAYOUT REDESIGN --- */

.wfcs-card {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 12px;
  background-color: var(--color-surface, #0f1014); /* Default dark */
  border: 1px solid rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 400px;
}

.wfcs-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}

.wfcs-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 5px;
  z-index: 10;
}

/* Base theming adding rich hues to dark mode */
.wfcs-theme-orange { background: linear-gradient(180deg, rgba(234, 88, 12, 0.05) 0%, rgba(20,20,20,1) 100%); }
.wfcs-theme-orange::before { background: #ea580c; }
.wfcs-theme-pink { background: linear-gradient(180deg, rgba(219, 39, 119, 0.05) 0%, rgba(20,20,20,1) 100%); }
.wfcs-theme-pink::before { background: #db2777; }
.wfcs-theme-purple { background: linear-gradient(180deg, rgba(147, 51, 234, 0.05) 0%, rgba(20,20,20,1) 100%); }
.wfcs-theme-purple::before { background: #9333ea; }
.wfcs-theme-green { background: linear-gradient(180deg, rgba(22, 163, 74, 0.05) 0%, rgba(20,20,20,1) 100%); }
.wfcs-theme-green::before { background: #16a34a; }
.wfcs-theme-yellow { background: linear-gradient(180deg, rgba(202, 138, 4, 0.05) 0%, rgba(20,20,20,1) 100%); }
.wfcs-theme-yellow::before { background: #ca8a04; }
.wfcs-theme-blue { background: linear-gradient(180deg, rgba(37, 99, 235, 0.05) 0%, rgba(20,20,20,1) 100%); }
.wfcs-theme-blue::before { background: #2563eb; }

/* In case we need an exact pastel mode uncomment these instead: 
.wfcs-theme-orange { background-color: #fff4ed; }
.wfcs-theme-pink { background-color: #fdf2f8; }
.wfcs-theme-purple { background-color: #faf5ff; }
.wfcs-theme-green { background-color: #f0fdf4; }
.wfcs-theme-yellow { background-color: #fefce8; }
.wfcs-theme-blue { background-color: #eff6ff; }
*/

.wfcs-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
}

.wfcs-card__logo-box {
  width: 120px;
  height: 48px;
  display: flex;
  background: transparent !important;
  border-radius: 0;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
}

.wfcs-card__logo-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* Make sure images contrast with background - since default is dark we can keep them normal */
  /* If a white logo is on a white card, we'd invert it. But we're using dark gradients. */
}

.wfcs-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: flex-end;
  flex: 1;
}

.wfcs-card__tag {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: rgba(255,255,255,0.08);
  color: #fff;
  border: 1px solid rgba(255,255,255, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.wfcs-card__body {
  margin-bottom: 2.5rem;
  flex: 1;
}

.wfcs-card__headline {
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.4;
  color: #fff;
  margin: 0;
}

.wfcs-metric-row {
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.wfcs-metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.wfcs-metric strong {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  letter-spacing: -0.02em;
}

.wfcs-metric span {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.2;
}

.wfcs-card__footer {
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
}

a.wfcs-card__link, .wfcs-card__link {
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

a.wfcs-card__link:hover, .wfcs-card__link:hover {
  background: rgba(255,255,255,1);
  color: #000;
}

.wfcs-bottom-cta {
  background: linear-gradient(45deg, #f97316, #ea580c);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 16px;
  margin: 4rem 0;
  color: #fff;
}

.wfcs-bottom-cta h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
}

.wfcs-bottom-cta p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.wfcs-dynamic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
}
'''
with open(css_path, 'a', encoding='utf-8') as f:
    f.write(new_css)
