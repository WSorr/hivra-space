// Full translation system with fallback
const translations = {
    en: {
        "title": "HIVRA",
        "tagline": "YOUR FLIGHT SPACE IN THE DRONVERSE",
        "countdown_label": "LAUNCH COUNTDOWN",
        "timer_days": "DAYS",
        "timer_hours": "HOURS",
        "timer_minutes": "MINUTES",
        "timer_seconds": "SECONDS",
        "target_date": "Target: March 16, 2026",
        "cta_explore": "EXPLORE CONCEPT",
        "cta_support": "SUPPORT THE VERSE",
        "nav_concept": "CONCEPT",
        "nav_donate": "DONATE",
        "nav_dashboard": "DASHBOARD"
    },
    de: {
        "title": "HIVRA",
        "tagline": "DEIN FLUGRAUM IM DRONVERSE",
        "countdown_label": "STARTCOUNTDOWN",
        "timer_days": "TAGE",
        "timer_hours": "STUNDEN",
        "timer_minutes": "MINUTEN",
        "timer_seconds": "SEKUNDEN",
        "target_date": "Ziel: 16. März 2026",
        "cta_explore": "KONZEPT ENTDECKEN",
        "cta_support": "VERSE UNTERSTÜTZEN",
        "nav_concept": "KONZEPT",
        "nav_donate": "SPENDEN",
        "nav_dashboard": "DASHBOARD"
    },
    fr: {
        "title": "HIVRA",
        "tagline": "VOTRE ESPACE DE VOL DANS LE DRONVERSE",
        "countdown_label": "COMPTE À REBOURS",
        "timer_days": "JOURS",
        "timer_hours": "HEURES",
        "timer_minutes": "MINUTES",
        "timer_seconds": "SECONDES",
        "target_date": "Cible : 16 mars 2026",
        "cta_explore": "EXPLORER LE CONCEPT",
        "cta_support": "SOUTENIR LE VERSE",
        "nav_concept": "CONCEPT",
        "nav_donate": "FAIRE UN DON",
        "nav_dashboard": "TABLEAU DE BORD"
    },
    es: {
        "title": "HIVRA",
        "tagline": "TU ESPACIO DE VUELO EN EL DRONVERSE",
        "countdown_label": "CUENTA REGRESIVA",
        "timer_days": "DÍAS",
        "timer_hours": "HORAS",
        "timer_minutes": "MINUTOS",
        "timer_seconds": "SEGUNDOS",
        "target_date": "Objetivo: 16 de marzo de 2026",
        "cta_explore": "EXPLORAR CONCEPTO",
        "cta_support": "APOYAR EL VERSE",
        "nav_concept": "CONCEPTO",
        "nav_donate": "DONAR",
        "nav_dashboard": "TABLERO"
    }
};

// Working countdown timer
function updateCountdown() {
    const targetDate = new Date('2026-03-16T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    if (timeLeft < 0) {
        document.querySelector('.tv-countdown').innerHTML = `
            <div class="countdown-header">PLATFORM LIVE</div>
            <div style="font-size: 48px; font-weight: 700; color: #26a69a; margin: 20px 0;">
                🚀 SYSTEM ACTIVE
            </div>
            <div style="color: #6f7a9b; font-size: 14px;">
                HIVRA Platform v1.0 | Launched March 16, 2026
            </div>
        `;
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Apply translation
function applyTranslation(lang) {
    if (!translations[lang]) return;
    
    const t = translations[lang];
    
    // Update all elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Save to localStorage
    localStorage.setItem('hivra_lang', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('HIVRA.SPACE initializing...');
    
    // 1. Start countdown
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
    
    // 2. Set language
    const savedLang = localStorage.getItem('hivra_lang') || 'en';
    applyTranslation(savedLang);
    
    // 3. Language switcher events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            applyTranslation(lang);
            console.log(`Language switched to: ${lang}`);
        });
    });
    
    // 4. Debug info
    console.log('Timer interval ID:', timerInterval);
    console.log('Current language:', savedLang);
});
