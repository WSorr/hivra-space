// Language translations
const translations = {
    en: {
        "nav_concept": "CONCEPT",
        "nav_donate": "DONATE",
        "nav_dashboard": "DASHBOARD",
        "title_main": "HIVRA",
        "tagline": "THE DIGITAL BEESWARM",
        "countdown_label": "LAUNCH COUNTDOWN",
        "timer_days": "DAYS",
        "timer_hours": "HOURS",
        "timer_minutes": "MINUTES",
        "timer_seconds": "SECONDS",
        "target_date": "Target: March 16, 2026",
        "cta_explore": "EXPLORE CONCEPT",
        "cta_support": "SUPPORT THE VERSE"
    },
    de: {
        "nav_concept": "KONZEPT",
        "nav_donate": "SPENDEN",
        "nav_dashboard": "DASHBOARD",
        "title_main": "HIVRA",
        "tagline": "DER DIGITALE BIENENSCHWARM",
        "countdown_label": "STARTCOUNTDOWN",
        "timer_days": "TAGE",
        "timer_hours": "STUNDEN",
        "timer_minutes": "MINUTEN",
        "timer_seconds": "SEKUNDEN",
        "target_date": "Ziel: 16. März 2026",
        "cta_explore": "KONZEPT ENTDECKEN",
        "cta_support": "VERSE UNTERSTÜTZEN"
    },
    fr: {
        "nav_concept": "CONCEPT",
        "nav_donate": "FAIRE UN DON",
        "nav_dashboard": "TABLEAU DE BORD",
        "title_main": "HIVRA",
        "tagline": "L'ESSAIM NUMÉRIQUE",
        "countdown_label": "COMPTE À REBOURS",
        "timer_days": "JOURS",
        "timer_hours": "HEURES",
        "timer_minutes": "MINUTES",
        "timer_seconds": "SECONDES",
        "target_date": "Cible : 16 mars 2026",
        "cta_explore": "EXPLORER LE CONCEPT",
        "cta_support": "SOUTENIR LE VERSE"
    },
    es: {
        "nav_concept": "CONCEPTO",
        "nav_donate": "DONAR",
        "nav_dashboard": "TABLERO",
        "title_main": "HIVRA",
        "tagline": "EL ENJAMBRE DIGITAL",
        "countdown_label": "CUENTA REGRESIVA",
        "timer_days": "DÍAS",
        "timer_hours": "HORAS",
        "timer_minutes": "MINUTOS",
        "timer_seconds": "SEGUNDOS",
        "target_date": "Objetivo: 16 de marzo de 2026",
        "cta_explore": "EXPLORAR CONCEPTO",
        "cta_support": "APOYAR EL VERSE"
    }
};

// Countdown to March 16, 2026
function updateCountdown() {
    const targetDate = new Date('2026-03-16T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    if (timeLeft < 0) {
        document.querySelector('.tv-countdown').innerHTML = `
            <div class="countdown-header" data-translate="countdown_label">PLATFORM STATUS</div>
            <div style="font-size: 48px; font-weight: 700; color: #26a69a; margin: 20px 0;">
                🚀 SYSTEM ACTIVE
            </div>
            <div style="color: #6f7a9b; font-size: 14px;">
                HIVRA Platform is now live | Version 1.0
            </div>
        `;
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(3, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Set language
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    const t = translations[lang];
    
    // Update all elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) el.textContent = t[key];
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('hivra_lang', lang);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Set language
    const savedLang = localStorage.getItem('hivra_lang') || 'en';
    setLanguage(savedLang);
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });
    
    console.log('HIVRA.SPACE initialized with TradingView design');
});
