import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div class="container-max h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2 text-xl font-bold tracking-tight z-50 relative">
        <img src="/logo-ZP.png" alt="ZippelLabs Logo" class="w-10 h-10 object-contain" />
        ZippelLabs
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#challenges" class="nav-link text-sm font-medium text-gray-600 hover:text-black transition-colors">Challenges</a>
        <a href="#services" class="nav-link text-sm font-medium text-gray-600 hover:text-black transition-colors">Services</a>
        <a href="#expertise" class="nav-link text-sm font-medium text-gray-600 hover:text-black transition-colors">Expertise</a>
        <a href="#resources" class="nav-link text-sm font-medium text-gray-600 hover:text-black transition-colors">Resources</a>
      </div>

      <div class="hidden md:flex items-center gap-4">
        <a href="/audits.html" class="btn btn-primary text-sm px-5 py-2.5">
          Request Audit
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button id="mobile-toggle" class="md:hidden z-50 p-2 text-gray-600 hover:text-brand-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path class="menu-open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path class="menu-close hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu" class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300">
        <a href="#challenges" class="mobile-link text-2xl font-bold text-gray-800">Challenges</a>
        <a href="#services" class="mobile-link text-2xl font-bold text-gray-800">Services</a>
        <a href="#expertise" class="mobile-link text-2xl font-bold text-gray-800">Expertise</a>
        <a href="#resources" class="mobile-link text-2xl font-bold text-gray-800">Resources</a>
        <a href="/audits.html" class="btn btn-primary text-lg px-8 py-3 mt-4">Request Audit</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="pt-40 pb-20 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl -z-10 opacity-60"></div>
    
    <div class="container-max text-center max-w-4xl section-reveal">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest mb-8 border border-brand-100">
        World-Class Cryptographic Security
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-gray-900">
        Scalability, Privacy,<br>and <span class="text-brand-600">Provable Security.</span>
      </h1>
      
      <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        We secure the ZK circuits, zkVMs, and cryptographic protocols that power the next generation of decentralized infrastructure.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/audits.html" class="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform">
          Talk to an Expert
        </a>
        <a href="#resources" class="btn btn-outline text-lg px-8 py-4 w-full sm:w-auto">
          View Research
        </a>
      </div>
    </div>

    <!-- Social Proof -->
    <div class="container-max mt-24 section-reveal delay-200">
      <p class="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
      <div class="flex flex-wrap justify-center gap-8 items-center">
        <a href="https://chain.link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img src="https://cryptologos.cc/logos/chainlink-link-logo.svg" alt="Chainlink" class="w-6 h-6 object-contain" />
          <span class="text-sm font-bold text-gray-700">Chainlink</span>
        </a>
        <a href="https://starknet.io" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img src="https://cryptologos.cc/logos/starknet-token-strk-logo.svg" alt="Starknet" class="w-6 h-6 object-contain" />
          <span class="text-sm font-bold text-gray-700">Starknet</span>
        </a>
        <a href="https://polygon.technology" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="Polygon" class="w-6 h-6 object-contain" />
          <span class="text-sm font-bold text-gray-700">Polygon</span>
        </a>
        <a href="https://zksync.io" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img src="https://avatars.githubusercontent.com/u/77478564?s=200&v=4" alt="zkSync" class="w-6 h-6 object-contain" />
          <span class="text-sm font-bold text-gray-700">zkSync</span>
        </a>
        <a href="https://scroll.io" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img src="https://avatars.githubusercontent.com/u/87750292?s=200&v=4" alt="Scroll" class="w-6 h-6 object-contain" />
          <span class="text-sm font-bold text-gray-700">Scroll</span>
        </a>
        <a href="https://linea.build" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <img src="https://cdn.brandfetch.io/idDdvk1p2Z/theme/dark/symbol.svg?k=id64Mup7ac" alt="Linea" class="w-6 h-6 object-contain" />
          <span class="text-sm font-bold text-gray-700">Linea</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Challenges Section -->
  <section id="challenges" class="section-py bg-white">
    <div class="container-max">
      <div class="grid md:grid-cols-2 gap-16 items-start">
        <div class="section-reveal">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Secure Circuit Design</h2>
          <p class="text-lg text-gray-600 mb-8">
            Zero-knowledge circuits act as the foundation of validity. A single constraint bug can compromise the entire chain's integrity.
          </p>
          <ul class="check-list space-y-4">
            <li>
              <svg class="check-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Under-constrained circuit analysis</span>
            </li>
            <li>
              <svg class="check-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Witness uniqueness verification</span>
            </li>
            <li>
              <svg class="check-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Arithmetic overflow checks</span>
            </li>
          </ul>
        </div>
        
        <div class="section-reveal delay-200">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Prover & Verifier Security</h2>
          <p class="text-lg text-gray-600 mb-8">
            Beyond the circuit, the implementation of the proving system and verification logic must be mathematically sound and code-secure.
          </p>
          <ul class="check-list space-y-4">
            <li>
              <svg class="check-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Fiat-Shamir transformation correctness</span>
            </li>
            <li>
              <svg class="check-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Trusted setup ceremony validation</span>
            </li>
            <li>
              <svg class="check-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Side-channel attack mitigation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Approach / Services Section -->
  <section id="services" class="section-py bg-gray-50 border-y border-gray-200">
    <div class="container-max">
      <div class="text-center max-w-3xl mx-auto mb-16 section-reveal">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Lifecycle</h2>
        <p class="text-gray-600 text-lg">We don't just find bugs. We ensure your cryptographic infrastructure is theoretically sound and implementation-accurate.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="section-reveal bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-blue-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Audit</h3>
          <p class="text-gray-600 leading-relaxed">
            In-depth manual review combined with custom static analysis tools. We check every line of constraint logic and smart contract code.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="section-reveal delay-100 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-blue-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Advise</h3>
          <p class="text-gray-600 leading-relaxed">
            Architectural guidance before line of code is written. We help design secure protocols and choose the right proving stack.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="section-reveal delay-200 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-blue-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Assess</h3>
          <p class="text-gray-600 leading-relaxed">
            Continuous monitoring and verification. We assess upgrades and changes to ensure security properties hold over time.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Languages We Audit Section -->
  <section class="section-py bg-white">
    <div class="container-max">
      <div class="text-center max-w-3xl mx-auto mb-12 section-reveal">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Languages We Audit</h2>
        <p class="text-gray-600 text-lg">Deep expertise across the entire spectrum of smart contract and ZK-circuit languages.</p>
      </div>

      <div class="lang-icon-grid max-w-4xl mx-auto section-reveal delay-100">
        <!-- Solidity -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" alt="Solidity" class="w-10 h-10" />
          </div>
          <span class="lang-name">Solidity</span>
        </div>

        <!-- Rust -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://rustacean.net/assets/cuddlyferris.svg" alt="Rust" class="w-10 h-10" />
          </div>
          <span class="lang-name">Rust</span>
        </div>

        <!-- Go -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" class="w-10 h-10" />
          </div>
          <span class="lang-name">Go</span>
        </div>

        <!-- Cairo -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://cryptologos.cc/logos/starknet-token-strk-logo.svg" alt="Cairo" class="w-10 h-10" />
          </div>
          <span class="lang-name">Cairo</span>
        </div>

        <!-- Circom -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://avatars.githubusercontent.com/u/32504687?s=200&v=4" alt="Circom" class="w-10 h-10 rounded" />
          </div>
          <span class="lang-name">Circom</span>
        </div>

        <!-- Noir -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://avatars.githubusercontent.com/u/43825622?s=200&v=4" alt="Noir" class="w-10 h-10 rounded" />
          </div>
          <span class="lang-name">Noir</span>
        </div>

        <!-- Halo2 -->
        <div class="lang-card">
          <div class="lang-icon">
            <img src="https://cryptologos.cc/logos/zcash-zec-logo.svg" alt="Halo2" class="w-10 h-10" />
          </div>
          <span class="lang-name">Halo2</span>
        </div>

        <!-- zk-DSLs -->
        <div class="lang-card">
          <div class="lang-icon">
            <svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="#6366F1" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
              <line x1="10" y1="20" x2="14" y2="4"/>
            </svg>
          </div>
          <span class="lang-name">zk-DSLs</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Domains Section -->
  <section class="section-py bg-gray-50 border-y border-gray-200">
    <div class="container-max">
      <div class="text-center max-w-3xl mx-auto mb-12 section-reveal">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Domains We Secure</h2>
        <p class="text-gray-600 text-lg">From DeFi protocols to privacy infrastructure, we cover the full Web3 spectrum.</p>
      </div>

      <div class="domain-grid max-w-4xl mx-auto section-reveal delay-100">
        <span class="domain-badge">L1/L2</span>
        <span class="domain-badge">DEX</span>
        <span class="domain-badge">Bridges & Cross-Chain</span>
        <span class="domain-badge">Lending Markets</span>
        <span class="domain-badge">Wallet</span>
        <span class="domain-badge">Staking</span>
        <span class="domain-badge">Infrastructure</span>
        <span class="domain-badge">Web2</span>
        <span class="domain-badge">Stablecoin</span>
        <span class="domain-badge">DeFi</span>
        <span class="domain-badge">Privacy</span>
        <span class="domain-badge">ZK Proofs</span>
      </div>
    </div>
  </section>

  <!-- Ecosystems Section -->
  <section class="section-py bg-white">
    <div class="container-max">
      <div class="text-center max-w-3xl mx-auto mb-12 section-reveal">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ecosystems We Support</h2>
        <p class="text-gray-600 text-lg">Multi-chain expertise across leading blockchain networks.</p>
      </div>

      <div class="ecosystem-grid max-w-5xl mx-auto section-reveal delay-100">
        <!-- Ethereum -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="Ethereum" class="ecosystem-icon" />
          <span>Ethereum</span>
        </div>
        
        <!-- Polygon -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="Polygon" class="ecosystem-icon" />
          <span>Polygon</span>
        </div>

        <!-- Avalanche -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/avalanche-avax-logo.svg" alt="Avalanche" class="ecosystem-icon" />
          <span>Avalanche</span>
        </div>

        <!-- Optimism -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg" alt="Optimism" class="ecosystem-icon" />
          <span>Optimism</span>
        </div>

        <!-- Arbitrum -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg" alt="Arbitrum" class="ecosystem-icon" />
          <span>Arbitrum</span>
        </div>

        <!-- Solana -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/solana-sol-logo.svg" alt="Solana" class="ecosystem-icon" />
          <span>Solana</span>
        </div>

        <!-- Sui -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/sui-sui-logo.svg" alt="Sui" class="ecosystem-icon" />
          <span>Sui</span>
        </div>

        <!-- Aptos -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/aptos-apt-logo.svg" alt="Aptos" class="ecosystem-icon" />
          <span>Aptos</span>
        </div>

        <!-- Cosmos SDK -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/cosmos-atom-logo.svg" alt="Cosmos" class="ecosystem-icon" />
          <span>Cosmos SDK</span>
        </div>

        <!-- Polkadot -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/polkadot-new-dot-logo.svg" alt="Polkadot" class="ecosystem-icon" />
          <span>Polkadot</span>
        </div>

        <!-- StarkNet -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/starknet-token-strk-logo.svg" alt="StarkNet" class="ecosystem-icon" />
          <span>StarkNet</span>
        </div>

        <!-- NEAR -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/near-protocol-near-logo.svg" alt="NEAR" class="ecosystem-icon" />
          <span>NEAR</span>
        </div>

        <!-- BitVM Alliance -->
        <div class="ecosystem-chip">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="BitVM" class="ecosystem-icon" />
          <span>BitVM Alliance</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Expertise / Stats Section -->
  <section id="expertise" class="section-py bg-white">
    <div class="container-max">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="section-reveal">
          <h2 class="text-4xl font-bold mb-6">Proven Expertise</h2>
          <p class="text-lg text-gray-600 mb-6">
            Our team consists of researchers and engineers who have contributed to the core of the ZK ecosystem. We don't just read papers; we write them.
          </p>
          <a href="/research.html" class="btn btn-outline">Read our Research</a>
        </div>
        
        <div class="grid grid-cols-2 gap-8 section-reveal delay-200">
          <div class="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div class="stat-number">20+</div>
            <div class="text-gray-500 font-semibold mt-2">Chains Secured</div>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div class="stat-number">50+</div>
            <div class="text-gray-500 font-semibold mt-2">Critical Bugs</div>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div class="stat-number">$10B</div>
            <div class="text-gray-500 font-semibold mt-2">Assets Protected</div>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
            <div class="stat-number">100%</div>
            <div class="text-gray-500 font-semibold mt-2">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Resources Section -->
  <section id="resources" class="section-py bg-gray-900 text-white">
    <div class="container-max">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Latest Resources</h2>
        <a href="https://github.com/ZippelLabs" class="text-brand-300 hover:text-white transition-colors font-medium">View all GitHub Repos &rarr;</a>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Resource 1 -->
        <a href="https://github.com/ZippelLabs/FHE-Security" class="block group section-reveal">
          <div class="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-br from-brand-900 to-gray-900 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
              🔐
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-brand-300 transition-colors">FHE Security Handbook</h3>
          <p class="text-gray-400 text-sm">Comprehensive guide to vulnerabilities in Fully Homomorphic Encryption schemes.</p>
        </a>

        <!-- Resource 2 -->
        <a href="https://github.com/ZippelLabs/Cairo-Security" class="block group section-reveal delay-100">
          <div class="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-900 to-gray-900 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
              📐
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-brand-300 transition-colors">Cairo Security</h3>
          <p class="text-gray-400 text-sm">Common pitfalls and security patterns for Starknet and Cairo smart contracts.</p>
        </a>

        <!-- Resource 3 -->
        <a href="#" class="block group section-reveal delay-200">
          <div class="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-900 to-gray-900 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
              ⚡
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-brand-300 transition-colors">ZP1 zkVM</h3>
          <p class="text-gray-400 text-sm">Production-grade RISC-V zkVM built on Circle STARKs.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section-py bg-brand-600 text-white text-center">
    <div class="container-max max-w-3xl section-reveal">
      <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to secure your protocol?</h2>
      <p class="text-xl text-brand-100 mb-10">Get a comprehensive audit or consultation from the experts in ZK security.</p>
      <a href="/audits.html" class="inline-block bg-white text-brand-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-brand-50 hover:scale-105 transition-all shadow-lg">
        Book an Audit
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white py-16 border-t border-gray-200">
    <div class="container-max">
      <div class="grid md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-2">
          <a href="#" class="text-2xl font-bold tracking-tight mb-4 block">ZippelLabs</a>
          <p class="text-gray-500 max-w-xs">
            Advancing the state of cryptographic security through research, tooling, and auditing.
          </p>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Services</h4>
          <ul class="space-y-3 text-gray-500 text-sm">
            <li><a href="#" class="hover:text-brand-600">ZK Audits</a></li>
            <li><a href="#" class="hover:text-brand-600">Smart Contract Audits</a></li>
            <li><a href="#" class="hover:text-brand-600">Protocol Design</a></li>
            <li><a href="#" class="hover:text-brand-600">Formal Verification</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Company</h4>
          <ul class="space-y-3 text-gray-500 text-sm">
            <li><a href="/research.html" class="hover:text-brand-600">Research</a></li>
            <li><a href="https://github.com/ZippelLabs" class="hover:text-brand-600">GitHub</a></li>
            <li><a href="https://x.com/Zippel_Labs" class="hover:text-brand-600">Twitter / X</a></li>
            <li><a href="/audits.html" class="hover:text-brand-600">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
        &copy; ${new Date().getFullYear()} ZippelLabs. All rights reserved.
      </div>
    </div>
  </footer>
`;

// --- INTERACTIVITY LOGIC ---

// 1. Mobile Menu Logic
const btn = document.getElementById('mobile-toggle');
const menu = document.getElementById('mobile-menu');
const openIcon = document.querySelector('.menu-open');
const closeIcon = document.querySelector('.menu-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (btn && menu && openIcon && closeIcon) {
  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('pointer-events-none');

    if (isOpen) {
      // Close menu
      menu.classList.add('opacity-0', 'pointer-events-none');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      // Open menu
      menu.classList.remove('opacity-0', 'pointer-events-none');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('opacity-0', 'pointer-events-none');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// 2. Reveal on Scroll Animation
const revealElements = document.querySelectorAll('.section-reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// 3. Navbar Active State
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (nav) {
    if (window.scrollY > 20) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  }
});
