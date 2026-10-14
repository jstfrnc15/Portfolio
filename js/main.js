/**
 * Franc Sant Alcaide — Developer Portfolio JavaScript
 * Reference: https://alihamza-fawn.vercel.app/
 * Clean, lightweight, modular vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initNavigationHighlighting();
  initMobileMenu();
  initProjectModals();
  initCopyEmail();
  initLiveClock();
  initContactForm();
  initCurrentYear();
});

/**
 * 1. Sticky Header & Scroll Visual Treatment
 */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Active Section Highlighting in Navigation
 */
function initNavigationHighlighting() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 3. Mobile Drawer Navigation
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  const toggleMenu = (open) => {
    const isCurrentlyOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;

    toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    mobileMenu.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');

    if (shouldOpen) {
      mobileMenu.classList.add('open');
    } else {
      mobileMenu.classList.remove('open');
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * 4. Project Detail Modals
 */
function initProjectModals() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal');
  let lastFocusedElement = null;

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    lastFocusedElement = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Close buttons and backdrop clicks
  modals.forEach(modal => {
    const closeElements = modal.querySelectorAll('[data-close-modal]');
    closeElements.forEach(el => {
      el.addEventListener('click', () => closeModal(modal));
    });
  });

  // Escape key to close active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) closeModal(activeModal);
    }
  });
}

/**
 * 5. Copy Email to Clipboard
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const copyFeedback = document.getElementById('copy-feedback');
  const emailLink = document.getElementById('email-address');

  if (!copyBtn || !copyFeedback || !emailLink) return;

  copyBtn.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      copyFeedback.textContent = 'Copied!';
      copyBtn.classList.add('copied');

      setTimeout(() => {
        copyFeedback.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 2200);
    } catch (err) {
      copyFeedback.textContent = 'Failed';
      setTimeout(() => {
        copyFeedback.textContent = 'Copy';
      }, 2000);
    }
  });
}

/**
 * 6. Live Time Indicator (Quezon City, Philippines, UTC+8)
 */
function initLiveClock() {
  const timeEl = document.getElementById('local-time');
  if (!timeEl) return;

  const updateTime = () => {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      timeEl.textContent = `${formatted} PHT`;
    } catch (e) {
      const now = new Date();
      timeEl.textContent = `${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  updateTime();
  setInterval(updateTime, 1000);
}

/**
 * 7. Contact Form Handling (Honest Client-Side Dispatcher)
 * Validates inputs without pretending an unconfigured SMTP backend delivered an email.
 * Opens the user's native email client with prefilled details.
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const subjectInput = document.getElementById('form-subject');
  const messageInput = document.getElementById('form-message');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form || !nameInput || !emailInput || !messageInput) return;

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const setFieldError = (input, errorId, show) => {
    const errorEl = document.getElementById(errorId);
    if (show) {
      input.classList.add('error');
      if (errorEl) errorEl.classList.add('visible');
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
    }
  };

  // Error clearance on input
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 0) setFieldError(nameInput, 'name-error', false);
  });

  emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value.trim())) setFieldError(emailInput, 'email-error', false);
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim().length > 0) setFieldError(messageInput, 'message-error', false);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
    const message = messageInput.value.trim();

    // Validate Name
    if (!name) {
      setFieldError(nameInput, 'name-error', true);
      isValid = false;
    } else {
      setFieldError(nameInput, 'name-error', false);
    }

    // Validate Email
    if (!validateEmail(email)) {
      setFieldError(emailInput, 'email-error', true);
      isValid = false;
    } else {
      setFieldError(emailInput, 'email-error', false);
    }

    // Validate Message
    if (!message) {
      setFieldError(messageInput, 'message-error', true);
      isValid = false;
    } else {
      setFieldError(messageInput, 'message-error', false);
    }

    if (!isValid) return;

    // Loading transition
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Preparing Email...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Construct mailto link with encoded parameters
      const emailBody = `Hi Franc,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0ABest regards,%0D%0A${encodeURIComponent(name)}%0D%0A${encodeURIComponent(email)}`;
      const mailtoUrl = `mailto:francalcaide1@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${emailBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Honest status display
      statusEl.className = 'form-status success';
      statusEl.innerHTML = `Message formatted! Your email client has been opened to send directly to <strong>francalcaide1@gmail.com</strong>.`;

      form.reset();

      setTimeout(() => {
        statusEl.className = 'form-status';
        statusEl.innerHTML = '';
      }, 9000);
    }, 400);
  });
}

/**
 * 8. Current Year Helper
 */
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
