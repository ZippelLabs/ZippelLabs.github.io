import"./style-BXCGD-P1.js";const o=document.querySelector("#app");o.innerHTML=`
  <!-- Navigation -->
  <nav class="audit-nav">
    <div class="audit-nav-inner">
      <a href="/" class="nav-logo">
        <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
        ZippelLabs
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
        Audit Request
      </div>
      <h1 class="audit-title">Secure your protocol.</h1>
      <p class="audit-subtitle">
        <span style="color: var(--color-primary-400); font-weight: 600;">⚡ Onboarding in < 6 hours.</span>
        <span style="margin: 0 0.5rem; opacity: 0.3;">|</span>
        Subsidized for zkVMs.
      </p>
      <h2 class="audit-heading">Audits by cryptography experts.</h2>
      <p class="audit-description">
        Tell us about your project so we can scope your audit and provide a tailored quote. 
        We specialize in <strong>ZKPs</strong>, <strong>MPC</strong>, and <strong>FHE</strong> systems.
      </p>
    </div>
  </section>

  <!-- Audit Form Section -->
  <section class="audit-form-section">
    <div class="audit-form-container">
      
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
            <label class="form-label" for="project-name">Project Name</label>
            <input type="text" id="project-name" name="project_name" class="form-input" placeholder="e.g. ZkDex" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="stage">Project Stage</label>
            <select id="stage" name="stage" class="form-select">
              <option value="">Select stage</option>
              <option value="development">In Development</option>
              <option value="testnet">Testnet Live</option>
              <option value="mainnet">Mainnet Live</option>
              <option value="idea">Idea / Research</option>
            </select>
          </div>
        </div>

        <!-- Technical Details -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="tech">Primary Technology</label>
            <select id="tech" name="technology" class="form-select">
              <option value="">Select technology</option>
              <option value="zkp">Zero-Knowledge Proofs</option>
              <option value="zkvm">zkVM Application</option>
              <option value="mpc">MPC System</option>
              <option value="contracts">Smart Contracts</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="start_date">Ideal Start Date</label>
            <input type="text" id="start_date" name="start_date" class="form-input" placeholder="ASAP or YYYY-MM-DD" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="repo">Repository URL</label>
          <input type="url" id="repo" name="repository" class="form-input" placeholder="https://github.com/..." />
        </div>

        <!-- Referral (Quick Check) -->
        <div class="form-group">
          <label class="form-label" for="referral">How did you hear about us?</label>
          <input type="text" id="referral" name="referral" class="form-input" placeholder="e.g. Twitter..." />
        </div>

        <!-- Contact (Social First) -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="telegram">Telegram (Required)</label>
            <input type="text" id="telegram" name="telegram" class="form-input" placeholder="@handle" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="twitter">Twitter / X (Required)</label>
            <input type="text" id="twitter" name="twitter" class="form-input" placeholder="@handle" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="email">Email (Required)</label>
          <input type="email" id="email" name="email" class="form-input" placeholder="you@company.com" required />
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
  </section>

  <!-- Info Cards -->
  <section class="audit-info-section">
    <div class="audit-info-grid">
      
      <div class="audit-info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <h3>Expert Review</h3>
        <p>Our team specializes in advanced cryptography including ZK circuits, MPC protocols, and FHE schemes.</p>
      </div>

      <div class="audit-info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <h3>Detailed Reports</h3>
        <p>Comprehensive findings with severity ratings, exploit scenarios, and actionable remediation steps.</p>
      </div>

      <div class="audit-info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3>Fast Turnaround</h3>
        <p>Flexible timelines to match your needs, from urgent reviews to comprehensive deep-dives.</p>
      </div>

    </div>
  </section>

  <!-- Footer -->
  <footer class="footer minimal">
    <div class="footer-inner">
      <span class="footer-copyright">© <a href="https://x.com/Zippel_Labs" style="color: inherit; text-decoration: none;">ZippelLabs</a> • by <a href="https://x.com/thisvishalsingh" style="color: inherit; text-decoration: none;">thisvishalsingh</a></span>
    </div>
  </footer>
`;const i=document.getElementById("mobile-menu-toggle"),e=document.getElementById("mobile-menu");i&&e&&(i.addEventListener("click",()=>{e.classList.toggle("open")}),e.querySelectorAll(".mobile-menu-link").forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("open")})}),document.addEventListener("click",t=>{!e.contains(t.target)&&!i.contains(t.target)&&e.classList.remove("open")}));
