export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 84; 
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
