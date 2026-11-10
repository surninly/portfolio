// 내비게이션 상태 갱신
const navbar = document.getElementById('navbar');
const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// 모바일 메뉴 열기 및 닫기
const menuButton = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
function setMenu(open) {
  navLinks.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 769px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
});

// 콘텐츠 표시
 document.querySelectorAll('.reveal').forEach(element => element.classList.add('active'));
