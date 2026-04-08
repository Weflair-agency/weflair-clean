(() => {
  const STORAGE_KEY = 'weflair-theme';

  const applyTheme = (theme) => {
    if (!document.body) return;
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelectorAll('[data-theme-toggle]')
      .forEach((button) => {
        button.setAttribute('aria-pressed', String(theme === 'light'));
        button.setAttribute(
          'aria-label',
          theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
        );
      });
  };

  const getStoredTheme = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_error) {
      return null;
    }
  };

  const persistTheme = (theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_error) {
      // Ignore storage issues in static preview mode.
    }
  };

  const getNextTheme = () =>
    document.body?.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

  const mountThemeToggle = () => {
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      if (button.dataset.codexThemeMounted === 'true') return;
      button.dataset.codexThemeMounted = 'true';
      button.addEventListener('click', () => {
        const nextTheme = getNextTheme();
        applyTheme(nextTheme);
        persistTheme(nextTheme);
      });
    });
  };

  const boot = () => {
    const theme = getStoredTheme() || document.body?.getAttribute('data-theme') || 'dark';
    applyTheme(theme);
    mountThemeToggle();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
