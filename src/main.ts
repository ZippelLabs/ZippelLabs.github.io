import './style.css'

// Navigation scroll handler
function initNavigation() {
  const nav = document.querySelector('.nav-container')
  if (!nav) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })
}

// Intersection observer for scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0')
        entry.target.classList.add('animate-fade-in-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('opacity-0')
    observer.observe(el)
  })
}

// Expandable sections
function initExpandables() {
  document.querySelectorAll('.expand-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const target = document.getElementById(trigger.getAttribute('data-target') || '')
      if (target) {
        target.classList.toggle('expanded')
        trigger.classList.toggle('active')
      }
    })
  })
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle')
  const menu = document.getElementById('mobile-menu')

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open')
    })

    // Close menu when clicking a link
    menu.querySelectorAll('.mobile-menu-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open')
      })
    })

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target as Node) && !toggle.contains(e.target as Node)) {
        menu.classList.remove('open')
      }
    })
  }
}

// Create the app
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="nav-container">
    <div class="nav-inner">
      <a href="#" class="nav-logo">
        <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
        ZippelLabs
      </a>
      <div class="nav-links">
        <a href="https://t.me/thisvishalsingh" class="btn-primary">
          Start a Conversation
        </a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-links">
      <a href="/zp1.html" class="mobile-menu-link">ZP1</a>
      <a href="/audits.html" class="mobile-menu-link">Audits</a>
      <a href="https://t.me/thisvishalsingh" class="mobile-menu-link">Telegram</a>
      <a href="https://x.com/Zippel_Labs" class="mobile-menu-link">X (Twitter)</a>
      <a href="https://github.com/ZippelLabs" class="mobile-menu-link">GitHub</a>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section">
    <!-- Decorative Wave Graphic -->
    <div class="hero-pipeline">
      <svg class="pipeline-svg" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <path class="wave-line wave-line-1" 
          d="M-100 400 C100 350, 200 500, 400 400 S600 250, 800 350 S1000 500, 1300 400" 
          stroke="url(#wave-gradient-1)" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path class="wave-line wave-line-2" 
          d="M-100 450 C150 380, 250 550, 450 450 S650 300, 850 400 S1050 550, 1300 450" 
          stroke="url(#wave-gradient-1)" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path class="wave-line wave-line-3" 
          d="M-100 300 C100 220, 300 380, 500 280 S700 150, 900 250 S1100 380, 1300 280" 
          stroke="url(#wave-gradient-2)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        
        <circle class="wave-pulse" r="6" fill="#22d3ee">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#wave-path-1"/>
          </animateMotion>
        </circle>
        <circle class="wave-pulse" r="4" fill="#8b5cf6">
          <animateMotion dur="8s" repeatCount="indefinite">
            <mpath href="#wave-path-2"/>
          </animateMotion>
        </circle>
        
        <path id="wave-path-1" d="M-100 400 C100 350, 200 500, 400 400 S600 250, 800 350 S1000 500, 1300 400" fill="none"/>
        <path id="wave-path-2" d="M-100 300 C100 220, 300 380, 500 280 S700 150, 900 250 S1100 380, 1300 280" fill="none"/>
        
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0"/>
            <stop offset="20%" stop-color="#22d3ee" stop-opacity="0.7"/>
            <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.9"/>
            <stop offset="80%" stop-color="#22d3ee" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0"/>
            <stop offset="30%" stop-color="#a78bfa" stop-opacity="0.6"/>
            <stop offset="70%" stop-color="#8b5cf6" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#a78bfa" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>


    <h1 class="hero-headline animate-fade-in">
      Securing cryptographic systems.
    </h1>
    <p class="hero-subheadline animate-fade-in" style="animation-delay: 0.2s">
      ZK circuits. zkVMs. Cryptographic protocols.<br/>
      <strong style="color: var(--color-primary-400);">Subsidized rates for zkVM teams.</strong>
    </p>
    <div class="hero-cta animate-fade-in" style="animation-delay: 0.3s">
      <a href="/audits.html" class="btn-primary">
        Get a Quote
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>

  <!-- Three Pillars Section -->
  <section class="section pillars-section">
    <div class="pillars-grid">
      
      <!-- Audit Pillar -->
      <div class="pillar-card">
        <div class="pillar-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="pillar-title">Audit</h3>
        <p class="pillar-description">
          Security audits for ZK circuits, zkVMs, and cryptographic protocols.
          <strong style="display: block; margin-top: 0.5rem; color: var(--color-primary-400);">Onboarding in < 6 hours.</strong>
        </p>
        <a href="/audits.html" class="pillar-link">Request audit →</a>
      </div>

      <!-- Build Pillar -->
      <div class="pillar-card">
        <div class="pillar-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <h3 class="pillar-title">Build</h3>
        <p class="pillar-description">
          ZP1 — a RISC-V zkVM built on Circle STARKs and Mersenne-31 arithmetic.
        </p>
        <div style="margin: 1rem 0; border-radius: 8px; overflow: hidden;">
          <iframe 
            width="100%" 
            height="200" 
            src="https://www.youtube.com/embed/Dm-SaFFZS48?start=1420" 
            title="ZP1 Presentation - Ethproofs Call" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style="border-radius: 8px;">
          </iframe>
        </div>
        <a href="/zp1.html" class="pillar-link">Explore ZP1 →</a>
      </div>

      <!-- Research Pillar -->
      <div class="pillar-card">
        <div class="pillar-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <h3 class="pillar-title">Research</h3>
        <p class="pillar-description">
          ZK security analysis and vulnerability research. Coming soon.
        </p>
        <span class="pillar-link" style="opacity: 0.5;">Coming soon →</span>
      </div>

    </div>
  </section>

  <!-- Founder Section -->
  <section class="section founder-section-minimal">
    <div class="founder-bar">
      <img src="https://pbs.twimg.com/profile_images/1986720992027455488/_dpMLk5R_400x400.jpg" alt="Vishal Singh" class="founder-avatar">
      <div class="founder-details">
        <h3 class="founder-name">Vishal Singh</h3>
        <p class="founder-role">Security Researcher & ZK Engineer</p>
      </div>
      <div class="founder-links">
        <a href="https://x.com/thisvishalsingh" class="founder-link" title="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://github.com/this-vishalsingh" class="founder-link" title="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section cta-section">
    <h2 class="section-heading">Ready to secure your project?</h2>
    <a href="/audits.html" class="btn-primary" style="font-size: 1rem; padding: 1rem 2rem;">
      Get a Quote
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  </section>

  <!-- Footer -->
  <footer class="footer minimal">
    <div class="footer-inner">
      <span class="footer-links">
        <a href="https://x.com/Zippel_Labs" style="color: var(--color-text-muted); text-decoration: none;">Twitter</a>
        <span style="color: var(--color-text-muted);">·</span>
        <a href="https://github.com/ZippelLabs" style="color: var(--color-text-muted); text-decoration: none;">GitHub</a>
      </span>
    </div>
  </footer>
`

// Initialize interactions
initNavigation()
// Note: sparkles removed for cleaner, professional look
initExpandables()
initMobileMenu()

// Wait for DOM to be ready, then init animations
requestAnimationFrame(() => {
  initScrollAnimations()
})
