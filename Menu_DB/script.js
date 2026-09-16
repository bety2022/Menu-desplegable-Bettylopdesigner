// ===================================================
// BettyLopDesigner — Menú Desplegable
// Lógica de interactividad
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

  const hamburger   = document.getElementById('hamburger');
  const navLinks    = document.getElementById('navLinks');
  const searchToggle = document.getElementById('searchToggle');
  const searchBox   = document.getElementById('searchBox');
  const searchInput = document.getElementById('searchInput');
  const cartBtn     = document.getElementById('cartBtn');
  const cartCount   = document.getElementById('cartCount');
  const dropdowns   = document.querySelectorAll('.dropdown');

  // --- Menú hamburguesa (móvil) ---
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // --- Dropdowns: clic para abrir/cerrar (necesario en móvil; en
  //     escritorio también funciona por :hover vía CSS) ---
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const alreadyOpen = dropdown.classList.contains('open');
      dropdowns.forEach(d => d.classList.remove('open'));
      if (!alreadyOpen) dropdown.classList.add('open');
    });
  });

  // Cierra los dropdowns si se hace clic fuera de ellos
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
  });

  // --- Buscador desplegable ---
  searchToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = searchBox.classList.toggle('open');
    if (isOpen) searchInput.focus();
  });

  searchBox.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('click', () => {
    searchBox.classList.remove('open');
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== ''){
      alert(`Buscando: "${searchInput.value.trim()}"\n(conecta esto a tu backend o buscador real)`);
    }
  });

  // --- Carrito (demo): suma 1 cada vez que se hace clic ---
  let items = 0;
  cartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    items++;
    cartCount.textContent = items;
  });

  // Cierra el menú móvil al hacer clic en un enlace normal (no dropdown)
  document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

});
