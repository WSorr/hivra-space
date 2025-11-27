(function(){
  const target = new Date('2026-03-16T00:00:00+01:00');
  function pad(n){return n.toString().padStart(2,'0')}
  function update(){
    const now = new Date();
    let diff = target - now;
    if(diff < 0) diff = 0;

    const sec = Math.floor(diff/1000);
    const days = Math.floor(sec/86400);
    const hours = Math.floor((sec % 86400)/3600);
    const min = Math.floor((sec % 3600)/60);
    const s = sec % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(min);
    document.getElementById('seconds').textContent = pad(s);
  }
  update();
  setInterval(update,1000);
})();

(function(){
  const btn = document.getElementById('drop-btn');
  const menu = document.getElementById('lang-menu');

  btn.addEventListener('click', e=>{
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', ()=>{
    menu.classList.remove('show');
  });

  document.querySelectorAll('.lang').forEach(l=>{
    l.addEventListener('click', ()=>{
      const lang = l.dataset.lang;
      localStorage.setItem('hivra_lang', lang);
      btn.textContent = lang === 'en' ? 'English' : lang === 'fr' ? 'Français' : lang === 'es' ? 'Español' : '한국어';
    });
  });
})();
