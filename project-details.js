// Projects data for all three projects
const projects = {
    1: {
        title: "Car Seat Headrest Concert Posters",
        date: "2022-2025",
        category: "Graphic Design",
        status: "Completed",
        heroText: "Car Seat Headrest Poster Series",
        overview: "A digital poster series inspired by the music and aesthetic of Car Seat Headrest. Each poster promotes a different concert venue or venues, blending typography with visual themes across the albums.",
        features: [
            "4 unique poster designs",
            "Typography-focused layouts",
            "Album-inspired visual elements",
            "Color schemes matching album moods",
            "Digital and print-ready formats"
        ],
        process: "The design process involved...",
        technologies: ["Adobe Illustrator", "Photoshop", "Typography", "Color Theory", "Digital Illustration"],
        galleryItems: [
            {
                type: "image", 
                src: "images/csh_LA_v1.jpg", 
                alt: "Belasco Theater, Los Angeles, CA"
            },
            {
                type: "image", 
                src: "images/csh_LA_v2.jpg", 
                alt: "Alternate Version - Belasco Theater, Los Angeles, CA"
            },
            {
                type: "image", 
                src: "images/csh_ME.jpg", 
                alt: "State Theater, Portland, ME"
            },
            {
                type: "image", 
                src: "images/csh_scholar.jpg", 
                alt: "The Scholars 2025 Tour"
            }
        ]
        // NO github property for this project - section will be hidden
    },
    2: {
        title: "Tarot Database Website",
        date: "August 2025",
        category: "Web Development",
        status: "Complete",
        heroText: "Tarot Card Database",
        overview: "An interactive database of tarot cards with detailed meanings, symbolism, and digital card pulling capabilities. The site serves as both an educational resource and a practical tool for tarot enthusiasts.",
        features: [
            "Complete Major Arcana 22-card database",
            "Card meanings and interpretations",
            "Rand Card Generator",
            "Card symbolism explorer"
        ],
        process: "Built with a mobile-first approach, the site organizes complex tarot information into an intuitive interface. Each card page includes upright/reversed meanings, symbolism breakdown, and related cards. The digital reader uses JavaScript to simulate physical card draws.",
        technologies: ["HTML/CSS", "JavaScript", "API Integration", "Responsive Design", "UI/UX"],
        galleryItems: [
            {
                type: "image", 
                src: "images/tarot_mainpage.png", 
                alt: "Website Home Page"
            },
            {
                type: "image", 
                src: "images/tarot_cardpick.png", 
                alt: "Card Pulling Feature"
            },
            {
                type: "image", 
                src: "images/tarot_cardgallery.png", 
                alt: "Symbolism Explorer"
            }
        ],
        github: "https://jbinke.github.io/tarotproject/"
    },
    3: {
        title: "Doctor Who Fan Site",
        date: "June 2023",
        category: "Web Design",
        status: "Completed",
        heroText: "Doctor Who Fan Portal",
        overview: "A comprehensive fan website dedicated to Doctor Who, featuring episode guides, character databases, news, and community features. Designed to be the ultimate resource for Whovians.",
        features: [
            "Complete series guide (1963-present)",
            "The Doctor database"
        ],
        process: "The design captures the whimsical yet sci-fi aesthetic of Doctor Who. The layout balances extensive content with playful interactive elements.",
        technologies: ["Web Design", "HTML/CSS", "Fan Content"],
        galleryItems: [
            {
                type: "image", 
                src: "images/dw_homepage.png", 
                alt: "Home Page Design"
            },
            {
                type: "image", 
                src: "images/dw_media.png", 
                alt: "Media Guide Interface"
            },
            {
                type: "image", 
                src: "images/dw_quote.png", 
                alt: "Quote Generator"
            },
            {
                type: "image", 
                src: "images/dw_docs.png", 
                alt: "The Doctor Database"
            }
        ],
        github: "https://jbinke.github.io/DoctorWho/"
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
    
    // LOAD GALLERY - Simple clean version
    // LOAD GALLERY - Simple clean version
const gallery = document.getElementById('projectGallery');
gallery.innerHTML = project.galleryItems
    .map((item, index) => {
        return `
            <div class="gallery-item">
                <div class="gallery-image-container" onclick="openLightbox('${projectId}', ${index})">
                    <img src="${item.src}" 
                         alt="${item.alt}" 
                         class="gallery-thumbnail"
                         loading="lazy">
                    <div class="gallery-overlay">
                        <span class="view-full">Click to enlarge</span>
                    </div>
                </div>
                <div class="gallery-caption">${item.alt}</div>
            </div>
        `;
    })
    .join('');
    
    // UPDATE LINKS - Only show GitHub link if it exists
    // UPDATE PROJECT LINKS SECTION
const linksSection = document.querySelector('.project-links');
const githubLink = document.getElementById('githubLink');

if (project.github) {
    // If project has a GitHub URL (not '#'), show the link
    if (project.github !== '#') {
        githubLink.href = project.github;
        githubLink.style.display = 'flex';
        linksSection.style.display = 'block';
    } else {
        // If it's just '#', hide the entire section
        linksSection.style.display = 'none';
    }
} else {
    // If no github property exists, hide the entire section
    linksSection.style.display = 'none';
}
}

function showProjectNotFound() {
    document.getElementById('projectTitle').textContent = "Project Not Found";
    document.getElementById('projectOverview').textContent = "The requested project could not be found. Please return to the portfolio and select a valid project.";
}

// Simple Lightbox Function
function openLightbox(projectId, imageIndex) {
    // Convert projectId to string if it's not already
    const projectIdStr = String(projectId);
    const project = projects[projectIdStr];
    
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    const item = project.galleryItems[imageIndex];
    
    if (!item) {
        console.error('Image not found at index:', imageIndex);
        return;
    }
    
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
            <button class="lightbox-nav lightbox-prev" onclick="changeLightboxImage('${projectIdStr}', ${imageIndex}, -1)">‹</button>
            <div class="lightbox-main">
                <img src="${item.src}" alt="${item.alt}" class="lightbox-image">
                <div class="lightbox-caption">${item.alt}</div>
            </div>
            <button class="lightbox-nav lightbox-next" onclick="changeLightboxImage('${projectIdStr}', ${imageIndex}, 1)">›</button>
            <div class="lightbox-counter">${imageIndex + 1} / ${project.galleryItems.length}</div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleLightboxKeydown);
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox-overlay');
    if (lightbox) {
        lightbox.remove();
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleLightboxKeydown);
    }
}

function changeLightboxImage(projectId, currentIndex, direction) {
    const projectIdStr = String(projectId);
    const project = projects[projectIdStr];
    const newIndex = (currentIndex + direction + project.galleryItems.length) % project.galleryItems.length;
    const item = project.galleryItems[newIndex];
    
    // Update lightbox
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxCounter = document.querySelector('.lightbox-counter');
    
    if (lightboxImage && lightboxCaption && lightboxCounter) {
        lightboxImage.src = item.src;
        lightboxImage.alt = item.alt;
        lightboxCaption.textContent = item.alt;
        lightboxCounter.textContent = `${newIndex + 1} / ${project.galleryItems.length}`;
        
        // Update button event handlers
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        
        if (prevBtn) prevBtn.onclick = () => changeLightboxImage(projectIdStr, newIndex, -1);
        if (nextBtn) nextBtn.onclick = () => changeLightboxImage(projectIdStr, newIndex, 1);
    }
}

function handleLightboxKeydown(event) {
    switch(event.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            const lightbox = document.querySelector('.lightbox-overlay');
            if (lightbox) {
                const projectId = new URLSearchParams(window.location.search).get('project');
                const currentIndex = parseInt(document.querySelector('.lightbox-counter').textContent.split('/')[0]) - 1;
                changeLightboxImage(projectId, currentIndex, -1);
            }
            break;
        case 'ArrowRight':
            const lightbox2 = document.querySelector('.lightbox-overlay');
            if (lightbox2) {
                const projectId = new URLSearchParams(window.location.search).get('project');
                const currentIndex = parseInt(document.querySelector('.lightbox-counter').textContent.split('/')[0]) - 1;
                changeLightboxImage(projectId, currentIndex, 1);
            }
            break;
    }
}

// Add CSS for lightbox and gallery (inject into page)
const lightboxStyles = `
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 5px;
    }
    
    .lightbox-close:hover {
        color: var(--accent-color);
    }
    
    .lightbox-nav {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        font-size: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .lightbox-nav:hover {
        background: var(--accent-color);
    }
    
    .lightbox-main {
        max-width: 80vw;
        max-height: 80vh;
    }
    
    .lightbox-image {
        max-width: 100%;
        max-height: 70vh;
        object-fit: contain;
        border-radius: 4px;
    }
    
    .lightbox-caption {
        color: white;
        text-align: center;
        margin-top: 10px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
    
    .lightbox-counter {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 0.9rem;
    }
    
    /* Clean Gallery Styles */
    .gallery-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
    .gallery-image-container {
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        background: var(--card-bg);
    }
    
    .gallery-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 10px;
        transition: transform 0.3s ease;
    }
    
    .gallery-image-container:hover .gallery-thumbnail {
        transform: scale(1.05);
    }
    
    .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(138, 43, 226, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .gallery-image-container:hover .gallery-overlay {
        opacity: 1;
    }
    
    .view-full {
        color: white;
        background: rgba(0, 0, 0, 0.7);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .gallery-caption {
        text-align: center;
        font-size: 0.9rem;
        color: var(--text-color);
        line-height: 1.4;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
    }
    
    /* Adjust project links section */
    .project-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    @media (max-width: 768px) {
        .lightbox-content {
            flex-direction: column;
            gap: 10px;
        }
        
        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        
        .lightbox-prev {
            left: 10px;
        }
        
        .lightbox-next {
            right: 10px;
        }
        
        .gallery-image-container {
            height: 180px;
        }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);

console.log('Project Details JS loaded');

// Test if openLightbox function is accessible globally
window.testLightbox = function() {
    console.log('openLightbox function is accessible:', typeof openLightbox);
    // Try calling it with test values
    if (projects[1] && projects[1].galleryItems && projects[1].galleryItems[0]) {
        console.log('Test: Opening first image of first project');
        openLightbox('1', 0);
    }
};