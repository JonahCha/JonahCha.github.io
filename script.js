document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:0.2});
document.querySelectorAll('.fade, .card').forEach(el=>io.observe(el));

// Back to top
document.getElementById('toTop').addEventListener('click', ()=>{
  window.scrollTo({top:0, behavior:'smooth'});
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', ()=>{
  menu.classList.toggle('open');
});
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click', ()=> menu.classList.remove('open')));
