// Menu navigation
const mainMenu = document.getElementById('mainMenu');
const methodsMenu = document.getElementById('methodsMenu');

// Go to Methods Page
document.getElementById('methodsBtn').addEventListener('click', () => {
  mainMenu.classList.add('hidden');
  methodsMenu.classList.remove('hidden');
});

// Go back to Main Menu
document.querySelectorAll('.backBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    methodsMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  });
});

// Theme Switcher Logic
const themeSelect = document.getElementById('themeSelect');
const savedTheme = localStorage.getItem('theme') || 'purple';

applyTheme(savedTheme);
themeSelect.value = savedTheme;

themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  localStorage.setItem('theme', selected);
  applyTheme(selected);
});

function applyTheme(theme) {
  document.body.classList.remove('light', 'dark', 'purple');
  if (theme !== 'purple') {
    document.body.classList.add(theme);
  }
}
