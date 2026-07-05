/**
 * Scroll-reveal: fades .reveal elements in as they enter the viewport.
 * The hidden state is only applied via CSS when `html.js` is present and
 * `prefers-reduced-motion` is not set, so this script can no-op safely.
 */
function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  if (elements.length === 0) return;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  elements.forEach((el) => {
    // Anything already in the viewport on load renders immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
}

initReveal();
// Re-run when the page is restored from the back/forward cache.
window.addEventListener("pageshow", (e) => {
  if (e.persisted) initReveal();
});
