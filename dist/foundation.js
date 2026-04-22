(() => {
  const STORAGE_KEY = 'weflair-theme';
  const THEME_META_COLORS = {
    dark: '#151515',
    light: '#f4f1ea',
  };
  const NAV_BREAKPOINT = '(max-width: 991px)';
  const NAV_ACTIVE = 'active';
  const NAV_INACTIVE = 'not-active';
  const NAV_EVENT = 'weflair:navigation';

  const applyTheme = (theme) => {
    if (!document.body) return;
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', THEME_META_COLORS[theme] || THEME_META_COLORS.dark);
    }
    document
      .querySelectorAll('[data-theme-toggle]')
      .forEach((button) => {
        button.setAttribute('aria-pressed', String(theme === 'light'));
        button.setAttribute(
          'aria-label',
          theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
        );
        button.dataset.codexThemeMounted = 'true';
      });
    document.dispatchEvent(
      new CustomEvent('weflair:themechange', {
        detail: { theme },
      })
    );
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
    if (document.documentElement.dataset.codexThemeDelegated !== 'true') {
      document.documentElement.dataset.codexThemeDelegated = 'true';
      document.addEventListener(
        'click',
        (event) => {
          const button = event.target.closest?.('[data-theme-toggle]');
          if (!button) return;
          const nextTheme = getNextTheme();
          applyTheme(nextTheme);
          persistTheme(nextTheme);
        },
        true
      );
    }
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.dataset.codexThemeMounted = 'true';
    });
  };

  const collapseAuditWidget = () => {
    const widget = document.querySelector('.weflair-audit-widget');
    if (!widget) return;
    widget.classList.add('is-collapsed');
    const launcher = widget.querySelector('[data-audit-toggle]');
    if (launcher) launcher.setAttribute('aria-expanded', 'false');
  };

  const mountNavigation = () => {
    if (!document.body || document.documentElement.dataset.codexNavMounted === 'true') {
      return;
    }

    document.documentElement.dataset.codexNavMounted = 'true';

    const compactQuery = window.matchMedia(NAV_BREAKPOINT);
    const toggles = Array.from(
      document.querySelectorAll('[data-navigation-toggle="toggle"]')
    );
    const closers = Array.from(
      document.querySelectorAll('[data-navigation-toggle="close"]')
    );
    const dropdowns = Array.from(document.querySelectorAll('[data-dropdown-status]'));
    const navLinks = Array.from(
      document.querySelectorAll('.nav-bar__links a, .nav-bar__btn a, .nav-bar__logo-a')
    );

    const isCompact = () => compactQuery.matches;
    const isNavActive = () =>
      document.body?.getAttribute('data-navigation-status') === NAV_ACTIVE;

    const setScrollLock = (locked) => {
      if (!isCompact()) {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        return;
      }

      document.documentElement.style.overflow = locked ? 'hidden' : '';
      document.body.style.overflow = locked ? 'hidden' : '';
    };

    const setToggleState = (active) => {
      toggles.forEach((toggle) => {
        toggle.setAttribute('aria-expanded', String(active));
        toggle.setAttribute(
          'aria-label',
          active ? 'Close navigation menu' : 'Open navigation menu'
        );
        toggle.setAttribute('role', 'button');
        if (!toggle.hasAttribute('tabindex')) toggle.setAttribute('tabindex', '0');
      });
    };

    const setDropdownState = (dropdown, active) => {
      dropdown.setAttribute('data-dropdown-status', active ? NAV_ACTIVE : NAV_INACTIVE);
      const trigger = dropdown.querySelector('[data-dropdown-click]');
      if (trigger) trigger.setAttribute('aria-expanded', String(active));
    };

    const closeAllDropdowns = (except = null) => {
      dropdowns.forEach((dropdown) => {
        if (dropdown === except) return;
        setDropdownState(dropdown, false);
      });
    };

    const broadcastNavigation = (active) => {
      document.dispatchEvent(
        new CustomEvent(NAV_EVENT, {
          detail: { active },
        })
      );
    };

    const setNavigationState = (active) => {
      const status = active ? NAV_ACTIVE : NAV_INACTIVE;
      document.body.setAttribute('data-navigation-status', status);
      document.documentElement.setAttribute('data-navigation-status', status);
      setToggleState(active);
      if (!active) closeAllDropdowns();
      if (active) collapseAuditWidget();
      setScrollLock(active);
      broadcastNavigation(active);
    };

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector('[data-dropdown-click]');
      if (!trigger || trigger.dataset.codexNavMounted === 'true') return;

      trigger.dataset.codexNavMounted = 'true';
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('aria-expanded', 'false');
      if (!trigger.hasAttribute('tabindex')) trigger.setAttribute('tabindex', '0');

      const toggleDropdown = (event) => {
        if (!isCompact()) return;
        event.preventDefault();
        event.stopPropagation();
        const willOpen = dropdown.getAttribute('data-dropdown-status') !== NAV_ACTIVE;
        closeAllDropdowns(dropdown);
        setDropdownState(dropdown, willOpen);
      };

      trigger.addEventListener('click', toggleDropdown);
      trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        toggleDropdown(event);
      });
    });

    toggles.forEach((toggle) => {
      if (toggle.dataset.codexNavMounted === 'true') return;
      toggle.dataset.codexNavMounted = 'true';

      const onToggle = (event) => {
        event.preventDefault();
        setNavigationState(!isNavActive());
      };

      toggle.addEventListener('click', onToggle);
      toggle.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        onToggle(event);
      });
    });

    closers.forEach((closer) => {
      if (closer.dataset.codexNavMounted === 'true') return;
      closer.dataset.codexNavMounted = 'true';
      closer.addEventListener('click', () => setNavigationState(false));
    });

    navLinks.forEach((link) => {
      if (link.dataset.codexNavMounted === 'true') return;
      link.dataset.codexNavMounted = 'true';
      link.addEventListener('click', () => {
        if (isCompact()) setNavigationState(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isNavActive()) {
        setNavigationState(false);
      }
    });

    const syncCompactState = () => {
      setNavigationState(false);
      if (isCompact()) collapseAuditWidget();
      if (!isCompact()) {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    };

    if (typeof compactQuery.addEventListener === 'function') {
      compactQuery.addEventListener('change', syncCompactState);
    } else if (typeof compactQuery.addListener === 'function') {
      compactQuery.addListener(syncCompactState);
    }

    setToggleState(false);
    syncCompactState();
  };

  const boot = () => {
    const theme = getStoredTheme() || document.body?.getAttribute('data-theme') || 'dark';
    applyTheme(theme);
    mountThemeToggle();
    mountNavigation();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
