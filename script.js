const toggleButton = document.getElementById('toggle-theme');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

function setTheme(isLight) {
  document.documentElement.classList.toggle('light', isLight);
  toggleButton.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved === 'light');
  }
}

function toggleMenu() {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
}

toggleButton?.addEventListener('click', () => {
  const isLight = !document.documentElement.classList.contains('light');
  setTheme(isLight);
});

menu?.addEventListener('click', toggleMenu);
nav?.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && nav.classList.contains('open')) {
    toggleMenu();
  }
});

loadTheme();
