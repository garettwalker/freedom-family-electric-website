const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

function handleHeaderState() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

handleHeaderState();
window.addEventListener('scroll', handleHeaderState, { passive: true });

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.14 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
