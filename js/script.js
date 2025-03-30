// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const langSwitch = document.querySelector('.lang-switch');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Get saved language preference or default to 'vi'
    const savedLang = localStorage.getItem('language') || 'vi';
    
    // Initialize language
    function initLanguage() {
        // Set active state
        langSwitch.setAttribute('data-active', savedLang);
        langButtons.forEach(btn => {
            const lang = btn.getAttribute('data-lang');
            btn.classList.toggle('active', lang === savedLang);
        });
        
        // Update content
        updateContent(savedLang);
    }
    
    // Handle language switch
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang === localStorage.getItem('language')) return;
            
            // Update active states
            langSwitch.setAttribute('data-active', lang);
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Add transition class
            document.body.classList.add('lang-transition');
            
            // Animate content out
            const content = document.querySelector('.content-wrapper');
            if (content) {
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
            }
            
            // Update language after brief delay for animation
            setTimeout(() => {
                updateContent(lang);
                localStorage.setItem('language', lang);
                
                // Animate content back in
                if (content) {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }
                
                // Remove transition class
                setTimeout(() => {
                    document.body.classList.remove('lang-transition');
                }, 300);
            }, 200);
        });
    });
    
    // Initialize
    initLanguage();
});

// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch');
    const sunIcon = themeSwitch.querySelector('.fa-sun');
    const moonIcon = themeSwitch.querySelector('.fa-moon');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitch.classList.add(savedTheme);
    
    // Update icon visibility based on current theme
    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    // Initialize icons
    updateIcons(savedTheme);
    
    // Handle theme switch click
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update switch appearance
        themeSwitch.classList.remove(currentTheme);
        themeSwitch.classList.add(newTheme);
        
        // Update icons
        updateIcons(newTheme);
    });
});

// Smooth Scroll
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

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your newsletter subscription logic here
        console.log('Newsletter form submitted');
    });
} 