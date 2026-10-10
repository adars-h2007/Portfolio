// ─── "contact" page ───
// Edit the HTML inside the backticks. index.html shows it in the "contact" slot.
(window.PAGES = window.PAGES || {}).contact = `
<section id="contact">
      <div class="container contact-wrap">
        <div>
          <span class="eyebrow reveal">05 — Let's Connect</span>
          <h2 class="title reveal">Got a project <span class="grad-text">in mind?</span></h2>
          <p class="lead reveal">Whether it's a new product, a freelance project, or just a conversation about technology — I'm always happy to talk. Let's build something remarkable together.</p>
          <div class="contact-links">
            <a class="card contact-link reveal" href="mailto:adarshpatil6650@gmail.com">
              <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></div>
              <div><small>Email</small><b>adarshpatil6650@gmail.com</b></div>
            </a>
            <a class="card contact-link reveal" href="https://github.com/adars-h2007" target="_blank" rel="noopener">
              <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
              <div><small>GitHub</small><b>github.com/adars-h2007</b></div>
            </a>
            <a class="card contact-link reveal" href="https://www.linkedin.com/in/adarsh-patil-587a65319/" target="_blank" rel="noopener">
              <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
              <div><small>LinkedIn</small><b>Adarsh Patil</b></div>
            </a>
          </div>
        </div>

        <form class="card reveal" id="contactForm" novalidate>
          <div class="field"><label for="name">Name</label><input id="name" name="name" type="text" placeholder="Your name" required /></div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" required /></div>
          <div class="field"><label for="msg">Message</label><textarea id="msg" name="message" placeholder="Tell me about your project…" required></textarea></div>
          <button type="submit" class="btn btn-primary" style="justify-content:center">
            Send Message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/></svg>
          </button>
          <p class="form-note" id="formNote">This opens your email app with the message pre-filled.</p>
        </form>
      </div>
    </section>
`;
