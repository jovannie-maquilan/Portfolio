// Smooth scrolling for navigation links
console.log('Script loaded');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Burger menu toggle
function toggleMenu() {
    console.log('Toggle menu called');
    const navUl = document.getElementById('nav-menu');
    if (navUl) {
        navUl.classList.toggle('show');
        console.log('Menu show class:', navUl.classList.contains('show'));
    } else {
        console.log('Nav menu not found');
    }
}

// Close menu when clicking a link
const navUl = document.getElementById('nav-menu');
if (navUl) {
    navUl.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navUl.classList.remove('show');
        }
    });
}

// Close menu when clicking a link
navUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navUl.classList.remove('show');
    }
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Typing effect for the main heading
const heading = document.querySelector('header h1');
const text = heading.textContent;
heading.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Add a "Back to Top" button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #667eea;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;
`;
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
    }
});