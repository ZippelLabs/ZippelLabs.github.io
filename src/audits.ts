import './style.css'

const initTheme = () => {
  document.documentElement.setAttribute('data-theme', 'light')
}

const app = document.querySelector<HTMLDivElement>('#app')!

initTheme()

app.innerHTML = `
  <!-- Navigation -->
  <nav class="audit-nav">
    <div class="audit-nav-inner">
      <a href="/" class="nav-logo">
        <img src="/logo-ZP.png" alt="ZippelLabs logo" class="nav-logo-img" />
      </a>
      <div class="nav-links">
        <a href="/" class="audit-nav-link">← Back to Home</a>
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
      <a href="/" class="mobile-menu-link">← Back to Home</a>
      <a href="https://t.me/thisvishalsingh" class="mobile-menu-link">Telegram</a>
      <a href="https://x.com/Zippel_Labs" class="mobile-menu-link">X (Twitter)</a>
      <a href="https://github.com/ZippelLabs/zp1" class="mobile-menu-link">GitHub</a>
    </div>
  </div>

  <!-- Audit Portal Hero -->
  <section class="audit-hero">
    <div class="audit-hero-content">
      <div class="audit-badge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        Request a Quote
      </div>
      <h1 class="audit-title">Secure your protocol.</h1>
      <p class="audit-subtitle">
        <span style="color: var(--color-primary-400); font-weight: 600;">⚡ Onboarding in < 6 hours</span>
        <span style="margin: 0 0.5rem; opacity: 0.3;">|</span>
        Subsidized rates for ecosystem projects
      </p>
    </div>
  </section>

  <!-- Value Proposition Banner -->
  <section class="quote-value-banner">
    <div class="quote-value-inner">
      <div class="quote-value-item">
        <span class="quote-value-number">Free</span>
        <span class="quote-value-label">Up to 1k LOC</span>
      </div>
      <div class="quote-value-divider"></div>
      <div class="quote-value-item">
        <span class="quote-value-number">6+</span>
        <span class="quote-value-label">Critical/High Findings</span>
      </div>
      <div class="quote-value-divider"></div>
      <div class="quote-value-item">
        <span class="quote-value-number">Flexible</span>
        <span class="quote-value-label">Team Scales with Scope</span>
      </div>
    </div>
  </section>

  <!-- Main Content Grid -->
  <section class="quote-main-section">
    <div class="quote-main-grid">
      
      <!-- Left Column: Form -->
      <div class="quote-form-column">
        <h2 class="quote-form-title">Tell us about your project</h2>
        <p class="quote-form-subtitle">We'll scope your audit and provide a tailored quote within 24 hours.</p>
        
        <!-- Form -->
        <form class="audit-form" action="https://formsubmit.co/zippellabs@gmail.com" method="POST">
          
          <!-- FormSubmit Configuration -->
          <input type="hidden" name="_subject" value="New Audit Request - ZippelLabs">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="https://zippellabs.github.io/?submitted=true">
          <input type="text" name="_honey" style="display:none">
          
          <!-- Project Info -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="project-name">Project Name *</label>
              <input type="text" id="project-name" name="project_name" class="form-input" placeholder="e.g. Sonobe" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="project-type">Project Type *</label>
              <select id="project-type" name="project_type" class="form-select" required>
                <option value="">Select type</option>
                <option value="ecosystem">🌱 Ecosystem / Public Good</option>
                <option value="commercial">🏢 Commercial / VC-backed</option>
              </select>
            </div>
          </div>

          <!-- Technical Details -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="tech">Primary Technology *</label>
              <select id="tech" name="technology" class="form-select" required>
                <option value="">Select technology</option>
                <option value="zkvm">zkVM Application</option>
                <option value="zkp">⭕ ZK Circuits (Circom/🦀 Halo2/◆ Noir)</option>
                <option value="stark">STARK Prover/Verifier</option>
                <option value="mpc">MPC System</option>
                <option value="fhe">FHE Implementation</option>
                <option value="contracts">Smart Contracts</option>
                <option value="other">Other Cryptographic System</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="stage">Project Stage</label>
              <select id="stage" name="stage" class="form-select">
                <option value="">Select stage</option>
                <option value="development">In Development</option>
                <option value="testnet">Testnet Live</option>
                <option value="mainnet">Mainnet Live</option>
                <option value="research">Research / Prototype</option>
              </select>
            </div>
          </div>

          <!-- Scope Details -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="loc">Estimated Lines of Code</label>
              <input type="text" id="loc" name="estimated_loc" class="form-input" placeholder="e.g. ~5,000 LOC" />
            </div>
            <div class="form-group">
              <label class="form-label" for="start_date">Ideal Start Date</label>
              <input type="text" id="start_date" name="start_date" class="form-input" placeholder="e.g. Early February 2026" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="repo">Repository URL</label>
            <input type="url" id="repo" name="repository" class="form-input" placeholder="https://github.com/..." />
            <span class="form-hint">Private repos can be shared after initial contact</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="scope">Scope Description</label>
            <textarea id="scope" name="scope_description" class="form-textarea" rows="3" placeholder="Brief description of what you'd like audited (components, specific concerns, etc.)"></textarea>
          </div>

          <!-- Contact -->
          <div class="form-section-label">Contact Information</div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="telegram">Telegram *</label>
              <input type="text" id="telegram" name="telegram" class="form-input" placeholder="@handle" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="twitter">Twitter / X *</label>
              <input type="text" id="twitter" name="twitter" class="form-input" placeholder="@handle" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email *</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="you@project.xyz" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="referral">How did you hear about us?</label>
            <input type="text" id="referral" name="referral" class="form-input" placeholder="Twitter, referral, etc." />
          </div>

          <!-- Submit -->
          <button type="submit" class="form-submit">
            Request Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

        </form>
      </div>

      <!-- Right Column: Info -->
      <div class="quote-info-column">
        
        <!-- Pricing Transparency -->
        <div class="quote-info-card">
          <h3 class="quote-info-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Startup-Friendly Pricing
          </h3>
          <div class="pricing-comparison">
            <div class="pricing-row pricing-ours" style="background: rgba(34, 211, 238, 0.1); border-color: rgba(34, 211, 238, 0.3);">
              <span class="pricing-label">Small Projects (&lt;1k LOC)</span>
              <span class="pricing-value" style="color: #22d3ee;">Free</span>
            </div>
            <div class="pricing-row pricing-ours">
              <span class="pricing-label">Standard Engagement</span>
              <span class="pricing-value">Competitive<span class="pricing-unit"> rates</span></span>
            </div>
          </div>
          <p class="pricing-note">
            Team scales based on scope. We bring in top independent security researchers as needed.
          </p>
        </div>

        <!-- What You'll Receive -->
        <div class="quote-info-card">
          <h3 class="quote-info-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            What You'll Receive
          </h3>
          <ul class="deliverables-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Real-time vulnerability access
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Comprehensive PDF audit report
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              PoC exploits for findings
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Severity breakdown & recommendations
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <strong>Fix review included</strong>
            </li>
          </ul>
        </div>

        <!-- Why ZippelLabs -->
        <div class="quote-info-card">
          <h3 class="quote-info-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Why ZippelLabs
          </h3>
          <ul class="why-list">
            <li>Building <strong>ZP1 zkVM</strong> (Circle STARKs)</li>
            <li>Active researchers in zkVM, MPC, FHE security</li>
            <li>Partner with <strong>Formal Land</strong> for formal verification</li>
            <li>Network of top independent auditors</li>
          </ul>
          <div class="track-record">
            <span class="track-record-label">Verified Findings</span>
            <div class="track-record-items">
              <a href="https://x.com/thisvishalsingh/status/2013338370961768821" target="_blank" class="track-item high">High in Goat Rollup</a>
              <a href="https://x.com/thisvishalsingh/status/2014389859604168939" target="_blank" class="track-item">Medium in leanEthereum</a>
              <span class="track-item">5+ top-10 contest finishes</span>
            </div>
          </div>
        </div>

        <!-- Workflow -->
        <div class="quote-info-card quote-workflow">
          <h3 class="quote-info-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            How We Work
          </h3>
          <p class="workflow-text">
            <strong>Async-first execution.</strong> We stay in deep work mode, communicating via Telegram for maximum efficiency. No daily sync meetings.
          </p>
          <div class="workflow-speed">
            <span class="speed-label">Our Speed</span>
            <span class="speed-value">~1 week per 1,000 LOC</span>
            <span class="speed-compare">vs. industry ~3 weeks</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer minimal">
    <div class="footer-inner">
      <span class="footer-copyright">© <a href="https://x.com/Zippel_Labs" style="color: inherit; text-decoration: none;">ZippelLabs</a> • by <a href="https://x.com/thisvishalsingh" style="color: inherit; text-decoration: none;">thisvishalsingh</a></span>
    </div>
  </footer>
`

// Mobile menu toggle
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
