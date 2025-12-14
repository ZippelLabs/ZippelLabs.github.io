import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="audit-nav">
    <div class="audit-nav-inner">
      <a href="/" class="nav-logo">
        <img src="/logo.jpg" alt="ZippelLabs" class="nav-logo-img" />
        ZippelLabs
      </a>
      <div class="nav-links">
        <a href="/" class="audit-nav-link">← Back to Home</a>
      </div>
    </div>
  </nav>

  <!-- Audit Portal Hero -->
  <section class="audit-hero">
    <div class="audit-hero-content">
      <div class="audit-badge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        Security Research
      </div>
      <h1 class="audit-title">Audit Portal</h1>
      <p class="audit-subtitle">// get started</p>
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
      
      <!-- Form Title -->
      <h3 class="form-title">Request an Audit</h3>
      <p class="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>

      <!-- Form -->
      <form class="audit-form" action="https://formsubmit.co/zippellabs@gmail.com" method="POST">
        
        <!-- FormSubmit Configuration -->
        <input type="hidden" name="_subject" value="New Audit Request - ZippelLabs">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_next" value="https://zippellabs.github.io/?submitted=true">
        <input type="text" name="_honey" style="display:none">
        
        <!-- Project Type -->
        <div class="form-group">
          <label class="form-label">Project Type</label>
          <div class="form-chips">
            <label class="form-chip">
              <input type="checkbox" name="type" value="zkp" />
              <span>Zero-Knowledge Proofs</span>
            </label>
            <label class="form-chip">
              <input type="checkbox" name="type" value="mpc" />
              <span>Multi-Party Computation</span>
            </label>
            <label class="form-chip">
              <input type="checkbox" name="type" value="fhe" />
              <span>Fully Homomorphic Encryption</span>
            </label>
            <label class="form-chip">
              <input type="checkbox" name="type" value="smart-contract" />
              <span>Smart Contracts</span>
            </label>
            <label class="form-chip">
              <input type="checkbox" name="type" value="other" />
              <span>Other Cryptography</span>
            </label>
          </div>
        </div>

        <!-- Project Name -->
        <div class="form-group">
          <label class="form-label" for="project-name">Project Name</label>
          <input type="text" id="project-name" name="project_name" class="form-input" placeholder="Your project name" required />
        </div>

        <!-- Description -->
        <div class="form-group">
          <label class="form-label" for="description">Project Description</label>
          <textarea id="description" name="description" class="form-textarea" rows="4" placeholder="Describe your project, its purpose, and what you'd like us to audit..." required></textarea>
        </div>

        <!-- Repository URL -->
        <div class="form-group">
          <label class="form-label" for="repo">Repository URL</label>
          <input type="url" id="repo" name="repository" class="form-input" placeholder="https://github.com/..." />
          <span class="form-hint">Private repositories can be shared after initial contact</span>
        </div>

        <!-- Codebase Size -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="loc">Estimated Lines of Code</label>
            <select id="loc" name="lines_of_code" class="form-select">
              <option value="">Select range</option>
              <option value="<1k">&lt; 1,000</option>
              <option value="1k-5k">1,000 - 5,000</option>
              <option value="5k-10k">5,000 - 10,000</option>
              <option value="10k-25k">10,000 - 25,000</option>
              <option value=">25k">&gt; 25,000</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="language">Primary Language</label>
            <select id="language" name="language" class="form-select">
              <option value="">Select language</option>
              <option value="rust">Rust</option>
              <option value="solidity">Solidity</option>
              <option value="cairo">Cairo</option>
              <option value="circom">Circom</option>
              <option value="go">Go</option>
              <option value="c++">C++</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <!-- Timeline -->
        <div class="form-group">
          <label class="form-label" for="timeline">Desired Timeline</label>
          <select id="timeline" name="timeline" class="form-select">
            <option value="">Select timeline</option>
            <option value="urgent">Urgent (1-2 weeks)</option>
            <option value="standard">Standard (2-4 weeks)</option>
            <option value="extended">Extended (4-8 weeks)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <!-- Contact -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="you@company.com" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="telegram">Telegram (optional)</label>
            <input type="text" id="telegram" name="telegram" class="form-input" placeholder="@username" />
          </div>
        </div>

        <!-- Submit -->
        <button type="submit" class="form-submit">
          Submit Request
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
      <span class="footer-copyright">© 2025 ZippelLabs</span>
      <span class="footer-license">MIT / Apache 2.0</span>
    </div>
  </footer>
`
