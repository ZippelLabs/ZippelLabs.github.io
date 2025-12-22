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

// Cursor sparkle effect
function initSparkles() {
  const sparkleContainer = document.createElement('div')
  sparkleContainer.className = 'sparkle-container'
  document.body.appendChild(sparkleContainer)

  let lastX = 0
  let lastY = 0
  let throttle = false

  document.addEventListener('mousemove', (e) => {
    if (throttle) return
    throttle = true
    setTimeout(() => throttle = false, 50)

    const dx = e.clientX - lastX
    const dy = e.clientY - lastY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 10) {
      createSparkle(e.clientX, e.clientY)
      lastX = e.clientX
      lastY = e.clientY
    }
  })

  function createSparkle(x: number, y: number) {
    const sparkle = document.createElement('div')
    sparkle.className = 'sparkle'

    const offsetX = (Math.random() - 0.5) * 20
    const offsetY = (Math.random() - 0.5) * 20

    sparkle.style.left = `${x + offsetX}px`
    sparkle.style.top = `${y + offsetY}px`
    sparkle.style.setProperty('--sparkle-x', `${(Math.random() - 0.5) * 100}px`)
    sparkle.style.setProperty('--sparkle-y', `${(Math.random() - 0.5) * 100}px`)

    const colors = ['#22d3ee', '#3b82f6', '#8b5cf6', '#06b6d4']
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)]

    const size = Math.random() * 6 + 2
    sparkle.style.width = `${size}px`
    sparkle.style.height = `${size}px`

    sparkleContainer.appendChild(sparkle)
    setTimeout(() => sparkle.remove(), 1000)
  }
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
        <a href="/audits.html" class="nav-link">Audits</a>
        <a href="https://t.me/thisvishalsingh" class="nav-social" title="Telegram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a href="https://x.com/Zippel_Labs" class="nav-social" title="X (Twitter)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://github.com/ZippelLabs/zp1" class="btn-primary">
          GitHub
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
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
      <a href="/audits.html" class="mobile-menu-link">Audits</a>
      <a href="https://t.me/thisvishalsingh" class="mobile-menu-link">Telegram</a>
      <a href="https://x.com/Zippel_Labs" class="mobile-menu-link">X (Twitter)</a>
      <a href="https://github.com/ZippelLabs/zp1" class="mobile-menu-link">GitHub</a>
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

    <h1 class="hero-headline">
      <span class="gradient-text">ZP1</span>
    </h1>
    <p class="hero-tagline animate-fade-in" style="animation-delay: 0.2s">
      High-Performance RISC-V zkVM
    </p>
    <p class="hero-subheadline animate-fade-in" style="animation-delay: 0.3s">
      Built on Mersenne-31 Circle STARKs
    </p>
    <div class="hero-cta animate-fade-in" style="animation-delay: 0.4s">
      <a href="https://github.com/ZippelLabs/zp1" class="btn-primary">
        Get Started
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="/audits.html" class="btn-secondary">
        Book an audit
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </a>
      <button class="btn-secondary expand-trigger" data-target="details-section">
        Learn More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
  </section>

  <!-- Expandable Details Section -->
  <section id="details-section" class="details-section">
    <div class="details-content">
      
      <!-- Features -->
      <div class="feature-grid">
        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h4 class="feature-title">Mersenne-31</h4>
          <p class="feature-description">
            The ideal 32-bit prime (2³¹−1). Single-instruction addition, blazing-fast multiplication. Native SIMD on AVX-512 and NEON.
          </p>
        </div>

        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h4 class="feature-title">Circle STARKs</h4>
          <p class="feature-description">
            Power-of-two FFTs on M31 using the unit circle. Transparent proofs with no trusted setup. QM31 extension for 128-bit security.
          </p>
        </div>

        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <path d="M9 9h6M9 12h6M9 15h4"/>
            </svg>
          </div>
          <h4 class="feature-title">RISC-V Executor</h4>
          <p class="feature-description">
            Standard RV32IM instruction set. Write in Rust, compile with cargo, prove on ZP1. 77-column execution trace.
          </p>
        </div>

        <div class="feature-card animate-on-scroll">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h4 class="feature-title">Delegation Core</h4>
          <p class="feature-description">
            LogUp permutation arguments for memory. 100,000× speedup for SHA-256 and Keccak via specialized precompile circuits.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Footer -->
  <footer class="footer minimal">
    <div class="footer-inner">
      <span class="footer-copyright">© <a href="https://x.com/Zippel_Labs" style="color: inherit; text-decoration: none;">ZippelLabs</a> • by <a href="https://x.com/thisvishalsingh" style="color: inherit; text-decoration: none;">thisvishalsingh</a></span>
      <span class="footer-license">MIT / Apache 2.0</span>
    </div>
  </footer>
`

// Initialize interactions
initNavigation()
initSparkles()
initExpandables()
initMobileMenu()

// Wait for DOM to be ready, then init animations
requestAnimationFrame(() => {
  initScrollAnimations()
})
