document.addEventListener('DOMContentLoaded', () => {
    
    // --- Current Year for Footer ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        
        // Save preference to localStorage
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
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

    // --- Projects Filter ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white', 'shadow-md'));
            filterBtns.forEach(b => b.classList.add('bg-slate-200', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300'));
            
            // Add active class to clicked button
            btn.classList.remove('bg-slate-200', 'text-slate-700', 'dark:bg-slate-800', 'dark:text-slate-300');
            btn.classList.add('active', 'bg-primary', 'text-white', 'shadow-md');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                    // Optional: add a tiny timeout for fade effect
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    // Wait for transition to finish before hiding
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // --- Form Validation and Submission ---
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const modalBackdrop = document.getElementById('modalBackdrop');

    const showError = (input, show) => {
        const errorMsg = input.nextElementSibling;
        if (show) {
            input.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            input.classList.remove('border-slate-300', 'focus:ring-primary', 'focus:border-primary', 'dark:border-slate-600');
            errorMsg.classList.remove('hidden');
        } else {
            input.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
            input.classList.add('border-slate-300', 'focus:ring-primary', 'focus:border-primary', 'dark:border-slate-600');
            errorMsg.classList.add('hidden');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

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
            // Simulate form submission (API Call)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Mengirim...</span> <i class="ph ph-spinner animate-spin"></i>';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Success
                contactForm.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Show Modal
                successModal.classList.remove('hidden');
                // Trigger reflow
                void successModal.offsetWidth;
                successModal.classList.add('fade-in');
            }, 1000);
        }
    });

    const closeSuccessModal = () => {
        successModal.classList.remove('fade-in');
        setTimeout(() => {
            successModal.classList.add('hidden');
        }, 300); // Matches transition duration
    };

    closeModal.addEventListener('click', closeSuccessModal);
    modalBackdrop.addEventListener('click', closeSuccessModal);
});
