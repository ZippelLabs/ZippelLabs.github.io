import './style.css'
import { TerminalHero } from './components/TerminalHero'

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
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.remove('opacity-0')
      el.classList.add('animate-fade-in-up')
    })
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      el.classList.add('visible')
    })
    return
  }

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

// Holographic Cards Mouse Tracking
function initHoloCards() {
  const cards = document.querySelectorAll('.pillar-card, .proof-card, .handbook-card, .stat-item, .holo-card');

  cards.forEach(card => {
    (card as HTMLElement).addEventListener('mousemove', (e) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  });
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

// Coverage explorer filter
function initCoverageFilter() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.filter-btn')
  const cards = document.querySelectorAll<HTMLElement>('.coverage-stack-card')

  if (!buttons.length || !cards.length) return

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all'
      buttons.forEach(btn => btn.classList.remove('active'))
      button.classList.add('active')

      cards.forEach(card => {
        const category = card.dataset.category || ''
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden')
        } else {
          card.classList.add('is-hidden')
        }
      })
    })
  })
}

// Engagement process tabs
function initProcessTabs() {
  const tabs = document.querySelectorAll<HTMLButtonElement>('.process-tab')
  const panels = document.querySelectorAll<HTMLElement>('.process-panel')

  if (!tabs.length || !panels.length) return

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.step
      tabs.forEach(btn => btn.classList.remove('active'))
      tab.classList.add('active')

      panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.step === target)
      })
    })
  })
}

// Create the app
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="scanline"></div>
  <!-- Navigation -->
  <nav class="nav-container">
    <div class="nav-inner">
      <a href="#" class="nav-logo">
        <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
        ZippelLabs
      </a>
      <div class="nav-links">
        <a href="#services" class="nav-link">Services</a>
        <a href="#coverage" class="nav-link">Coverage</a>
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
      <a href="#coverage" class="mobile-menu-link">Coverage</a>
      <a href="#about" class="mobile-menu-link">About</a>
      <a href="#handbooks" class="mobile-menu-link">Handbooks</a>
      <a href="/research.html" class="mobile-menu-link">Research</a>
      <a href="/audits.html" class="mobile-menu-link">Book an audit</a>
      <a href="https://t.me/thisvishalsingh" class="mobile-menu-link">Telegram</a>
      <a href="https://x.com/Zippel_Labs" class="mobile-menu-link">X (Twitter)</a>
      <a href="https://github.com/ZippelLabs" class="mobile-menu-link">GitHub</a>
    </div>
  </div>

  <!-- Hero Section (Terminal Style) -->
  <section class="hero-section min-h-screen flex flex-col justify-center items-center relative pt-32 pb-20 px-4">
    
    <div class="text-center mb-8 animate-fade-in relative z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] text-[#22d3ee] text-xs font-mono uppercase tracking-widest mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        World-Class ZK Security
      </div>
      
      <h1 class="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
        <span class="text-white">Real security.</span><br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]">Not rubber stamps.</span>
      </h1>
      <p class="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-xl leading-relaxed">
        Elite cryptographic security audits for ZK circuits, zkVMs, L2 rollups, and privacy protocols. We find what others miss.
      </p>
    </div>

    <!-- Terminal Container -->
    <div id="hero-terminal-container" class="w-full max-w-4xl relative z-10"></div>

    <!-- CTA Container (Reveals after terminal typing) -->
    <div id="hero-cta-container" class="mt-12 flex gap-4 opacity-0 transition-opacity duration-1000 relative z-10">
      <a href="/audits.html" class="btn-primary">
        Secure Your Protocol
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#coverage" class="btn-secondary">
        View Coverage
      </a>
      <a href="https://github.com/ZippelLabs" target="_blank" class="btn-secondary font-mono text-xs">
        view_source_code.rs
      </a>
    </div>
    
  </section>

  <!-- Stats Section -->
  <section class="stats-section">
    <div class="stats-grid">
      <div class="stat-item animate-on-scroll">
        <div class="stat-number" data-target="6" data-suffix="+">0</div>
        <div class="stat-label">Critical Findings</div>
        <div class="stat-sublabel">Stopped before production</div>
      </div>
      <div class="stat-item animate-on-scroll">
        <div class="stat-number" data-target="5" data-suffix="+">0</div>
        <div class="stat-label">Top-10 Finishes</div>
        <div class="stat-sublabel">Cantina, Sherlock, Code4rena</div>
      </div>
      <div class="stat-item animate-on-scroll">
        <div class="stat-number" data-target="20" data-suffix="+">0</div>
        <div class="stat-label">Chains Supported</div>
        <div class="stat-sublabel">L1s, L2s, ZK stacks</div>
      </div>
      <div class="stat-item animate-on-scroll">
        <div class="stat-number">&lt;6h</div>
        <div class="stat-label">Onboarding</div>
        <div class="stat-sublabel">From intro to kickoff</div>
      </div>
    </div>
  </section>

  <!-- Trusted By Section -->
  <section class="section trusted-section">
    <p class="trusted-label">Trusted by top protocols securing billions</p>
    <div class="trusted-logos">
      <div class="trusted-logo-item">Chainlink</div>
      <div class="trusted-logo-item">zkSync</div>
      <div class="trusted-logo-item">Polygon</div>
      <div class="trusted-logo-item">Starknet</div>
      <div class="trusted-logo-item">Arbitrum</div>
      <div class="trusted-logo-item">Optimism</div>
      <div class="trusted-logo-item">Base</div>
      <div class="trusted-logo-item">Scroll</div>
      <div class="trusted-logo-item">Linea</div>
      <div class="trusted-logo-item">Taiko</div>
      <div class="trusted-logo-item">Manta</div>
      <div class="trusted-logo-item">ZetaChain</div>
    </div>
  </section>

  <!-- Coverage Section -->
  <section id="coverage" class="section">
    <div class="section-header">
      <p class="section-label">Coverage</p>
      <h2 class="section-heading">Ecosystems, stacks, and cryptography we audit.</h2>
      <p class="section-description">From L1s to zk stacks and privacy layers, we secure the systems that move value and verify truth.</p>
    </div>
    <div class="coverage-grid reveal-stagger">
      <div class="coverage-card holo-card">
        <h3 class="coverage-title">Ecosystems & L2s</h3>
        <p class="coverage-subtitle">Rollups, zk stacks, and scaling ecosystems across the industry.</p>
        <div class="tag-grid">
          <span class="tag-chip">Ethereum</span>
          <span class="tag-chip">Solana</span>
          <span class="tag-chip">Bitcoin</span>
          <span class="tag-chip">OP Stack</span>
          <span class="tag-chip">Base</span>
          <span class="tag-chip">Polygon</span>
          <span class="tag-chip">Polygon zkEVM</span>
          <span class="tag-chip">Arbitrum</span>
          <span class="tag-chip">Starknet</span>
          <span class="tag-chip">zkSync</span>
          <span class="tag-chip">Scroll</span>
          <span class="tag-chip">Linea</span>
          <span class="tag-chip">Taiko</span>
          <span class="tag-chip">Celestia</span>
          <span class="tag-chip">NEAR</span>
          <span class="tag-chip">Celo</span>
          <span class="tag-chip">Mantle</span>
          <span class="tag-chip">Hedera</span>
          <span class="tag-chip">Stellar</span>
          <span class="tag-chip">Sei</span>
          <span class="tag-chip">ZetaChain</span>
          <span class="tag-chip">Algorand</span>
          <span class="tag-chip">Manta</span>
          <span class="tag-chip">Sonic</span>
          <span class="tag-chip">GOAT</span>
        </div>
        <a href="https://l2beat.com/scaling/summary" target="_blank" class="coverage-link">Explore L2Beat ecosystem →</a>
      </div>
      <div class="coverage-card holo-card">
        <h3 class="coverage-title">Languages & Frameworks</h3>
        <p class="coverage-subtitle">ZK-native tooling and production-grade engineering stacks.</p>
        <div class="tag-grid">
          <span class="tag-chip">Solidity</span>
          <span class="tag-chip">Rust</span>
          <span class="tag-chip">Cairo</span>
          <span class="tag-chip">Noir</span>
          <span class="tag-chip">Circom</span>
          <span class="tag-chip">Halo2</span>
          <span class="tag-chip">Plonky2</span>
          <span class="tag-chip">Arkworks</span>
          <span class="tag-chip">STARKs</span>
          <span class="tag-chip">SNARKs</span>
          <span class="tag-chip">zkVMs</span>
          <span class="tag-chip">Cairo 1.0</span>
          <span class="tag-chip">Noir + Barretenberg</span>
        </div>
      </div>
      <div class="coverage-card holo-card">
        <h3 class="coverage-title">Audit Surfaces</h3>
        <p class="coverage-subtitle">Full-stack security from contracts to proving systems.</p>
        <div class="tag-grid">
          <span class="tag-chip">Smart Contracts</span>
          <span class="tag-chip">ZK Circuits</span>
          <span class="tag-chip">zkVM Provers</span>
          <span class="tag-chip">Bridges</span>
          <span class="tag-chip">Sequencers</span>
          <span class="tag-chip">Cryptographic Libraries</span>
          <span class="tag-chip">Wallets & Clients</span>
          <span class="tag-chip">MPC</span>
          <span class="tag-chip">FHE</span>
          <span class="tag-chip">Privacy Protocols</span>
        </div>
      </div>
    </div>

    <div class="coverage-explorer reveal">
      <div class="coverage-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="ecosystems">Ecosystems</button>
        <button class="filter-btn" data-filter="languages">Languages</button>
        <button class="filter-btn" data-filter="surfaces">Audit Surfaces</button>
      </div>
      <div class="coverage-stack-grid">
        <div class="coverage-stack-card holo-card" data-category="ecosystems">
          <p class="stack-label">Ecosystem</p>
          <h4 class="stack-title">OP Stack + Base</h4>
          <p class="stack-description">Sequencer safety, bridge integrity, and L2 withdrawal paths.</p>
        </div>
        <div class="coverage-stack-card holo-card" data-category="ecosystems">
          <p class="stack-label">Ecosystem</p>
          <h4 class="stack-title">Starknet</h4>
          <p class="stack-description">Cairo execution, hint safety, and proof system boundaries.</p>
        </div>
        <div class="coverage-stack-card holo-card" data-category="languages">
          <p class="stack-label">Language</p>
          <h4 class="stack-title">Noir + Barretenberg</h4>
          <p class="stack-description">Circuit soundness, constraint coverage, and proving economics.</p>
        </div>
        <div class="coverage-stack-card holo-card" data-category="languages">
          <p class="stack-label">Language</p>
          <h4 class="stack-title">Rust zkVMs</h4>
          <p class="stack-description">AIR constraints, memory model safety, and RISC-V correctness.</p>
        </div>
        <div class="coverage-stack-card holo-card" data-category="surfaces">
          <p class="stack-label">Audit Surface</p>
          <h4 class="stack-title">Bridges & Provers</h4>
          <p class="stack-description">Proof verification, fraud paths, and relay assumptions.</p>
        </div>
        <div class="coverage-stack-card holo-card" data-category="surfaces">
          <p class="stack-label">Audit Surface</p>
          <h4 class="stack-title">Privacy Protocols</h4>
          <p class="stack-description">Key management, witness privacy, and MPC coordination risks.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="section-light">
    <div class="section-inner">
    <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
      <p class="section-label">Our Expertise</p>
      <h2 class="section-heading" style="margin: 0 auto;">We don't just audit code.<br/>We prove it's secure.</h2>
      <p class="section-description" style="margin: 1rem auto 0; max-width: 700px;">
        From constraint systems to proving infrastructure, we audit the full stack.
      </p>
    </div>
    
    <!-- Service Tags -->
    <div class="service-tags">
      <span class="service-tag">ZK Circuits</span>
      <span class="service-tag">zkVMs</span>
      <span class="service-tag">Rollups</span>
      <span class="service-tag">Privacy Protocols</span>
      <span class="service-tag">FHE</span>
      <span class="service-tag">MPC</span>
      <span class="service-tag">Solidity</span>
      <span class="service-tag">Rust</span>
      <span class="service-tag">🔺 Cairo</span>
      <span class="service-tag">⭕ Circom</span>
      <span class="service-tag">◆ Noir</span>
      <span class="service-tag">🦀 Halo2</span>
      <span class="service-tag">Plonky2</span>
      <span class="service-tag">Bridges</span>
      <span class="service-tag">Sequencers</span>
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
        <a href="/research.html" class="pillar-link">View Research →</a>
      </div>

    </div>
    </div>
  </section>

  <!-- Engagement Process -->
  <section class="section process-section">
    <div class="section-header">
      <p class="section-label">Engagement</p>
      <h2 class="section-heading">A focused, interactive audit workflow.</h2>
      <p class="section-description">Transparent checkpoints, rapid feedback loops, and clean handoff artifacts.</p>
    </div>
    <div class="process-tabs">
      <button class="process-tab active" data-step="discover">01 · Discovery</button>
      <button class="process-tab" data-step="audit">02 · Audit</button>
      <button class="process-tab" data-step="remediate">03 · Remediation</button>
      <button class="process-tab" data-step="monitor">04 · Monitoring</button>
    </div>
    <div class="process-panels">
      <div class="process-panel active" data-step="discover">
        <h3>Threat modeling + scope alignment</h3>
        <p>We map assets, economic assumptions, and protocol boundaries to define the exact audit surface.</p>
        <div class="process-metrics">
          <span>✦ Threat model delivered</span>
          <span>✦ Timeline in 24h</span>
          <span>✦ Dedicated comms channel</span>
        </div>
      </div>
      <div class="process-panel" data-step="audit">
        <h3>Deep review across code + circuits</h3>
        <p>Manual review, proof system analysis, and adversarial testing across contracts, circuits, and off-chain systems.</p>
        <div class="process-metrics">
          <span>✦ Weekly findings syncs</span>
          <span>✦ Reproducible PoCs</span>
          <span>✦ Actionable fix guidance</span>
        </div>
      </div>
      <div class="process-panel" data-step="remediate">
        <h3>Fix support + verification</h3>
        <p>We validate remediations, re-run critical paths, and ensure fixes fully close exploit vectors.</p>
        <div class="process-metrics">
          <span>✦ Patch verification</span>
          <span>✦ Regression checks</span>
          <span>✦ Final report delivery</span>
        </div>
      </div>
      <div class="process-panel" data-step="monitor">
        <h3>Post-audit security partnership</h3>
        <p>Continuous advisory, upgrade reviews, and rapid-response coverage as your protocol evolves.</p>
        <div class="process-metrics">
          <span>✦ Upgrade reviews</span>
          <span>✦ Incident response</span>
          <span>✦ Ongoing research syncs</span>
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
      <p class="section-description">Real vulnerabilities discovered through security research and competitive audits.</p>
    </div>
    <div class="proof-grid reveal-stagger">
      <div class="proof-card">
        <a href="https://x.com/thisvishalsingh/status/2013338370961768821" target="_blank" style="text-decoration: none; color: inherit;">
          <div class="proof-header">
            <span class="severity-tag high">High</span>
            <span class="proof-type">Bug Bounty</span>
          </div>
          <h3 class="proof-title">Goat Rollup</h3>
          <p class="proof-description">High severity vulnerability discovered and responsibly disclosed to the Goat Rollup team.</p>
          <div class="tech-tags">
            <span>L2 Rollup</span>
            <span>🦀 Rust</span>
          </div>
        </a>
      </div>
      <div class="proof-card">
        <a href="https://x.com/thisvishalsingh/status/2014389859604168939" target="_blank" style="text-decoration: none; color: inherit;">
          <div class="proof-header">
            <span class="severity-tag medium">Medium</span>
            <span class="proof-type">Bug Bounty</span>
          </div>
          <h3 class="proof-title">leanEthereum</h3>
          <p class="proof-description">Medium severity finding in Ethereum infrastructure, responsibly disclosed.</p>
          <div class="tech-tags">
            <span>Ethereum</span>
            <span>Infrastructure</span>
          </div>
        </a>
      </div>
      <div class="proof-card">
        <div class="proof-header">
          <span class="severity-tag critical">Critical</span>
          <span class="proof-type">Confidential</span>
        </div>
        <h3 class="proof-title">zkVM Implementation</h3>
        <p class="proof-description">Critical constraint missing in ALU lookups. Allowed arbitrary inputs to pass verification.</p>
        
        <!-- Code Diff Example -->
        <div class="diff-window">
            <div class="diff-header">
                <span>src/chips/alu.rs</span>
                <span>Diff</span>
            </div>
            <div class="diff-content">
                <div class="diff-line del">
                    <span class="diff-line-num">42</span>
                    <span class="diff-line-code">- let val = builder.query(cols.val);</span>
                </div>
                <div class="diff-line del">
                    <span class="diff-line-num">43</span>
                    <span class="diff-line-code">- builder.assert_eq(val, input);</span>
                </div>
                <div class="diff-line add">
                    <span class="diff-line-num">42</span>
                    <span class="diff-line-code">+ let val = builder.query(cols.val);</span>
                </div>
                <div class="diff-line add">
                    <span class="diff-line-num">43</span>
                    <span class="diff-line-code">+ builder.range_check(val, 32); </span>
                </div>
                <div class="diff-line add">
                    <span class="diff-line-num">44</span>
                    <span class="diff-line-code">+ builder.assert_eq(val, input);</span>
                </div>
            </div>
        </div>
        
        <div class="tech-tags mt-3">
          <span>zkVM</span>
          <span>Under-constrained</span>
        </div>
      </div>
      <div class="proof-card">
        <div class="proof-header">
          <span class="severity-tag" style="background: rgba(34, 211, 238, 0.1); border-color: rgba(34, 211, 238, 0.3); color: #22d3ee;">Research</span>
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
    
    <!-- Contest Results -->
    <div class="proof-contests reveal" style="margin-top: 2rem; text-align: center;">
      <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Competitive Audit Rankings</p>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
        <a href="https://github.com/sherlock-audit/2024-02-radicalxchange-judging/issues/93" target="_blank" class="contest-badge">🏆 RadicalxChange — 3rd</a>
        <a href="https://cantina.xyz/code/84df57a3-0526-49b8-a7c5-334888f43940/overview/leaderboard" target="_blank" class="contest-badge">Sorella Angstrom — 4th</a>
        <a href="https://cantina.xyz/code/12acc80c-4e4c-4081-a0a3-faa92150651a/overview/leaderboard" target="_blank" class="contest-badge">Geneius — 6th</a>
        <a href="https://cantina.xyz/code/50d38b86-80a0-49af-9df8-70d7d601b7d7/overview/leaderboard" target="_blank" class="contest-badge">Nitro-Labs — 8th</a>
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
      <div class="cta-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      </div>
      <p class="handbook-cta-text">
        Found a vulnerability pattern we haven't documented?
      </p>
      <a href="https://github.com/ZippelLabs" target="_blank" class="handbook-cta-link">
        Contribute on GitHub
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
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

  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <div class="testimonials-header">
      <p class="section-label">What Teams Say</p>
      <h2 class="section-heading" style="margin: 0 auto;">Developers and founders rave about ZippelLabs</h2>
      <p class="section-description" style="margin: 1rem auto 0; max-width: 700px;">
        We don't just run automated scanners. We dive deep to find the unexpected ways things can break.
      </p>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card animate-on-scroll">
        <p class="testimonial-quote">
          "Deep understanding of ZK internals. They found constraint issues our internal team missed. The detailed report helped us ship with confidence."
        </p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">M</div>
          <div class="testimonial-info">
            <span class="testimonial-name">zkVM Lead</span>
            <span class="testimonial-role">DeFi Protocol</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card animate-on-scroll">
        <p class="testimonial-quote">
          "Finally, auditors who actually understand Circle STARKs and FRI. Their cryptographic expertise is exactly what the ZK space needs."
        </p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">S</div>
          <div class="testimonial-info">
            <span class="testimonial-name">Security Engineer</span>
            <span class="testimonial-role">L2 Rollup</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card animate-on-scroll">
        <p class="testimonial-quote">
          "Responsive, thorough, and they don't just find bugs — they explain the underlying math. That's rare in this industry."
        </p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">A</div>
          <div class="testimonial-info">
            <span class="testimonial-name">CTO</span>
            <span class="testimonial-role">ZK Infrastructure</span>
          </div>
        </div>
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
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
initCoverageFilter()
initProcessTabs()

// Init Terminal Hero
new TerminalHero('hero-terminal-container');
initHoloCards();

// Wait for DOM to be ready, then init animations
requestAnimationFrame(() => {
  initScrollAnimations()

  // Stats Counter Animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll('.stat-number');
        stats.forEach(stat => {
          const originalText = stat.textContent || '';
          const targetAttr = (stat as HTMLElement).dataset.target;
          const suffix = (stat as HTMLElement).dataset.suffix || '';
          const targetValue = targetAttr ? Number(targetAttr) : parseInt(originalText.replace(/[^0-9]/g, ''));

          if (!Number.isNaN(targetValue)) {
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              const ease = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(targetValue * ease);

              if (targetAttr) {
                stat.textContent = `${current}${suffix}`;
              } else if (originalText.includes('+')) {
                stat.textContent = `${current}+`;
              } else if (originalText.includes('%')) {
                stat.textContent = `${current}%`;
              } else {
                stat.textContent = `${current}`;
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                stat.textContent = targetAttr ? `${targetValue}${suffix}` : originalText;
              }
            };

            requestAnimationFrame(animate);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.hero-stats, .stats-bar, .stats-section').forEach(el => {
    statsObserver.observe(el);
  });
})
