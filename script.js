/* ===================================================
   SUNCLUB — script.js
   =================================================== */

// ---------- TRANSLATIONS ----------
const translations = {
  ro: {
    // Navbar
    nav_about:    'Despre noi',
    nav_services: 'Servicii',
    nav_pricing:  'Prețuri',
    nav_lotions:  'Loțiuni',
    nav_blog:     'Blog',
    nav_promotii: 'Promoții',
    nav_contact:  'Contact',

    // Hero
    hero_label:       'Premium Tanning · Chișinău',
    hero_headline:    'Descoperă bronzul<br>cum nu ai mai<br>făcut-o până acum',
    hero_sub:         'Cabine verticale megaSun PureEnergy 5.0 · Tehnologie de top · Rezultate uniforme',
    hero_cta_pricing: 'Vezi abonamente',
    hero_cta_contact: 'Vezi promoții',

    // About
    about_label: 'Despre noi',
    about_title: 'Cel mai modern salon<br>de bronzare din oraș',
    about_p1:    'SUNCLUB este salonul de bronzare premium din Chișinău, dotat cu cele mai avansate cabine verticale <strong>megaSun PureEnergy 5.0</strong> — tehnologie germană de ultimă generație.',
    about_p2:    'Fiecare cabină este echipată cu sistem puternic de ventilație, spray cu apă răcoritoare și lămpi UV turbo, pentru un bronz uniform, confortabil și în deplină siguranță.',
    about_p3:    'Personalul nostru vă ghidează în alegerea programului și loțiunii potrivite, pentru rezultate vizibile încă de la prima ședință.',
    badge_cabins: 'Cabine<br>premium',
    badge_tech:   'Tehnologie<br>germană',
    badge_safe:   'Siguranță<br>certificată',

    // Services
    services_label:  'Servicii',
    services_title:  'Echipamente de top<br>pentru bronzul perfect',
    service1_count:  '3 cabine verticale',
    service1_name:   'megaSun PureEnergy 5.0',
    service1_desc:   'Cabine verticale de înaltă performanță cu lămpi UV de ultimă generație. Bronz uniform în timp scurt, sistem de ventilație puternic și spray cu apă răcoritoare pentru confort maxim.',
    service1_f1: 'Lămpi UV performante',
    service1_f2: 'Ventilație avansată',
    service1_f3: 'Spray cu apă răcoritoare',
    service1_f4: 'Bronz 360° uniform',
    service2_count:  '2 cabine picioare',
    service2_name:   'Bronzare Picioare',
    service2_desc:   'Cabine dedicate bronzării picioarelor pentru un rezultat complet, uniform de la cap la picioare. Tehnologie UV sigură și eficientă, inclusă în toate abonamentele.',
    service2_f1: 'Bronzare completă',
    service2_f2: 'Incluse în abonament',
    service2_f3: 'Rezultate rapide',
    service2_f4: 'Tehnologie UV sigură',
    service3_name: 'Inclus în orice pachet',
    include1: '10ml loțiune de bronzare',
    include2: 'Stickere pentru ochi',
    include3: 'Consultanță personalizată',
    include4: 'Acces cabine picioare',

    // Pricing
    pricing_label: 'Prețuri',
    pricing_title: 'Abonamente pentru<br>fiecare stil de viață',
    pricing_sub:   'Toate abonamentele includ acces la cabinele verticale megaSun și cabinele pentru picioare. Loțiunea și autocolantele sunt incluse în abonamentele superioare.',
    min:           'min',
    validity_4:    'Valabilitate 4 luni',
    validity_6:    'Valabilitate 6 luni',
    popular_badge: 'Popular',
    plan_f1: 'Cabine verticale megaSun',
    plan_f2: 'Cabine bronzare picioare',
    plan_f3: '10ml loțiune inclusă',
    plan_f4: 'Autocolante / stikini',
    plan_cta: 'Alege pachetul',
    walkin_label: 'Fără abonament',
    walkin_title: 'Plată per minut',
    walkin_desc:  'Vino oricând fără abonament. Plătești doar minutele folosite.',
    walkin_unit:  'lei/min',

    // Lotions
    lotions_label: 'Loțiuni',
    lotions_title: 'Loțiuni premium<br>pentru bronzul ideal',
    lotions_intro: 'Completează experiența de bronzare cu loțiunile noastre selecționate cu grijă — formule premium care îți amplifică bronzul și îngrijesc pielea.',
    lotion1_name: 'Loțiuni de Bronzare',
    lotion1_desc: 'Formule cu ulei de cânepă, aloe vera, vitamina A și uleiuri naturale pentru un bronz intens și uniform. Aplicare înainte de ședință.',
    lotion2_name: 'Loțiuni After-Tan',
    lotion2_desc: 'Hidratare profundă și prelungirea bronzului după ședință. Piele catifelată, nuanță durabilă.',
    lotions_cta:  'Află mai multe',

    // Blog
    blog_label: 'Blog',
    blog_title: 'Sfaturi & noutăți<br>din lumea bronzului',
    blog_cat1:  'Sfaturi',
    blog_cat2:  'Pregătire',
    blog_cat3:  'Tehnici',
    blog1_title:   'De ce să folosești loțiuni în salon?',
    blog1_excerpt: 'Loțiunile de bronzare nu sunt un simplu accesoriu — ele amplifică rezultatele, protejează pielea și prelungesc durata bronzului.',
    blog2_title:   'De ce să te bronzezi înainte de vacanță?',
    blog2_excerpt: 'Un bronz de bază obținut la salon îți protejează pielea de arsuri și îți asigură un ten uniform de la primele zile de plajă.',
    blog3_title:   'Cum obții un bronz frumos cu solarul?',
    blog3_excerpt: 'Află tehnicile esențiale pentru un bronz uniform, de lungă durată — de la pregătirea pielii până la îngrijirea post-ședință.',
    blog_read: 'Citește mai mult →',
    blog_all:  'Vezi toate articolele',

    // Contact
    contact_label:      'Contact',
    contact_title:      'Vino să ne vizitezi',
    contact_intro:      'Echipa noastră te așteaptă pentru o consultație gratuită și prima ta ședință de bronzare premium.',
    contact_addr_label: 'Adresă',
    contact_phone_label:'Telefon',

    // Footer
    footer_tagline:      'Salonul de bronzare premium din Chișinău.',
    footer_nav_title:    'Navigare',
    footer_contact_title:'Contact',
    footer_rights:       'Toate drepturile rezervate.',
  },

  ru: {
    // Navbar
    nav_about:    'О нас',
    nav_services: 'Услуги',
    nav_pricing:  'Цены',
    nav_lotions:  'Лосьоны',
    nav_blog:     'Блог',
    nav_promotii: 'Акции',
    nav_contact:  'Контакт',

    // Hero
    hero_label:       'Премиум загар · Кишинёв',
    hero_headline:    'Откройте загар,<br>какого вы ещё<br>не знали',
    hero_sub:         'Вертикальные кабины megaSun PureEnergy 5.0 · Передовые технологии · Равномерный результат',
    hero_cta_pricing: 'Посмотреть пакеты',
    hero_cta_contact: 'Смотреть акции',

    // About
    about_label: 'О нас',
    about_title: 'Самый современный<br>солярий в городе',
    about_p1:    'SUNCLUB — премиум-салон загара в Кишинёве, оснащённый самыми передовыми вертикальными кабинами <strong>megaSun PureEnergy 5.0</strong> — немецкие технологии последнего поколения.',
    about_p2:    'Каждая кабина оснащена мощной вентиляцией, освежающим спреем с водой и турбо УФ-лампами для равномерного, комфортного и безопасного загара.',
    about_p3:    'Наш персонал поможет выбрать подходящую программу и лосьон для видимых результатов уже с первого сеанса.',
    badge_cabins: 'Премиум<br>кабины',
    badge_tech:   'Немецкие<br>технологии',
    badge_safe:   'Сертифицированная<br>безопасность',

    // Services
    services_label:  'Услуги',
    services_title:  'Оборудование высшего класса<br>для идеального загара',
    service1_count:  '3 вертикальные кабины',
    service1_name:   'megaSun PureEnergy 5.0',
    service1_desc:   'Высокопроизводительные вертикальные кабины с УФ-лампами последнего поколения. Равномерный загар в кратчайшие сроки, мощная вентиляция и освежающий водный спрей для максимального комфорта.',
    service1_f1: 'Мощные УФ-лампы',
    service1_f2: 'Усовершенствованная вентиляция',
    service1_f3: 'Водяной освежающий спрей',
    service1_f4: 'Равномерный загар 360°',
    service2_count:  '2 кабины для ног',
    service2_name:   'Загар для ног',
    service2_desc:   'Специальные кабины для загара ног — равномерный результат с головы до пят. Безопасная и эффективная УФ-технология, включённая во все абонементы.',
    service2_f1: 'Полный загар',
    service2_f2: 'Включено в абонемент',
    service2_f3: 'Быстрый результат',
    service2_f4: 'Безопасные УФ-технологии',
    service3_name: 'Включено в каждый пакет',
    include1: '10 мл лосьона для загара',
    include2: 'Наклейки для глаз',
    include3: 'Индивидуальная консультация',
    include4: 'Доступ к кабинам для ног',

    // Pricing
    pricing_label: 'Цены',
    pricing_title: 'Абонементы<br>для любого стиля жизни',
    pricing_sub:   'Все абонементы включают доступ к вертикальным кабинам megaSun и кабинам для ног. Лосьон и наклейки включены в старшие пакеты.',
    min:           'мин',
    validity_4:    'Срок действия 4 месяца',
    validity_6:    'Срок действия 6 месяцев',
    popular_badge: 'Популярный',
    plan_f1: 'Вертикальные кабины megaSun',
    plan_f2: 'Кабины для загара ног',
    plan_f3: '10 мл лосьона включено',
    plan_f4: 'Автоколанты / стикини',
    plan_cta: 'Выбрать пакет',
    walkin_label: 'Без абонемента',
    walkin_title: 'Оплата за минуту',
    walkin_desc:  'Приходите в любое время без абонемента. Платите только за использованные минуты.',
    walkin_unit:  'лей/мин',

    // Lotions
    lotions_label: 'Лосьоны',
    lotions_title: 'Премиум-лосьоны<br>для идеального загара',
    lotions_intro: 'Дополните опыт загара нашими тщательно подобранными лосьонами — премиальные формулы усилят ваш загар и позаботятся о коже.',
    lotion1_name: 'Лосьоны для загара',
    lotion1_desc: 'Формулы с конопляным маслом, алоэ вера, витамином A и натуральными маслами для интенсивного и равномерного загара. Наносится до сеанса.',
    lotion2_name: 'Лосьоны After-Tan',
    lotion2_desc: 'Глубокое увлажнение и продление загара после сеанса. Бархатистая кожа, стойкий оттенок.',
    lotions_cta:  'Узнать больше',

    // Blog
    blog_label: 'Блог',
    blog_title: 'Советы и новости<br>мира загара',
    blog_cat1:  'Советы',
    blog_cat2:  'Подготовка',
    blog_cat3:  'Техники',
    blog1_title:   'Зачем использовать лосьоны в солярии?',
    blog1_excerpt: 'Лосьоны для загара — не просто аксессуар: они усиливают результат, защищают кожу и продлевают длительность загара.',
    blog2_title:   'Почему стоит загорать перед отпуском?',
    blog2_excerpt: 'Базовый загар, полученный в солярии, защищает кожу от ожогов и обеспечивает равномерный тон уже с первых дней на пляже.',
    blog3_title:   'Как получить красивый загар в солярии?',
    blog3_excerpt: 'Узнайте основные техники для равномерного и длительного загара — от подготовки кожи до ухода после сеанса.',
    blog_read: 'Читать далее →',
    blog_all:  'Все статьи',

    // Contact
    contact_label:      'Контакт',
    contact_title:      'Приходите к нам',
    contact_intro:      'Наша команда ждёт вас для бесплатной консультации и первого премиум-сеанса загара.',
    contact_addr_label: 'Адрес',
    contact_phone_label:'Телефон',

    // Footer
    footer_tagline:      'Премиум-салон загара в Кишинёве.',
    footer_nav_title:    'Навигация',
    footer_contact_title:'Контакт',
    footer_rights:       'Все права защищены.',
  }
};

// ---------- LANG SWITCHER ----------
let currentLang = localStorage.getItem('sunclub_lang') || 'ro';

function applyLang(lang) {
  if (!translations[lang]) lang = 'ro';
  currentLang = lang;
  localStorage.setItem('sunclub_lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-lang-content]').forEach(region => {
    const isVisible = region.dataset.langContent === lang;
    region.hidden = !isVisible;
    region.setAttribute('aria-hidden', String(!isVisible));
  });

  const suffix = lang === 'ru' ? 'Ru' : 'Ro';
  const pageTitle = document.body.dataset[`title${suffix}`];
  const pageDescription = document.body.dataset[`description${suffix}`];

  if (pageTitle) {
    document.title = pageTitle;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
  }

  if (pageDescription) {
    const description = document.querySelector('meta[name="description"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (description) description.setAttribute('content', pageDescription);
    if (ogDescription) ogDescription.setAttribute('content', pageDescription);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'ru' ? 'ru_MD' : 'ro_MD');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  if (typeof updateBurgerLabel === 'function') updateBurgerLabel();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ---------- MOBILE NAV ----------
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');

function updateBurgerLabel() {
  if (!burger || !drawer) return;
  const isOpen = drawer.classList.contains('open');
  const labels = currentLang === 'ru'
    ? { open: 'Открыть меню', close: 'Закрыть меню' }
    : { open: 'Deschide meniul', close: 'Închide meniul' };
  burger.setAttribute('aria-label', isOpen ? labels.close : labels.open);
}

function setDrawerState(isOpen) {
  if (!burger || !drawer) return;
  drawer.classList.toggle('open', isOpen);
  drawer.setAttribute('aria-hidden', String(!isOpen));
  burger.setAttribute('aria-expanded', String(isOpen));
  updateBurgerLabel();
}

if (burger && drawer) {
  burger.addEventListener('click', () => {
    setDrawerState(!drawer.classList.contains('open'));
  });

  drawer.querySelectorAll('.drawer__link').forEach(link => {
    link.addEventListener('click', () => setDrawerState(false));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && drawer.classList.contains('open')) {
      setDrawerState(false);
      burger.focus();
    }
  });
}

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
}, { passive: true });

// ---------- FOOTER YEAR ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- INIT ----------
applyLang(currentLang);
