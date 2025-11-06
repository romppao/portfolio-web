// Intro cinematográfica
window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const sound = document.getElementById('intro-sound');
    
    // Intentar reproducir sonido (puede ser bloqueado por el navegador)
    sound.play().catch(() => {
        console.log('Autoplay bloqueado por el navegador');
    });
    
    // Ocultar intro después de 5 segundos
    setTimeout(() => {
        intro.style.display = 'none';
    }, 5000);
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para mostrar subsecciones
function mostrarSubseccion(id) {
    // Obtener todas las galerías y videos
    const galerias = document.querySelectorAll('.galeria, .video-galeria');
    
    // Ocultar todas
    galerias.forEach(galeria => {
        galeria.classList.add('oculto');
    });
    
    // Mostrar la seleccionada
    const seleccionada = document.getElementById(id);
    if (seleccionada) {
        seleccionada.classList.remove('oculto');
    }
}

// Animación fade-in para elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
window.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.polaroid, .video-card, .bio, .contacto-info');
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});

// Efecto parallax sutil en el scroll
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                section.style.backgroundPosition = `center ${yPos}px`;
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

// Cursor personalizado (opcional - efecto cinematográfico)
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 500);
});

console.log('Portfolio Rompao - Cargado exitosamente \ud83c\udfac');
