if (typeof document !== 'undefined') {
    document.getElementById('theme-toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }