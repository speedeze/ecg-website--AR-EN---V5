document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
  const themeIcon = document.querySelector('.theme-icon');
  const htmlElement = document.documentElement;

  // التحقق من الثيم المحفوظ مسبقاً
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      // أيقونة الشمس للوضع المظلم
      themeIcon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    } else {
      // أيقونة الهلال للوضع الفاتح
      themeIcon.innerHTML = '<path d="M21 12.79A9 4 0 1111.21 3 7 7 0 0021 12.79z"></path>';
    }
  }
});