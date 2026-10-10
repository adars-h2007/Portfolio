// ─── "projects" page ───
// Edit the HTML inside the backticks. index.html shows it in the "projects" slot.
(window.PAGES = window.PAGES || {}).projects = `
<section id="projects" class="alt">
      <div class="container">
        <span class="eyebrow reveal">04 — Work</span>
        <h2 class="title reveal">Selected projects</h2>
        <p class="lead reveal">A few things I've built — filter by technology to explore.</p>

        <div class="filters reveal" role="group" aria-label="Filter projects">
          <button class="filter active" data-filter="all">All</button>
          <button class="filter" data-filter="react">React</button>
          <button class="filter" data-filter="html">HTML &amp; CSS</button>
        </div>

        <div class="projects">
          <article class="card project featured reveal" data-tags="react">
            <div class="p-top"><span>01</span><span class="star">★ Featured</span></div>
            <h3>Appointment Booking Website</h3>
            <p>A booking website for scheduling appointments, with a React admin dashboard for managing them.</p>
            <div class="stack"><span>React</span><span>Admin Dashboard</span></div>
            <a href="https://github.com/adars-h2007/appointment" target="_blank" rel="noopener" class="p-link">View on GitHub <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></a>
          </article>
          <article class="card project  reveal" data-tags="react">
            <div class="p-top"><span>02</span></div>
            <h3>Body Builder App</h3>
            <p>A bodybuilding guidance web app with bodyweight exercise guides, meal planning, accountability tracking and mindset tools, in a Bento Grid layout.</p>
            <div class="stack"><span>React</span><span>Bento Grid UI</span></div>
            <a href="https://github.com/adars-h2007/Body-Builder-App" target="_blank" rel="noopener" class="p-link">View on GitHub <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></a>
          </article>
          <article class="card project  reveal" data-tags="html">
            <div class="p-top"><span>03</span></div>
            <h3>Electronic Shop</h3>
            <p>My first project: a multi-page website for an electronics store with home, products, about and contact pages.</p>
            <div class="stack"><span>HTML5</span><span>CSS3</span></div>
            <a href="https://github.com/adars-h2007/Electronic-Shop" target="_blank" rel="noopener" class="p-link">View on GitHub <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></a>
          </article>
          <article class="card project wide reveal" data-tags="html">
            <div class="p-top"><span>04</span></div>
            <h3>Developer Portfolio</h3>
            <p>My personal portfolio website, built from my diploma and internship experience and deployed live on Vercel.</p>
            <div class="stack"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Vercel</span></div>
            <a href="https://github.com/adars-h2007/Portfolio" target="_blank" rel="noopener" class="p-link">View on GitHub <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></a>
          </article>
        </div>
      </div>
    </section>
`;
