const toggleButton = document.querySelector('.header__btn-toggle');
const page = document.querySelector('.page')

function changeTheme() {
  page.classList.toggle('page_theme_light');
}

function main() {
  toggleButton.addEventListener('click', changeTheme);
}

main();
