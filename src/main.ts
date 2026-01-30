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

  // Reveal animations for sections
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
        <a href="#services" class="nav-link">Services</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#handbooks" class="nav-link">Handbooks</a>
        <a href="/research.html" class="nav-link">Research</a>
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
      <a href="#services" class="mobile-menu-link">Services</a>
      <a href="#about" class="mobile-menu-link">About</a>
      <a href="#handbooks" class="mobile-menu-link">Handbooks</a>
      <a href="/research.html" class="mobile-menu-link">Research</a>
      <a href="/audits.html" class="mobile-menu-link">Book an audit</a>
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

    <!-- Hero Badge -->
    <div class="hero-badge animate-fade-in">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <span>Security First — Proof of Security</span>
    </div>

    <h1 class="hero-headline animate-fade-in" style="animation-delay: 0.1s">
      What if your ZK circuit<br/>has a hidden bug?
    </h1>
    <p class="hero-subheadline animate-fade-in" style="animation-delay: 0.2s">
      We find the vulnerabilities others miss. Expert audits for ZK circuits, zkVMs, and cryptographic protocols — by the team building ZP1.
    </p>
    
    <!-- Subsidized Rates Badge -->
    <a href="https://x.com/Zippel_Labs/status/2003006491205509151" target="_blank" class="subsidy-badge animate-fade-in" style="animation-delay: 0.3s; text-decoration: none;">
      <span class="subsidy-text">Subsidized rates for zkVM teams</span>
      <span class="subsidy-link">Learn more</span>
    </a>

    <div class="hero-cta animate-fade-in" style="animation-delay: 0.35s">
      <a href="/audits.html" class="btn-primary">
        Secure Your Protocol
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#services" class="btn-secondary">
        See How We Work
      </a>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="section-light">
    <div class="section-inner">
    <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
      <p class="section-label">Our Expertise</p>
      <h2 class="section-heading" style="margin: 0 auto;">We don't just audit code.<br/>We prove it's correct.</h2>
    </div>
    
    <!-- Service Tags -->
    <div class="service-tags">
      <span class="service-tag">ZK Circuits</span>
      <span class="service-tag">zkVMs</span>
      <span class="service-tag">FHE</span>
      <span class="service-tag">MPC</span>
      <span class="service-tag">🔺 Cairo</span>
      <span class="service-tag">⭕ Circom</span>
      <span class="service-tag">◆ Noir</span>
      <span class="service-tag">🦀 Halo2</span>
      <span class="service-tag">STARKs</span>
      <span class="service-tag">SNARKs</span>
    </div>

    <div class="pillars-grid reveal-stagger">
      
      <!-- Audit Pillar -->
      <div class="pillar-card">
        <div class="pillar-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 class="pillar-title">Security Audits</h3>
        <p class="pillar-description">
          Comprehensive security audits for ZK circuits, zkVMs, FHE schemes, MPC protocols, and cryptographic implementations.
        </p>
        <div class="pillar-highlight">
          <span class="highlight-badge">⚡ Onboarding in < 6 hours</span>
        </div>
        <a href="/audits.html" class="pillar-link">Request Audit →</a>
      </div>

      <!-- Build Pillar -->
      <div class="pillar-card">
        <div class="pillar-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <h3 class="pillar-title">ZP1 zkVM</h3>
        <p class="pillar-description">
          Our RISC-V zkVM built on Circle STARKs and Mersenne-31 arithmetic. Production-grade proving infrastructure.
        </p>
        <div style="margin: 1.25rem 0; border-radius: 12px; overflow: hidden;">
          <iframe 
            width="100%" 
            height="180" 
            src="https://www.youtube.com/embed/Dm-SaFFZS48?start=1420" 
            title="ZP1 Presentation - Ethproofs Call" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style="border-radius: 12px;">
          </iframe>
        </div>
        <a href="https://github.com/ZippelLabs/zp1" class="pillar-link" target="_blank">View on GitHub →</a>
      </div>

      <!-- Research Pillar -->
      <div class="pillar-card">
        <div class="pillar-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <h3 class="pillar-title">Research</h3>
        <p class="pillar-description">
          ZK security analysis, vulnerability research, and cryptographic protocol design. Deep expertise in emerging proof systems.
        </p>
        <span class="pillar-link" style="opacity: 0.5;">Coming Soon →</span>
      </div>

    </div>
    </div>
  </section>

  <!-- Strategic Partners -->
  <section class="section partner-section">
    <p class="partner-label">Strategic Partners</p>
    <div class="partner-content">
      <div class="partner-info">
        <a href="https://formal.land" target="_blank" class="partner-link">
          <img src="https://formal.land/img/land-512.png" alt="Formal Land" class="partner-logo" />
          <span class="partner-name">Formal Land</span>
        </a>
        <p class="partner-tagline">Formal verification experts. We combine manual security audits with mathematical proofs.</p>
      </div>
      <div class="partner-tweet-card">
        <div class="tweet-header">
          <img src="https://formal.land/img/land-512.png" alt="Formal Land" class="tweet-avatar" />
          <div class="tweet-author">
            <span class="tweet-name">Formal Land</span>
            <span class="tweet-handle">@FormalLand</span>
          </div>
          <svg class="tweet-x-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
        <p class="tweet-text">We're joining forces with <a href="https://x.com/Zippel_Labs" target="_blank">@Zippel_Labs</a> to redefine ZK security auditing. Traditional security research + formal verification = complete end-to-end ZK security coverage 🤝</p>
        <div class="tweet-footer">
          <span class="tweet-date">Dec 4, 2025</span>
          <a href="https://x.com/FormalLand/status/1996591667864822096" target="_blank" class="tweet-link">View on X →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Proof of Work Section -->
  <section class="section proof-section">
    <div class="section-header">
      <h2 class="section-heading">Bugs we've found.<br/>Systems we've secured.</h2>
      <p class="section-description">Real vulnerabilities discovered through our security research and audit work.</p>
    </div>
    <div class="proof-grid reveal-stagger">
      <div class="proof-card">
        <div class="proof-header">
          <span class="severity-tag critical">Critical</span>
          <span class="proof-type">Bug Bounty</span>
        </div>
        <h3 class="proof-title">ZK Circuit Constraint Bypass</h3>
        <p class="proof-description">Identified an under-constrained circuit in a zkVM implementation that could allow invalid state transitions.</p>
        <div class="tech-tags">
          <span>⭕ Circom</span>
          <span>zkVM</span>
          <span>Groth16</span>
        </div>
      </div>
      <div class="proof-card">
        <div class="proof-header">
          <span class="severity-tag high">High</span>
          <span class="proof-type">Audit</span>
        </div>
        <h3 class="proof-title">STARK Verifier Implementation</h3>
        <p class="proof-description">Comprehensive security audit of a Circle STARK verifier with multiple findings on proof composition.</p>
        <div class="tech-tags">
          <span>STARK</span>
          <span>🦀 Rust</span>
          <span>M31</span>
        </div>
      </div>
      <div class="proof-card">
        <div class="proof-header">
          <span class="severity-tag medium">Research</span>
          <span class="proof-type">Open Source</span>
        </div>
        <h3 class="proof-title">ZP1 zkVM</h3>
        <p class="proof-description">Building a RISC-V zkVM with Circle STARKs and Mersenne-31 arithmetic. Featured on Ethproofs.</p>
        <div class="tech-tags">
          <span>RISC-V</span>
          <span>Circle STARK</span>
          <span>🦀 Rust</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Handbooks Section -->
  <section id="handbooks" class="section">
    <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
      <p class="section-label">Open Source Security Research</p>
      <h2 class="section-heading">
        <span class="gradient-text">Battle-Tested</span> Security Guides
      </h2>
      <p class="section-description" style="margin: 1rem auto 0; max-width: 700px;">
        Real vulnerabilities. Real fixes. Every pattern documented here comes from actual audit findings and production incidents. Maintained by researchers who've seen what breaks.
      </p>
    </div>

    <!-- Stats Bar -->
    <div class="stats-bar reveal">
      <div class="stat-item">
        <span class="stat-number">50+</span>
        <span class="stat-label">Documented Patterns</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">4</span>
        <span class="stat-label">Ecosystems</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">100%</span>
        <span class="stat-label">Open Source</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">Weekly</span>
        <span class="stat-label">Updates</span>
      </div>
    </div>

    <div class="handbooks-grid reveal-stagger">
      <!-- FHE Security -->
      <a href="https://github.com/ZippelLabs/FHE-Security" target="_blank" class="handbook-card">
        <div class="handbook-icon" style="--accent-color: #22d3ee;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <div class="handbook-content">
          <div class="handbook-meta">
            <span class="handbook-tag">Zama · Fhenix · TFHE</span>
          </div>
          <h3 class="handbook-title">FHE Security Handbook</h3>
          <p class="handbook-description">
            Complete guide to Fully Homomorphic Encryption vulnerabilities. Covers noise budget exhaustion, bootstrap timing attacks, ciphertext malleability, and IND-CPA/CCA security violations.
          </p>
          <ul class="handbook-highlights">
            <li>15+ documented attack vectors</li>
            <li>Zama fhEVM specific patterns</li>
            <li>Fhenix CoFHE integration risks</li>
          </ul>
          <span class="handbook-link">
            Explore Handbook
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>

      <!-- Cairo Security -->
      <a href="https://github.com/ZippelLabs/Cairo-Security" target="_blank" class="handbook-card">
        <div class="handbook-icon" style="--accent-color: #f59e0b;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 22h20L12 2z"/>
            <path d="M12 7v8M9 15h6"/>
          </svg>
        </div>
        <div class="handbook-content">
          <div class="handbook-meta">
            <span class="handbook-tag">Starknet · Cairo 1.0</span>
          </div>
          <h3 class="handbook-title">Cairo Security Handbook</h3>
          <p class="handbook-description">
            Deep dive into Cairo and Starknet vulnerabilities. Covers felt252 overflow, hint injection attacks, unsafe deserialization, and nondeterministic execution patterns.
          </p>
          <ul class="handbook-highlights">
            <li>Cairo 1.0 migration pitfalls</li>
            <li>Syscall security considerations</li>
            <li>Account abstraction edge cases</li>
          </ul>
          <span class="handbook-link">
            Explore Handbook
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>

      <!-- Noir Security -->
      <a href="https://github.com/ZippelLabs/Noir-security" target="_blank" class="handbook-card">
        <div class="handbook-icon" style="--accent-color: #a78bfa;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2l6 10-6 10-6-10 6-10z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div class="handbook-content">
          <div class="handbook-meta">
            <span class="handbook-tag">Aztec · Barretenberg</span>
          </div>
          <h3 class="handbook-title">Noir Security Handbook</h3>
          <p class="handbook-description">
            Noir circuit security patterns and anti-patterns. Covers under-constrained witnesses, missing range checks, unsafe unconstrained functions, and prover-verifier confusion.
          </p>
          <ul class="handbook-highlights">
            <li>12+ under-constraint patterns</li>
            <li>Brillig unconstrained risks</li>
            <li>ACIR optimization bugs</li>
          </ul>
          <span class="handbook-link">
            Explore Handbook
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>

      <!-- zkVM Bugs -->
      <a href="https://github.com/ZippelLabs/zkVMs-bugs" target="_blank" class="handbook-card">
        <div class="handbook-icon" style="--accent-color: #ef4444;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
        <div class="handbook-content">
          <div class="handbook-meta">
            <span class="handbook-tag" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.2); color: #ef4444;">Critical Findings</span>
          </div>
          <h3 class="handbook-title">zkVM Bug Database</h3>
          <p class="handbook-description">
            Curated database of real zkVM vulnerabilities. Includes soundness bugs from Risc0, SP1, Jolt, Powdr, and Valida. Every bug includes root cause analysis and fix.
          </p>
          <ul class="handbook-highlights">
            <li>RISC-V instruction coverage gaps</li>
            <li>Memory consistency violations</li>
            <li>Continuation soundness issues</li>
          </ul>
          <span class="handbook-link">
            Explore Database
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>
    </div>

    <!-- Contribution CTA -->
    <div class="handbook-cta reveal">
      <p class="handbook-cta-text">
        Found a vulnerability pattern we haven't documented? 
        <a href="https://github.com/ZippelLabs" target="_blank">Contribute on GitHub</a>
      </p>
    </div>
  </section>


  <!-- Founder Section -->
  <section id="about" class="section founder-section-enhanced">
    <div class="founder-card-enhanced">
      <div class="founder-header">
        <img src="https://pbs.twimg.com/profile_images/1986720992027455488/_dpMLk5R_400x400.jpg" alt="Vishal Singh" class="founder-avatar-lg">
        <div class="founder-info">
          <h3 class="founder-name">Vishal Singh</h3>
          <p class="founder-role">Security Researcher & ZK Engineer</p>
        </div>
      </div>
      <div class="founder-bio">
        <p>Former software engineer with deep expertise in cryptographic systems and zero-knowledge proofs. Specialized in zkVM security, circuit auditing, and formal verification.</p>
        <div class="founder-highlights">
          <div class="highlight-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Building ZP1 — a RISC-V zkVM on Circle STARKs</span>
          </div>
          <div class="highlight-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Partner of Formal Land for formal verification</span>
          </div>
          <div class="highlight-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Specializing in ⭕ Circom, 🦀 Halo2, and STARK circuits</span>
          </div>
        </div>
      </div>
      <div class="founder-links-row">
        <a href="https://x.com/thisvishalsingh" class="founder-social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          @thisvishalsingh
        </a>
        <a href="https://github.com/this-vishalsingh" class="founder-social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://t.me/thisvishalsingh" class="founder-social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section cta-section">
    <h2 class="section-heading">Ready to secure your project?</h2>
    <div class="hero-cta" style="margin-top: 2rem;">
      <a href="/audits.html" class="btn-primary" style="font-size: 1rem; padding: 1rem 2rem;">
        Get a Quote
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="https://t.me/thisvishalsingh" class="btn-primary" style="font-size: 1rem; padding: 1rem 2rem;">
        Start a Conversation
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="nav-logo">
            <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
            ZippelLabs
          </a>
          <p class="footer-tagline">Securing cryptographic systems.</p>
        </div>
        <div class="footer-links-group">
          <h4 class="footer-heading">Services</h4>
          <a href="/audits.html" class="footer-link">ZK Audits</a>
          <a href="https://github.com/ZippelLabs/zp1" target="_blank" class="footer-link">ZP1 zkVM</a>
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

// Initialize interactions
initNavigation()
// Note: sparkles removed for cleaner, professional look
initExpandables()
initMobileMenu()

// Wait for DOM to be ready, then init animations
requestAnimationFrame(() => {
  initScrollAnimations()
})
