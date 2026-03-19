const projectsDiv = document.getElementById('projects');

fetch('http://localhost:5000/api/projects')
    .then(res => res.json())
    .then(data => {
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsDiv.appendChild(card);
        });
    })
    .catch(err => console.log("Error loading projects:", err));