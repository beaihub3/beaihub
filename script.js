document.addEventListener('DOMContentLoaded', function() {

    // Efeito de sombra na barra de navegação ao rolar a página
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 26, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.backgroundColor = 'var(--background-dark)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Funcionalidade do menu móvel
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            // Cria um menu dropdown se ele não existir
            if (!document.querySelector('.mobile-menu')) {
                const mobileMenu = document.createElement('div');
                mobileMenu.classList.add('mobile-menu');
                mobileMenu.innerHTML = navMenu.innerHTML;
                navbar.appendChild(mobileMenu);

                mobileMenu.style.display = 'flex'; // Mostra o menu
            } else {
                const mobileMenu = document.querySelector('.mobile-menu');
                mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'flex' : 'none';
            }
        });
    }

    // Fecha o menu móvel ao clicar em um link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.style.display = 'none';
            }
        });
    });

});

// Adicionando um pouco de CSS para o menu móvel via JS para manter o CSS principal limpo
const style = document.createElement('style');
style.innerHTML = `
    .mobile-menu {
        display: none;
        flex-direction: column;
        background-color: var(--background-dark);
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    }
    .mobile-menu ul {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;
document.head.appendChild(style);