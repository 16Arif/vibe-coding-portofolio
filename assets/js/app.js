document.addEventListener('DOMContentLoaded', () => {
    
    // --- Current Year for Footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            // Save preference to localStorage
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Projects Data & Dynamic Rendering ---
    const projectsData = [
        {
            title: "Solar Energy Dashboard",
            category: "pv",
            categoryLabel: "Photovoltaic Engineer",
            desc: "Sistem pemantauan kinerja panel surya secara real-time dengan antarmuka dark-mode modern.",
            img: "assets/images/project_pv.png",
            tags: ["IoT", "Dashboard", "Solar"],
            link: "#"
        },
        {
            title: "Smart Home Node",
            category: "iot",
            categoryLabel: "IoT & Electronics",
            desc: "Pengontrol mikrokontroler berbasis jaringan untuk otomasi elemen rumah masa depan.",
            img: "assets/images/project_iot.png",
            tags: ["C++", "Hardware", "ESP32"],
            link: "#"
        },
        {
            title: "Weather Data Platform",
            category: "web",
            categoryLabel: "Web App",
            desc: "Aplikasi web modern bergaya glassmorphism untuk memvisualisasikan data cuaca regional.",
            img: "assets/images/project_web.png",
            tags: ["React", "Tailwind", "API"],
            link: "#"
        },
        {
            title: "AI Weather Predictor",
            category: "ai",
            categoryLabel: "AI & Machine Learning",
            desc: "Model prediksi curah hujan dan anomali cuaca lokal terintegrasi dengan data sensor AWS BMKG.",
            img: "assets/images/hero.png",
            tags: ["Python", "TensorFlow", "Data Sci"],
            link: "#"
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');

    const renderProjects = (filter = 'all') => {
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = ''; // Clear container / skeleton
        
        const filteredProjects = projectsData.filter(proj => filter === 'all' || proj.category === filter);
        
        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
                    <i class="ph ph-folder-open text-4xl mb-2"></i>
                    <p>Tidak ada proyek yang ditemukan.</p>
                </div>
            `;
            return;
        }

        filteredProjects.forEach((proj, index) => {
            const card = document.createElement('div');
            // Adding scroll reveal class dynamically for cards
            card.className = `project-card group bg-white dark:bg-darkCard rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 reveal reveal-fade-up`;
            card.setAttribute('data-category', proj.category);
            
            // Set delay to stagger the grid animations
            card.style.transitionDelay = `${index * 100}ms`;

            const tagsHTML = proj.tags.map(tag => `
                <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">${tag}</span>
            `).join('');

            card.innerHTML = `
                <div class="relative h-56 overflow-hidden">
                    <img src="${proj.img}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <a href="${proj.link}" class="px-6 py-2 bg-white text-slate-900 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors">Detail Proyek</a>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-bold text-primary uppercase tracking-wider">${proj.categoryLabel}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${proj.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">${proj.desc}</p>
                    <div class="flex gap-2 flex-wrap">
                        ${tagsHTML}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(card);
            
            // Trigger animation on next frame to ensure the transitions run smoothly
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.classList.add('active');
                }, 50);
            });
        });
    };

    // Initial render
    renderProjects();

    // --- Projects Filter Controls ---
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-white', 'shadow-md');
                b.classList.add('bg-slate-200', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
            });
            
            // Add active class to clicked button
            btn.classList.remove('bg-slate-200', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
            btn.classList.add('active', 'bg-primary', 'text-white', 'shadow-md');

            const filterValue = btn.getAttribute('data-filter');
            
            // Re-render matching cards with stagger
            renderProjects(filterValue);
        });
    });

    // --- Intersection Observer for Scroll Reveal ---
    const observerOptions = {
        root: null, // use viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once it is shown
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial setup for static reveals (excluding dynamic project cards)
    const revealElements = document.querySelectorAll('.reveal:not(.project-card)');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Floating Back-to-Top Button ---
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0', 'visible');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'visible');
                backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'invisible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Form Validation and Submission ---
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const successModalMsg = document.getElementById('successModalMsg');

    const showError = (input, show) => {
        if (!input) return;
        const errorMsg = input.nextElementSibling;
        if (show) {
            input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            input.classList.remove('border-slate-300', 'focus:ring-primary', 'focus:border-primary', 'dark:border-slate-600');
            if (errorMsg) errorMsg.classList.remove('hidden');
        } else {
            input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            input.classList.add('border-slate-300', 'focus:ring-primary', 'focus:border-primary', 'dark:border-slate-600');
            if (errorMsg) errorMsg.classList.add('hidden');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;

            // Validate Name
            if (nameInput.value.trim() === '') {
                showError(nameInput, true);
                isValid = false;
            } else {
                showError(nameInput, false);
            }

            // Validate Email
            if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
                showError(emailInput, true);
                isValid = false;
            } else {
                showError(emailInput, false);
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                showError(messageInput, true);
                isValid = false;
            } else {
                showError(messageInput, false);
            }

            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnHTML = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span>Mengirim...</span> <i class="ph ph-spinner animate-spin"></i>';
                submitBtn.disabled = true;

                // Handle Formspree AJAX Submission or local mock simulation
                const action = contactForm.getAttribute('action');
                
                if (action && !action.includes('placeholder_id')) {
                    // REAL Submission to Formspree
                    const formData = new FormData(contactForm);
                    fetch(action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            handleSuccess(contactForm, submitBtn, originalBtnHTML);
                        } else {
                            response.json().then(data => {
                                if (Object.hasOwn(data, 'errors')) {
                                    handleError(submitBtn, originalBtnHTML, data.errors.map(err => err.message).join(", "));
                                } else {
                                    handleError(submitBtn, originalBtnHTML, "Gagal mengirim formulir.");
                                }
                            });
                        }
                    })
                    .catch(() => {
                        handleError(submitBtn, originalBtnHTML, "Terjadi gangguan jaringan.");
                    });
                } else {
                    // MOCK Submission (for local testing/placeholder)
                    setTimeout(() => {
                        handleSuccess(contactForm, submitBtn, originalBtnHTML);
                    }, 1000);
                }
            }
        });
    }

    const handleSuccess = (form, btn, originalHTML) => {
        form.reset();
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        
        if (successModalMsg) {
            successModalMsg.textContent = "Pesan Anda telah berhasil terkirim secara nyata! Saya akan segera menghubungi Anda kembali.";
        }
        
        // Show Success Modal
        if (successModal) {
            successModal.classList.remove('hidden');
            void successModal.offsetWidth; // force reflow
            successModal.classList.add('fade-in');
        }
    };

    const handleError = (btn, originalHTML, errorDetail) => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        alert(`Gagal: ${errorDetail}`);
    };

    const closeSuccessModal = () => {
        if (successModal) {
            successModal.classList.remove('fade-in');
            setTimeout(() => {
                successModal.classList.add('hidden');
            }, 300);
        }
    };

    if (closeModal) closeModal.addEventListener('click', closeSuccessModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeSuccessModal);
});
