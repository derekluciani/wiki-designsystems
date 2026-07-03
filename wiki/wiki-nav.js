(() => {
  const nav = document.querySelector('.wiki-nav');
  if (!nav) return;

  let lastScrollY = window.scrollY;

  const updateNav = () => {
    const currentScrollY = window.scrollY;
    const isAtTop = currentScrollY <= 0;
    const isScrollingUp = currentScrollY < lastScrollY;

    nav.classList.toggle('is-visible', isAtTop || isScrollingUp);
    lastScrollY = Math.max(currentScrollY, 0);
  };

  nav.classList.add('is-visible');
  window.addEventListener('scroll', updateNav, { passive: true });
})();
