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
/* ---------- Theme toggle (persisted) ---------- */
(function () {
    const root = document.documentElement;
    const toggle = document.querySelector('.theme-toggle');
    const icon = toggle ? toggle.querySelector('i') : null;

    const apply = (theme) => {
        root.setAttribute('data-theme', theme);
        if (icon) {
            icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    };

    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    apply(stored || (prefersLight ? 'light' : 'dark'));

    if (toggle) {
        toggle.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            apply(next);
        });
    }
})();

/* ---------- Scroll-spy: highlight the in-view section in the nav ---------- */
(function () {
    const links = Array.from(document.querySelectorAll('.navbar-menu a[href^="#"]'));
    if (!links.length || !('IntersectionObserver' in window)) return;

    const map = new Map();
    links.forEach((link) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) map.set(target, link);
    });

    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                links.forEach((l) => l.classList.remove('active'));
                const link = map.get(entry.target);
                if (link) link.classList.add('active');
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    map.forEach((_, target) => spy.observe(target));
})();

/* ---------- Hero typing effect ---------- */
(function () {
    const el = document.querySelector('.typed');
    if (!el) return;
    const roles = (el.dataset.roles || '').split(',').map((r) => r.trim()).filter(Boolean);
    if (!roles.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = roles[0];
        return;
    }
    let r = 0, c = 0, deleting = false;
    const tick = () => {
        const word = roles[r];
        el.textContent = word.slice(0, c);
        if (!deleting && c < word.length) { c++; }
        else if (deleting && c > 0) { c--; }
        else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 1400); return; }
        else { deleting = false; r = (r + 1) % roles.length; }
        setTimeout(tick, deleting ? 45 : 90);
    };
    tick();
})();

/* ---------- Contact form: validate and open a prefilled email ---------- */
(function () {
    const form = document.querySelector('.email-form');
    if (!form) return;
    const button = form.querySelector('button');
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    if (!button || !name || !email) return;

    const status = document.createElement('p');
    status.className = 'form-status';
    form.appendChild(status);

    const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!name.value.trim() || !valid(email.value.trim())) {
            status.textContent = 'Please enter your name and a valid email.';
            status.className = 'form-status error';
            return;
        }
        const subject = encodeURIComponent('Portfolio enquiry from ' + name.value.trim());
        const body = encodeURIComponent('Hi Abel,\n\n');
        status.textContent = 'Opening your email client…';
        status.className = 'form-status ok';
        window.location.href = 'mailto:se.abel.tadesse@gmail.com?subject=' + subject + '&body=' + body;
    });
})();

/* ---------- Dynamic copyright year ---------- */
(function () {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
})();

/* ---------- Back to top ---------- */
(function () {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    const onScroll = () => btn.classList.toggle('show', window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ---------- Scroll progress bar ---------- */
(function () {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    const update = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
})();
