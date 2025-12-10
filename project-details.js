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
                alt: "Belasco Theater, Los Angeles, CA",
                thumbnail: "#"
            },
            {
                type: "image", 
                src: "images/csh_LA_v2.jpg", 
                alt: "Alternate Version - Belasco Theater, Los Angeles, CA",
                thumbnail: "#"
            },
            {
                type: "image", 
                src: "images/csh_ME.jpg", 
                alt: "State Theater, Portland, ME",
                thumbnail: "#"
            },
            {
                type: "image", 
                src: "images/csh_scholar.jpg", 
                alt: "The Scholars 2025 Tour",
                thumbnail: "#"
            },
        ],
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
        // UPDATED GALLERY ITEMS
        galleryItems: [
            {
                type: "image", 
                src: "images/tarot-1.jpg", 
                alt: "Card Database Interface",
                thumbnail: "images/tarot-1-thumb.jpg"
            },
            {
                type: "image", 
                src: "images/tarot-2.jpg", 
                alt: "Digital Reading Feature",
                thumbnail: "images/tarot-2-thumb.jpg"
            },
            {
                type: "image", 
                src: "images/tarot-3.jpg", 
                alt: "Symbolism Explorer",
                thumbnail: "images/tarot-3-thumb.jpg"
            },
            {
                type: "image", 
                src: "images/tarot-4.jpg", 
                alt: "Mobile Responsive Design",
                thumbnail: "images/tarot-4-thumb.jpg"
            }
        ],
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
            "Complete series guide (1963-present)",
            "The Doctor database"
        ],
        process: "The design captures the whimsical yet sci-fi aesthetic of Doctor Who. The layout balances extensive content with playful interactive elements.",
        technologies: ["Web Design", "HTML/CSS", "Fan Content"],
        // UPDATED GALLERY ITEMS
        galleryItems: [
            {
                type: "image", 
                src: "images/doctor-who-1.jpg", 
                alt: "Home Page Design",
                thumbnail: "images/doctor-who-1-thumb.jpg"
            },
            {
                type: "image", 
                src: "images/doctor-who-2.jpg", 
                alt: "Episode Guide Interface",
                thumbnail: "images/doctor-who-2-thumb.jpg"
            },
            {
                type: "image", 
                src: "images/doctor-who-3.jpg", 
                alt: "Quote Generator",
                thumbnail: "images/doctor-who-3-thumb.jpg"
            },
            {
                type: "image", 
                src: "images/doctor-who-4.jpg", 
                alt: "The Doctor Database",
                thumbnail: "images/doctor-who-4-thumb.jpg"
            }
        ],
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
    
    // UPDATE GALLERY SECTION - Add images with thumbnails
    const gallery = document.getElementById('projectGallery');
    gallery.innerHTML = project.galleryItems
        .map((item, index) => {
            // Use thumbnail if available, otherwise use main image
            const displaySrc = item.thumbnail || item.src;
            
            if (item.type === "pdf") {
                // Handle PDF files differently
                return `
                    <div class="gallery-item pdf-item" data-index="${index}">
                        <a href="${item.src}" target="_blank" class="gallery-link">
                            <div class="pdf-icon">📄</div>
                            <img src="${displaySrc}" 
                                 alt="${item.alt}" 
                                 class="gallery-img"
                                 loading="lazy">
                            <div class="gallery-overlay">
                                <span class="view-full">View PDF</span>
                            </div>
                        </a>
                        <div class="gallery-caption">${item.alt}</div>
                    </div>
                `;
            } else {
                // Handle images
                return `
                    <div class="gallery-item" data-index="${index}">
                        <img src="${displaySrc}" 
                             alt="${item.alt}" 
                             class="gallery-img"
                             loading="lazy"
                             data-fullsrc="${item.src}"
                             onclick="openLightbox(${projectId}, ${index})">
                        <div class="gallery-overlay">
                            <span class="view-full">Click to enlarge</span>
                        </div>
                        <div class="gallery-caption">${item.alt}</div>
                    </div>
                `;
            }
        })
        .join('');
    
    // Update links
    const githubLink = document.getElementById('githubLink');
    
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

// Simple Lightbox Function
function openLightbox(projectId, imageIndex) {
    const project = projects[projectId];
    const item = project.galleryItems[imageIndex];
    
    if (item.type === "pdf") {
        // For PDFs, just open in new tab
        window.open(item.src, '_blank');
        return;
    }
    
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
            <button class="lightbox-nav lightbox-prev" onclick="changeLightboxImage(${projectId}, ${imageIndex}, -1)">‹</button>
            <div class="lightbox-main">
                <img src="${item.src}" alt="${item.alt}" class="lightbox-image">
                <div class="lightbox-caption">${item.alt}</div>
            </div>
            <button class="lightbox-nav lightbox-next" onclick="changeLightboxImage(${projectId}, ${imageIndex}, 1)">›</button>
            <div class="lightbox-counter">${imageIndex + 1} / ${project.galleryItems.length}</div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
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
    const project = projects[projectId];
    const newIndex = (currentIndex + direction + project.galleryItems.length) % project.galleryItems.length;
    const item = project.galleryItems[newIndex];
    
    // Skip PDFs in lightbox navigation
    if (item.type === "pdf") {
        // Move to next non-PDF item
        return changeLightboxImage(projectId, newIndex, direction);
    }
    
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
        
        prevBtn.onclick = () => changeLightboxImage(projectId, newIndex, -1);
        nextBtn.onclick = () => changeLightboxImage(projectId, newIndex, 1);
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
                const projectId = parseInt(new URLSearchParams(window.location.search).get('project'));
                const currentIndex = parseInt(document.querySelector('.lightbox-counter').textContent.split('/')[0]) - 1;
                changeLightboxImage(projectId, currentIndex, -1);
            }
            break;
        case 'ArrowRight':
            const lightbox2 = document.querySelector('.lightbox-overlay');
            if (lightbox2) {
                const projectId = parseInt(new URLSearchParams(window.location.search).get('project'));
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
    
    .gallery-caption {
        text-align: center;
        margin-top: 8px;
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.8;
    }
    
    .pdf-item {
        position: relative;
    }
    
    .pdf-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--accent-color);
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        z-index: 2;
    }
    
    .gallery-link {
        display: block;
        text-decoration: none;
        color: inherit;
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
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);