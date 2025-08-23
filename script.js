// Smooth scroll active year
document.getElementById('year').textContent = new Date().getFullYear();

// IntersectionObserver for fade-ins
const observer = new IntersectionObserver((entries) => {
  for (const e of entries){
    if (e.isIntersecting){
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  }
}, { threshold: 0.2 });

document.querySelectorAll('.fade, .card').forEach(el => observer.observe(el));

// Back to top
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
