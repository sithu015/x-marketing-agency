/**
 * X Marketing Agency — Application Core Logic
 * Standards: minimalist-ui, design-taste-frontend, modern-web-guidance
 */

// BILINGUAL TRANSLATION DICTIONARY
const translations = {
  en: {
    nav_overview: "Overview",
    nav_services: "Services",
    nav_cases: "Case Studies",
    nav_portfolio: "Portfolio",
    nav_clients: "Clients",
    nav_process: "Process",
    nav_cta: "Inquire",
    hero_tagline: "Independent Marketing Growth Practice",
    hero_title: "Strategic brand presence across digital & physical retail.",
    hero_desc: "X Marketing Agency partners with consumer brands, conglomerates, and retailers in Myanmar to turn attention into quantifiable commercial growth through disciplined media buying, editorial visual design, and viral short video production.",
    stat_clients_label: "Active Partners",
    stat_output_label: "Monthly Deliverables Managed",
    stat_model_label: "Service Scope",
    hero_cta_portfolio: "Explore Works",
    hero_cta_cases: "Landmark & Time Square Case Studies",
    overview_sub: "Foundations",
    overview_heading: "More Than Marketing. We Build Business Growth.",
    overview_desc: "We reject superficial vanity metrics. By synchronizing creative storytelling, retail presence, and scientific media buying, we help enterprises scale sustainably.",
    pillar_1_title: "Creativity",
    pillar_1_desc: "Bespoke visual graphic designs, high-converting product shots, engaging copywriting, and viral-ready vertical TikTok short scripts that capture immediate consumer attention.",
    pillar_2_title: "Technology",
    pillar_2_desc: "Meta Pixel, TikTok Events API, modern conversion tracking, automated lead routing, and scalable landing pages engineered for zero-friction consumer checkouts.",
    pillar_3_title: "Measurement",
    pillar_3_desc: "Transparent monthly KPI reporting, cost-per-result optimization, ROAS calculations, and clear advertising spend reconciliation without hidden markups.",
    pillar_4_title: "Strategy",
    pillar_4_desc: "Bridging digital awareness directly into physical in-store retail footfall. Aligning content pillars with actual inventory, promotions, and seasonal shopping cycles.",
    serv_sub: "Capabilities",
    serv_heading: "Everything You Need for Digital & Traditional Growth",
    serv_desc: "Structured end-to-end execution. From full outsourced marketing departments to hyper-targeted visual content and performance ad scaling.",
    s1_title: "Strategy & Consulting",
    s1_desc: "Holistic growth consulting, market positioning, audience segmentation, competitor analysis, and full sales funnel architecture tailored for the Myanmar business ecosystem.",
    s2_title: "Branding & Visual Design",
    s2_desc: "High-end visual identities that build immediate prestige. From luxury product photography post-production to impactful commercial social banners that halt scrolling thumbs.",
    s3_title: "Social Media Management",
    s3_desc: "End-to-end Facebook Page and TikTok account governance. Monthly publishing calendars, persuasive Burmese copywriting, trend-jacking, and community engagement support.",
    s4_title: "TikTok & Reels Video Production",
    s4_desc: "Full-service 9:16 vertical video production for TikTok and Facebook Reels. Concept drafting, scriptwriting, on-site shooting (2-3 days/mo), talent coordination, and editing.",
    s5_title: "Paid Media Buying & Ads",
    s5_desc: "Disciplined advertising spend execution across Meta (Facebook/Instagram) and TikTok Ads. Granular audience targeting, retargeting funnels, budget pacing, and ROAS focus.",
    s6_title: "Connecting Digital to Retail",
    s6_desc: '"Online brings them in. Offline turns them into customers." We design in-store POSM, retail promotion concepts, and seasonal launch events that turn followers into footfall.',
    cases_sub: "Featured Case Studies",
    cases_heading: "Enterprise Partnerships & Campaign Showcases",
    cases_subdesc: "Strategic multi-channel campaigns, high-impact visual design, and quantifiable brand growth delivered for leading enterprises.",
    port_sub: "Creative Registry",
    port_heading: "Creative Works Across Diverse Industries",
    port_desc: "Click any project to inspect high-definition visuals, campaign intent, creative direction, and industry vertical.",
    clients_sub: "Trust Registry",
    clients_heading: "Our Valued Clients & Partners",
    clients_desc: "Over 30 verified consumer brands, retail chains, and enterprise partners across Myanmar.",
    clients_caption: "Including Landmark United Holdings, Time Square Trading, BAKES by BBB, Dear Mary, Hwar Kway, Inle House, Khit's Boutique, Fauget, Marga, and more.",
    wf_sub: "Creative Operations",
    wf_heading: "6-Step Production Workflow & Creative Standards",
    wf_desc: "We operate with agency discipline. Every deliverable follows our structured review process, brand alignment checks, and platform compliance guidelines."
  },
  my: {
    nav_overview: "ခံယူချက်",
    nav_services: "ဝန်ဆောင်မှုများ",
    nav_cases: "ဖြစ်ရပ်လေ့လာချက်များ",
    nav_portfolio: "ဒီဇိုင်းလက်ရာများ",
    nav_clients: "မိတ်ဖက်များ",
    nav_process: "လုပ်ငန်းစဉ်",
    nav_cta: "စုံစမ်းရန်",
    hero_tagline: "သီးခြား စျေးကွက်ဖွံ့ဖြိုးတိုးတက်ရေး အေဂျင်စီ",
    hero_title: "Digital နှင့် Retail နှစ်ရပ်လုံးတွင် အမှတ်တံဆိပ်ကို ခိုင်မာစွာ ချဲ့ထွင်ပါ။",
    hero_desc: "X Marketing Agency သည် မြန်မာနိုင်ငံရှိ စီးပွားရေးလုပ်ငန်းကြီးများနှင့် လက်တွဲကာ စည်းကမ်းစနစ်ကျသော ကြော်ငြာစီမံခန့်ခွဲမှု၊ Editorial စတိုင် ဒီဇိုင်းလက်ရာများနှင့် ထိရောက်သော Short Video များဖြင့် အမှန်တကယ် အရောင်းတိုးတက်မှုကို ဖော်ဆောင်ပေးပါသည်။",
    stat_clients_label: "လက်တွဲထားသော မိတ်ဖက်များ",
    stat_output_label: "လစဉ် စီမံထုတ်လုပ်ပေးသော အကြောင်းအရာများ",
    stat_model_label: "ဝန်ဆောင်မှု နယ်ပယ်",
    hero_cta_portfolio: "ဒီဇိုင်းလက်ရာများ ကြည့်ရန်",
    hero_cta_cases: "Landmark & Time Square ကမ်ပိန်းများ",
    overview_sub: "အခြေခံ မဏ္ဍိုင်များ",
    overview_heading: "စျေးကွက်ရှာဖွေခြင်းထက် ပိုမိုခိုင်မာသော စီးပွားရေး တိုးတက်မှုကို တည်ဆောက်ပါသည်",
    overview_desc: "အပေါ်ယံဂဏန်းများထက် စီးပွားရေးလုပ်ငန်းအတွက် အမှန်တကယ် အရောင်းတိုးတက်မှုနှင့် အမှတ်တံဆိပ်ခိုင်မာမှုကို ဦးတည်ပါသည်။ ဆန်းသစ်သော ဖန်တီးမှု၊ ဆိုင်တွင်းအရောင်းမြှင့်တင်မှုနှင့် တိကျသောကြော်ငြာများကို စနစ်တကျ ပေါင်းစပ်ဆောင်ရွက်ပေးပါသည်။",
    pillar_1_title: "ဖန်တီးနိုင်စွမ်း (Creativity)",
    pillar_1_desc: "လူအများ၏ အာရုံစိုက်မှုကို ချက်ချင်းဖမ်းစားနိုင်သော ထူးခြားလှပသည့် Visual Graphic Design များ၊ အရောင်းမြှင့်တင်ရေး စာသားများနှင့် ဆွဲဆောင်မှုရှိသော TikTok ဗီဒီယို ဇာတ်ညွှန်းများ။",
    pillar_2_title: "နည်းပညာ (Technology)",
    pillar_2_desc: "Meta Pixel, TikTok Events API စနစ်များဖြင့် ကြော်ငြာထိရောက်မှုကို ခြေရာခံခြင်း၊ အလိုအလျောက် Customer စုံစမ်းမှု စနစ်များနှင့် ခေတ်မီ Landing Page များ တည်ဆောက်ပေးခြင်း။",
    pillar_3_title: "တိကျသော တိုင်းတာမှု (Measurement)",
    pillar_3_desc: "လစဉ် အသေးစိတ် စွမ်းဆောင်ရည် အစီရင်ခံစာ (Monthly KPI Report)၊ ကုန်ကျစရိတ်နှင့် ရလဒ် နှိုင်းယှဉ်ချက်များကို ပွင့်လင်းမြင်သာစွာ တင်ပြခြင်း။",
    pillar_4_title: "ရေရှည် မဟာဗျူဟာ (Strategy)",
    pillar_4_desc: "အွန်လိုင်းမှ စိတ်ဝင်စားသူများကို ဆိုင်တွင်း (Retail Store) သို့ အရောက်ပို့ဆောင်ပေးနိုင်သည့် မဟာဗျူဟာများ ချမှတ်ပေးခြင်း။",
    serv_sub: "စွမ်းဆောင်ရည်များ",
    serv_heading: "ဒီဂျစ်တယ်နှင့် အရောင်းကဏ္ဍ တိုးတက်စေရန် လိုအပ်သမျှ ဝန်ဆောင်မှုအားလုံး",
    serv_desc: "လုပ်ငန်းတစ်ခုလုံးအတွက် Outsourced Marketing Department အဖြစ် ဆောင်ရွက်ပေးခြင်းမှစ၍ လိုအပ်သည့် သီးသန့်ကဏ္ဍများအလိုက် တာဝန်ယူ ဆောင်ရွက်ပေးပါသည်။",
    s1_title: "စျေးကွက်မဟာဗျူဟာနှင့် အကြံပေးခြင်း",
    s1_desc: "စီးပွားရေးရေရှည်တိုးတက်ရေး အကြံဉာဏ်များ၊ အမှတ်တံဆိပ်နေရာချထားမှု၊ ပြိုင်ဘက်လေ့လာဆန်းစစ်မှုနှင့် မြန်မာ့စျေးကွက်နှင့် ကိုက်ညီသော Sales Funnel များ ရေးဆွဲပေးခြင်း။",
    s2_title: "Branding နှင့် Visual ဒီဇိုင်း",
    s2_desc: "ခေတ်မီဆန်းပြားပြီး အဆင့်အတန်းမြင့်မားသော Brand Identity၊ ဇိမ်ခံထုတ်ကုန် 3D စတိုင် ဖန်တီးမှုများနှင့် Social Media ကြော်ငြာဒီဇိုင်းများ ဖန်တီးပေးခြင်း။",
    s3_title: "Social Media စီမံခန့်ခွဲမှု",
    s3_desc: "Facebook Page နှင့် TikTok Account များကို စဉ်ဆက်မပြတ် စီမံခန့်ခွဲပေးခြင်း၊ လစဉ်အကြောင်းအရာ အစီအစဉ်ရေးဆွဲခြင်း၊ ဆွဲဆောင်မှုရှိသော မြန်မာစာသားများ ရေးသားပေးခြင်း။",
    s4_title: "TikTok & Reels ဗီဒီယို ရိုက်ကူးထုတ်လုပ်မှု",
    s4_desc: "ဒေါင်လိုက် 9:16 HD ဖော်မတ် ဗီဒီယိုများအတွက် ဇာတ်ညွှန်းရေးသားခြင်း၊ တစ်လလျှင် ၂ ရက်မှ ၃ ရက် ဆိုင်တွင်းအရောက် ရိုက်ကူးရေးအဖွဲ့ဖြင့် ရိုက်ကူးပေးခြင်းနှင့် တည်းဖြတ်ခြင်း။",
    s5_title: "Paid Media Buying & ကြော်ငြာစီမံခန့်ခွဲမှု",
    s5_desc: "Meta (Facebook/Instagram) နှင့် TikTok ကြော်ငြာများကို တိကျသော ပစ်မှတ်အုပ်စုထံ အထိရောက်ဆုံး ကုန်ကျစရိတ်ဖြင့် ရောက်ရှိအောင် စီမံမောင်းနှင်ပေးခြင်း။",
    s6_title: "Digital မှ Retail ဆိုင်တွင်းအရောင်းသို့ ချိတ်ဆက်ခြင်း",
    s6_desc: '"အွန်လိုင်းက စိတ်ဝင်စားသူကို ခေါ်ဆောင်ပြီး ဆိုင်တွင်းမှာ ဝယ်ယူသူအဖြစ် ပြောင်းလဲပေးသည်။" ဆိုင်တွင်း POSM ဒီဇိုင်းများနှင့် အရောင်းမြှင့်တင်ရေး အစီအစဉ်များ ချိတ်ဆက်ပေးခြင်း။',
    cases_sub: "ဖြစ်ရပ်လေ့လာချက်များ",
    cases_heading: "ထိပ်တန်း လုပ်ငန်းကြီးများနှင့် အောင်မြင်သော ကမ်ပိန်းများ",
    cases_subdesc: "မဟာဗျူဟာမြောက် ကမ်ပိန်းများ၊ ဖန်တီးမှုဒီဇိုင်းများနှင့် တိုင်းတာနိုင်သော ရလဒ်ကောင်းများကို ဖော်ဆောင်ပေးထားသည့် လက်ရာများ။",
    port_sub: "ဖန်တီးမှု လက်ရာများ",
    port_heading: "ကဏ္ဍပေါင်းစုံအတွက် အရည်အသွေးမြင့် ဖန်တီးမှုလက်ရာများ",
    port_desc: "ဒီဇိုင်းတစ်ခုချင်းစီကို နှိပ်၍ အသေးစိတ် အချက်အလက်များနှင့် မဟာဗျူဟာရည်ရွယ်ချက်များကို လေ့လာနိုင်ပါသည်။",
    clients_sub: "ယုံကြည်စိတ်ချရမှု",
    clients_heading: "ကျွန်ုပ်တို့၏ တန်ဖိုးထားရသော မိတ်ဖက်လုပ်ငန်းများ",
    clients_desc: "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ အမှတ်တံဆိပ် ၃၀ ကျော်၏ ယုံကြည်အားကိုးမှု။",
    clients_caption: "Landmark United Holdings, Time Square Trading, BAKES by BBB, Dear Mary, Hwar Kway, Inle House, Khit's Boutique စသည့် လုပ်ငန်းများစွာ ပါဝင်ပါသည်။",
    wf_sub: "ဖန်တီးမှု လုပ်ငန်းစဉ်",
    wf_heading: "အဆင့် ၆ ဆင့်ပါ ထုတ်လုပ်မှု လုပ်ငန်းစဉ်နှင့် အရည်အသွေး စံချိန်စံညွှန်းများ",
    wf_desc: "အဆင့်တိုင်းတွင် စနစ်တကျ ပြန်လည်သုံးသပ်ခြင်း၊ အမှတ်တံဆိပ်နှင့် ကိုက်ညီမှုရှိစေခြင်းနှင့် ပလက်ဖောင်း စည်းမျဉ်းများကို လိုက်နာဆောင်ရွက်ပါသည်။"
  }
};

let currentLang = 'my';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageToggle();
  setupPortfolioFilter();
  setupMobileMenu();
  setupNativeDialogFallbacks();
  setupScrollReveal();
  setupKeyboardShortcuts();
});

// LANGUAGE TOGGLE
function setupLanguageToggle() {
  const toggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('currentLangLabel');

  if (!toggleBtn) return;

  function updatePageLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    if (langLabel) {
      langLabel.textContent = lang === 'my' ? 'မြန်မာ' : 'English';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  toggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'my' ? 'en' : 'my';
    updatePageLanguage(nextLang);
  });

  updatePageLanguage('my');
}

// PORTFOLIO FILTER
function setupPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-tag[data-category]');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      portfolioItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = '';
          item.classList.add('visible');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// LIGHTBOX & MODALS
function openLightbox(imgSrc, title, desc) {
  const dialog = document.getElementById('lightboxDialog');
  if (!dialog) return;

  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalDesc = document.getElementById('lightboxDesc');

  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;

  dialog.showModal();
}

function openCaseStudyModal(caseId) {
  const dialog = document.getElementById('caseStudyDialog');
  if (dialog) {
    dialog.showModal();
  }
}

// Fallback for light-dismiss on browsers lacking native closedby="any"
function setupNativeDialogFallbacks() {
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };

    for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = outside(e, dialog);
      });
      dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && outside(e, dialog)) {
          dialog.close();
        }
      });
    }
  }
}

// ACCORDION FAQ
function toggleAccordion(trigger) {
  const item = trigger.closest('.accordion-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  
  document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('open');
    const symbol = i.querySelector('.accordion-trigger span:last-child');
    if (symbol) symbol.textContent = '+';
  });

  if (!isOpen) {
    item.classList.add('open');
    const symbol = trigger.querySelector('span:last-child');
    if (symbol) symbol.textContent = '−';
  }
}

// SCROLL REVEAL VIA INTERSECTION OBSERVER
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.bento-card, .portfolio-item').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
}

// KEYBOARD SHORTCUTS
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'l' || e.key === 'L') {
      const toggleBtn = document.getElementById('langToggleBtn');
      if (toggleBtn) toggleBtn.click();
    }
  });
}

// MOBILE MENU
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// FORM SUBMISSION HANDLER
function handleFormSubmit(e) {
  e.preventDefault();
  alert('Your partnership inquiry has been submitted. Our strategy team will reach out within 24 hours.\n\nစုံစမ်းမေးမြန်းမှုကို လက်ခံရရှိပြီးဖြစ်ပါသည်။ မဟာဗျူဟာအဖွဲ့မှ ၂၄ နာရီအတွင်း အမြန်ဆုံး ဆက်သွယ်ပေးပါမည်။');
  e.target.reset();
}
