
import { wedding as w } from './config.js';

const photos = [
  '/images/photo-01.jpg',
  '/images/photo-02.jpg',
  '/images/photo-03.jpg',
  '/images/photo-04.jpg',
  '/images/photo-05.jpg',
  '/images/photo-06.jpg',
  '/images/photo-07.jpg'
];

const $ = (s) => document.querySelector(s);

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(w.mapQuery)}`;
const start = new Date(w.event.date);

const calStart = '20261216T020000Z';
const calEnd = '20261216T040000Z';

const calendarUrl =
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Lễ tân hôn ${w.groom.fullName} & ${w.bride.fullName}`)}&dates=${calStart}/${calEnd}&details=${encodeURIComponent(`Trân trọng kính mời. Địa điểm: ${w.event.venue}. ${w.event.address}`)}&location=${encodeURIComponent(w.event.address)}`;

const root = $('#root');

root.innerHTML = `
<audio id="music" src="${w.music}" loop preload="auto"></audio>

<div class="cover-screen" id="cover">
  <img class="cover-ornament top-left" src="/images/envelope-floral.png" alt="" aria-hidden="true">
  <img class="cover-ornament bottom-right" src="/images/envelope-floral.png" alt="" aria-hidden="true">

  <div class="cover-card">
    <div class="cover-heart">♥</div>
    <div class="eyebrow">WEDDING INVITATION</div>

    <!-- SHORT NAMES ON THE FRONT COVER -->
    <h1>
      Duy Thành
      <span>&</span>
      Như Trâm
    </h1>

    <div class="cover-rule"><i></i></div>

    <p class="cover-date">16 tháng 12, 2026</p>
    <p class="cover-venue">Tư Gia Nam</p>

    <button class="open-button" id="open">Mở thiệp</button>
  </div>

  <div class="cover-footer">WITH LOVE · 2026</div>
</div>

<div class="heart-particles" id="heartParticles" aria-hidden="true"></div>

<main class="invitation" id="invitation">

<header class="hero paper-section">
  <div class="envelope-wrap">
    <img
      class="envelope-flower"
      src="/images/envelope-floral.png"
      alt=""
      aria-hidden="true"
    >

    <div class="envelope">
      <div class="envelope-photo">
        <img src="/images/photo-03.jpg" alt="Ảnh cưới Duy Thành và Như Trâm">
      </div>

      <div class="envelope-front">
        <span>♥</span>
      </div>

      <div class="seal">
        <img
          src="/images/wax-seal-heart.png"
          alt="Con dấu sáp vàng hình trái tim"
        >
      </div>
    </div>
  </div>

  <p class="eyebrow">THE WEDDING OF</p>

  <h1 class="couple-names">
    ${w.groom.fullName}<br>
    <span>&</span><br>
    ${w.bride.fullName}
  </h1>

  <div class="tiny-flower">❧</div>
</header>

<section class="family-card burgundy-card reveal">
  <div class="family-columns">
    <div>
      <p class="small-caps">Ông Bà</p>
      <p>${w.groomFamily.father}</p>
      <p>${w.groomFamily.mother}</p>
      <small>${w.groomFamily.address}</small>
    </div>

    <div>
      <p class="small-caps">Ông Bà</p>
      <p>${w.brideFamily.father}</p>
      <p>${w.brideFamily.mother}</p>
      <small>${w.brideFamily.address}</small>
    </div>
  </div>

  <div class="floral-corner">❧</div>
</section>

<section class="announcement paper-section reveal">
  <p class="eyebrow">TRÂN TRỌNG BÁO TIN</p>
  <p class="subheading">LỄ TÂN HÔN CỦA CON CHÚNG TÔI</p>

  <h2>${w.groom.fullName}</h2>
  <p class="role">${w.groom.title}</p>

  <div class="ampersand">&</div>

  <h2>${w.bride.fullName}</h2>
  <p class="role">${w.bride.title}</p>

  <p class="ceremony-copy">
    LỄ TÂN HÔN ĐƯỢC CỬ HÀNH TẠI<br>
    <strong>${w.event.venue.toUpperCase()}</strong>
  </p>

  <p class="time-line">
    VÀO LÚC ${w.event.time} &nbsp; ${w.event.day.toUpperCase()}
  </p>

  <div class="date-display">
    <strong>${w.event.dayNumber}</strong>
    <span>THÁNG ${w.event.month}<br>${w.event.year}</span>
  </div>

  <p class="lunar">(${w.event.lunar})</p>
  <div class="floral-corner right">❧</div>
</section>

<section class="album paper-section reveal">
  <p class="section-title">ALBUM ẢNH</p>

  <div class="carousel" id="carousel">
    <img class="side-photo left" id="leftPhoto"
      src="${photos[6]}" alt="Ảnh cưới trước">

    <img class="main-photo" id="mainPhoto"
      src="${photos[0]}" alt="Album ảnh cưới">

    <img class="side-photo right" id="rightPhoto"
      src="${photos[1]}" alt="Ảnh cưới tiếp theo">

    <button class="carousel-arrow prev" id="prev"
      aria-label="Ảnh trước">‹</button>

    <button class="carousel-arrow next" id="next"
      aria-label="Ảnh tiếp">›</button>
  </div>

  <div class="dots" id="dots">
    ${photos.map((_, i) =>
      `<button data-index="${i}" class="${i === 0 ? 'active' : ''}"
        aria-label="Ảnh ${i + 1}"></button>`
    ).join('')}
  </div>
</section>

<section class="party-card burgundy-card reveal">
  <p class="section-title light">THÔNG TIN TIỆC CƯỚI</p>
  <p class="party-intro">TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:</p>

  <p class="time-line">
    ${w.event.time} &nbsp; ${w.event.day.toUpperCase()}
  </p>

  <div class="date-display">
    <strong>${w.event.dayNumber}</strong>
    <span>THÁNG ${w.event.month}<br>${w.event.year}</span>
  </div>

  <p class="lunar">(${w.event.lunar})</p>
  <p class="count-label">Cùng đếm ngược</p>

  <div class="countdown">
    <div><strong id="cd-d">00</strong><small>Ngày</small></div>
    <div><strong id="cd-h">00</strong><small>Giờ</small></div>
    <div><strong id="cd-m">00</strong><small>Phút</small></div>
    <div><strong id="cd-s">00</strong><small>Giây</small></div>
  </div>

  <a class="calendar-button" href="${calendarUrl}"
    target="_blank" rel="noreferrer">
    ▦ &nbsp;Thêm vào lịch
  </a>

  <div class="floral-corner">❧</div>
</section>

<section class="calendar-section paper-section reveal">
  <div class="calendar-paper">
    <h3>Tháng 12 / 2026</h3>

    <div class="calendar-grid weekday">
      ${'T2 T3 T4 T5 T6 T7 CN'.split(' ')
        .map(x => `<span>${x}</span>`).join('')}
    </div>

    <div class="calendar-grid days">
      ${Array.from({ length: 35 }, (_, i) => {
        const d = i - 1;
        return `<span class="${d === 16 ? 'wedding-day' : ''}">
          ${d > 0 && d <= 31 ? d : ''}
          ${d === 16 ? '<b>♥</b>' : ''}
        </span>`;
      }).join('')}
    </div>

    <a class="text-link" href="${calendarUrl}"
      target="_blank" rel="noreferrer">
      Thêm vào lịch
    </a>
  </div>
</section>

<section class="location-section paper-section reveal">
  <p class="section-title">
    TIỆC CƯỚI SẼ TỔ CHỨC TẠI TƯ GIA NAM
  </p>

  <p class="location-address">${w.event.address}</p>

  <a class="map-frame" href="${mapUrl}"
    target="_blank" rel="noreferrer">
    <iframe
      title="Bản đồ địa điểm tiệc cưới"
      src="https://maps.google.com/maps?q=${encodeURIComponent(w.mapQuery)}&output=embed"
      loading="lazy">
    </iframe>
  </a>

  <a class="directions-button" href="${mapUrl}"
    target="_blank" rel="noreferrer">
    ➤ &nbsp;Chỉ đường
  </a>

  <p class="thank-you">
    Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!
  </p>

  <p class="signature">Trân trọng kính mời</p>
</section>

<footer class="footer">
  DUY THÀNH <span>♥</span> NHƯ TRÂM · 2026
</footer>

</main>

<button class="music-toggle" id="musicToggle"
  aria-label="Bật tắt nhạc" hidden>♫</button>
`;

let slide = 0;
const audio = $('#music');

startAmbientParticles();

function renderSlide() {
  const mainPhoto = $('#mainPhoto');
  mainPhoto.classList.add('photo-changing');

  window.setTimeout(() => {
    mainPhoto.src = photos[slide];
    $('#leftPhoto').src = photos[(slide - 1 + photos.length) % photos.length];
    $('#rightPhoto').src = photos[(slide + 1) % photos.length];

    requestAnimationFrame(() =>
      mainPhoto.classList.remove('photo-changing')
    );
  }, 140);

  document.querySelectorAll('#dots button').forEach((b, i) =>
    b.classList.toggle('active', i === slide)
  );
}

function next() {
  slide = (slide + 1) % photos.length;
  renderSlide();
}

function prev() {
  slide = (slide - 1 + photos.length) % photos.length;
  renderSlide();
}

$('#next').addEventListener('click', next);
$('#prev').addEventListener('click', prev);

$('#dots').addEventListener('click', e => {
  const b = e.target.closest('button[data-index]');
  if (b) {
    slide = Number(b.dataset.index);
    renderSlide();
  }
});

setInterval(next, 4200);

function startAmbientParticles() {
  const layer = $('#heartParticles');
  if (!layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const symbols = ['✦', '♥', '♡', '❧'];
  const spawn = () => {
    // Stop adding ambient particles as soon as the cover starts to close.
    if ($('#cover')?.classList.contains('closing')) return;
    // Keep a small number of particles alive so the cover feels gently animated.
    if (document.querySelectorAll('.ambient-particle').length >= 16) return;

    const particle = document.createElement('span');
    particle.className = 'ambient-particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = (4 + Math.random() * 92) + 'vw';
    particle.style.setProperty('--drift', (Math.random() * 100 - 50).toFixed(1) + 'px');
    particle.style.setProperty('--rise', (90 + Math.random() * 170).toFixed(1) + 'px');
    particle.style.setProperty('--duration', (6.5 + Math.random() * 4).toFixed(2) + 's');
    particle.style.setProperty('--scale', (0.55 + Math.random() * 0.7).toFixed(2));
    layer.appendChild(particle);

    particle.addEventListener('animationend', () => particle.remove(), { once: true });
  };

  // Stagger the first few particles, then keep the movement calm and continuous.
  for (let i = 0; i < 7; i++) {
    window.setTimeout(spawn, i * 420);
  }
  window.setInterval(spawn, 620);
}

function launchHearts() {
  const layer = $('#heartParticles');
  if (!layer) return;

  layer.querySelectorAll('.ambient-particle').forEach(p => p.remove());

  const button = $('#open');
  const rect = button
    ? button.getBoundingClientRect()
    : { left: innerWidth / 2 - 50, top: innerHeight * .62, width: 100, height: 44 };

  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const symbols = ['♥', '♡', '❤'];

  for (let i = 0; i < 28; i++) {
    const heart = document.createElement('span');

    heart.className = 'float-heart';
    heart.textContent = symbols[i % symbols.length];

    const drift = (Math.random() * 230 - 115).toFixed(1) + 'px';
    const rise = (210 + Math.random() * 170).toFixed(1) + 'px';
    const duration = (2.1 + Math.random() * 1.15).toFixed(2) + 's';
    const delay = (Math.random() * .32).toFixed(2) + 's';
    const scale = (0.65 + Math.random() * .85).toFixed(2);

    heart.style.setProperty('--drift', drift);
    heart.style.setProperty('--rise', rise);
    heart.style.setProperty('--duration', duration);
    heart.style.setProperty('--delay', delay);
    heart.style.setProperty('--scale', scale);

    heart.style.left = (originX - 12 + (Math.random() * 50 - 25)) + 'px';
    heart.style.top = (originY - 10 + (Math.random() * 24 - 12)) + 'px';

    layer.appendChild(heart);

    heart.addEventListener('animationend', () => heart.remove(), {
      once: true
    });
  }
}

$('#open').addEventListener('click', async () => {
  const openButton = $('#open');

  if (openButton.dataset.opened === 'true') return;

  openButton.dataset.opened = 'true';

  $('#cover').classList.add('closing');
  $('#invitation').classList.add('is-open');
  $('#musicToggle').hidden = false;

  launchHearts();

  try {
    await audio.play();
    $('#musicToggle').textContent = '♫';
    $('#musicToggle').classList.add('playing');
  } catch {
    $('#musicToggle').textContent = '♪';
  }
});

$('#musicToggle').addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      $('#musicToggle').classList.add('playing');
    } catch {}
  } else {
    audio.pause();
    $('#musicToggle').classList.remove('playing');
  }
});

let touchX = null;

$('#carousel').addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX;
}, { passive: true });

$('#carousel').addEventListener('touchend', e => {
  if (touchX === null) return;

  const dx = e.changedTouches[0].clientX - touchX;

  if (Math.abs(dx) > 35) {
    dx > 0 ? prev() : next();
  }

  touchX = null;
}, { passive: true });

function countdown() {
  let ms = Math.max(0, start.getTime() - Date.now());

  const d = Math.floor(ms / 86400000);
  const h = Math.floor(ms / 3600000) % 24;
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;

  [['d', d], ['h', h], ['m', m], ['s', s]].forEach(([k, v]) => {
    $('#cd-' + k).textContent = String(v).padStart(2, '0');
  });
}

countdown();
setInterval(countdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('shown');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el =>
  observer.observe(el)
);
