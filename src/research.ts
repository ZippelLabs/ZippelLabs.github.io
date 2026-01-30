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

// Intersection observer
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

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    revealObserver.observe(el)
  })
}

// Mobile menu
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle')
  const menu = document.getElementById('mobile-menu')

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open')
    })

    menu.querySelectorAll('.mobile-menu-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open')
      })
    })

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target as Node) && !toggle.contains(e.target as Node)) {
        menu.classList.remove('open')
      }
    })
  }
}

// Render Content
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="nav-container">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
        ZippelLabs
      </a>
      <div class="nav-links">
        <a href="/index.html#services" class="nav-link">Services</a>
        <a href="/index.html#about" class="nav-link">About</a>
        <a href="/index.html#handbooks" class="nav-link">Handbooks</a>
        <a href="/research.html" class="nav-link" style="color: var(--color-primary-400);">Research</a>
        <a href="/audits.html" class="btn-primary">
          Book an audit
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
      <a href="/index.html#services" class="mobile-menu-link">Services</a>
      <a href="/index.html#about" class="mobile-menu-link">About</a>
      <a href="/index.html#handbooks" class="mobile-menu-link">Handbooks</a>
      <a href="/research.html" class="mobile-menu-link">Research</a>
      <a href="/audits.html" class="mobile-menu-link">Book an audit</a>
      <a href="https://t.me/thisvishalsingh" class="mobile-menu-link">Telegram</a>
      <a href="https://x.com/Zippel_Labs" class="mobile-menu-link">X (Twitter)</a>
      <a href="https://github.com/ZippelLabs" class="mobile-menu-link">GitHub</a>
    </div>
  </div>

  <!-- Research Hero -->
  <section class="hero-section" style="min-height: 50vh; padding-bottom: 3rem;">
    <!-- Background Elements -->
    <div class="hero-pipeline">
        <svg class="pipeline-svg" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
         <defs>
           <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stop-color="#06b6d4" stop-opacity="0"/>
             <stop offset="20%" stop-color="#22d3ee" stop-opacity="0.3"/>
             <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.5"/>
             <stop offset="80%" stop-color="#22d3ee" stop-opacity="0.3"/>
             <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
           </linearGradient>
           <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0"/>
             <stop offset="30%" stop-color="#a78bfa" stop-opacity="0.4"/>
             <stop offset="70%" stop-color="#8b5cf6" stop-opacity="0.4"/>
             <stop offset="100%" stop-color="#a78bfa" stop-opacity="0"/>
           </linearGradient>
         </defs>
         <path d="M-100 350 C100 300, 200 450, 400 350 S600 200, 800 300 S1000 450, 1300 350" stroke="url(#wave-gradient-1)" stroke-width="2" fill="none" opacity="0.6"/>
         <path d="M-100 250 C100 180, 300 320, 500 220 S700 100, 900 180 S1100 320, 1300 220" stroke="url(#wave-gradient-2)" stroke-width="1.5" fill="none" opacity="0.4"/>
       </svg>
    </div>

    <div class="hero-badge animate-fade-in">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
      <span>Open Source Research</span>
    </div>

    <h1 class="hero-headline animate-fade-in" style="font-size: clamp(2.5rem, 6vw, 4rem); animation-delay: 0.1s;">
      <span class="gradient-text">Research</span> & Publications
    </h1>
    <p class="hero-subheadline animate-fade-in" style="animation-delay: 0.2s; max-width: 750px; margin-bottom: 2rem;">
      Advancing zero-knowledge cryptography through novel implementations and rigorous security analysis. Everything we build, we open source.
    </p>
  </section>

  <!-- Featured Research Section -->
  <section class="section">
    <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
      <p class="section-label">Flagship Projects</p>
      <h2 class="section-heading">Featured Research</h2>
    </div>

    <div class="handbooks-grid reveal-stagger">
      
      <!-- ZP1 zkVM -->
      <a href="https://github.com/ZippelLabs/zp1" target="_blank" class="handbook-card">
        <div class="handbook-icon" style="--accent-color: #22d3ee;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <div class="handbook-content">
          <div class="handbook-meta">
            <span class="handbook-tag">zkVM</span>
            <span class="handbook-tag" style="background: rgba(34, 197, 94, 0.1); border-color: rgba(34, 197, 94, 0.2); color: #22c55e;">In Development</span>
          </div>
          <h3 class="handbook-title">ZP1 zkVM</h3>
          <p class="handbook-description">
            Our RISC-V zkVM built on Circle STARKs with Mersenne-31 arithmetic. Designed for sub-second proof generation with minimal memory footprint.
          </p>
          <ul class="handbook-highlights">
            <li>Circle STARK proving system</li>
            <li>M31 field for fast native ops</li>
            <li>Full RISC-V instruction support</li>
            <li>Ethproofs integration ready</li>
          </ul>
          <div class="tech-tags" style="margin-bottom: 1rem;">
            <span>Rust</span>
            <span>Circle STARKs</span>
            <span>RISC-V</span>
          </div>
          <span class="handbook-link">
            View Implementation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>

      <!-- Publications -->
      <a href="https://github.com/ZippelLabs/publications" target="_blank" class="handbook-card">
        <div class="handbook-icon" style="--accent-color: #a78bfa;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <div class="handbook-content">
          <div class="handbook-meta">
            <span class="handbook-tag">Research Papers</span>
          </div>
          <h3 class="handbook-title">Technical Publications</h3>
          <p class="handbook-description">
            Whitepapers, technical notes, and security analysis reports. Deep dives into proof system internals, vulnerability research, and protocol design.
          </p>
          <ul class="handbook-highlights">
            <li>zkVM security analysis</li>
            <li>Proof system comparisons</li>
            <li>Vulnerability disclosures</li>
            <li>Implementation guides</li>
          </ul>
          <div class="tech-tags" style="margin-bottom: 1rem;">
            <span>Whitepapers</span>
            <span>Security</span>
          </div>
          <span class="handbook-link">
            View Repository
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>

    </div>
  </section>

  <!-- Research Focus Areas -->
  <section class="section-light">
    <div class="section-inner">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <p class="section-label">Deep Expertise</p>
        <h2 class="section-heading" style="margin: 0 auto;">Research Focus Areas</h2>
        <p class="section-description" style="margin: 1rem auto 0; max-width: 650px; color: #52525b;">
          Our research spans the full stack of zero-knowledge systems, from low-level cryptographic primitives to high-level protocol security.
        </p>
      </div>

      <div class="pillars-grid reveal-stagger">
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="pillar-title">Circuit Security</h3>
          <p class="pillar-description">
            Under-constrained circuits, soundness vulnerabilities, and constraint system bugs across ⭕ Circom, 🦀 Halo2, ◆ Noir, and 🔺 Cairo.
          </p>
          <ul class="pillar-details">
            <li>Witness extraction attacks</li>
            <li>Constraint satisfaction bypass</li>
            <li>Verifier complexity analysis</li>
          </ul>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
          <h3 class="pillar-title">VM Architecture</h3>
          <p class="pillar-description">
            RISC-V instruction coverage, memory access patterns, and state transition soundness in zkVM implementations.
          </p>
          <ul class="pillar-details">
            <li>Instruction set completeness</li>
            <li>Memory consistency proofs</li>
            <li>Continuation correctness</li>
          </ul>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
            </svg>
          </div>
          <h3 class="pillar-title">Proof Systems</h3>
          <p class="pillar-description">
            STARK/SNARK security properties, FRI soundness, polynomial commitments, and verifier implementation correctness.
          </p>
          <ul class="pillar-details">
            <li>FRI query optimization</li>
            <li>Commitment scheme security</li>
            <li>Recursive composition</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="section cta-section">
    <h2 class="section-heading" style="margin: 0 auto 1rem;">Interested in our research?</h2>
    <p class="section-description" style="margin: 0 auto 2rem; text-align: center; max-width: 550px;">
      We're always open to discussing new research directions, security challenges, and collaboration opportunities.
    </p>
    <div class="hero-cta">
      <a href="https://t.me/thisvishalsingh" class="btn-primary">
        Start a Conversation
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="https://github.com/ZippelLabs" target="_blank" class="btn-secondary">
        Explore on GitHub
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="nav-logo">
            <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
            ZippelLabs
          </a>
          <p class="footer-tagline">Securing cryptographic systems.</p>
        </div>
        <div class="footer-links-group">
          <h4 class="footer-heading">Navigate</h4>
          <a href="/index.html" class="footer-link">Home</a>
          <a href="/index.html#handbooks" class="footer-link">Handbooks</a>
          <a href="/research.html" class="footer-link">Research</a>
          <a href="/audits.html" class="footer-link">Audits</a>
        </div>
        <div class="footer-links-group">
          <h4 class="footer-heading">Connect</h4>
          <a href="https://x.com/Zippel_Labs" target="_blank" class="footer-link">X (Twitter)</a>
          <a href="https://github.com/ZippelLabs" target="_blank" class="footer-link">GitHub</a>
          <a href="https://t.me/thisvishalsingh" target="_blank" class="footer-link">Telegram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copyright">© <a href="https://x.com/Zippel_Labs" style="color: inherit; text-decoration: none;">ZippelLabs</a> • by <a href="https://x.com/thisvishalsingh" style="color: inherit; text-decoration: none;">thisvishalsingh</a></span>
      </div>
    </div>
  </footer>
`

// Init
initNavigation()
initMobileMenu()
requestAnimationFrame(() => {
  initScrollAnimations()
})
