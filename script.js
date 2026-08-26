:root {
  --bg: #f4f6f8;
  --surface: #ffffff;
  --surface-soft: #edf1f5;
  --text: #081a35;
  --muted: #647083;
  --line: #dce3eb;
  --accent: #1f5f9e;
  --navy: #06182f;
  --dark-section: #06182f;
  --shadow: 0 25px 70px rgba(6, 24, 47, .10);
}

body.dark {
  --bg: #081322;
  --surface: #0d1c2f;
  --surface-soft: #11253d;
  --text: #edf4fb;
  --muted: #9baabd;
  --line: #263a51;
  --accent: #63a5e5;
  --navy: #edf4fb;
  --dark-section: #040d18;
  --shadow: 0 25px 70px rgba(0, 0, 0, .25);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: "Manrope", sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  transition: background .35s ease, color .35s ease;
}

body.modal-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

/* LOADER */

.loader {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  background: var(--dark-section);
  color: white;
  transition: opacity .7s ease, visibility .7s ease;
}

.loader.hide {
  opacity: 0;
  visibility: hidden;
}

.loader-content {
  width: min(90%, 420px);
  text-align: center;
}

.loader-mark {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 50%;
  font-family: Georgia, serif;
  font-size: 36px;
}

.loader h1 {
  font-size: 15px;
  letter-spacing: 4px;
}

.loader p {
  margin-top: 8px;
  color: rgba(255,255,255,.55);
  font-size: 10px;
  letter-spacing: 3px;
}

.loader-line {
  height: 2px;
  margin-top: 30px;
  overflow: hidden;
  background: rgba(255,255,255,.15);
}

.loader-line span {
  display: block;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: var(--accent);
  animation: loading 1.3s ease forwards;
}

@keyframes loading {
  to {
    transform: translateX(0);
  }
}

/* HEADER */

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  padding: 0 clamp(22px, 5vw, 84px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  transition: .35s;
}

.header.scrolled {
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--line);
}

.logo {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 800;
}

.logo-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  color: white;
  background: #06182f;
  border-radius: 50%;
  font-family: Georgia, serif;
  font-size: 20px;
}

.accent,
em {
  color: var(--accent);
}

.nav {
  display: flex;
  gap: clamp(14px, 2vw, 30px);
}

.nav a {
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
  transition: .25s;
}

.nav a:hover,
.nav a.active {
  color: var(--text);
}

.header-actions {
  display: flex;
  gap: 10px;
}

.theme-toggle,
.menu-toggle,
.back-to-top {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 18px;
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 38px;
  font-size: 20px;
}

/* HERO */

.hero {
  min-height: 100vh;
  padding: 150px clamp(22px, 8vw, 140px) 70px;
  display: grid;
  grid-template-columns: 1.35fr .65fr;
  gap: clamp(40px, 7vw, 120px);
  align-items: center;
}

.eyebrow,
.section-label,
.mini-title {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

.hero h1 {
  margin-top: 20px;
  font-size: clamp(48px, 6vw, 96px);
  line-height: .98;
  letter-spacing: -4px;
}

.hero h1 span {
  display: block;
  color: var(--accent);
  font-family: Georgia, serif;
  font-style: italic;
}

.hero-description {
  max-width: 650px;
  margin-top: 28px;
  color: var(--muted);
  font-size: clamp(15px, 1.3vw, 19px);
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 34px;
}

.btn {
  min-height: 52px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 800;
  transition: .25s;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn-primary {
  color: white;
  background: #06182f;
}

.btn-secondary {
  border: 1px solid var(--line);
  background: var(--surface);
}

.hero-stats {
  display: flex;
  gap: clamp(22px, 4vw, 55px);
  margin-top: 55px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.hero-stats div {
  display: grid;
  gap: 3px;
}

.hero-stats strong {
  font-size: 22px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 10px;
  text-transform: uppercase;
}

/* PROFILE CARD */

.hero-card {
  min-height: 480px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.card-top,
.card-footer {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
}

.status {
  color: var(--accent);
}

.profile-initials {
  width: 130px;
  height: 130px;
  margin: 45px 0 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  background: linear-gradient(135deg, var(--accent), #06182f);
  font-family: Georgia, serif;
  font-size: 52px;
  font-style: italic;
}

.profile-info h2 {
  font-size: 32px;
  line-height: 1.05;
}

.profile-info p {
  margin-top: 7px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
}

.profile-lines {
  margin-top: auto;
  display: grid;
  gap: 15px;
}

.profile-lines div {
  padding-top: 13px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.profile-lines span {
  color: var(--muted);
  font-size: 10px;
}

.profile-lines strong {
  font-size: 10px;
  text-align: right;
}

.card-footer {
  margin-top: 22px;
  padding-top: 15px;
  border-top: 1px solid var(--line);
}

/* SECTIONS */

.section {
  padding: 120px clamp(22px, 8vw, 140px);
}

.section-label {
  margin-bottom: 28px;
}

.about {
  border-top: 1px solid var(--line);
}

.about-grid {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: clamp(50px, 9vw, 150px);
}

.about-heading h2,
.section-heading h2,
.contact h2 {
  font-size: clamp(38px, 5vw, 74px);
  line-height: 1.04;
  letter-spacing: -3px;
}

em {
  font-family: Georgia, serif;
}

.about-copy {
  color: var(--muted);
  font-size: 17px;
}

.about-copy p + p {
  margin-top: 22px;
}

.personal-values {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
}

.personal-values span {
  padding: 9px 13px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  font-size: 11px;
  font-weight: 700;
}

/* EDUCATION */

.education {
  background: var(--surface-soft);
}

.education-card {
  display: grid;
  grid-template-columns: 130px 1fr auto;
  gap: 45px;
  align-items: center;
  padding: clamp(28px, 5vw, 60px);
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.education-year {
  color: var(--accent);
  font-size: 60px;
  font-weight: 800;
}

.education-main h2 {
  margin-top: 8px;
  font-size: 42px;
}

.university-name {
  margin-top: 7px;
  color: var(--accent);
  font-size: 14px;
  font-weight: 800;
}

.education-description {
  max-width: 650px;
  margin-top: 15px;
  color: var(--muted);
}

.education-badge {
  padding: 20px;
  border: 1px solid var(--line);
  text-align: center;
}

.education-badge span,
.education-badge strong {
  display: block;
  font-size: 9px;
  letter-spacing: 2px;
}

.education-badge strong {
  color: var(--accent);
}

/* SKILLS */

.section-heading {
  margin-bottom: 55px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.skill-card {
  min-height: 265px;
  padding: 32px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface);
  transition: .3s;
}

.skill-card:hover {
  background: #06182f;
  color: white;
  transform: translateY(-5px);
}

.skill-number {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
}

.skill-card h3 {
  margin-top: 50px;
  font-size: 22px;
}

.skill-card p {
  margin-top: 10px;
  color: var(--muted);
  font-size: 13px;
}

/* TIMELINE */

.timeline-section {
  background: var(--surface);
}

.timeline {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 150px;
  width: 1px;
  background: var(--line);
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 120px 60px 1fr;
  gap: 25px;
  padding-bottom: 55px;
}

.timeline-year {
  color: var(--accent);
  font-size: 22px;
  font-weight: 800;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  margin-top: 8px;
  border: 3px solid var(--surface);
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
  z-index: 1;
}

.timeline-content {
  padding: 0 0 10px;
}

.timeline-content span {
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.timeline-content h3 {
  margin-top: 8px;
  font-size: 25px;
}

.timeline-content p {
  margin-top: 10px;
  color: var(--muted);
  max-width: 650px;
}

/* CERTIFICATES */

.certificates {
  background: var(--surface-soft);
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.certificate-image-card {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
}

.certificate-image-card img {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
  display: block;
  transition: transform .6s ease;
}

.certificate-image-card:hover img {
  transform: scale(1.06);
}

.certificate-overlay {
  position: absolute;
  inset: auto 0 0;
  padding: 28px;
  color: white;
  background: linear-gradient(
    to top,
    rgba(6, 24, 47, .96),
    rgba(6, 24, 47, .15)
  );
}

.certificate-overlay span {
  color: #9dc9f2;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.certificate-overlay h3 {
  margin-top: 7px;
  font-size: 25px;
}

.certificate-actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.certificate-actions button,
.certificate-actions a {
  min-height: 40px;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.35);
  background: rgba(255,255,255,.1);
  color: white;
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
}

/* CV */

.cv-section {
  background: var(--surface);
}

.cv-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 35px;
  align-items: center;
  padding: clamp(25px, 4vw, 55px);
  background: var(--surface-soft);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.cv-icon {
  width: 90px;
  height: 90px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  background: linear-gradient(135deg, var(--accent), #06182f);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 2px;
}

.cv-content > span {
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.cv-content h3 {
  margin-top: 8px;
  font-size: clamp(28px, 3vw, 44px);
}

.cv-content p {
  margin-top: 8px;
  color: var(--muted);
}

.cv-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.view-cv,
.download-cv {
  min-height: 48px;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
}

.view-cv {
  background: #06182f;
  color: white;
}

.download-cv {
  background: var(--surface);
  color: var(--text);
}

/* CONTACT */

.contact {
  background: #06182f;
  color: white;
}

.contact h2 {
  margin-top: 18px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr .9fr;
  gap: 60px;
  margin-top: 60px;
}

.contact-links {
  border-top: 1px solid rgba(255,255,255,.2);
}

.contact-links a {
  padding: 22px 0;
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,.2);
}

.contact-links span {
  color: rgba(255,255,255,.55);
  font-size: 10px;
  letter-spacing: 2px;
}

.contact-links strong {
  font-size: 15px;
}

.contact-links b {
  color: #63a5e5;
  font-size: 24px;
}

.contact-form {
  display: grid;
  gap: 12px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255,255,255,.2);
  outline: none;
  background: rgba(255,255,255,.06);
  color: white;
}

.contact-form textarea {
  min-height: 140px;
  resize: vertical;
}

.contact-form button {
  min-height: 52px;
  border: none;
  background: var(--accent);
  color: white;
  cursor: pointer;
  font-weight: 800;
}

/* MODALS */

.certificate-modal,
.cv-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 40px 80px;
  background: rgba(0,0,0,.92);
}

.certificate-modal.active,
.cv-modal.active {
  display: flex;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 25px;
  z-index: 5;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: white;
  color: #06182f;
  cursor: pointer;
  font-size: 30px;
}

.modal-nav {
  position: absolute;
  z-index: 4;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255,255,255,.3);
  background: rgba(255,255,255,.1);
  color: white;
  cursor: pointer;
  font-size: 25px;
}

.modal-nav.prev {
  left: 25px;
}

.modal-nav.next {
  right: 25px;
}

.modal-image-wrapper {
  max-width: 100%;
  max-height: 80vh;
  overflow: auto;
  cursor: zoom-in;
}

.modal-image-wrapper.zoomed {
  cursor: zoom-out;
}

.modal-image-wrapper img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  transition: transform .35s ease;
}

.modal-image-wrapper.zoomed img {
  max-width: none;
  max-height: none;
  transform: scale(1.5);
  transform-origin: top center;
}

.modal-title {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 13px;
  font-weight: 800;
  text-align: center;
}

.cv-viewer {
  width: min(100%, 1000px);
  height: min(88vh, 900px);
  background: white;
}

.cv-viewer iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* FIXED CV */

.fixed-cv {
  position: fixed;
  left: 25px;
  bottom: 25px;
  z-index: 99;
  padding: 12px 15px;
  background: #06182f;
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  box-shadow: var(--shadow);
}

/* BACK TO TOP */

.back-to-top {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
  transition: .25s;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

/* FOOTER */

footer {
  padding: 25px clamp(22px, 8vw, 140px);
  background: #06182f;
  color: rgba(255,255,255,.5);
}

footer div {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 9px;
  letter-spacing: 1.5px;
}

/* REVEAL */

.reveal {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity .8s ease, transform .8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* MOBILE */

@media (max-width: 1050px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-card {
    max-width: 620px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 800px) {
  .nav {
    position: fixed;
    top: 78px;
    right: 0;
    width: min(82vw, 320px);
    height: calc(100vh - 78px);
    padding: 30px;
    flex-direction: column;
    background: var(--surface);
    border-left: 1px solid var(--line);
    transform: translateX(100%);
    transition: .3s;
  }

  .nav.open {
    transform: translateX(0);
  }

  .menu-toggle {
    display: block;
  }

  .about-grid,
  .education-card,
  .cv-card {
    grid-template-columns: 1fr;
  }

  .skills-grid,
  .certificates-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    left: 6px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    padding-left: 35px;
  }

  .timeline-dot {
    position: absolute;
    left: 0;
  }

  .contact-links a {
    grid-template-columns: 1fr auto;
  }

  .contact-links span {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .hero h1 {
    letter-spacing: -2px;
  }

  .hero-stats {
    gap: 15px;
  }

  .hero-stats strong {
    font-size: 17px;
  }

  .hero-stats span {
    font-size: 8px;
  }

  .section {
    padding-top: 85px;
    padding-bottom: 85px;
  }

  .certificate-modal,
  .cv-modal {
    padding: 15px;
  }

  .modal-nav {
    bottom: 25px;
    top: auto;
  }

  .modal-nav.prev {
    left: 25px;
  }

  .modal-nav.next {
    right: 25px;
  }

  .modal-title {
    bottom: 90px;
    width: 70%;
  }

  .fixed-cv {
    left: 15px;
    bottom: 15px;
  }

  .back-to-top {
    right: 15px;
    bottom: 15px;
  }

  footer div {
    flex-direction: column;
  }
}
