// 1. Scroll Animation Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. Fetch Projects from Backend
const projectsDiv = document.getElementById('projects');

fetch('http://localhost:5000/api/projects')
    .then(res => res.json())
    .then(data => {
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectsDiv.appendChild(card);
        });
    })
    .catch(() => {
        projectsDiv.innerHTML = "<p style='text-align:center; color:gray;'>Database Offline - Showcase Only</p>";
    });