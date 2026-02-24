// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Create WhatsApp message
        const whatsappMessage = `New Website Inquiry:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/250788000000?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
        alert('Thank you! Redirecting to WhatsApp...');
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature, .additional-card, #contact').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Image modal functionality
const modal = document.getElementById('imageModal');
const img = document.getElementById('profile-img');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('close')[0];

if (img && modal) {
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

if (modal) {
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    }
}
