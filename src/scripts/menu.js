document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
  document.querySelector('.hamburger').classList.toggle('expanded');
});
