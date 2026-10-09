/**
 * Revela elementos com [data-reveal] ao entrarem na tela.
 * Atraso opcional por elemento: data-reveal-delay="120" (ms).
 */
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

items.forEach((el) => {
  const delay = el.dataset.revealDelay;
  if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
});

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}
