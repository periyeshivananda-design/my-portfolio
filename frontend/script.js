// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Form Submission (Simulated)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I will get back to you soon.");
    e.target.reset();
});