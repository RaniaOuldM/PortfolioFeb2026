/* ============================================================
   PORTFOLIO RANIA — translations.js
   Système bilingue EN ↔ FR
   Usage : data-i18n="clé" sur les éléments HTML
   La langue est mémorisée dans localStorage
   ============================================================ */

const TRANSLATIONS = {

  /* ════════════════════════════════════════
     ENGLISH
  ════════════════════════════════════════ */
  en: {
    /* Navigation */
    nav_about:    'About',
    nav_work:     'Work',
    nav_projects: 'Projects',
    nav_contact:  'Contact',

    /* Home */
    home_coords:     '45.7640° N, 4.8357° E · Lyon, France',
    home_subtitle_1: 'Future',
    home_subtitle_2: 'Software Engineer',
    home_subtitle_3: 'passionate about Web Dev, Data &amp; AI',
    home_badge:      'Looking for a 3-year apprenticeship',
    tag_web:         'Web Dev',
    tag_data:        'Data',
    tag_ai:          'AI / ML',
    home_contact:    'Contact me',
    home_resume:     'My Resume',

    /* Légende Home droite */
    leg_degree:     'Formation',
    leg_gap:        'Gap year',
    leg_location:   'Location',
    leg_languages:  'Languages',
    leg_status:     'Status',
    leg_status_val: 'Open to work ✦',

    /* About — texte */
    about_title: 'Who am I?',
    about_who: `Graduated with a BUT GEII degree, I am currently strengthening my
programming skills during a dedicated gap year. I developed solid
foundations in <a href="#Projects">HTML and CSS</a> and aim to
consolidate my knowledge of <a href="#Projects">SQL, Python and PHP</a>
acquired during my degree, with the goal of becoming a software engineer.`,

    /* About — Langues */
    about_lang_title: 'Languages',
    lang_fr:          'French',
    lang_fr_val:      'C2 — Native',
    lang_en:          'English',
    lang_en_val:      'C1 — Fluent',
    lang_ar:          'Arabic',
    lang_ar_val:      'Native',
    lang_es:          'Spanish',
    lang_es_val:      'A2 — Basic',

    /* About — Programmation */
    about_prog_title: 'Programming',
    prog_html_lv:     'Solid',
    prog_py_lv:       'Good',
    prog_php_lv:      'Basics',

    /* About — Loisirs */
    about_hobbies_title: 'Hobbies',
    hobby_sport:         'Sports',
    hobby_sport_val:     'Rugby · Volleyball · Gym',
    hobby_read:          'Reading',
    hobby_read_val:      'Novels · Mangas',
    hobby_other:         'Other',
    hobby_other_val:     'Travel · Drawing · Music',

    /* About — Certifications */
    about_certif_title: 'Certifications',
    certif1_name:       'Responsive Web Design',
    certif1_period:     'Nov 2025',
    certif2_name:       'Figma UX/UI Design',
    certif2_period:     'Feb 2026',

    /* Work */
    work_title:   'Work Experiences',
    sncf_period:  'Summer 2023 · 12 weeks',
    sncf_type:    'Internship',
    sncf_p1:      'Improvement of a railway crossing on the Meximieux-Pérouges line',
    sncf_p2:      '2 teams: Technical Design &amp; Execution Documents',
    sncf_p3:      'Collaborative skills &amp; project management experience',
    sncf_btn:     'Internship Report →',
    trane_period: '2022 – 2023 · 1 year',
    trane_type:   'Apprenticeship',
    trane_p1:     'Management of HVAC &amp; BMS projects',
    trane_p2:     'Adherence to deadlines and budgets',
    trane_p3:     'HVAC expertise &amp; customer service',
    trane_btn:    'Apprenticeship Report →',

    /* Projects */
    proj_title:      'Projects',
    legend_academic: 'Academic',
    legend_personal: 'Personal',
    p1_badge:  'Academic · Sept 2023 – Apr 2024',
    p1_title:  'Smart drip water dispenser for rodents',
    p1_desc:   'Smart system detecting each lick to dispense precise water amounts and transmit daily consumption data.',
    p1_btn:    'Report →',
    p2_badge:  'Academic · Jan 2024',
    p2_title:  'Snacking Project',
    p2_desc:   'PLC-based control for a hot/cold vending machine — dispensing, payment &amp; stock management.',
    p2_btn:    'Report →',
    p3_badge:  'Academic · Feb 2024',
    p3_title:  'Supervision Project',
    p3_desc:   'Water tank level control with Schneider M340 PLC, SCADA remote monitoring via Citect.',
    p3_btn:    'Report →',
    p4_badge:  'Academic · Dec 2024',
    p4_title:  'Database Project',
    p4_desc:   'Web app to manage ADE scheduling data with statistics and change tracking via triggers.',
    p4_btn:    'Report →',
    p5_badge:  'Academic · Sep 2024 – Mar 2025',
    p5_desc:   'Web app for photovoltaic project management — roles, Kanban, solar simulations &amp; PDF exports.',
    p5_btn1:   'Spec →',
    p5_btn2:   'Demo →',
    p6_badge:  'Personal · Aug 2025',
    p6_title:  'First coded Portfolio',
    p6_btn:    'Visit →',
    p7_badge:  'Personal · Oct 2025',
    p7_title:  'Survey Form',
    p7_btn:    'Visit →',
    p8_badge:  'Personal · Oct 2025',
    p8_title:  'Tribute Page',
    p8_btn:    'Visit →',
    p9_badge:  'Personal · Oct 2025',
    p9_title:  'Technical Documentation',
    p9_btn:    'Visit →',
    p10_badge: 'Personal · Nov 2025',
    p10_title: 'Product Landing Page',
    p10_btn:   'Visit →',

    /* Contact */
    contact_title:    "Let's work<br/>together.",
    contact_sub:      'Open · Web Dev · Data · AI',
    contact_github:   'GitHub',
    contact_linkedin: 'LinkedIn',
    contact_email:    'rania.ouldmohammed@gmail.com',

    /* Footer */
    footer_left: '© 2026 · RANIA OULD MOHAMMED',
  },

  /* ════════════════════════════════════════
     FRANÇAIS
  ════════════════════════════════════════ */
  fr: {
    /* Navigation */
    nav_about:    'À propos',
    nav_work:     'Expériences',
    nav_projects: 'Projets',
    nav_contact:  'Contact',

    /* Home */
    home_coords:     '45.7640° N, 4.8357° E · Lyon, France',
    home_subtitle_1: 'Future',
    home_subtitle_2: 'Ingénieure Logiciel',
    home_subtitle_3: "passionnée par le Web Dev, la Data &amp; l'IA",
    home_badge:      "En recherche d'une alternance de 3 ans",
    tag_web:         'Web Dev',
    tag_data:        'Data',
    tag_ai:          'IA / ML',
    home_contact:    'Me contacter',
    home_resume:     'Mon CV',

    /* Légende Home droite */
    leg_degree:     'Formation',
    leg_gap:        'Année de césure',
    leg_location:   'Localisation',
    leg_languages:  'Langues',
    leg_status:     'Statut',
    leg_status_val: 'Disponible ✦',

    /* About — texte */
    about_title: 'Qui suis-je ?',
    about_who: `Diplômée d'un BUT GEII, je renforce actuellement mes compétences en
programmation lors d'une année de césure. J'ai développé des bases solides en
<a href="#Projects">HTML et CSS</a> et souhaite consolider mes connaissances en
<a href="#Projects">SQL, Python et PHP</a> acquises durant mon diplôme,
avec pour objectif de devenir ingénieure logiciel.`,

    /* About — Langues */
    about_lang_title: 'Langues',
    lang_fr:          'Français',
    lang_fr_val:      'C2 — Natif',
    lang_en:          'Anglais',
    lang_en_val:      'C1 — Courant',
    lang_ar:          'Arabe algérien',
    lang_ar_val:      'Natif',
    lang_es:          'Espagnol',
    lang_es_val:      'A2 — Notions',

    /* About — Programmation */
    about_prog_title: 'Programmation',
    prog_html_lv:     'Bases solides',
    prog_py_lv:       'Bonnes bases',
    prog_php_lv:      'Notions',

    /* About — Loisirs */
    about_hobbies_title: 'Loisirs',
    hobby_sport:         'Sports',
    hobby_sport_val:     'Rugby · Volley-ball · Musculation',
    hobby_read:          'Lecture',
    hobby_read_val:      'Romans · Mangas',
    hobby_other:         'Autres',
    hobby_other_val:     'Voyages · Dessin · Musique',

    /* About — Certifications */
    about_certif_title: 'Certifications',
    certif1_name:       'Responsive Web Design',
    certif1_period:     'Nov 2025',
    certif2_name:       'Figma UX/UI Design',
    certif2_period:     'Fév 2026',

    /* Work */
    work_title:   'Expériences professionnelles',
    sncf_period:  'Été 2023 · 12 semaines',
    sncf_type:    'Stage',
    sncf_p1:      "Amélioration d'un passage à niveau sur la ligne Meximieux-Pérouges",
    sncf_p2:      "2 équipes : Bureau d'études &amp; Documents d'exécution",
    sncf_p3:      'Compétences collaboratives &amp; gestion de projet',
    sncf_btn:     'Rapport de stage →',
    trane_period: '2022 – 2023 · 1 an',
    trane_type:   'Alternance',
    trane_p1:     'Gestion de projets CVC &amp; GTB',
    trane_p2:     'Respect des délais et budgets définis',
    trane_p3:     'Expertise CVC &amp; relation client',
    trane_btn:    "Rapport d'alternance →",

    /* Projects */
    proj_title:      'Projets',
    legend_academic: 'Académique',
    legend_personal: 'Personnel',
    p1_badge:  'Académique · Sept 2023 – Avr 2024',
    p1_title:  "Distributeur d'eau goutte-à-goutte pour rongeurs",
    p1_desc:   "Système intelligent détectant chaque lèchement pour distribuer une quantité précise d'eau et transmettre la consommation quotidienne.",
    p1_btn:    'Rapport →',
    p2_badge:  'Académique · Jan 2024',
    p2_title:  'Projet Snacking',
    p2_desc:   'Système de contrôle automate pour distributeur chaud/froid — distribution, paiement &amp; gestion des stocks.',
    p2_btn:    'Rapport →',
    p3_badge:  'Académique · Fév 2024',
    p3_title:  'Projet Supervision',
    p3_desc:   "Régulation du niveau d'eau via automate Schneider M340, télésurveillance SCADA via Citect.",
    p3_btn:    'Rapport →',
    p4_badge:  'Académique · Déc 2024',
    p4_title:  'Projet Base de Données',
    p4_desc:   'Application web de gestion des plannings ADE avec statistiques et suivi des modifications via triggers.',
    p4_btn:    'Sujet →',
    p5_badge:  'Académique · Sep 2024 – Mar 2025',
    p5_desc:   'Application web de gestion de projets photovoltaïques — rôles, Kanban, simulations solaires &amp; exports PDF.',
    p5_btn1:   'Cahier des charges →',
    p5_btn2:   'Démo →',
    p6_badge:  'Personnel · Août 2025',
    p6_title:  'Premier Portfolio codé',
    p6_btn:    'Voir →',
    p7_badge:  'Personnel · Oct 2025',
    p7_title:  'Formulaire de sondage',
    p7_btn:    'Voir →',
    p8_badge:  'Personnel · Oct 2025',
    p8_title:  'Page hommage',
    p8_btn:    'Voir →',
    p9_badge:  'Personnel · Oct 2025',
    p9_title:  'Documentation technique',
    p9_btn:    'Voir →',
    p10_badge: 'Personnel · Nov 2025',
    p10_title: 'Page produit',
    p10_btn:   'Voir →',

    /* Contact */
    contact_title:    'Et si on travaillait<br/>ensemble ?',
    contact_sub:      'Disponible · Web Dev · Data · IA',
    contact_github:   'GitHub',
    contact_linkedin: 'LinkedIn',
    contact_email:    'rania.ouldmohammed@gmail.com',

    /* Footer */
    footer_left: '© 2026 · RANIA OULD MOHAMMED',
  },
};

/* ── Applique les traductions ── */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr' : 'en');
  localStorage.setItem('portfolio-lang', lang);
}

/* ── Initialisation ── */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-btn');
  if (!btn) return;

  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  function updateBtn() {
    btn.textContent = currentLang === 'en' ? 'FR' : 'EN';
    btn.setAttribute('aria-label', currentLang === 'en' ? 'Passer en français' : 'Switch to English');
  }

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    applyTranslations(currentLang);
    updateBtn();
  });

  applyTranslations(currentLang);
  updateBtn();
});
