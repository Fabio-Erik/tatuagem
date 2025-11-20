document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const header = document.getElementById('main-header');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobile = document.getElementById('close-mobile');

  /* ===================== MENU HAMBÚRGUER ===================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
      document.querySelector('.nav-list').style.display = 'none';
      document.querySelector('.contact-fixed').style.display = 'none';
      burger.style.display = 'flex';
    } else {
      header.classList.remove('scrolled');
      document.querySelector('.nav-list').style.display = 'flex';
      document.querySelector('.contact-fixed').style.display = 'block';
      burger.style.display = 'none';
    }
  });

  burger.addEventListener('click', () => mobileMenu.style.display = 'flex');
  closeMobile.addEventListener('click', () => mobileMenu.style.display = 'none');
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) mobileMenu.style.display = 'none';
  });

  /* ===================== PORTFÓLIO ===================== */
  const portfolioGrid = document.querySelector('.portfolio-grid');

  const imagens = [
    { src: "./imagens/portfolio/img (1).jpg", desc: "Tatuagem realista de leão" },
    { src: "./imagens/portfolio/img (2).jpg", desc: "Tatuagem de relógio com rosas" },
    { src: "./imagens/portfolio/img (3).jpg", desc: "Rosa preta sombreada" },
    { src: "./imagens/portfolio/img (4).jpg", desc: "Tatuagem de olho em realismo" },
    { src: "./imagens/portfolio/img (5).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (6).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (7).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (8).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (9).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (10).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (11).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (12).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (13).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (14).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (15).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (16).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (17).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (18).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (19).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (20).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (21).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (22).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (23).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (24).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (25).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (26).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (27).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (28).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (29).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (30).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (31).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (32).jpg", desc: "Tatuagem feminina delicada" }
  ];

  // 12 imagens na página principal
  const imagensVisiveis = imagens.slice(0, 12);

  imagensVisiveis.forEach(img => {
    const div = document.createElement('div');
    div.className = 'item';
    const imagem = document.createElement('img');
    imagem.src = img.src;
    imagem.alt = img.desc;
    div.dataset.desc = img.desc;
    div.appendChild(imagem);
    portfolioGrid.appendChild(div);
  });

  /* ===================== GALERIA COMPLETA ===================== */
  const galeria = document.getElementById('galeria-completa');
  const galeriaGrid = document.querySelector('.galeria-grid');

  imagens.forEach(img => {
    const div = document.createElement('div');
    div.className = 'item';
    const imagem = document.createElement('img');
    imagem.src = img.src;
    imagem.alt = img.desc;
    div.dataset.desc = img.desc;
    div.appendChild(imagem);
    galeriaGrid.appendChild(div);
  });

  document.getElementById('ver-mais').addEventListener('click', () => {
    galeria.classList.add('show');
  });

  document.getElementById('fechar-galeria').addEventListener('click', () => {
    galeria.classList.remove('show');
  });

  /* ===================== FORMULÁRIO PARA WHATSAPP ===================== */
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const text = encodeURIComponent(
      `Olá, meu nome é ${data.get('name')}.\nTelefone: ${data.get('phone')}.\nTipo de tatuagem: ${data.get('type')}.`
    );
    window.open(`https://wa.me/5561996923908?text=${text}`, '_blank');
  });

  /* ===================== CARROSSEL DE SERVIÇOS ===================== */
  const track = document.querySelector('#services-carousel .carousel-track');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const cards = Array.from(track.children);

  const visibleCount = 5;
  const total = cards.length;
  let index = 0;

  function updateCarousel() {
    const cardStyle = getComputedStyle(cards[0]);
    const gap = parseInt(cardStyle.marginRight || 15);
    const cardWidth = cards[0].offsetWidth + gap;
    const moveX = index * cardWidth;
    track.style.transform = `translateX(-${moveX}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index < total - visibleCount) ? index + 1 : 0;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : total - visibleCount;
    updateCarousel();
  });

  updateCarousel();
});
