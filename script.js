/* Back to top button */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Mobile menu */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

if (menuBtn && mobileMenu && closeMenuBtn) {
  menuBtn.onclick = () => mobileMenu.classList.toggle("translate-x-full");
  closeMenuBtn.onclick = () => mobileMenu.classList.add("translate-x-full");
}

/* Logo marquee */
const logoTrack = document.getElementById("mini-logos");
let pos = 0;
let speed = 0.8;

function marqueeLoop() {
  if (!logoTrack) return;

  const halfWidth = logoTrack.scrollWidth / 2;
  pos -= speed;

  if (Math.abs(pos) >= halfWidth) pos = 0;

  logoTrack.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(marqueeLoop);
}

marqueeLoop();

/* Generic scroll reveal helper */
function revealOnScroll(selector, className = "active", offset = 0.85) {
  const elements = document.querySelectorAll(selector);
  const trigger = window.innerHeight * offset;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add(className);
    }
  });
}

/* Scroll-based animations */
function onScroll() {
  revealOnScroll("#benefits, #benefits-h1, #benefits-p", "active");
  revealOnScroll("#icon1, #icon2, #icon3, #icon4", "active");
  revealOnScroll(".Hero-Image-Container, .IMG2-Container", "show");
  revealOnScroll(".stbp-head-left, .accordion-item, .td-btn", "show");
  revealOnScroll(".BP-img-container", "active");
  revealOnScroll(".IMG-Container", "active");
  revealOnScroll(".testimonial-scroll-animate", "active");
  revealOnScroll("#how-to, .MYS", "show");
  revealOnScroll(".feature-box", "show");
  revealOnScroll(".step-card", "show");
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);

/* Feature box selection */
document.querySelectorAll(".feature-box").forEach(box => {
  box.classList.add("reveal");

  box.addEventListener("click", () => {
    document
      .querySelectorAll(".feature-box")
      .forEach(b => b.classList.remove("selected"));

    box.classList.add("selected");
  });
});
