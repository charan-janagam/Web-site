// Skill bar animation on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Electric spark effect
function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = x + 'px';
    spark.style.top = y + 'px';
    spark.style.background = Math.random() > 0.5 ? 'var(--neon-blue)' : 'var(--neon-purple)';
    document.body.appendChild(spark);
    
    setTimeout(() => {
        spark.remove();
    }, 600);
}

// Add spark effect to interactive elements
document.querySelectorAll('a, button, .cta-btn, .trait, .project-card, .social-link').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                createSpark(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height
                );
            }, i * 100);
        }
    });
});

// Smooth scroll with offset for fixed nav
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
