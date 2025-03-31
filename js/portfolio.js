// Portfolio Items Data
const portfolioItems = {
    1: {
        title: "Website Thương Mại Điện Tử",
        description: "Trải nghiệm mua sắm trực tuyến hiện đại với thanh toán mượt mà và hiển thị sản phẩm đẹp mắt",
        fullDescription: `
            - Xây dựng trên nền tảng React và Node.js
            - Tích hợp cổng thanh toán PayPal và VNPay
            - Quản lý sản phẩm với MongoDB
            - Giao diện người dùng responsive
            - Tối ưu SEO và tốc độ tải trang
        `,
        image: "images/portfolio/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        category: "web",
        demoLink: "https://ecommerce-demo.duongvo.dev",
        githubLink: "https://github.com/DuongVo01/ecommerce-project"
    },
    2: {
        title: "Ứng Dụng Theo Dõi Sức Khỏe",
        description: "Ứng dụng di động toàn diện để theo dõi tập luyện và duy trì lối sống lành mạnh",
        fullDescription: `
            - Theo dõi hoạt động thể chất
            - Lập kế hoạch tập luyện cá nhân
            - Thống kê và báo cáo tiến độ
            - Tích hợp với Google Fit và Apple Health
            - Hỗ trợ đa ngôn ngữ
        `,
        image: "images/portfolio/fitness.jpg",
        technologies: ["React Native", "Firebase", "Redux", "Node.js"],
        category: "app",
        demoLink: "https://fitness-demo.duongvo.dev",
        githubLink: "https://github.com/DuongVo01/fitness-app"
    },
    3: {
        title: "Thiết Kế Nhận Diện Thương Hiệu",
        description: "Hệ thống nhận diện thương hiệu hoàn chỉnh bao gồm logo, bảng màu và tài liệu marketing",
        fullDescription: `
            - Thiết kế logo và bộ nhận diện
            - Bảng màu và typography system
            - Thiết kế ấn phẩm marketing
            - Hướng dẫn sử dụng thương hiệu
            - Mockup và template design
        `,
        image: "images/portfolio/brand.jpg",
        technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
        category: "design",
        demoLink: "https://brand-demo.duongvo.dev",
        githubLink: "https://github.com/DuongVo01/brand-design"
    },
    4: {
        title: "Công Cụ Quản Lý Dự Án",
        description: "Ứng dụng web mạnh mẽ cho phép cộng tác nhóm và theo dõi dự án",
        fullDescription: `
            - Quản lý task và deadline
            - Phân quyền người dùng
            - Biểu đồ Gantt và thống kê
            - Chat và thảo luận nhóm
            - Tích hợp với các công cụ phổ biến
        `,
        image: "images/portfolio/project.jpg",
        technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
        category: "web",
        demoLink: "https://pm-demo.duongvo.dev",
        githubLink: "https://github.com/DuongVo01/project-management"
    },
    5: {
        title: "Website Nhà Hàng",
        description: "Website sang trọng với hệ thống đặt món trực tuyến và quản lý đặt bàn",
        fullDescription: `
            - Đặt bàn trực tuyến
            - Menu động với hình ảnh HD
            - Quản lý đơn hàng realtime
            - Tích hợp bản đồ và chỉ đường
            - Hỗ trợ đa ngôn ngữ
        `,
        image: "images/portfolio/restaurant.jpg",
        technologies: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS"],
        category: "web",
        demoLink: "https://restaurant-demo.duongvo.dev",
        githubLink: "https://github.com/DuongVo01/restaurant-website"
    },
    6: {
        title: "Nền Tảng Giáo Dục",
        description: "Nền tảng học tập tương tác với quản lý khóa học và theo dõi học viên",
        fullDescription: `
            - Hệ thống quản lý học tập (LMS)
            - Video streaming bài giảng
            - Tương tác trực tuyến
            - Bảng điều khiển phân tích
            - Tích hợp thanh toán
        `,
        image: "images/portfolio/education.jpg",
        technologies: ["Angular", "Django", "PostgreSQL", "AWS"],
        category: "web",
        demoLink: "https://edu-demo.duongvo.dev",
        githubLink: "https://github.com/DuongVo01/education-platform"
    }
};

// DOM Elements
const portfolioGrid = document.querySelector('.portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Filter Portfolio Items
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const shouldShow = category === 'all' || itemCategory === category;
        
        if (shouldShow) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Create Portfolio Items
function createPortfolioItems() {
    portfolioGrid.innerHTML = ''; // Clear existing items
    
    Object.entries(portfolioItems).forEach(([id, item]) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.setAttribute('data-aos', 'fade-up');
        portfolioItem.setAttribute('data-aos-delay', id * 100);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-item-inner">
                <div class="portfolio-image">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="portfolio-overlay">
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="portfolio-tech">
                            ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="portfolio-links">
                            <a href="${item.demoLink}" target="_blank" rel="noopener noreferrer" class="btn btn-demo">
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                            <a href="${item.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-github">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                            <button class="btn btn-details" onclick="showProjectDetails(${id})">
                                <i class="fas fa-info-circle"></i> Chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Show Project Details Modal
function showProjectDetails(id) {
    const item = portfolioItems[id];
    if (!item) {
        console.error('Project not found');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" aria-label="Close modal">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-header">
                <h2>${item.title}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="modal-details">
                    <div class="modal-description">
                        <h3>Mô tả dự án</h3>
                        <p>${item.fullDescription}</p>
                    </div>
                    <div class="modal-technologies">
                        <h3>Công nghệ sử dụng</h3>
                        <div class="tech-tags">
                            ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div class="modal-links">
                        <a href="${item.demoLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i> Xem Demo
                        </a>
                        <a href="${item.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                            <i class="fab fa-github"></i> Mã nguồn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    });
    
    // Show modal with animation
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
}

// Initialize Portfolio
function initPortfolio() {
    createPortfolioItems();
    
    // Add filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            const category = button.getAttribute('data-filter');
            filterPortfolio(category);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolio);

// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
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
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Portfolio Item Hover Effect
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.portfolio-overlay').style.opacity = '1';
            item.querySelector('.portfolio-info').style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.portfolio-overlay').style.opacity = '0';
            item.querySelector('.portfolio-info').style.transform = 'translateY(20px)';
        });
    });

    // Portfolio Modal
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    document.body.appendChild(modal);

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            const technologies = Array.from(item.querySelectorAll('.tech-tag')).map(tag => tag.textContent);
            const image = item.querySelector('img').src;
            const demoLink = item.querySelector('.btn-demo').href;
            const githubLink = item.querySelector('.btn-github').href;

            modal.innerHTML = `
                <div class="modal-content">
                    <button class="close-modal">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-header">
                        <h2>${title}</h2>
                    </div>
                    <div class="modal-body">
                        <div class="modal-image">
                            <img src="${image}" alt="${title}">
                        </div>
                        <div class="modal-details">
                            <div class="modal-description">
                                <h3>About Project</h3>
                                <p>${description}</p>
                            </div>
                            <div class="modal-technologies">
                                <h3>Technologies Used</h3>
                                <div class="tech-tags">
                                    ${technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                            </div>
                            <div class="modal-links">
                                <a href="${demoLink}" class="btn btn-primary" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                    View Demo
                                </a>
                                <a href="${githubLink}" class="btn btn-secondary" target="_blank">
                                    <i class="fab fa-github"></i>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';

            // Close modal when clicking close button
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            });

            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('show')) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });
        });
    });
}); 