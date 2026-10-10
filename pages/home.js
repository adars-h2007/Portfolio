// ─── "home" page ───
// Edit the HTML inside the backticks. index.html shows it in the "home" slot.
(window.PAGES = window.PAGES || {}).home = `
<section id="hero">
      <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
      <div class="dots"></div>
      <div class="container hero-grid">
        <div>
          <div class="badge"><span class="pulse"></span>Available for opportunities</div>
          <h1><small>Hello, I'm</small>Adarsh <span class="grad-text">Patil.</span></h1>
          <div class="typing" id="typing" aria-live="off"></div>
          <p class="hero-sub">Frontend developer crafting <strong>purposeful digital experiences</strong> — elegant, responsive interfaces that turn complex problems into clean, intuitive solutions.</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" class="btn btn-ghost">Get In Touch</a>
          </div>
          <div class="socials">
            <a class="icon-btn" href="https://github.com/adars-h2007" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>
            <a class="icon-btn" href="https://www.linkedin.com/in/adarsh-patil-587a65319/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a class="icon-btn" href="mailto:adarshpatil6650@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></a>
          </div>
        </div>

        <div class="code-card" aria-hidden="true">
          <div class="code-top"><i></i><i></i><i></i><span>adarsh.js</span></div>
<pre class="code-body"><span class="k">const</span> <span class="a">adarsh</span> = {
  <span class="f">role</span>: <span class="s">"Frontend Developer"</span>,
  <span class="f">location</span>: <span class="s">"India"</span>,
  <span class="f">frontend</span>: [<span class="s">"React"</span>, <span class="s">"AngularJS"</span>,
             <span class="s">"JavaScript"</span>, <span class="s">"Bootstrap"</span>],
  <span class="f">focus</span>: <span class="s">"Clean code &amp; great UX"</span>,
  <span class="f">openToWork</span>: <span class="k">true</span>,
};

<span class="c">// let's build something remarkable</span></pre>
        </div>
      </div>
    </section>

<div class="marquee" aria-hidden="true">
      <div class="marquee-track" id="marquee"></div>
    </div>
`;
