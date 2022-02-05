const aboutMe = document.querySelector('.about-me-container');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';

const themeRef = document.querySelector('#theme-switch-toggle');

themeRef.addEventListener('change', onThemeChange);

function onThemeChange(e) {
  if (e.target.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
}

function replaceTheme(oldTheme, newTheme) {
  document.body.classList.replace(oldTheme, newTheme);
  aboutMe.classList.add(newTheme);
  aboutMe.classList.remove(oldTheme);

  localStorage.setItem(THEME_KEY, newTheme);
}

function savedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    document.body.classList.value = savedTheme;
    aboutMe.classList.add(savedTheme);

    themeRef.checked = savedTheme === Theme.DARK;

    // if (savedTheme === Theme.DARK) {
    //   themeRef.checked = true;
    // }
  } else {
    document.body.classList = Theme.LIGHT;
    aboutMe.classList.add(Theme.LIGHT);
  }
}

savedTheme();
