// Navigation functionality
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                
                // Show selected page
                const pageId = this.getAttribute('data-page');
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById(pageId).classList.add('active');
            });
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
            } else {
                themeIcon.textContent = '🌙';
            }
        });

        // Make bio button work
        document.querySelector('.btn[data-page="bio"]').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector('.nav-link[data-page="bio"]').classList.add('active');
            
            // Show bio page
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('bio').classList.add('active');
        });