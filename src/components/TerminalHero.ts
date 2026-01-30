export class TerminalHero {
  private element: HTMLElement;
  constructor(elementId: string) {
    const el = document.getElementById(elementId);
    if (!el) throw new Error(`Element ${elementId} not found`);
    this.element = el;
    this.init();
  }

  private init() {
    this.element.innerHTML = `
      <div class="terminal-window max-w-4xl w-full mx-auto bg-[#0c0c0c] border border-[rgba(34,211,238,0.2)] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)] font-mono text-sm md:text-base relative z-10">
        <!-- Terminal Header -->
        <div class="terminal-header bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)]">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div class="text-[rgba(255,255,255,0.3)] text-xs select-none">zippellabs-block-prover — zsh</div>
          <div class="w-16"></div> 
        </div>

        <!-- Terminal Body -->
        <div class="terminal-body p-6 min-h-[400px] text-[var(--color-text-secondary)]">
          <div id="terminal-output" class="space-y-2"></div>
          <div class="mt-2 flex items-center">
            <span class="text-[#22d3ee] mr-2">➜</span>
            <span class="text-[#a78bfa] mr-2">~</span>
            <span id="terminal-cursor" class="w-2.5 h-5 bg-[var(--color-primary-400)] animate-pulse inline-block align-middle"></span>
          </div>
        </div>
      </div>
      
      <!-- Live Status Ticker (Absolute positioned below terminal) -->
      <div class="flex flex-wrap justify-center gap-6 mt-8 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] animate-fade-in" style="animation-delay: 2s">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>System Online</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span>Audits In Progress: 3</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span>Vulnerabilities Indexed: 842</span>
        </div>
      </div>
    `;

    this.runSequence();
  }

  private async typeLine(text: string, style: 'command' | 'output' | 'success' | 'error' | 'warning' = 'output', delay = 30) {
    const outputDiv = document.getElementById('terminal-output');
    if (!outputDiv) return;

    const line = document.createElement('div');

    if (style === 'command') {
      line.innerHTML = `<span class="text-[#22d3ee]">➜</span> <span class="text-[#a78bfa]">~</span> `;
    } else if (style === 'success') {
      line.className = 'text-green-400';
    } else if (style === 'error') {
      line.className = 'text-red-400';
    } else if (style === 'warning') {
      line.className = 'text-yellow-400';
    }

    outputDiv.appendChild(line);

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      line.appendChild(span);
      // Scroll to bottom
      const body = this.element.querySelector('.terminal-body');
      if (body) body.scrollTop = body.scrollHeight;

      await new Promise(r => setTimeout(r, Math.random() * delay + 10)); // Variable typing speed
    }
  }

  private async runSequence() {
    await new Promise(r => setTimeout(r, 800));

    await this.typeLine('zippellabs --audit --target rollup_prover.zkvm', 'command');
    await new Promise(r => setTimeout(r, 400));

    await this.typeLine('Initializing ZippelLabs Security Suite v3.1.0...', 'output');
    await new Promise(r => setTimeout(r, 200));
    await this.typeLine('[+] Loading constraint analyzer... DONE', 'output', 10);
    await this.typeLine('[+] Checking for under-constrained signals... DONE', 'output', 10);
    await this.typeLine('[+] Verifying proof system soundness... DONE', 'output', 10);

    await new Promise(r => setTimeout(r, 600));
    await this.typeLine('Scanning for vulnerabilities...', 'output');

    await new Promise(r => setTimeout(r, 1200));
    await this.typeLine('[CRITICAL] Range check missing in ALU lookup constraints', 'error');
    await this.typeLine('Reason: Witness value not bounded before table lookup.', 'output', 5);

    await new Promise(r => setTimeout(r, 800));
    await this.typeLine('[WARN] Potential witness malleability detected.', 'warning');

    await new Promise(r => setTimeout(r, 800));
    await this.typeLine('Generating proof-of-exploit...', 'output');
    await new Promise(r => setTimeout(r, 1500)); // Suspense
    await this.typeLine('✅ Proof Generation Complete.', 'success');

    await new Promise(r => setTimeout(r, 500));
    await this.typeLine('Don\'t let this happen in production.', 'output', 50);

    // Reveal CTA buttons logic could go here or be hidden in CSS and shown now
    const cta = document.getElementById('hero-cta-container');
    if (cta) cta.classList.remove('opacity-0');
  }
}
