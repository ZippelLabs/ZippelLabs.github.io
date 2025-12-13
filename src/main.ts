import './style.css'

// ========================================
// ZippelLabs ZP1 Landing Page
// ========================================

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Hero Section -->
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <!-- Animated Background Canvas -->
    <canvas id="hero-canvas" class="absolute inset-0 w-full h-full -z-10"></canvas>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f11]/50 to-[#0f0f11] -z-5"></div>
    
    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <div class="mb-6">
        <span class="inline-block px-4 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
          Open Source zkVM
        </span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
        ZippelLabs ZP1
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-400 mb-4 font-light">
        The <span class="text-cyan-400 font-medium">Limitless</span> M31 zkVM
      </p>
      
      <p class="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
        A high-performance zero-knowledge virtual machine built on the Mersenne-31 field. 
        Provable security. Blazing speed. Zero compromises.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://github.com/ZippelLabs" target="_blank" 
           class="group px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          View on GitHub
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a href="#features" 
           class="px-8 py-3 border border-gray-700 hover:border-cyan-500 text-white hover:text-cyan-400 font-medium rounded-lg transition-all duration-300">
          Learn More
        </a>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>

  <!-- M31 Advantage Section -->
  <section id="features" class="py-24 px-6 bg-[#0a0a0c]">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white">
          The <span class="text-cyan-400">M31</span> Advantage
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Built on the Mersenne-31 field (2³¹ - 1), ZP1 delivers unmatched performance through native CPU arithmetic.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
          <div class="w-14 h-14 mb-6 bg-cyan-500/10 rounded-xl flex items-center justify-center">
            <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">Blazing Fast</h3>
          <p class="text-gray-400">Native 32-bit arithmetic eliminates costly big-integer operations. Proving times measured in seconds, not minutes.</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
          <div class="w-14 h-14 mb-6 bg-cyan-500/10 rounded-xl flex items-center justify-center">
            <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">Provable Security</h3>
          <p class="text-gray-400">Circle STARKs with FRI-based proximity testing. No proximity gap conjectures—mathematically sound proofs.</p>
        </div>
        
        <!-- Feature 3 -->
        <div class="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
          <div class="w-14 h-14 mb-6 bg-cyan-500/10 rounded-xl flex items-center justify-center">
            <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">Write in Rust</h3>
          <p class="text-gray-400">Full Rust support with existing crate ecosystem. No new languages to learn—just write Rust, generate proofs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Benchmarks Section -->
  <section class="py-24 px-6 bg-[#0f0f11]">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">
            Unmatched <span class="text-cyan-400">Performance</span>
          </h2>
          <p class="text-gray-400 mb-8 text-lg">
            ZP1 outperforms existing zkVMs by leveraging the Mersenne-31 field. 
            Native 32-bit arithmetic means more constraints per second and lower proof generation times.
          </p>
          
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-white font-medium">ZP1 (M31)</span>
                <span class="text-cyan-400">2.4M Hz</span>
              </div>
              <div class="h-4 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[95%] rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-400">BabyBear VM</span>
                <span class="text-gray-500">650K Hz</span>
              </div>
              <div class="h-4 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-gray-700 w-[30%] rounded-full"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-400">Goldilocks VM</span>
                <span class="text-gray-500">400K Hz</span>
              </div>
              <div class="h-4 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-gray-700 w-[20%] rounded-full"></div>
              </div>
            </div>
          </div>
          <p class="mt-4 text-xs text-gray-600 font-mono">* Est. constraints/sec on M1 Max</p>
        </div>

        <div class="relative h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8 flex items-center justify-center overflow-hidden group">
           <!-- Dynamic Bar Chart Visualization -->
           <div class="flex items-end gap-6 h-64 w-full justify-center px-8">
              <div class="w-16 bg-gray-700 h-[20%] rounded-t-lg relative group-hover:bg-gray-600 transition-colors">
                 <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm">GL</div>
              </div>
              <div class="w-16 bg-gray-700 h-[30%] rounded-t-lg relative group-hover:bg-gray-600 transition-colors">
                 <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm">BB</div>
              </div>
              <div class="w-16 bg-cyan-500 h-[95%] rounded-t-lg relative shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-500">
                 <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-400 font-bold">M31</div>
              </div>
           </div>
           
           <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Developer Experience Section -->
  <section class="py-24 px-6 bg-[#0f0f11]">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            Developer <span class="text-cyan-400">Experience</span>
          </h2>
          <p class="text-gray-400 mb-8">
            From Rust code to verified proof in three simple steps. No complex setup, no proprietary toolchains.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 class="font-semibold text-white mb-1">Write Your Program</h4>
                <p class="text-gray-500 text-sm">Standard Rust code with access to the full crate ecosystem.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 class="font-semibold text-white mb-1">Execute & Trace</h4>
                <p class="text-gray-500 text-sm">The ZP1 executor runs your program and captures the execution trace.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 class="font-semibold text-white mb-1">Generate Proof</h4>
                <p class="text-gray-500 text-sm">The prover generates a succinct, verifiable STARK proof.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
          <div class="relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div class="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="ml-3 text-gray-500 text-sm font-mono">main.rs</span>
            </div>
            <pre class="p-6 text-sm font-mono overflow-x-auto"><code class="text-gray-300"><span class="text-purple-400">use</span> zp1_sdk::*;

<span class="text-purple-400">fn</span> <span class="text-cyan-400">main</span>() {
    <span class="text-gray-500">// Your computation here</span>
    <span class="text-purple-400">let</span> result = fibonacci(<span class="text-yellow-400">1000</span>);
    
    <span class="text-gray-500">// Commit to public output</span>
    commit(&result);
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 px-6 bg-[#0a0a0c] border-t border-gray-800">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold text-white">ZippelLabs</span>
          <span class="text-gray-600">|</span>
          <span class="text-gray-400">ZP1 zkVM</span>
        </div>
        
        <div class="flex items-center gap-6">
          <a href="https://github.com/ZippelLabs" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://x.com/ZippelLabs" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
        
        <p class="text-gray-600 text-sm">
          © 2024 ZippelLabs. Open Source under MIT License.
        </p>
      </div>
    </div>
  </footer>
`

// ========================================
// Hero Canvas Animation (Particle Field)
// ========================================
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
  if (!canvas) return

  const ctx = canvas.getContext('2d')!
  let animationId: number

  // Resize handler
  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // Particle system
  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    opacity: number
  }

  const particles: Particle[] = []
  const particleCount = Math.min(100, Math.floor(window.innerWidth / 15))

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - dist / 150)})`
          ctx.lineWidth = 1
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    // Update and draw particles
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`
      ctx.fill()
    }

    animationId = requestAnimationFrame(animate)
  }

  animate()

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId)
  })
}

// Initialize canvas animation
initHeroCanvas()
