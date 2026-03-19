fetch('http://localhost:5000/api/projects')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('project-container');
        data.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            container.appendChild(projectDiv);
        });
    });