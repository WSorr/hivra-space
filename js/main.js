// Working Countdown Timer - FIXED!
function updateCountdown() {
    const targetDate = new Date('2026-03-16T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    // Если дата уже прошла
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
    
    // Рассчёт дней, часов, минут, секунд
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Обновляем DOM элементы (они должны существовать в index.html!)
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Simple Language Switcher - FIXED!
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Сохраняем выбор в localStorage
            const lang = this.dataset.lang;
            localStorage.setItem('hivra_lang', lang);
            
            // Показываем подтверждение (в реальном сайте здесь будет перевод)
            console.log(`Language switched to: ${lang.toUpperCase()}`);
            alert(`Language set to: ${lang.toUpperCase()}\n\nIn a real implementation, all text would translate here.`);
        });
    });
    
    // Восстанавливаем сохранённый язык
    const savedLang = localStorage.getItem('hivra_lang');
    if (savedLang) {
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === savedLang) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('HIVRA.SPACE initializing...');
    
    // 1. Start the countdown immediately
    updateCountdown();
    
    // 2. Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // 3. Initialize language switcher
    initLanguageSwitcher();
    
    // 4. Debug info
    console.log('Countdown interval started:', countdownInterval);
    console.log('Target date: 2026-03-16');
    console.log('Language switcher initialized');
    
    // 5. Show current countdown values in console
    setTimeout(() => {
        const now = new Date();
        const target = new Date('2026-03-16T00:00:00');
        const daysLeft = Math.floor((target - now) / (1000 * 60 * 60 * 24));
        console.log(`Days until launch: ${daysLeft}`);
    }, 100);
});
