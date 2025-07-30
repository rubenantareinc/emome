// Common JavaScript for the Emome marketing site
//
// This script provides interactive behaviours such as the mobile
// navigation toggle, form handling for the contact and waitlist
// pages, and a simple scoring demo on the tracker page.  It runs
// automatically on page load and only activates code relevant to
// elements present on the current page.

document.addEventListener('DOMContentLoaded', function () {
  /* Mobile navigation toggle
     Clicking the hamburger icon shows or hides the mobile menu.
  */
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  /* Close mobile menu after selecting a link (optional for
     convenience on small screens) */
  if (mobileMenu) {
    const links = mobileMenu.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* Contact form submission handler
     Composes a mailto link to contact the Emome team and shows
     a thank‑you message.  If the user has no email client
     configured the link may not open, but they will still see
     confirmation on the page. */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (document.getElementById('contact-name') || {}).value || '';
      const email = (document.getElementById('contact-email') || {}).value || '';
      const message = (document.getElementById('contact-message-input') || {}).value || '';
      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      const subject = encodeURIComponent('Contact from Emome');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      );
      // Attempt to open the mail client
      window.location.href = `mailto:contactemome@gmail.com?subject=${subject}&body=${body}`;
      // Show thank you message on page
      const thanks = document.getElementById('contact-thankyou');
      if (thanks) thanks.classList.remove('hidden');
      contactForm.classList.add('hidden');
    });
  }

  /* Waitlist form submission handler
     Sends a mailto link with the waitlist request and displays a
     confirmation message. */
  const waitForm = document.getElementById('waitlist-form');
  if (waitForm) {
    waitForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = (document.getElementById('waitlist-email') || {}).value || '';
      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      const subject = encodeURIComponent('Waitlist Request');
      const body = encodeURIComponent(
        `Please add me to the Emome waitlist.\nEmail: ${email}`
      );
      window.location.href = `mailto:contactemome@gmail.com?subject=${subject}&body=${body}`;
      const thanks = document.getElementById('waitlist-thankyou');
      if (thanks) thanks.classList.remove('hidden');
      waitForm.classList.add('hidden');
    });
  }

  /* Tracker demo form handler
     Calculates a simple weighted score based on emotional
     intensity and duration.  Maintains a running average and
     updates a radial indicator. */
  const demoForm = document.getElementById('demo-form');
  if (demoForm) {
    let totalScore = 0;
    let interactions = 0;
    demoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const intensityField = document.getElementById('demo-intensity');
      const durationField = document.getElementById('demo-duration');
      const intensity = parseInt(intensityField.value, 10) || 0;
      const duration = durationField.value;
      let weight;
      switch (duration) {
        case 'short':
          weight = 1;
          break;
        case 'medium':
          weight = 2;
          break;
        case 'long':
          weight = 3;
          break;
        default:
          weight = 1;
      }
      const score = intensity * weight;
      interactions += 1;
      totalScore += score;
      const avg = totalScore / interactions;
      // Update text outputs
      const scoreElem = document.getElementById('interaction-score');
      const avgElem = document.getElementById('average-score');
      if (scoreElem) scoreElem.textContent = score.toFixed(1);
      if (avgElem) avgElem.textContent = avg.toFixed(1);
      // Update radar dot position
      const radarDot = document.getElementById('radar-dot');
      if (radarDot) {
        const maxRadius = 80; // pixels; adjust if radar size changes
        // Normalise the score out of 15 (max score = 5 intensity * 3 weight)
        const radius = Math.min((score / 15) * maxRadius, maxRadius);
        // move along the x-axis (east); still centre the dot via translate(-50%,-50%)
        radarDot.classList.remove('pulse');
        void radarDot.offsetWidth;
        radarDot.classList.add('pulse');
        radarDot.style.transform = `translate(-50%, -50%) translate(${radius}px, 0)`;
      }
      // Reveal result section
      const result = document.getElementById('demo-result');
      if (result) result.classList.remove('hidden');
    });
  }
});