document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Initialize language
    setLanguage(currentLang);
    
    // Language switch buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            
            // Update active state
            langBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Save preference
            localStorage.setItem('language', lang);
        });
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.dataset.lang;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
} 