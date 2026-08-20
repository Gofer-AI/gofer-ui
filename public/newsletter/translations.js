/**
 * Gofer AI Newsletter — Language Toggle (EN / ES)
 * 
 * Rules:
 *  - "Gofer AI" is NEVER translated (kept as-is).
 *  - "AI" in standalone brand context stays "AI" (Gofer AI).
 *  - "AI" in generic/descriptive context → "IA" (inteligencia artificial).
 *  - Default language: EN.
 */

const translations = {
    en: {
        // Nav bar (top)
        nav_features:           'Features',
        nav_about:              'About',
        nav_docs:               'Docs',
        nav_newsletter:         'Newsletter',

        // Header / sub-nav
        header_newsletter:      'Newsletter',
        nav_gofer_home:         'Home',
        nav_recent_dispatches:  'Recent Dispatches',
        nav_full_newsletter:    'Full Newsletter',
        btn_join_waitlist:      'Unirse a la Lista de Espera',

        // Jump widget (newsletter.html)
        jump_to_date:           'Jump to Date',
        month_august:           'August',
        month_july:             'July',
        month_june:             'June',
        month_may:              'May',
        month_april:            'April',
        month_march:            'March',
        month_february:         'February',

        // Month section headings (newsletter.html)
        month_aug_2026:         'August 2026',
        month_jul_2026:         'July 2026',
        month_jun_2026:         'June 2026',
        month_may_2026:         'May 2026',
        month_apr_2026:         'April 2026',
        month_mar_2026:         'March 2026',
        month_feb_2026:         'February 2026',

        // August card
        aug_kicker:             'Waitlist Now Open',
        aug_title:              'Our Demo Waitlist Is Open! Secure Your Spot Today',
        aug_date:               'August 2026',
        aug_desc:               'The Gofer AI demo waitlist is officially open! Head to our demo page, enter your email, and claim your early access spot. Have questions? We\'d love to hear from you!',
        aug_desc_nl:            'The Gofer AI demo waitlist is officially open. Sign up with your email on our demo page to claim your early access spot. Have questions? We\'d love to hear from you!',

        // July card
        jul_kicker:             'Special Dispatch',
        jul_title:              'Meet the Visionaries: Inside Gofer AI\'s 2026 Summer Cohort',
        jul_date:               'July 2026',
        jul_desc:               'Meet Gabrielle, Joseph, and Tayo. These three extraordinary interns are shaping the future of spatial computing and robotics data at Gofer AI this summer.',
        jul_desc_nl:            'Meet Gabrielle, Joseph, and Tayo. These three extraordinary interns are shaping the future of spatial computing and robotics data at Gofer AI this summer. Discover their work, background, and vision.',

        // June card
        jun_kicker:             'Silicon Valley Takeover',
        jun_title:              'Inside Gofer AI\'s Strategic NVIDIA HQ Visit',
        jun_date:               'June 2026',
        jun_desc:               'Inside our high-level immersion at NVIDIA HQ in Santa Clara, collaborating with the NVIDIA Inception for Startups team to develop our vision and business strategy.',

        // May card
        may_kicker:             'Power Moves & Product Release',
        may_title:              'Taking the Stanford Stage, Google & NVIDIA Partnerships, & First Open Source Release',
        may_date:               'May 2026',
        may_desc:               'A landmark month featuring our pitch at the Stanford Breakthrough Demo Day, acceptance into NVIDIA Inception & Google for Startups, and our first open-source release.',

        // April card
        apr_kicker:             'Building Our Momentum',
        apr_title:              'Making It Official: Gofer AI Incorporates & Secures Stanford Accelerator Spot',
        apr_date:               'April 2026',
        apr_desc:               'Marking a defining chapter in our journey: Gofer AI officially incorporates as a company and earns a spot in the prestigious Stanford Breakthrough Accelerator.',

        // March card
        mar_kicker:             'Founder Interview',
        mar_title:              'How To Win A Hackathon: Our Toolkit And How AWS Kiro Made Our Vision Possible',
        mar_date:               'March 2026',
        mar_desc:               'Join us as we sit down with Developer Advocate Engineer Saurabh Dahal to detail how our team leveraged Amazon Web Services\' Kiro to dominate a major robotics hackathon and secure early-stage funding.',

        // February card
        feb_kicker:             'Where It All Started',
        feb_title:              'Gofer AI: From Hackathon-Winning Project To Robotics Start-Up Company',
        feb_date:               'February 2026',
        feb_desc:               'How we took 2nd Place at the LabLab \'Launch & Fund Your Own Startup\' Hackathon and forged the core robotics data vision that drives us today.',

        // Buttons & links
        btn_read_latest:        'Read Latest Dispatch',
        btn_read_dispatch:      'Read Dispatch',
        section_recent_dispatches: 'Recent Dispatches',
        link_view_full_newsletter: 'View Full Newsletter →',
        link_return_recent:     '← Return to Recent Dispatches',

        // Footer
        footer_contact:             'Contact',
        footer_privacy:             'Privacy',
        footer_contributor_terms:   'Contributor Terms',
    },

    es: {
        // Nav bar (top)
        nav_features:           'Especificaciones',
        nav_about:              'Sobre Nosotros',
        nav_docs:               'Documentación',
        nav_newsletter:         'Novedades',

        // Header / sub-nav
        header_newsletter:      'Novedades de Gofer AI',
        nav_gofer_home:         'Inicio',
        nav_recent_dispatches:  'Artículos recientes',
        nav_full_newsletter:    'Artículos completos',
        btn_join_waitlist:      'Unirse a la Lista de Espera',

        // Jump widget (newsletter.html)
        jump_to_date:           'Ir a Fecha',
        month_august:           'Agosto',
        month_july:             'Julio',
        month_june:             'Junio',
        month_may:              'Mayo',
        month_april:            'Abril',
        month_march:            'Marzo',
        month_february:         'Febrero',

        // Month section headings (newsletter.html)
        month_aug_2026:         'Agosto 2026',
        month_jul_2026:         'Julio 2026',
        month_jun_2026:         'Junio 2026',
        month_may_2026:         'Mayo 2026',
        month_apr_2026:         'Abril 2026',
        month_mar_2026:         'Marzo 2026',
        month_feb_2026:         'Febrero 2026',

        // August card
        aug_kicker:             'Lista de Espera Abierta',
        aug_title:              '¡Nuestra Lista de Espera del Demo Está Abierta! Asegura Tu Lugar Hoy',
        aug_date:               'Agosto 2026',
        aug_desc:               '¡La lista de espera del demo de Gofer AI está oficialmente abierta! Visita nuestra página de demo, ingresa tu correo electrónico y reclama tu lugar de acceso anticipado. ¿Tienes preguntas? ¡Nos encantaría escucharte!',
        aug_desc_nl:            'La lista de espera del demo de Gofer AI está oficialmente abierta. Regístrate con tu correo electrónico en nuestra página de demo para reclamar tu lugar de acceso anticipado. ¿Tienes preguntas? ¡Nos encantaría escucharte!',

        // July card
        jul_kicker:             'Artículo especial',
        jul_title:              'Conoce a los Visionarios: El Cohorte de Verano 2026 de Gofer AI',
        jul_date:               'Julio 2026',
        jul_desc:               'Conoce a Gabrielle, Joseph y Tayo. Estos tres extraordinarios practicantes están moldeando el futuro de la computación espacial y los datos de robótica en Gofer AI este verano.',
        jul_desc_nl:            'Conoce a Gabrielle, Joseph y Tayo. Estos tres extraordinarios practicantes están moldeando el futuro de la computación espacial y los datos de robótica en Gofer AI este verano. Descubre su trabajo, trayectoria y visión.',

        // June card
        jun_kicker:             'Conquista de Silicon Valley',
        jun_title:              'Dentro de la Visita Estratégica de Gofer AI a las Oficinas de NVIDIA',
        jun_date:               'Junio 2026',
        jun_desc:               'Nuestra inmersión de alto nivel en las oficinas de NVIDIA en Santa Clara, colaborando con el equipo de NVIDIA Inception para Startups para desarrollar nuestra visión y estrategia de negocio.',

        // May card
        may_kicker:             'Grandes Movimientos y Lanzamiento de Producto',
        may_title:              'En el Escenario de Stanford, Alianzas con Google y NVIDIA, y Primer Lanzamiento de Código Abierto',
        may_date:               'Mayo 2026',
        may_desc:               'Un mes histórico con nuestra presentación en el Stanford Breakthrough Demo Day, la aceptación en NVIDIA Inception y Google for Startups, y nuestro primer lanzamiento de código abierto.',

        // April card
        apr_kicker:             'Construyendo Nuestro Impulso',
        apr_title:              'Haciéndolo Oficial: Gofer AI Se Incorpora y Asegura un Lugar en el Acelerador de Stanford',
        apr_date:               'Abril 2026',
        apr_desc:               'Marcando un capítulo definitorio en nuestro camino: Gofer AI se incorpora oficialmente como empresa y obtiene un lugar en el prestigioso Acelerador Stanford Breakthrough.',

        // March card
        mar_kicker:             'Entrevista con el Fundador',
        mar_title:              'Cómo Ganar un Hackathon: Nuestro Kit de Herramientas y Cómo AWS Kiro Hizo Posible Nuestra Visión',
        mar_date:               'Marzo 2026',
        mar_desc:               'Nos sentamos con el Ingeniero Promotor de Desarrolladores Saurabh Dahal para detallar cómo nuestro equipo aprovechó Kiro de Amazon Web Services para dominar un importante hackathon de robótica y asegurar financiamiento en etapa temprana.',

        // February card
        feb_kicker:             'Donde Todo Comenzó',
        feb_title:              'Gofer AI: De Proyecto Ganador de Hackathon a Empresa Emergente de Robótica',
        feb_date:               'Febrero 2026',
        feb_desc:               'Cómo obtuvimos el 2.º Lugar en el Hackathon \'Lanza y Financia Tu Propia Startup\' de LabLab y forjamos la visión central de datos de robótica que nos impulsa hoy.',

        // Buttons & links
        btn_read_latest:        'Leer el último artículo',
        btn_read_dispatch:      'Leer artículo',
        section_recent_dispatches: 'Artículos recientes',
        link_view_full_newsletter: 'Ver artículos completos →',
        link_return_recent:     '← Volver a artículos recientes',

        // Footer
        footer_contact:             'Contacto',
        footer_privacy:             'Privacidad',
        footer_contributor_terms:   'Términos del Colaborador',
    }
};

// ── Language application engine ──────────────────────────────────────────────

let currentLang = 'en';

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    currentLang = lang;

    const headerTitle = document.querySelector('.header-title');
    if (headerTitle && !headerTitle.dataset.english) {
        headerTitle.dataset.english = headerTitle.innerHTML;
    }

    // Swap html[lang] attribute for accessibility
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    if (headerTitle) {
        headerTitle.innerHTML = lang === 'es'
            ? '<span class="header-novedades">Novedades de </span><span class="header-brand-gofer">Gofer </span><span class="brand-ai">AI</span>'
            : headerTitle.dataset.english;
    }

    // Update dropdown UI state
    const flagEl = document.getElementById('lang-current-flag');
    const labelEl = document.getElementById('lang-current-label');
    if (flagEl && labelEl) {
        if (lang === 'en') {
            flagEl.src = 'enflag.png';
            flagEl.alt = 'English flag';
            labelEl.textContent = 'EN';
        } else {
            flagEl.src = 'esflag.svg';
            flagEl.alt = 'Bandera de España';
            labelEl.textContent = 'ES';
        }
    }

    // Persist preference across page navigations
    try { localStorage.setItem('gofer_lang', lang); } catch(e) {}
}

// ── Auto-restore saved language on page load ─────────────────────────────────
(function () {
    let saved = 'en';
    try { saved = localStorage.getItem('gofer_lang') || 'en'; } catch(e) {}
    if (saved === 'es') {
        // Defer until DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => setLanguage('es'));
        } else {
            setLanguage('es');
        }
    }
})();
