// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Close menu on click
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    const formData = new FormData(contactForm);
    console.log('Form Submitted', Object.fromEntries(formData));
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initial Visibility for Hero
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero .fade-in');
    if (hero) hero.classList.add('visible');
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Fallback: If observer fails, show elements after 2 seconds
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
    });
}, 2000);


