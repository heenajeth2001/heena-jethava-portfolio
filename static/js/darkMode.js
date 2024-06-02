function themeSwitcher() {
    return {
      isDarkMode: false,
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      },
      init() {
        this.isDarkMode = localStorage.getItem('theme') === 'dark';
      }
    }
  }