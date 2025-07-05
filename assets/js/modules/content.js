// Content Module
export function loadContent() {
    const experienceData = [
        {
            title: 'Senior AI & ML Engineer',
            company: 'Tech Innovation Corp',
            period: '2020 - Present',
            description: 'Leading AI initiatives and developing scalable ML solutions. Specialized in anomaly detection and predictive modeling.',
            achievements: [
                'Developed and deployed ML models for real-time anomaly detection',
                'Led team of 5 data scientists in implementing enterprise-wide AI solutions',
                'Reduced system downtime by 40% through predictive maintenance'
            ]
        },
        {
            title: 'Data Science Team Lead',
            company: 'Data Dynamics Ltd',
            period: '2017 - 2020',
            description: 'Managed data science projects and mentored junior team members in ML/AI implementation.',
            achievements: [
                'Successfully delivered 15+ ML projects',
                'Improved model accuracy by 35%',
                'Implemented automated ML pipelines'
            ]
        }
    ];

    const projectsData = [
        {
            title: 'Time Series Anomaly Detection',
            description: 'Advanced anomaly detection system using deep learning for time series data.',
            technologies: ['Python', 'TensorFlow', 'Azure ML'],
            image: 'assets/images/project1.jpg',
            link: '#'
        },
        {
            title: 'Standard Health Model Evaluation',
            description: 'Healthcare analytics platform for model evaluation and performance monitoring.',
            technologies: ['Python', 'scikit-learn', 'Azure'],
            image: 'assets/images/project2.jpg',
            link: '#'
        }
    ];

    const publicationsData = [
        {
            title: 'AI Integration in SAP Ecosystems',
            type: 'Technical Paper',
            date: '2024',
            description: 'Comprehensive guide on integrating AI solutions within SAP environments.',
            link: '#'
        },
        {
            title: 'Enterprise Cloud Architecture Patterns',
            type: 'Whitepaper',
            date: '2023',
            description: 'Best practices for implementing cloud-native AI solutions.',
            link: '#'
        },
        {
            title: 'Intelligent Automation in Finance',
            type: 'Case Study',
            date: '2023',
            description: 'Implementation study of AI-driven automation in financial services.',
            link: '#'
        }
    ];

    // Populate Experience Section
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timeline.innerHTML = experienceData.map(exp => `
            <div class="timeline__item">
                <div class="timeline__content">
                    <h3 class="timeline__title">${exp.title}</h3>
                    <h4 class="timeline__company">${exp.company}</h4>
                    <p class="timeline__period">${exp.period}</p>
                    <p class="timeline__description">${exp.description}</p>
                    <ul class="timeline__achievements">
                        ${exp.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    // Populate Projects Section
    const projectsGrid = document.querySelector('.projects__grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="card project-card">
                <div class="project-card__image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-card__content">
                    <h3 class="project-card__title">${project.title}</h3>
                    <p class="project-card__description">${project.description}</p>
                    <div class="project-card__technologies">
                        ${project.technologies.map(tech => `
                            <span class="badge">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn--secondary">View Project</a>
                </div>
            </div>
        `).join('');
    }

    // Populate Publications Section
    const publicationsGrid = document.querySelector('.publications__grid');
    if (publicationsGrid) {
        publicationsGrid.innerHTML = publicationsData.map(pub => `
            <div class="card publication-card">
                <div class="publication-card__content">
                    <span class="publication-card__type">${pub.type}</span>
                    <h3 class="publication-card__title">${pub.title}</h3>
                    <p class="publication-card__date">${pub.date}</p>
                    <p class="publication-card__description">${pub.description}</p>
                    <a href="${pub.link}" class="btn btn--secondary">Read More</a>
                </div>
            </div>
        `).join('');
    }

    // Update current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
