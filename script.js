// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Form Submission with WhatsApp Integration
const contactForm = document.getElementById('contactForm');
const whatsappPhone = '917008930973'; // +91 70089 30973

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create WhatsApp message
    const whatsappMessage = `
Hello!  I'm interested in SAI Tutorial. 

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}

Please contact me as soon as possible.
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, '_blank');

    // Show success message
    showSuccessMessage();

    // Reset form
    contactForm.reset();
});

// Success Message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent!</h3>
            <p>Your message has been sent to WhatsApp.  We'll get back to you soon! </p>
        </div>
    `;
    document.body.appendChild(successDiv);

    // Add styles
    const style = document.createElement('style');
    style.innerHTML = `
        .success-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 2rem;
            border-radius:  15px;
            box-shadow:  0 20px 60px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align:  center;
            animation: slideDown 0.3s ease-out;
        }

        . success-content i {
            font-size: 3rem;
            color: #25d366;
            margin-bottom: 1rem;
            display: block;
        }

        . success-content h3 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom:  0.5rem;
        }

        .success-content p {
            color: #666;
            margin-bottom: 1.5rem;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform:  translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);

    // Remove after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Scroll animations
const observerOptions = {
    threshold:  0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style. transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat, .teacher-card, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add pulse animation to CTA button
const ctaButton = document. querySelector('.cta-button');
ctaButton.addEventListener('mouseover', function() {
    this.style.animation = 'pulse 0.6s ease-out';
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Add to document head for pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.innerHTML = `
    @keyframes pulse {
        0% {
            box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
        }
        50% {
            box-shadow: 0 15px 40px rgba(236, 72, 153, 0.5);
        }
        100% {
            box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
        }
    }
`;
document.head.appendChild(pulseStyle);