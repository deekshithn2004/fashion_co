// Category button functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.step, .hero-text, .meet-us').forEach((el) => {
    observer.observe(el);
});

// Mobile menu toggle functionality (if needed)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const mobileBreakpoint = 768;

    const toggleMobileMenu = () => {
        if (window.innerWidth <= mobileBreakpoint) {
            navbar.classList.add('mobile');
        } else {
            navbar.classList.remove('mobile');
        }
    };

    // Initial check
    toggleMobileMenu();

    // Listen for window resize
    window.addEventListener('resize', toggleMobileMenu);
};

// Initialize mobile menu
createMobileMenu();

// Add hover effects for buttons

const buttons = document.querySelectorAll





