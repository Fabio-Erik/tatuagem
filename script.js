document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const bgVideo = document.getElementById('bg-video');
  if (bgVideo) {
    bgVideo.playbackRate = 0.4; // velocidade do vídeo
  }

  const header = document.getElementById('main-header');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobile = document.getElementById('close-mobile');

  /* ===================== MENU HAMBÚRGUER (NA ROLAGEM) ===================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  burger.addEventListener('click', () => mobileMenu.style.display = 'flex');
  closeMobile.addEventListener('click', () => mobileMenu.style.display = 'none');
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) mobileMenu.style.display = 'none';
  });

  /* ===================== PORTFÓLIO (Dados e Injeção) ===================== */
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
    { src: "./imagens/portfolio/img (32).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (33).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (34).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (35).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (36).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (37).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (38).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (39).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (40).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (41).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (42).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (43).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (44).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (45).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (46).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (47).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (48).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (49).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (50).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (51).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (52).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (53).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (54).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (55).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (56).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (57).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (58).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (59).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (60).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (61).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (62).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (63).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (64).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (65).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (66).jpg", desc: "Tatuagem feminina delicada" },
    { src: "./imagens/portfolio/img (67).jpg", desc: "Tatuagem feminina delicada" }
  ];

  // Injeção de Imagens no Portfólio Visível (Primeiras 12)
  const imagensVisiveis = imagens.slice(0, 12);

  imagensVisiveis.forEach((img, index) => {
    const div = document.createElement('div');
    div.className = 'item';
    const imagem = document.createElement('img');
    imagem.src = img.src;
    imagem.alt = img.desc;
    div.dataset.desc = img.desc;
    div.dataset.index = index; // Adiciona índice
    div.appendChild(imagem);
    portfolioGrid.appendChild(div);
  });

  /* ===================== GALERIA COMPLETA (Visualização total) ===================== */
  const galeria = document.getElementById('galeria-completa');
  const galeriaGrid = document.querySelector('.galeria-grid');

  // Injeção de Imagens na Galeria Completa
  imagens.forEach((img, index) => {
    const div = document.createElement('div');
    div.className = 'item';
    const imagem = document.createElement('img');
    imagem.src = img.src;
    imagem.alt = img.desc;
    div.dataset.desc = img.desc;
    div.dataset.index = index; // Adiciona índice
    div.appendChild(imagem);
    galeriaGrid.appendChild(div);
  });

  document.getElementById('ver-mais').addEventListener('click', () => {
    galeria.classList.add('show');
  });

  document.getElementById('fechar-galeria').addEventListener('click', () => {
    galeria.classList.remove('show');
  });

  // Fechar Galeria Completa ao clicar fora do conteúdo
  galeria.addEventListener('click', (e) => {
    if (e.target.id === 'galeria-completa') {
      galeria.classList.remove('show');
    }
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

  /* ===================== CARROSSEL DE SERVIÇOS (LÓGICA FINAL) ===================== */
  const carouselContainer = document.getElementById('services-carousel');
  const track = carouselContainer.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');

  // === Importante: Garanta que esta contagem esteja correta no seu HTML ===
  const originalCards = Array.from(track.children);
  const totalOriginalCards = originalCards.length;
  //========================================================================

  const allCards = originalCards;
  let index = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 768) {
      return 1;
    } else {
      return 5;
    }
  }

  function getSlideWidth(visibleCount) {
    const card = allCards[0];
    if (!card) return 0;

    const gap = 20;
    // O slide width é a largura real do card + o gap para o próximo slide
    return card.offsetWidth + gap;
  }

  function updateCarousel(smoothTransition = true) {
    const visibleCount = getVisibleCount();
    const slideWidth = getSlideWidth(visibleCount);

    const initialPadding = 40; // O padding que está em .carousel: padding: 0 40px;

    if (!smoothTransition) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.4s ease';
    }

    let moveX = index * slideWidth;

    // CORREÇÃO MOBILE/INICIALIZAÇÃO: Aplica um ajuste de 40px para a esquerda
    // para alinhar o primeiro card com a borda do container (compensando o padding).
    if (visibleCount === 1 && index === 0) {
      // Puxa o carrossel para a esquerda com base no padding/margem do primeiro card.
      // O valor 20px é 40px (padding) - 20px (gap)
      moveX = -initialPadding + (20 - (initialPadding / 2)); // Ajuste fino baseado na sua inspeção
    }

    track.style.transform = `translateX(-${moveX}px)`;
  }

  // -----------------------------------------------------------

  // Navegação Next (Parada no final)
  nextBtn.addEventListener('click', () => {
    const visibleCount = getVisibleCount();
    // O índice máximo é o primeiro índice do último grupo visível.
    const maxIndex = totalOriginalCards - visibleCount;

    if (index < maxIndex) {
      index++;
      updateCarousel();
    }
  });

  // Navegação Prev (Parada no início)
  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  // =========================================================================
  // INICIALIZAÇÃO E RESPONSIVIDADE
  // =========================================================================

  // Posição inicial
  track.style.transition = 'none';
  index = 0;
  updateCarousel(false); // Chama a função para aplicar o ajuste de desalinhamento

  // Recalcula o tamanho e reposiciona ao redimensionar a tela
  window.addEventListener('resize', () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, totalOriginalCards - visibleCount);

    // Garante que o índice não ultrapasse o limite
    if (index > maxIndex) {
      index = maxIndex;
    }

    updateCarousel(false);
  });

  // =========================================================================
  // INICIALIZAÇÃO E RESPONSIVIDADE
  // =========================================================================

  // Posiciona no primeiro item ORIGINAL (índice 0)
  track.style.transition = 'none';
  index = 0;
  updateCarousel(false);

  // Recalcula o tamanho e reposiciona ao redimensionar a tela
  window.addEventListener('resize', () => {
    const visibleCount = getVisibleCount();
    // Garante que o índice máximo seja pelo menos 0 (para o caso de 1 card visível)
    const maxIndex = Math.max(0, totalOriginalCards - visibleCount);

    // Se o índice atual estiver além do limite da nova tela, ajusta-o
    if (index > maxIndex) {
      index = maxIndex;
    }

    updateCarousel(false);
  });


  /* ===================== MODAL/LIGHTBOX ===================== */

  const modal = document.getElementById('portfolio-modal');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.querySelector('.modal-close');
  const modalPrev = document.querySelector('.modal-prev');
  const modalNext = document.querySelector('.modal-next');

  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    updateModalContent();
    modal.classList.remove('hidden');
  }

  function updateModalContent() {
    const imgData = imagens[currentIndex];
    modalImg.src = imgData.src;
    modalImg.alt = imgData.desc;
    modalDesc.textContent = imgData.desc;
  }

  function goToPrev() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagens.length - 1;
    updateModalContent();
  }

  function goToNext() {
    currentIndex = (currentIndex < imagens.length - 1) ? currentIndex + 1 : 0;
    updateModalContent();
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  // Abertura do Modal ao clicar na imagem
  portfolioGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.item');
    if (item) {
      openModal(parseInt(item.dataset.index));
    }
  });

  galeriaGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.item');
    if (item) {
      openModal(parseInt(item.dataset.index));
    }
  });

  // Event Listeners do Modal
  modalClose.addEventListener('click', closeModal);
  modalPrev.addEventListener('click', goToPrev);
  modalNext.addEventListener('click', goToNext);

  // Fechar modal ao clicar fora da imagem
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  });
});