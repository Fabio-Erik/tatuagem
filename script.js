document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const header = document.getElementById('main-header');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobile = document.getElementById('close-mobile');

  // Mostrar menu hamburguer ao rolar
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

  burger.addEventListener('click', () => { mobileMenu.style.display = 'flex'; });
  closeMobile.addEventListener('click', () => { mobileMenu.style.display = 'none'; });
  mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) mobileMenu.style.display = 'none'; });

  // Portfólio (gerar imagens manualmente escolhidas)
  const portfolioGrid = document.querySelector('.portfolio-grid');
  if (portfolioGrid) {
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
      { src: "./imagens/portfolio/img (32).jpg", desc: "Tatuagem feminina delicada" },
      // adicione quantas quiser aqui
    ];

    imagens.forEach((img, i) => {
      const div = document.createElement('div');
      div.className = 'item';
      const imagem = document.createElement('img');
      imagem.src = img.src;
      imagem.alt = img.desc;
      div.appendChild(imagem);
      div.dataset.desc = img.desc;
      portfolioGrid.appendChild(div);
    });
  }


  // Modal Portfólio
  const modal = document.getElementById('portfolio-modal');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.querySelector('.modal-close');
  const modalPrev = document.querySelector('.modal-prev');
  const modalNext = document.querySelector('.modal-next');
  let currentIndex = 0;
  const itemsAll = Array.from(document.querySelectorAll('.portfolio-grid .item'));

  function openModalFor(i) {
    const it = itemsAll[i];
    modalImg.src = it.querySelector('img').src;
    modalDesc.textContent = it.dataset.desc;
    modal.classList.remove('hidden');
  }
  function closeModal() { modal.classList.add('hidden'); }

  modalClose.addEventListener('click', closeModal);
  modalPrev.addEventListener('click', () => { currentIndex = (currentIndex - 1 + itemsAll.length) % itemsAll.length; openModalFor(currentIndex); });
  modalNext.addEventListener('click', () => { currentIndex = (currentIndex + 1) % itemsAll.length; openModalFor(currentIndex); });
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  itemsAll.forEach((it, idx) => { it.addEventListener('click', () => { currentIndex = idx; openModalFor(currentIndex); }); });

  // Enviar formulário para WhatsApp
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const text = encodeURIComponent(`Olá, meu nome é ${data.get('name')}.\nTelefone: ${data.get('phone')}.\nTipo de tatuagem: ${data.get('type')}.`);
    window.open(`https://wa.me/5561996923908?text=${text}`, '_blank');
  });

  /* --- Carrossel de Serviços --- */
  /* --- Carrossel de Serviços --- */
  const track = document.querySelector('#services-carousel .carousel-track');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const cards = Array.from(track.children);

  const visibleCount = 5; // mostrar 5 cards por vez
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
    if (index < total - visibleCount) {
      index++;
    } else {
      index = 0; // reinicia
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = total - visibleCount;
    }
    updateCarousel();
  });

  // Garante que inicia mostrando o primeiro (Flash Tattoo)
  updateCarousel();

});
