function init() {
      var $ = function (s, c) { return (c || document).querySelector(s); };
      var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Year
      $('#year').textContent = new Date().getFullYear();

      // Theme toggle
      $('#themeBtn').addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        var m = document.querySelector('meta[name="theme-color"]');
        if (m) m.setAttribute('content', next === 'dark' ? '#0b0b14' : '#f7f6fb');
      });

      // Mobile menu
      var menuBtn = $('#menuBtn'), navLinks = $('#navLinks');
      function closeMenu() { navLinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
      menuBtn.addEventListener('click', function () {
        var open = navLinks.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
      });
      $$('a', navLinks).forEach(function (a) { a.addEventListener('click', closeMenu); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

      // Marquee
      var techs = ['HTML5', 'CSS3', 'JavaScript', 'React', 'AngularJS', 'Bootstrap', 'Git'];
      var html = '';
      for (var i = 0; i < 2; i++) techs.forEach(function (t) { html += '<span>' + t + '</span>'; });
      $('#marquee').innerHTML = html;

      // Typing effect
      var roles = ['Frontend Developer', 'React & AngularJS Builder', 'Responsive UI Crafter', 'Clean-Code Enthusiast'];
      var typingEl = $('#typing'), ri = 0, ci = 0, deleting = false;
      function type() {
        var word = roles[ri];
        if (reduceMotion) { typingEl.textContent = word; return; }
        typingEl.textContent = word.slice(0, ci);
        var delay = deleting ? 35 : 75;
        if (!deleting && ci === word.length) { delay = 1700; deleting = true; }
        else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 350; }
        else { ci += deleting ? -1 : 1; }
        setTimeout(type, delay);
      }
      type();

      // Scroll: progress, header, back-to-top
      var header = $('#header'), progress = $('#progress'), toTop = $('#toTop');
      function onScroll() {
        var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        header.classList.toggle('scrolled', y > 40);
        toTop.classList.toggle('show', y > 600);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); });

      // Active nav link
      var links = $$('.nav-links a');
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id); });
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach(function (s) { spy.observe(s); });

      // Count-up
      function countUp(el) {
        var target = +el.dataset.count, suffix = el.dataset.suffix || '', start = null, dur = 1400;
        if (reduceMotion) { el.textContent = target + suffix; return; }
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      // Reveal on scroll (stagger within groups)
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add('visible');
          $$('[data-count]', en.target).forEach(countUp);
          revealObs.unobserve(en.target);
        });
      }, { threshold: 0.12 });
      $$('.reveal').forEach(function (el) {
        var sibs = el.parentElement ? $$('.reveal', el.parentElement).filter(function (s) { return s.parentElement === el.parentElement; }) : [];
        var idx = sibs.indexOf(el);
        if (idx > 0 && idx < 6) el.style.transitionDelay = (idx * 0.08) + 's';
        revealObs.observe(el);
      });

      // Project filter
      var filterBtns = $$('.filter'), cards = $$('.project');
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var f = btn.dataset.filter;
          cards.forEach(function (c) {
            var show = f === 'all' || c.dataset.tags.split(' ').indexOf(f) !== -1;
            c.classList.toggle('hide', !show);
            if (show) c.classList.add('visible');
          });
        });
      });

      // Contact form → mailto
      $('#contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var n = $('#name').value.trim(), em = $('#email').value.trim(), m = $('#msg').value.trim(), note = $('#formNote');
        if (!n || !/^\S+@\S+\.\S+$/.test(em) || !m) {
          note.textContent = 'Please fill in your name, a valid email and a message.';
          note.style.color = 'var(--pink)';
          return;
        }
        note.style.color = '';
        note.textContent = 'Opening your email app…';
        var subject = encodeURIComponent('Portfolio enquiry from ' + n);
        var body = encodeURIComponent(m + '\n\n— ' + n + ' (' + em + ')');
        window.location.href = 'mailto:adarshpatil6650@gmail.com?subject=' + subject + '&body=' + body;
      });
    }

// ───────── Page loader: puts each page file's markup into its slot in index.html, then starts everything ─────────
(function () {
  var slots = Array.prototype.slice.call(document.querySelectorAll('[data-page]'));
  var missing = [];

  slots.forEach(function (slot) {
    var name = slot.getAttribute('data-page');
    var html = window.PAGES && window.PAGES[name];
    if (typeof html !== 'string') { missing.push('pages/' + name + '.js'); slot.remove(); return; }
    slot.insertAdjacentHTML('beforebegin', html);
    slot.remove();
  });

  if (missing.length) {
    var box = document.createElement('div');
    box.className = 'load-error';
    box.innerHTML = '<p><strong>Some pages did not load.</strong></p><p>Make sure these files are next to index.html: <code>' + missing.join(', ') + '</code></p>';
    var main = document.querySelector('main');
    if (main) main.insertBefore(box, main.firstChild);
  }

  init();
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
})();
