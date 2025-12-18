const { createApp } = Vue;

createApp({
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      missionHovered: false,
      formSubmitted: false,
      formError: false,
      formMessage: '',
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },

  mounted() {
    // Scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyboard);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleKeyboard);
  },

  methods: {
    /**
     * Handle scroll event - update sticky header state
     */

    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },

    /**
     * Toggle mobile menu visibility
     */
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },

    /**
     * Smooth scroll navigation to sections
     */
    scrollToSection(event) {
      if (event.preventDefault) {
        event.preventDefault();
      }

      // Close mobile menu
      this.mobileMenuOpen = false;

      // Get target href
      const href = event.target.getAttribute('href') || event.target.href;
      if (!href) return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      // Calculate position accounting for sticky header
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    },

    /**
     * Keyboard navigation shortcuts
     */
    handleKeyboard(e) {
      const shortcuts = {
        'h': '#home',
        's': '#services',
        'a': '#about',
        'c': '#contact'
      };

      const key = e.key.toLowerCase();
      if (shortcuts[key] && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const element = document.querySelector(shortcuts[key]);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    },

    /**
     * Handle form submission
     */
    handleFormSubmit() {
      // Validate
      if (!this.validateForm()) {
        return;
      }

      // Log form data (frontend only - no backend)
      console.log('Form Submitted:', this.form);

      // Show success message
      this.formError = false;
      this.formMessage = `Thank you, ${this.form.name}! We've received your message and will contact you within 24 hours.`;
      this.formSubmitted = true;

      // Reset form after delay
      setTimeout(() => {
        this.resetForm();
      }, 4000);
    },

    /**
     * Validate form inputs
     */
    validateForm() {
      // Name validation
      if (!this.form.name.trim()) {
        this.showError('Please enter your name');
        return false;
      }

      if (this.form.name.trim().length < 2) {
        this.showError('Name must be at least 2 characters');
        return false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.showError('Please enter a valid email address');
        return false;
      }

      // Subject validation
      if (!this.form.subject.trim()) {
        this.showError('Please enter a subject');
        return false;
      }

      if (this.form.subject.trim().length < 3) {
        this.showError('Subject must be at least 3 characters');
        return false;
      }

      // Message validation
      if (!this.form.message.trim()) {
        this.showError('Please enter your message');
        return false;
      }

      if (this.form.message.trim().length < 10) {
        this.showError('Message must be at least 10 characters');
        return false;
      }

      return true;
    },

    /**
     * Show error message
     */
    showError(message) {
      this.formError = true;
      this.formMessage = message;
      this.formSubmitted = true;

      setTimeout(() => {
        this.formSubmitted = false;
      }, 4000);
    },

    /**
     * Reset form to initial state
     */
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.formSubmitted = false;
      this.formMessage = '';
      this.formError = false;
    }
  }
}).mount('#app');

/* ==========================================
   VANILLA JAVASCRIPT ENHANCEMENTS
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
  /**
   * Initialize scroll animations using Intersection Observer
   */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
      }
    });
  }, observerOptions);

  // Observe animated elements
  const animatedElements = document.querySelectorAll(
    '.service-card, .industry-card, .contact-box'
  );

  animatedElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });

  /**
   * Parallax effect on hero background
   */
  let ticking = false;
  const updateParallax = () => {
    const scrollPosition = window.scrollY;
    
    const grid = document.querySelector('.cyber-grid');
    if (grid) {
      grid.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }

    const glowOrbs = document.querySelectorAll('.glow-orb');
    glowOrbs.forEach((orb, index) => {
      const offset = index === 0 ? scrollPosition * 0.3 : scrollPosition * -0.2;
      orb.style.transform = `translate(${offset}px, ${offset}px)`;
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  /**
   * Service card hover enhancement
   */
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      serviceCards.forEach(c => {
        if (c !== this) {
          c.style.opacity = '0.5';
        }
      });
    });

    card.addEventListener('mouseleave', function() {
      serviceCards.forEach(c => {
        c.style.opacity = '1';
      });
    });
  });

  /**
   * Form input focus animation
   */
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      const group = this.parentElement;
      if (group) {
        group.style.transform = 'translateY(-2px)';
      }
    });

    input.addEventListener('blur', function() {
      const group = this.parentElement;
      if (group) {
        group.style.transform = 'translateY(0)';
      }
    });
  });

  /**
   * Contact info boxes animated reveal
   */
  const contactBoxes = document.querySelectorAll('.contact-box');
  contactBoxes.forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateX(-20px)';
    box.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    
    observer.observe(box);
  });

  /**
   * Click handlers for contact cards (copy to clipboard)
   */
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = this.textContent;
        this.textContent = '✓ Copied!';
        this.style.color = '#00ff88';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.color = '';
        }, 2000);
      });
    });
  }


  /**
   * CEO section quote animation
   */
  const ceoSection = document.querySelector('.ceo-section');
  if (ceoSection) {
    ceoSection.addEventListener('mouseenter', function() {
      const ceoImage = this.querySelector('.ceo-image');
      if (ceoImage) {
        ceoImage.style.transform = 'scale(1.05)';
      }
    });

    ceoSection.addEventListener('mouseleave', function() {
      const ceoImage = this.querySelector('.ceo-image');
      if (ceoImage) {
        ceoImage.style.transform = 'scale(1)';
      }
    });
  }

  /**
   * Accessibility: Skip to main content
   */
  const skipLink = document.createElement('a');
  skipLink.href = '#home';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #00d4ff;
    color: #0a0e1a;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 0 0 4px 0;
    z-index: 999;
    font-weight: 600;
  `;

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  /**
   * Keyboard accessibility for focus management
   */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });

  /**
   * Service card click to expand details (mobile)
   */
  if (window.innerWidth < 768) {
    serviceCards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('expanded');
      });
    });
  }

  /**
   * Smooth link behavior for internal anchors
   */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const event = new Event('click');
        event.target = this;
        window.app.scrollToSection(event);
      }
    });
  });

  /**
   * Performance: Debounced scroll handler
   */
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
      // Scroll logic here
    });
  });

  console.log('✓ Enhanced Omni Seq website initialized successfully');
});
