const toggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = String(new Date().getFullYear());
