// Language Switcher
const translations = {
    vi: {
        'nav-home': 'Trang Chủ',
        'nav-services': 'Dịch Vụ',
        'nav-portfolio': 'Dự Án',
        'nav-about': 'Giới Thiệu',
        'nav-contact': 'Liên Hệ',
        'greeting': 'Xin chào, tôi là',
        'role': 'Web Developer & UI/UX Designer',
        'description': 'Chuyên thiết kế và phát triển các website hiện đại, thân thiện với người dùng, kết hợp giữa thiết kế đẹp mắt và tính năng mạnh mẽ.',
        'view-projects': 'Xem Dự Án',
        'contact': 'Liên Hệ',
        'newsletter-placeholder': 'Nhập email của bạn',
        'subscribe': 'Đăng Ký',
        'footer-menu': 'Menu',
        'footer-contact': 'Liên Hệ',
        'footer-follow': 'Theo Dõi'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'greeting': 'Hello, I am',
        'role': 'Web Developer & UI/UX Designer',
        'description': 'Specializing in designing and developing modern, user-friendly websites that combine beautiful design with powerful functionality.',
        'view-projects': 'View Projects',
        'contact': 'Contact',
        'newsletter-placeholder': 'Enter your email',
        'subscribe': 'Subscribe',
        'footer-menu': 'Menu',
        'footer-contact': 'Contact',
        'footer-follow': 'Follow'
    }
};

// Khởi tạo ngôn ngữ mặc định
let currentLang = localStorage.getItem('lang') || 'vi';
document.documentElement.setAttribute('lang', currentLang);

// Cập nhật active state cho nút ngôn ngữ
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
}

// Chuyển đổi ngôn ngữ
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Cập nhật tất cả các phần tử có thuộc tính data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    updateLanguageButtons();
}

// Xử lý sự kiện click cho nút ngôn ngữ
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Áp dụng ngôn ngữ hiện tại khi tải trang
    switchLanguage(currentLang);
});

// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    // Kiểm tra theme đã lưu hoặc sử dụng theme hệ thống
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Đặt theme ban đầu
    const initialTheme = savedTheme || systemTheme;
    root.setAttribute('data-theme', initialTheme);

    // Xử lý sự kiện click để chuyển đổi theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // Here you would typically send the data to your backend
            // For now, we'll just show a success message
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
        } catch (error) {
            alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Cảm ơn bạn đã đăng ký nhận bản tin!');
            newsletterForm.reset();
        }
    });
}

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation
const createMobileNav = () => {
    const nav = document.querySelector('nav');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const navLinks = document.querySelector('.nav-links').cloneNode(true);
    mobileMenu.appendChild(navLinks);
    
    nav.appendChild(hamburger);
    nav.appendChild(mobileMenu);
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
};

// Initialize mobile navigation on small screens
if (window.innerWidth <= 768) {
    createMobileNav();
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !document.querySelector('.hamburger')) {
        createMobileNav();
    }
});

// Add scroll animation to sections
const animateSections = () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('animate-section');
        observer.observe(section);
    });
};

// Initialize animations
animateSections(); 