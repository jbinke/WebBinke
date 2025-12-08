// Projects data for all three projects
const projects = {
    1: {
        title: "Car Seat Headrest Concert Posters",
        date: "2023-2025",
        category: "Graphic Design",
        status: "Completed",
        heroText: "Car Seat Headrest Poster Series",
        overview: "A digital poster series inspired by the music and aesthetic of Car Seat Headrest. Each poster promotes a different concert venue or venues, blending typography with visual themes across the albums.",
        features: [
            "4 unique poster designs",
            "Typography-focused layouts",
            "Album-inspired visual elements",
            "Color schemes matching album moods",
            "Digital and print-ready formats",
        ],
        process: "The design process involved deep listening to each album, extracting key lyrical themes, and translating them into visual metaphors. I experimented with typography as the primary visual element, using typefaces that reflected the emotional tone of each song.",
        technologies: ["Adobe Illustrator", "Photoshop", "Typography", "Color Theory", "Digital Illustration"],
        galleryItems: [
            "Poster 1: Twin Fantasy",
            "Poster 2: Teens of Denial", 
            "Poster 3: Making a Door",
            "Poster 4: Monomania"
        ],
        liveDemo: "#",
        github: "#"
    },
    2: {
        title: "Tarot Database Website",
        date: "August 2023",
        category: "Web Development",
        status: "In Progress",
        heroText: "Tarot Card Database",
        overview: "An interactive database of tarot cards with detailed meanings, symbolism, and digital reading capabilities. The site serves as both an educational resource and a practical tool for tarot enthusiasts.",
        features: [
            "Complete 78-card database",
            "Card meanings and interpretations",
            "Interactive digital readings",
            "Card symbolism explorer",
            "Spread builder tool",
            "User journal feature"
        ],
        process: "Built with a mobile-first approach, the site organizes complex tarot information into an intuitive interface. Each card page includes upright/reversed meanings, symbolism breakdown, and related cards. The digital reader uses JavaScript to simulate physical card draws.",
        technologies: ["HTML/CSS", "JavaScript", "API Integration", "Responsive Design", "UI/UX"],
        galleryItems: [
            "Card Database Interface",
            "Digital Reading Feature",
            "Symbolism Explorer",
            "Mobile Responsive Design"
        ],
        liveDemo: "#",
        github: "#"
    },
    3: {
        title: "Doctor Who Fan Site",
        date: "June 2023",
        category: "Web Design",
        status: "Completed",
        heroText: "Doctor Who Fan Portal",
        overview: "A comprehensive fan website dedicated to Doctor Who, featuring episode guides, character databases, news, and community features. Designed to be the ultimate resource for Whovians.",
        features: [
            "Complete episode guide (1963-present)",
            "Character and alien database",
            "TARDIS interior explorer",
            "Community forum",
            "News and updates section",
            "Interactive timeline"
        ],
        process: "The design captures the whimsical yet sci-fi aesthetic of Doctor Who. I created a custom color scheme based on the TARDIS blue, with accent colors representing different Doctors. The layout balances extensive content with playful interactive elements.",
        technologies: ["Web Design", "HTML/CSS", "Fan Content", "Community Features", "Content Management"],
        galleryItems: [
            "Home Page Design",
            "Episode Guide Interface",
            "TARDIS Explorer",
            "Character Database"
        ],
        liveDemo: "#",
        github: "#"
    }
};

// Get project ID from URL
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    // Load theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
        }
    }
    
    // Load project data
    if (projectId && projects[projectId]) {
        loadProjectData(projectId);
    } else {
        showProjectNotFound();
    }
});

function loadProjectData(projectId) {
    const project = projects[projectId];
    
    // Update page title
    document.title = `${project.title} - My Portfolio`;
    
    // Update header content
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectStatus').textContent = project.status;
    
    // Update hero section
    const heroSection = document.getElementById('projectHero');
    heroSection.textContent = project.heroText;
    
    // Update overview
    document.getElementById('projectOverview').textContent = project.overview;
    
    // Update features list
    const featuresList = document.getElementById('projectFeatures');
    featuresList.innerHTML = project.features
        .map(feature => `<li>${feature}</li>`)
        .join('');
    
    // Update process
    document.getElementById('projectProcess').textContent = project.process;
    
    // Update technologies
    const techList = document.getElementById('projectTechnologies');
    techList.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');
    
    // Update gallery
    const gallery = document.getElementById('projectGallery');
    gallery.innerHTML = project.galleryItems
        .map((item, index) => `
            <div class="gallery-item">
                ${item}
            </div>
        `)
        .join('');
    
    // Update links
    const liveDemoLink = document.getElementById('liveDemoLink');
    const githubLink = document.getElementById('githubLink');
    
    if (project.liveDemo !== '#') {
        liveDemoLink.href = project.liveDemo;
    } else {
        liveDemoLink.style.opacity = '0.5';
        liveDemoLink.style.cursor = 'not-allowed';
        liveDemoLink.onclick = (e) => e.preventDefault();
    }
    
    if (project.github !== '#') {
        githubLink.href = project.github;
    } else {
        githubLink.style.opacity = '0.5';
        githubLink.style.cursor = 'not-allowed';
        githubLink.onclick = (e) => e.preventDefault();
    }
}

function showProjectNotFound() {
    document.getElementById('projectTitle').textContent = "Project Not Found";
    document.getElementById('projectOverview').textContent = "The requested project could not be found. Please return to the portfolio and select a valid project.";
}