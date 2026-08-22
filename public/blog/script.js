/* ===================================================
   Gofer AI – Shared Script
   Handles: Particles, Translations, Reveal, Lang
   =================================================== */

// ── Translations ──────────────────────────────────────
const translations = {
    en: {
        // Nav
        nav_features:   'Features',
        nav_about:      'About',
        nav_docs:       'Docs',
        nav_blog:       'Blog',
        nav_newsletter: 'Newsletter',
        nav_faq:        'FAQ',
        nav_gofer_home: 'Home',

        btn_join_waitlist: 'Join Waitlist',
        btn_read_post:     'Read Post',
        btn_read_dispatch: 'Read Dispatch',
        btn_read_more:     'Read More →',

        // ── Newsletter ──
        header_newsletter: 'Newsletter',
        nav_recent_dispatches: 'Recent Dispatches',
        nav_full_newsletter: 'Full Newsletter',
        nav_recent_posts: 'Recent Posts',
        nav_blog_history: 'Blog History',
        btn_read_more_blogs: 'Read More Blogs →',

        jump_to_date: 'Jump to Date',
        month_august:   'August',
        month_july:     'July',
        month_june:     'June',
        month_may:      'May',
        month_april:    'April',
        month_march:    'March',
        month_february: 'February',

        month_aug_2026: 'August 2026',
        month_jul_2026: 'July 2026',
        month_jun_2026: 'June 2026',
        month_may_2026: 'May 2026',
        month_apr_2026: 'April 2026',
        month_mar_2026: 'March 2026',
        month_feb_2026: 'February 2026',

        aug_kicker:  'Waitlist Now Open',
        aug_title:   'Our Demo Waitlist Is Open! Secure Your Spot Today',
        aug_date:    'August 2026',
        aug_desc_nl: "The Gofer AI demo waitlist is officially open. Sign up with your email on our demo page to claim your early access spot. Have questions? We'd love to hear from you!",

        jul_kicker:  'Special Dispatch',
        jul_title:   "Meet the Visionaries: Inside Gofer AI's 2026 Summer Cohort",
        jul_date:    'July 2026',
        jul_desc_nl: 'Meet Gabrielle, Joseph, and Tayo. These three extraordinary interns are shaping the future of spatial computing and robotics data at Gofer AI this summer. Discover their work, background, and vision.',

        jun_kicker: 'Silicon Valley Takeover',
        jun_title:  "Inside Gofer AI's Strategic NVIDIA HQ Visit",
        jun_date:   'June 2026',
        jun_desc:   'Inside our high-level immersion at NVIDIA HQ in Santa Clara, collaborating with the NVIDIA Inception for Startups team to develop our vision and business strategy.',

        may_kicker: 'Power Moves & Product Release',
        may_title:  'Taking the Stanford Stage, Google & NVIDIA Partnerships, & First Open Source Release',
        may_date:   'May 2026',
        may_desc:   'A landmark month featuring our pitch at the Stanford Breakthrough Demo Day, acceptance into NVIDIA Inception & Google for Startups, and our first open-source release.',

        apr_kicker: 'Building Our Momentum',
        apr_title:  'Making It Official: Gofer AI Incorporates & Secures Stanford Accelerator Spot',
        apr_date:   'April 2026',
        apr_desc:   'Marking a defining chapter in our journey: Gofer AI officially incorporates as a company and earns a spot in the prestigious Stanford Breakthrough Accelerator.',

        mar_kicker: 'Founder Interview',
        mar_title:  'How To Win A Hackathon: Our Toolkit And How AWS Kiro Made Our Vision Possible',
        mar_date:   'March 2026',
        mar_desc:   "Join us as we sit down with Developer Advocate Engineer Saurabh Dahal to detail how our team leveraged Amazon Web Services' Kiro to dominate a major robotics hackathon and secure early-stage funding.",

        feb_kicker: 'Where It All Started',
        feb_title:  'Gofer AI: From Hackathon-Winning Project To Robotics Start-Up Company',
        feb_date:   'February 2026',
        feb_desc:   "How we took 2nd Place at the LabLab 'Launch & Fund Your Own Startup' Hackathon and forged the core robotics data vision that drives us today.",

        link_return_recent: '← Return to Recent Dispatches',

        // ── Blog ──
        header_blog:      'Blog',
        nav_blog_active:  'Blog',

        // Blog hero banner
        hero_eyebrow:  'Blog',
        hero_title_1:  'The Future of',
        hero_title_2:  'Healthcare Robotics',
        hero_lead:     "From hospital care to everyday support, robotics and AI are helping people live healthier, safer, and more independent lives. Here's what's next.",
        hero_cta:      'Read the Latest Posts',
        hero_f1_title: 'Better Patient Care',
        hero_f1_desc:  'More support. More independence.',
        hero_f2_title: 'Smarter Assistive Robots',
        hero_f2_desc:  'Built on real-world data.',
        hero_f3_title: 'Healthier Communities',
        hero_f3_desc:  'Technology that includes everyone.',
        hero_f4_title: 'A More Independent Future',
        hero_f4_desc:  'Powered by people and AI.',

        // Blog index card: Healthcare Robotics
        blog_healthcare_kicker: 'Robotics & Care',
        blog_healthcare_title:  'Where Assistive Robots Can Make Care More Human',
        blog_healthcare_date:   'August 2026',
        blog_healthcare_desc:   "Assistive robots are moving into everyday care. A grounded look at what's working today, where the training data actually matters, and how to build it with privacy first.",

        // Article: Healthcare Robotics body
        hc_kicker:      'Robotics & Care',
        hc_title:       'Where Assistive Robots Can Make Care More Human',
        hc_date:        'August 2026',
        hc_credit:      'Photo: <a href="https://www.opb.org/article/2025/03/31/think-out-loud-robotic-feeding-assistant-robotics-motot-impairments-food-disabilities-caregivers/" style="color:var(--brand-blue);font-weight:600;" target="_blank" rel="noopener">OPB</a>',
        hc_lead:        "Robots are turning up in places we once thought were too personal for machines: at the bedside, at the kitchen table, in the daily routines of people who need a hand. The interesting question isn't whether they can do the work. It's whether they can do it in a way that makes care feel more human, not less.",
        hc_h_need:      'The need is growing',
        hc_p_need1:     'The math is hard to ignore. The World Health Organization estimates that more than 2.5 billion people already rely on an assistive product, and that number is heading toward 3.5 billion by 2050. Among people over 60, roughly two in three will need some kind of support. At the same time, there simply aren’t enough caregivers to go around, and the ones we have are stretched thin.',
        hc_p_need2:     'Assistive robots won’t close that gap on their own. But they can take pressure off the routine, physical parts of care, so people can spend their time on the parts that actually require a person.',
        hc_h_working:   "What's already working",
        hc_p_working1:  "This isn't science fiction anymore. In New York, the state office for the aging has placed ElliQ, a tabletop companion robot, in the homes of hundreds of older adults to help with isolation and daily check-ins. PARO, a robotic seal used in dementia care, has appeared in real clinical pilots. ReWalk's exoskeleton has cleared regulators and helps people with spinal cord injuries stand and walk. Research robots like Stretch have been tested in people's homes for everyday tasks.",
        hc_p_working2:  'None of these replace a nurse or a family member. They handle one slice of the day, and they do it consistently.',
        hc_h_limits:    'The promise, and the limits',
        hc_p_limits:    'The upside is real: more independence for the person, less strain on the caregiver, and a bit more dignity in tasks that can be hard to ask for help with. But the evidence is still mixed. Some tools help a lot in one setting and barely move the needle in another. Honest pilots measure that difference instead of assuming it.',
        hc_h_data:      'Where the data actually matters',
        hc_p_data:      'For physical AI, not all of these tasks are equal. Companionship and monitoring generate a lot of signal but carry the highest privacy risk, because they happen around a person all day. Mobility and transfer, like helping someone stand, sit, or move, are where good demonstration data is most valuable and hardest to collect safely. Everyday tasks like preparing food or handling objects sit in between: useful to learn from, and easier to capture without putting anyone on camera.',
        hc_h_privacy:   'Privacy comes first',
        hc_p_privacy:   "Health settings raise the bar. HIPAA and basic decency point the same way: collect less, protect what you keep, and separate anything sensitive from the task itself. The simplest rule we follow is this: record the task, not the patient's identity. A robot can learn how to steady a spoon or fold a blanket without ever needing to know whose kitchen it's in.",
        hc_h_now:       'What partners can do now',
        hc_p_now_intro: 'If you run a care organization and want to help build this responsibly, a few things matter more than the rest:',
        hc_now1:        'Start outside direct patient care, in kitchens, storerooms, and back-of-house tasks.',
        hc_now2:        'Capture the whole task, not just the highlight, so the data reflects how work really happens.',
        hc_now3:        'Treat your organization as the pilot unit, with one team and one clear workflow.',
        hc_now4:        'Run a short ethics and privacy checklist before anything is recorded.',
        hc_now5:        'Measure one quick win, then decide whether to expand.',
        hc_h_outlook:   'The road ahead',
        hc_p_outlook:   "In the near term, expect assistive robots in the low-stakes, repetitive corners of care. Over the next few years, mobility and transfer support will mature as the data and the safety case catch up. Further out, the goal isn't a robot that replaces human care. It's one that quietly handles the parts that wear people down, so the human parts get more time.",
        hc_h_sources:   'Sources',
        hc_p_sources:   'The figures and examples here draw on public reporting and research from the World Health Organization, the New York State Office for the Aging, the U.S. Department of Health and Human Services, and peer-reviewed studies on assistive robotics.',
        hc_cta:         'Gofer AI works with organizations to turn approved, everyday tasks into high-quality training data for robots, carefully, and with privacy built in. If that sounds like a fit for your team, <a href="/contact" style="color:var(--brand-blue);font-weight:600;">we’d like to hear from you</a>.',
        hc_back:        '&larr; Back to Blog',

        // ── FAQ ──
        header_faq: 'FAQ',
        jump_to_section: 'Jump to Section',
        faq_categories: 'Categories',
        nav_featured:        'Featured Overview',
        nav_getting_started: 'Getting Started & Tasks',
        nav_earnings_payouts:'Revenue & Licensing',
        nav_data_privacy:    'Data & Privacy',
        nav_support_contact: 'Support & Help',
        nav_robotics_faq:    'Robotics & Technology',
        nav_company_faq:     'Company Background',

        btn_read_full_answer: 'Read Full Overview →',

        faq_featured_kicker: 'Platform Overview',
        faq_featured_title:  'What is Gofer AI?',
        faq_featured_desc:   'Gofer AI helps businesses and community organizations turn approved examples of everyday hands-on work — sorting, packing, folding, stocking, food handling, tool use, and other object interactions — into structured training data for physical AI and robotics. During the organization-led beta, approved teams capture short task demonstrations with the GoferEco app. Our capture platform is coming soon for organizations.',

        faq_q_how_works:   'Q: How does it work?',
        faq_a_how_works:   '<p>Getting started through an approved Partner Organization takes three simple steps:</p><ol class="faq-steps"><li><strong>Join your organization\'s program</strong> in the GoferEco app using an organization code or invitation.</li><li><strong>Follow the on-screen prompt</strong> for an assigned Task and record a short clip (usually under a couple of minutes).</li><li><strong>Submit it</strong> for review. Once it\'s accepted and verified, it\'s added to your program\'s activity.</li></ol>',
        faq_q_get_started: 'Q: What do I need to get started?',
        faq_a_get_started: 'A: A supported smartphone and access to an approved Partner Program. No special equipment. Your organization provides an organization code or invitation, and adult participants complete a quick one-time verification before their first submission.',
        faq_q_phones:      'Q: What phones are supported?',
        faq_a_phones:      'A: GoferEco is available on iPhone. Recording uses your phone\'s camera and motion sensors, so it runs on a real device (not an emulator).',
        faq_q_age:         'Q: Do I have to be 18?',
        faq_a_age:         'A: Yes. Gofer is for adults only (18+), and there\'s a quick one-time age and identity check before you can submit your first clip.',

        faq_q_earnings: 'Q: How does the commercial model work?',
        faq_a_earnings: 'A: Revenue share for the organization-led beta is generally governed by the Partner Agreement and paid to the Partner Organization when qualifying data is licensed. An individual is paid directly by Gofer AI only if a written Task offer says so, and no specific revenue is guaranteed.',

        faq_q_ownership: 'Q: Who owns the recordings?',
        faq_a_ownership: 'A: Organizations and their participants retain ownership of what they record, subject to the license granted when a submission is accepted. Partner Organizations control which purchaser industries their program data can be licensed to.',
        faq_q_uses:      'Q: What are my recordings used for?',
        faq_a_uses:      'A: They become training examples that help robots learn everyday hand skills. Some uses are always off-limits, no matter what — <strong>military, defence, and surveillance are never permitted.</strong>',
        faq_q_privacy:   'Q: Is my privacy protected?',
        faq_a_privacy:   'A: Yes. You decide what to record and which uses you allow, and we handle your data with care. Full details are in our <a href="/privacy-policy" style="color: var(--brand-blue);">Privacy Policy</a> and <a href="/contributor-terms" style="color: var(--brand-blue);">Contributor Terms</a>, linked from the app and this site.',

        faq_q_help: 'Q: How do I get help or ask a question?',
        faq_a_help: 'A: Reach out through the <a href="/contact" style="color: var(--brand-blue);">contact link on goferai.space</a> and we\'ll get back to you.',

        company_q1: 'Q: When was Gofer AI founded?',
        company_q2: 'Q: Where is the team located?',
        company_q3: 'Q: Are you currently hiring?',
        company_q4: 'Q: Who are your investors?',
        company_q5: 'Q: How can we partner with you?',

        rob_q1: 'Q: What is a Semantic VLA?',
        rob_q2: 'Q: How does RAG apply to robotics?',
        rob_q3: 'Q: What is the "data bottleneck"?',
        rob_q4: 'Q: What are imitation learning pipelines?',
        rob_q5: 'Q: How do spatial AI models work?'
    },

    es: {
        nav_features:   'Especificaciones',
        nav_about:      'Sobre Nosotros',
        nav_docs:       'Documentación',
        nav_blog:       'Blog',
        nav_newsletter: 'Novedades',
        nav_faq:        'Preguntas Frecuentes',
        nav_gofer_home: 'Inicio',

        btn_join_waitlist: 'Unirse a la Lista de Espera',
        btn_read_post:     'Leer Publicación',
        btn_read_dispatch: 'Leer Despacho',
        btn_read_more:     'Leer Más →',

        header_newsletter: 'Novedades',
        nav_recent_dispatches: 'Despachos Recientes',
        nav_full_newsletter: 'Todas las Novedades',
        nav_recent_posts: 'Publicaciones Recientes',
        nav_blog_history: 'Historial del Blog',
        btn_read_more_blogs: 'Más Artículos →',

        jump_to_date: 'Ir a Fecha',
        month_august:   'Agosto',
        month_july:     'Julio',
        month_june:     'Junio',
        month_may:      'Mayo',
        month_april:    'Abril',
        month_march:    'Marzo',
        month_february: 'Febrero',

        month_aug_2026: 'Agosto 2026',
        month_jul_2026: 'Julio 2026',
        month_jun_2026: 'Junio 2026',
        month_may_2026: 'Mayo 2026',
        month_apr_2026: 'Abril 2026',
        month_mar_2026: 'Marzo 2026',
        month_feb_2026: 'Febrero 2026',

        aug_kicker:  'Lista de Espera Abierta',
        aug_title:   '¡Nuestra Lista de Espera Está Abierta! Asegura Tu Lugar Hoy',
        aug_date:    'Agosto 2026',
        aug_desc_nl: 'La lista de espera del demo de Gofer AI está oficialmente abierta.',

        jul_kicker:  'Despacho Especial',
        jul_title:   'Conoce a los Visionarios: El Equipo de Verano 2026 de Gofer AI',
        jul_date:    'Julio 2026',
        jul_desc_nl: 'Conoce a Gabrielle, Joseph y Tayo, tres extraordinarios pasantes que están moldeando el futuro de la computación espacial.',

        jun_kicker: 'Toma de Silicon Valley',
        jun_title:  'Dentro de la Visita Estratégica de Gofer AI a la Sede de NVIDIA',
        jun_date:   'Junio 2026',
        jun_desc:   'Una inmersión de alto nivel en la sede de NVIDIA en Santa Clara.',

        may_kicker: 'Grandes Movimientos y Lanzamiento de Producto',
        may_title:  'En el Escenario de Stanford, Alianzas con Google y NVIDIA, y Primer Lanzamiento de Código Abierto',
        may_date:   'Mayo 2026',
        may_desc:   'Un mes histórico con nuestra presentación en el Stanford Breakthrough Demo Day y aceptación en NVIDIA Inception y Google for Startups.',

        apr_kicker: 'Construyendo Nuestro Impulso',
        apr_title:  'Haciendo Oficial: Gofer AI Se Incorpora y Asegura un Lugar en el Acelerador de Stanford',
        apr_date:   'Abril 2026',
        apr_desc:   'Un capítulo definitorio: Gofer AI se incorpora oficialmente y gana un lugar en el Stanford Breakthrough Accelerator.',

        mar_kicker: 'Entrevista con Fundador',
        mar_title:  'Cómo Ganar un Hackathon: Nuestras Herramientas y Cómo AWS Kiro Hizo Posible Nuestra Visión',
        mar_date:   'Marzo 2026',
        mar_desc:   'Hablamos con el Ingeniero Promotor de Desarrolladores Saurabh Dahal sobre cómo nuestro equipo usó AWS Kiro para dominar un hackathon de robótica.',

        feb_kicker: 'Donde Todo Comenzó',
        feb_title:  'Gofer AI: De Proyecto Ganador de Hackathon a Empresa de Robótica',
        feb_date:   'Febrero 2026',
        feb_desc:   'Cómo obtuvimos el 2° Lugar en el hackathon de LabLab y forjamos la visión central de datos robóticos que nos impulsa hoy.',

        link_return_recent: '← Volver a Despachos Recientes',

        header_blog:     'Blog',
        nav_blog_active: 'Blog',

        // Banner del blog
        hero_eyebrow:  'Blog',
        hero_title_1:  'El Futuro de la',
        hero_title_2:  'Robótica en la Salud',
        hero_lead:     'Desde el cuidado hospitalario hasta el apoyo cotidiano, la robótica y la IA ayudan a las personas a vivir de forma más sana, segura e independiente. Esto es lo que viene.',
        hero_cta:      'Leer las Últimas Publicaciones',
        hero_f1_title: 'Mejor Atención al Paciente',
        hero_f1_desc:  'Más apoyo. Más independencia.',
        hero_f2_title: 'Robots Asistenciales Más Inteligentes',
        hero_f2_desc:  'Construidos con datos del mundo real.',
        hero_f3_title: 'Comunidades Más Sanas',
        hero_f3_desc:  'Tecnología que incluye a todos.',
        hero_f4_title: 'Un Futuro Más Independiente',
        hero_f4_desc:  'Impulsado por personas y la IA.',

        // Tarjeta del blog: Robótica en la Atención
        blog_healthcare_kicker: 'Robótica y Cuidado',
        blog_healthcare_title:  'Dónde los Robots Asistenciales Pueden Hacer el Cuidado Más Humano',
        blog_healthcare_date:   'Agosto 2026',
        blog_healthcare_desc:   'Los robots asistenciales están llegando al cuidado cotidiano. Una mirada realista a lo que ya funciona, dónde importan de verdad los datos de entrenamiento y cómo construirlos priorizando la privacidad.',

        // Artículo: cuerpo de Robótica en la Atención
        hc_kicker:      'Robótica y Cuidado',
        hc_title:       'Dónde los Robots Asistenciales Pueden Hacer el Cuidado Más Humano',
        hc_date:        'Agosto 2026',
        hc_credit:      'Foto: <a href="https://www.opb.org/article/2025/03/31/think-out-loud-robotic-feeding-assistant-robotics-motot-impairments-food-disabilities-caregivers/" style="color:var(--brand-blue);font-weight:600;" target="_blank" rel="noopener">OPB</a>',
        hc_lead:        'Los robots están apareciendo en lugares que antes considerábamos demasiado personales para una máquina: junto a la cama, en la mesa de la cocina, en las rutinas diarias de quienes necesitan ayuda. La pregunta interesante no es si pueden hacer el trabajo. Es si pueden hacerlo de una manera que haga que el cuidado se sienta más humano, no menos.',
        hc_h_need:      'La necesidad va en aumento',
        hc_p_need1:     'Las cifras son difíciles de ignorar. La Organización Mundial de la Salud estima que más de 2.500 millones de personas ya dependen de un producto de apoyo, y esa cifra se encamina hacia los 3.500 millones para 2050. Entre las personas mayores de 60 años, aproximadamente dos de cada tres necesitarán algún tipo de apoyo. Al mismo tiempo, sencillamente no hay suficientes cuidadores, y los que hay están sobrecargados.',
        hc_p_need2:     'Los robots asistenciales no cerrarán esa brecha por sí solos. Pero pueden aliviar la parte rutinaria y física del cuidado, para que las personas dediquen su tiempo a lo que de verdad requiere una persona.',
        hc_h_working:   'Lo que ya funciona',
        hc_p_working1:  'Esto ya no es ciencia ficción. En Nueva York, la oficina estatal para la tercera edad ha colocado a ElliQ, un robot de compañía de mesa, en los hogares de cientos de adultos mayores para ayudar con el aislamiento y los saludos diarios. PARO, una foca robótica usada en el cuidado de la demencia, ha aparecido en pilotos clínicos reales. El exoesqueleto de ReWalk ha superado la aprobación regulatoria y ayuda a personas con lesiones medulares a ponerse de pie y caminar. Robots de investigación como Stretch se han probado en hogares para tareas cotidianas.',
        hc_p_working2:  'Ninguno reemplaza a un enfermero o a un familiar. Se encargan de una parte del día, y lo hacen de forma constante.',
        hc_h_limits:    'La promesa y los límites',
        hc_p_limits:    'El beneficio es real: más independencia para la persona, menos carga para el cuidador y un poco más de dignidad en tareas que cuesta pedir ayuda para hacer. Pero la evidencia todavía es dispareja. Algunas herramientas ayudan mucho en un contexto y apenas marcan la diferencia en otro. Los pilotos honestos miden esa diferencia en lugar de darla por hecha.',
        hc_h_data:      'Dónde importan de verdad los datos',
        hc_p_data:      'Para la IA física, no todas estas tareas son iguales. La compañía y el monitoreo generan mucha señal, pero conllevan el mayor riesgo de privacidad, porque ocurren alrededor de una persona todo el día. La movilidad y las transferencias, como ayudar a alguien a ponerse de pie, sentarse o moverse, son donde los buenos datos de demostración resultan más valiosos y más difíciles de recopilar de forma segura. Las tareas cotidianas, como preparar comida o manipular objetos, quedan en el medio: útiles para aprender y más fáciles de capturar sin poner a nadie frente a la cámara.',
        hc_h_privacy:   'La privacidad va primero',
        hc_p_privacy:   'Los entornos de salud exigen más. La ley HIPAA y el sentido común apuntan en la misma dirección: recopilar menos, proteger lo que se guarda y separar cualquier dato sensible de la tarea en sí. La regla más simple que seguimos es esta: registrar la tarea, no la identidad del paciente. Un robot puede aprender a sostener una cuchara o a doblar una manta sin necesitar saber nunca de quién es la cocina.',
        hc_h_now:       'Lo que las organizaciones pueden hacer ahora',
        hc_p_now_intro: 'Si diriges una organización de cuidado y quieres ayudar a construir esto de forma responsable, algunas cosas importan más que el resto:',
        hc_now1:        'Empieza fuera de la atención directa al paciente: en cocinas, almacenes y tareas de trastienda.',
        hc_now2:        'Captura la tarea completa, no solo el momento clave, para que los datos reflejen cómo ocurre el trabajo de verdad.',
        hc_now3:        'Trata a tu organización como la unidad piloto, con un equipo y un flujo de trabajo claro.',
        hc_now4:        'Aplica una breve lista de verificación de ética y privacidad antes de grabar nada.',
        hc_now5:        'Mide un logro rápido y luego decide si ampliar.',
        hc_h_outlook:   'El camino por delante',
        hc_p_outlook:   'A corto plazo, espera robots asistenciales en los rincones del cuidado de bajo riesgo y repetitivos. En los próximos años, el apoyo a la movilidad y las transferencias madurará a medida que avancen los datos y el caso de seguridad. Más adelante, la meta no es un robot que reemplace el cuidado humano. Es uno que se ocupe en silencio de las partes que agotan a las personas, para que las partes humanas tengan más tiempo.',
        hc_h_sources:   'Fuentes',
        hc_p_sources:   'Las cifras y los ejemplos aquí se basan en información pública e investigaciones de la Organización Mundial de la Salud, la Oficina para la Tercera Edad del Estado de Nueva York, el Departamento de Salud y Servicios Humanos de EE. UU. y estudios revisados por pares sobre robótica asistencial.',
        hc_cta:         'Gofer AI trabaja con organizaciones para convertir tareas cotidianas aprobadas en datos de entrenamiento de alta calidad para robots, con cuidado y con la privacidad incorporada desde el inicio. Si eso encaja con tu equipo, <a href="/contact" style="color:var(--brand-blue);font-weight:600;">nos encantaría saber de ti</a>.',
        hc_back:        '&larr; Volver al Blog',

        header_faq:          'Preguntas',
        jump_to_section:     'Ir a Sección',
        faq_categories:      'Categorías',
        nav_featured:        'Descripción Destacada',
        nav_getting_started: 'Cómo Empezar y Tareas',
        nav_earnings_payouts:'Ingresos y Licencias',
        nav_data_privacy:    'Propiedad y Privacidad',
        nav_support_contact: 'Soporte y Ayuda',
        nav_robotics_faq:    'Robótica y Tecnología',
        nav_company_faq:     'Sobre la Empresa',

        btn_read_full_answer: 'Leer Descripción Completa →',

        faq_featured_kicker: 'Descripción General',
        faq_featured_title:  '¿Qué es Gofer AI?',
        faq_featured_desc:   'Gofer AI ayuda a empresas y organizaciones comunitarias a convertir ejemplos aprobados del trabajo manual cotidiano — clasificar, empacar, doblar, reabastecer, manipular alimentos, usar herramientas y otras interacciones con objetos — en datos de entrenamiento estructurados para la IA física y la robótica. Durante la beta liderada por organizaciones, los equipos aprobados capturan breves demostraciones de tareas con la aplicación GoferEco. Nuestra plataforma de captura estará disponible próximamente para organizaciones.',

        faq_q_how_works:   'P: ¿Cómo funciona?',
        faq_a_how_works:   '<p>Empezar a través de una Organización Asociada aprobada requiere tres pasos sencillos:</p><ol class="faq-steps"><li><strong>Únete al programa de tu organización</strong> en la aplicación GoferEco con un código de organización o una invitación.</li><li><strong>Sigue la instrucción en pantalla</strong> de una Tarea asignada y graba un video corto (generalmente menos de un par de minutos).</li><li><strong>Envíalo</strong> para revisión. Una vez aceptado y verificado, se añade a la actividad de tu programa.</li></ol>',
        faq_q_get_started: 'P: ¿Qué necesito para empezar?',
        faq_a_get_started: 'R: Un teléfono inteligente compatible y acceso a un Programa de Socios aprobado. Sin equipo especial. Tu organización proporciona un código de organización o una invitación, y los participantes adultos completan una verificación rápida única antes de su primer envío.',
        faq_q_phones:      'P: ¿Qué teléfonos son compatibles?',
        faq_a_phones:      'R: GoferEco está disponible en iPhone. La grabación utiliza la cámara y los sensores de movimiento de tu teléfono, por lo que se ejecuta en un dispositivo real (no en un emulador).',
        faq_q_age:         'P: ¿Tengo que tener 18 años?',
        faq_a_age:         'R: Sí. Gofer es solo para adultos (18+), y hay una verificación rápida de edad e identidad antes de que puedas enviar tu primer clip.',

        faq_q_earnings: 'P: ¿Cómo funciona el modelo comercial?',
        faq_a_earnings: 'R: La participación en los ingresos para la beta liderada por organizaciones se rige generalmente por el Acuerdo de Socios y se paga a la Organización Asociada cuando se licencian datos que califican. Gofer AI paga directamente a una persona solo si una oferta de Tarea por escrito así lo indica, y no se garantiza ningún ingreso específico.',

        faq_q_ownership: 'P: ¿Quién es dueño de las grabaciones?',
        faq_a_ownership: 'R: Las organizaciones y sus participantes conservan la propiedad de lo que graban, sujeto a la licencia otorgada cuando se acepta un envío. Las Organizaciones Asociadas controlan a qué industrias compradoras se pueden licenciar los datos de su programa.',
        faq_q_uses:      'P: ¿Para qué se utilizan mis grabaciones?',
        faq_a_uses:      'R: Se convierten en ejemplos de entrenamiento que ayudan a los robots a aprender habilidades manuales cotidianas. Algunos usos siempre están prohibidos, pase lo que pase: <strong>el uso militar, de defensa y de vigilancia nunca está permitido.</strong>',
        faq_q_privacy:   'P: ¿Está protegida mi privacidad?',
        faq_a_privacy:   'R: Sí. Tú decides qué grabar y qué usos permites, y tratamos tus datos con cuidado. Todos los detalles están en nuestra <a href="/privacy-policy" style="color: var(--brand-blue);">Política de Privacidad</a> y <a href="/contributor-terms" style="color: var(--brand-blue);">Términos del Contribuyente</a>.',

        faq_q_help: 'P: ¿Cómo obtengo ayuda o hago una pregunta?',
        faq_a_help: 'R: Contáctanos a través del <a href="/contact" style="color: var(--brand-blue);">enlace de contacto en goferai.space</a> y te responderemos.',

        company_q1: 'P: ¿Cuándo se fundó Gofer AI?',
        company_q2: 'P: ¿Dónde está ubicado el equipo?',
        company_q3: 'P: ¿Están contratando actualmente?',
        company_q4: 'P: ¿Quiénes son sus inversores?',
        company_q5: 'P: ¿Cómo podemos asociarnos con ustedes?',

        rob_q1: 'P: ¿Qué es un VLA Semántico?',
        rob_q2: 'P: ¿Cómo se aplica RAG a la robótica?',
        rob_q3: 'P: ¿Qué es el "cuello de botella de datos"?',
        rob_q4: 'P: ¿Qué son los canales de aprendizaje por imitación?',
        rob_q5: 'P: ¿Cómo funcionan los modelos de IA espacial?'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    currentLang = lang;
    document.documentElement.lang = lang;

    const t = translations[lang];
    if (t) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                if (typeof t[key] === 'string' && (t[key].includes('<') || t[key].includes('&'))) {
                    el.innerHTML = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });
    }

    const labelEl = document.getElementById('lang-current-label');
    if (labelEl) labelEl.textContent = lang.toUpperCase();

    const flagEl = document.getElementById('lang-current-flag');
    if (flagEl) {
        const _flagDir = (flagEl.getAttribute('src') || '').replace(/[^/]*$/, '');
        flagEl.src = _flagDir + (lang === 'en' ? 'enflag.png' : 'esflag.svg');
        flagEl.alt = lang === 'en' ? 'English flag' : 'Bandera de España';
    }

    try { localStorage.setItem('gofer_lang_new', lang); } catch(e) {}
}

function initPage() {
    let saved = 'en';
    try { saved = localStorage.getItem('gofer_lang_new') || 'en'; } catch(e) {}
    setLanguage(saved);

    // Apply intentional, slow sequential stagger delays to Recent Dispatches (0.50s -> 1.00s -> 1.50s)
    document.querySelectorAll('.journal-grid').forEach(container => {
        const items = container.querySelectorAll(':scope > .entry-card, :scope > .reveal');
        items.forEach((item, idx) => {
            const delay = ((idx + 1) * 0.50).toFixed(2) + 's';
            item.style.setProperty('transition-delay', delay, 'important');
        });
    });

    document.querySelectorAll('.grid-row, .intern-links, .social-links').forEach(container => {
        const items = container.querySelectorAll(':scope > .reveal, :scope > * > .reveal, :scope > article.reveal, :scope > div.reveal');
        items.forEach((item, idx) => {
            item.style.setProperty('transition-delay', (idx * 0.50) + 's', 'important');
        });
    });

    // Enforce distinct left-to-right (0.0s -> 0.60s) sequential delay on blog cards
    document.querySelectorAll('.blog-grid').forEach(container => {
        const items = container.querySelectorAll(':scope > .blog-card, :scope > .reveal');
        items.forEach((item, idx) => {
            const delay = (idx % 2 === 0) ? '0s' : '0.60s';
            item.style.setProperty('transition-delay', delay, 'important');
        });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('active'));
    }

    // Setup smooth in-memory turbo page transitions
    setupPageTransitions();
}

// ── In-Memory Turbo Page Swap Engine ────────────────────────
const pageCache = new Map();
let isNavigating = false;

function prefetchPage(url) {
    if (!url || pageCache.has(url)) return;
    fetch(url)
        .then(res => res.text())
        .then(html => {
            pageCache.set(url, html);
        })
        .catch(() => {});
}

// ── Curtain helpers ───────────────────────────────────
function getCurtain() {
    let curtain = document.getElementById('page-curtain');
    if (!curtain) {
        curtain = document.createElement('div');
        curtain.id = 'page-curtain';
        document.body.appendChild(curtain);
    }
    return curtain;
}

function curtainDown() {
    return new Promise(resolve => {
        const curtain = getCurtain();
        curtain.classList.remove('curtain-out');
        curtain.classList.add('curtain-in');
        setTimeout(resolve, 520);
    });
}

function curtainUp() {
    const curtain = getCurtain();
    curtain.classList.remove('curtain-in');
    curtain.classList.add('curtain-out');
}

async function navigateTo(url, isPopState = false) {
    if (isNavigating) return;
    isNavigating = true;

    // Separate file path from hash anchor
    const hashIdx = url.indexOf('#');
    const filePart = hashIdx >= 0 ? url.slice(0, hashIdx) : url;
    const hashPart = hashIdx >= 0 ? url.slice(hashIdx + 1) : null;
    const cacheKey = filePart || url;

    // Safety timeout: curtain will ALWAYS lift after max 1.8s
    const safetyTimer = setTimeout(() => {
        curtainUp();
        isNavigating = false;
    }, 1800);

    try {
        // 1. Drop the curtain to cover the page swap
        await curtainDown();

        let html = pageCache.get(cacheKey);
        if (!html) {
            const res = await fetch(cacheKey);
            if (!res.ok) throw new Error('Fetch failed');
            html = await res.text();
            pageCache.set(cacheKey, html);
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const newContainer = doc.querySelector('.container');
        const currentContainer = document.querySelector('.container');

        if (!newContainer || !currentContainer) {
            window.location.href = url;
            return;
        }

        // 2. Retain active background video without reloading if same video source
        const newVideoSrc = doc.querySelector('.fluid-header-container video source')?.getAttribute('src');
        const currentVideo = document.querySelector('.fluid-header-container video');
        const currentVideoSrc = currentVideo?.querySelector('source')?.getAttribute('src');

        if (currentVideo && newVideoSrc && newVideoSrc !== currentVideoSrc) {
            const sourceEl = currentVideo.querySelector('source');
            if (sourceEl) sourceEl.setAttribute('src', newVideoSrc);
            currentVideo.load();
            currentVideo.play().catch(() => {});
        }

        // 3. Update Title & Body attributes
        document.title = doc.title;
        document.body.className = doc.body.className;
        ['data-page-type', 'data-article', 'data-blog-article', 'data-faq-article'].forEach(attr => {
            if (doc.body.hasAttribute(attr)) {
                document.body.setAttribute(attr, doc.body.getAttribute(attr));
            } else {
                document.body.removeAttribute(attr);
            }
        });

        // 4. Update Header Sub-Nav & Top Bar Active Links
        const newTopNav = doc.querySelector('.top-header-links');
        const currentTopNav = document.querySelector('.top-header-links');
        if (newTopNav && currentTopNav) currentTopNav.innerHTML = newTopNav.innerHTML;

        const newSeamlessNav = doc.querySelector('.nav-links');
        const currentSeamlessNav = document.querySelector('.nav-links');
        if (newSeamlessNav && currentSeamlessNav) currentSeamlessNav.innerHTML = newSeamlessNav.innerHTML;

        const newHeaderTitle = doc.querySelector('.header-title');
        const currentHeaderTitle = document.querySelector('.header-title');
        if (newHeaderTitle && currentHeaderTitle) currentHeaderTitle.innerHTML = newHeaderTitle.innerHTML;

        // 5. Swap Content (behind curtain)
        currentContainer.innerHTML = newContainer.innerHTML;

        if (!isPopState) {
            window.history.pushState({ url }, '', url);
        }

        // 6. Scroll to position
        if (hashPart) {
            const target = document.getElementById(hashPart);
            if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        // 7. Reinitialise page
        initPage();

        // 8. Clear safety timer and lift curtain smoothly
        clearTimeout(safetyTimer);
        setTimeout(() => {
            curtainUp();
            isNavigating = false;
        }, 120);

    } catch (err) {
        clearTimeout(safetyTimer);
        // Fallback: direct browser navigation
        window.location.href = url;
    }
}

function isValidInternalLink(link, href) {
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
    if (link.target === '_blank' || link.hasAttribute('download')) return false;
    const isInternal = !href.startsWith('http://') && !href.startsWith('https://') || href.includes(window.location.hostname);
    return isInternal && (href.endsWith('.html') || href.includes('.html#') || href.startsWith('../') || href.startsWith('./') || !href.includes('://'));
}

let transitionsBound = false;
function setupPageTransitions() {
    if (transitionsBound) return;
    transitionsBound = true;

    try {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        pageCache.set(currentFile, document.documentElement.outerHTML);
    } catch(e) {}

    // Pre-fetch on hover/touch for instant loading
    document.addEventListener('mouseover', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (isValidInternalLink(link, href)) {
            const fileOnly = href.includes('#') ? href.split('#')[0] : href;
            prefetchPage(fileOnly);
        }
    }, { passive: true });

    document.addEventListener('touchstart', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (isValidInternalLink(link, href)) {
            const fileOnly = href.includes('#') ? href.split('#')[0] : href;
            prefetchPage(fileOnly);
        }
    }, { passive: true });

    // Intercept clicks for seamless in-memory DOM swap
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

        if (isValidInternalLink(link, href)) {
            e.preventDefault();
            navigateTo(href);
        }
    });

    // Instant Back/Forward navigation
    window.addEventListener('popstate', () => {
        const target = window.location.pathname.split('/').pop() || 'index.html';
        const hash = window.location.hash.slice(1) || null;
        navigateTo(hash ? target + '#' + hash : target, true);
    });
}

function onPageReady() {
    initPage();
    curtainUp();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageReady);
} else {
    onPageReady();
}

window.addEventListener('pageshow', () => { curtainUp(); });
window.addEventListener('load', () => { curtainUp(); });

// ── Particle canvas (floating data dots) ─────────────────
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [], width, height;

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const n = Math.floor((width * height) / 14000);
        for (let i = 0; i < n; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.4,
                angle: Math.random() * Math.PI * 2,
                angleSpeed: Math.random() * 0.015 + 0.005
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(75, 104, 255, 0.25)';
        particles.forEach(p => {
            p.x += p.speedX;
            p.angle += p.angleSpeed;
            p.y += Math.sin(p.angle) * 0.55;
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', initCanvas);
    initCanvas();
    animateParticles();
}
