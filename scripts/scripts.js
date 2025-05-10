// Show last modified date
document.getElementById('last-update').textContent = document.lastModified;

// Hamburger menu toggle 1
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// hamburger.addEventListener('click', () => {
//   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
//   hamburger.textContent = navMenu.classList.contains('open') ? 'X' : '☰';
// });

// Hamburger menu toggle 2
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  // Toggle the 'open' class on the navLinks (or navMenu)
  navLinks.classList.toggle('open');
  
  // Update the hamburger text based on the 'open' class
  hamburger.textContent = navLinks.classList.contains('open') ? 'X' : '☰';
  
  // Toggle the visibility of navLinks
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});


// Course filter buttons
const filterAll = document.getElementById('filter-all');
const filterCSE = document.getElementById('filter-cse');
const filterWDD = document.getElementById('filter-wdd');
const courses = document.querySelectorAll('.course-btn');

filterAll.addEventListener('click', () => {
  courses.forEach(course => course.style.display = 'inline-block');
});

filterCSE.addEventListener('click', () => {
  courses.forEach(course => course.style.display = course.classList.contains('cse') ? 'inline-block' : 'none');
});

filterWDD.addEventListener('click', () => {
  courses.forEach(course => course.style.display = course.classList.contains('wdd') ? 'inline-block' : 'none');
});