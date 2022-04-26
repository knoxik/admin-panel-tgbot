const toggleButton = document.querySelector('.header__btn-toggle');
const page = document.querySelector('.page');
const newPostMenu = document.querySelector('.new-post-menu');
const newPostMenuButton = document.querySelector('.posts__btn')

function changeTheme() {
  page.classList.toggle('page_theme_light');
}

function togglePostMenu() {
  newPostMenu.classList.toggle('new-post-menu_active')
}

function main() {
  toggleButton.addEventListener('click', changeTheme);
  newPostMenuButton.addEventListener('click', togglePostMenu)
}

main();
