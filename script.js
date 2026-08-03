const site_header = document.getElementById('header');

if (site_header) {
    const toggleHeaderShadow = () => {
        site_header.classList.toggle('scrolled', window.scrollY > 10);
    };
    toggleHeaderShadow();
    window.addEventListener('scroll', toggleHeaderShadow);
}

const hamburger_btn = document.querySelector('.hamburger-btn');
const navbar_menu = document.getElementById('navbar-menu');

if (hamburger_btn && navbar_menu) {
    hamburger_btn.addEventListener('click', () => {
        const isOpen = navbar_menu.classList.toggle('open');
        hamburger_btn.classList.toggle('open', isOpen);
        hamburger_btn.setAttribute('aria-expanded', isOpen);
    });

    navbar_menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navbar_menu.classList.remove('open');
            hamburger_btn.classList.remove('open');
            hamburger_btn.setAttribute('aria-expanded', 'false');
        });
    });
}

const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

const reveal_elements = document.querySelectorAll('.reveal');

if (reveal_elements.length && 'IntersectionObserver' in window) {
    const reveal_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                reveal_observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveal_elements.forEach((el) => reveal_observer.observe(el));
} else {
    reveal_elements.forEach((el) => el.classList.add('visible'));
}

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});