// Script para animaciones y desplegables

document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para los botones "Ver detalles"
    const detailsButtons = document.querySelectorAll('.details-btn');
    
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                content.classList.remove('active');
                button.innerHTML = 'Ver detalles <i class="fas fa-chevron-down"></i>';
                button.setAttribute('aria-expanded', 'false');
            } else {
                content.classList.add('active');
                button.innerHTML = 'Ocultar detalles <i class="fas fa-chevron-up"></i>';
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Scroll suave para el botón "ELIGE TU OPCIÓN"
    const scrollBtn = document.querySelector('.scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#opciones');
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});