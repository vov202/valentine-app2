// ============================================================================
// ========== АВГУСТ АПДЕЙТ: КОД ДЛЯ КНОПКИ "ОФИЦИАЛЬНО ВМЕСТЕ" ==============
// ============================================================================

// 1. Автоматическое добавление новой разметки в объект contents при загрузке
document.addEventListener('DOMContentLoaded', () => {
    if (typeof contents !== 'undefined') {
        contents.official = `
            <h2>❤️ Официально вместе</h2>
            <div id="official-timer" style="font-size: 18px; text-align: center; padding: 20px;">
                Загрузка... 💖
            </div>
            <button class="back-btn" onclick="hideContent()">Назад</button>
        `;
    }
});

// 2. Перехват клика по кнопке official для запуска нового таймера
const originalShowContent = window.showContent;
window.showContent = function(type) {
    if (type === 'official') {
        const contentDiv = document.getElementById('content');
        if (typeof contents !== 'undefined' && contents.official) {
            contentDiv.innerHTML = contents.official;
        } else {
            contentDiv.innerHTML = '<p>Контент скоро появится... 💕</p>';
        }
        contentDiv.classList.add('active');
        
        contentDiv.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        updateOfficialTimer();
        if (window.timerInterval) clearInterval(window.timerInterval);
        window.timerInterval = setInterval(updateOfficialTimer, 1000);
        
        contentDiv.scrollTop = 0;
        return;
    }
    
    // Если нажата любая другая кнопка — работает твой старый оригинальный код
    if (type !== 'time' && window.timerInterval) {
        clearInterval(window.timerInterval);
        window.timerInterval = null;
    }
    if (typeof originalShowContent === 'function') {
        originalShowContent(type);
    }
};

// 3. Функция самого таймера от 1 августа 2026 года
function updateOfficialTimer() {
    const startDate = new Date('2026-08-01T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30.44);
    const finalDays = Math.floor(remainingDays % 30.44);
    
    const timerElement = document.getElementById('official-timer');
    if (!timerElement) return;
    
    timerElement.innerHTML = `
        <div class="timer-container">
            <div class="timer-main">
                💖 ${days} дней ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} 💖
            </div>
            <div class="timer-details">
                Это:<br>
                <strong>${months} месяцев</strong><br>
                <strong>${finalDays} дней</strong><br>
                <strong>${hours} часов</strong><br>
                <strong>${minutes} минут</strong><br>
                <strong>${seconds} секунд</strong><br><br>
                <div style="color: #ff6699; font-style: italic;">
                Новый отсчёт нашей бесконечности! ✨<br>
                <small style="font-size: 14px;">(обновляется каждую секунду) ⏰</small>
                </div>
            </div>
        </div>`;
}

// ============================================================================
// ========== КОНЕЦ АВГУСТ АПДЕЙТА (ДАЛЕЕ ИДЕТ ТВОЙ СТАРЫЙ КОД) ===============
// ============================================================================


// ========== ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ ==========
function createDecorations() {
    const container = document.getElementById('decorations');
    const emojis = ['❤️', '💕', '💖', '💝', '🐱', '😻', '💋', '😘', '✨', '🌟'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-decoration';
        heart.innerHTML = emojis[Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = (15 + Math.random() * 20) + 's';
        container.appendChild(heart);
    }
    
    for (let i = 0; i < 10; i++) {
        const cat = document.createElement('div');
        cat.className = 'cat-decoration';
        cat.innerHTML = emojis[4 + Math.floor(Math.random() * 2)];
        cat.style.left = Math.random() * 100 + 'vw';
        cat.style.top = Math.random() * 100 + 'vh';
        cat.style.animationDuration = (20 + Math.random() * 20) + 's';
        container.appendChild(cat);
    }
    
    for (let i = 0; i < 12; i++) {
        const kiss = document.createElement('div');
        kiss.className = 'kiss-decoration';
        kiss.innerHTML = emojis[6 + Math.floor(Math.random() * 2)];
        kiss.style.left = Math.random() * 100 + 'vw';
        kiss.style.top = Math.random() * 100 + 'vh';
        kiss.style.animationDuration = (25 + Math.random() * 20) + 's';
        container.appendChild(kiss);
    }
    
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'line-decoration';
        line.style.width = (20 + Math.random() * 30) + 'vw';
        line.style.left = Math.random() * 100 + 'vw';
        line.style.top = Math.random() * 100 + 'vh';
        line.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        container.appendChild(line);
    }
}

// ========== ФЕЙЕРВЕРКИ ==========
function createFireworks() {
    const colors = ['#ff4081', '#ff6699', '#ffb6c1', '#4CAF50', '#1DB954', '#FFD700', '#FF6B6B', '#9C27B0', '#2196F3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const x = Math.random() * 80 + 10;
            const y = Math.random() * 80 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 10 + Math.random() * 15;
            
            const megaFirework = document.createElement('div');
            megaFirework.style.cssText = `
                position: fixed;
                left: ${x}vw;
                top: ${y}vh;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, ${color} 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                opacity: 0;
                transform: scale(0);
                box-shadow: 0 0 30px ${color}, 0 0 60px ${color};
                filter: blur(1px);
            `;
            
            document.body.appendChild(megaFirework);
            
            megaFirework.animate([
                { transform: 'scale(0) rotate(0deg)', opacity: 0 },
                { transform: 'scale(3) rotate(180deg)', opacity: 1 },
                { transform: 'scale(0) rotate(360deg)', opacity: 0 }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            });
            
            const particleCount = 24 + Math.floor(Math.random() * 24);
            for (let j = 0; j < particleCount; j++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    const angle = (j * (360 / particleCount)) * (Math.PI / 180);
                    const distance = 30 + Math.random() * 50;
                    const particleSize = 3 + Math.random() * 7;
                    const particleColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    particle.style.cssText = `
                        position: fixed;
                        left: ${x}vw;
                        top: ${y}vh;
                        width: ${particleSize}px;
                        height: ${particleSize}px;
                        background: ${particleColor};
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 10000;
                        opacity: 0;
                        box-shadow: 0 0 10px ${particleColor}, 0 0 20px ${particleColor};
                    `;
                    
                    document.body.appendChild(particle);
                    
                    particle.animate([
                        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                        { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0.5)`, opacity: 0.7 },
                        { transform: `translate(${Math.cos(angle) * distance * 1.5}px, ${Math.sin(angle) * distance * 1.5}px) scale(0)`, opacity: 0 }
                    ], {
                        duration: 2000 + Math.random() * 1000,
                        easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
                    });
                    
                    setTimeout(() => {
                        if (particle.parentNode) particle.parentNode.removeChild(particle);
                    }, 3000);
                }, Math.random() * 200);
            }
            
            setTimeout(() => {
                if (megaFirework.parentNode) megaFirework.parentNode.removeChild(megaFirework);
            }, 2000);
        }, i * 80);
    }
    
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            const startX = Math.random() * 100;
            const endX = startX + (Math.random() * 40 - 20);
            
            star.style.cssText = `
                position: fixed;
                left: ${startX}vw;
                top: -20px;
                width: 3px;
                height: 15px;
                background: linear-gradient(to bottom, transparent, #FFD700, transparent);
                pointer-events: none;
                z-index: 10000;
                opacity: 0;
                transform: rotate(${30 + Math.random() * 30}deg);
            `;
            
            document.body.appendChild(star);
            
            star.animate([
                { transform: `translate(0, 0) rotate(${30 + Math.random() * 30}deg)`, opacity: 0 },
                { transform: `translate(${endX - startX}vw, 120vh) rotate(${30 + Math.random() * 30}deg)`, opacity: 0.8 },
                { transform: `translate(${(endX - startX) * 1.5}vw, 140vh) rotate(${30 + Math.random() * 30}deg)`, opacity: 0 }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                if (star.parentNode) star.parentNode.removeChild(star);
            }, 5000);
        }
    }, 1000);
    
    setTimeout(() => {
        const finalBoom = document.createElement('div');
        finalBoom.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, #FFD700 0%, #ff4081 30%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            opacity: 0;
            transform: translate(-50%, -50%);
            filter: blur(20px);
        `;
        
        document.body.appendChild(finalBoom);
        
        finalBoom.animate([
            { width: '0px', height: '0px', opacity: 0 },
            { width: '500px', height: '500px', opacity: 0.7 },
            { width: '1000px', height: '1000px', opacity: 0 }
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
        
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
        `;
        
        document.body.appendChild(flash);
        
        flash.animate([
            { opacity: 0 },
            { opacity: 0.4 },
            { opacity: 0 }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
        
        setTimeout(() => {
            if (finalBoom.parentNode) finalBoom.parentNode.removeChild(finalBoom);
            if (flash.parentNode) flash.parentNode.removeChild(flash);
        }, 2000);
    }, 3000);
}

// ========== КОНТЕНТ ==========
const contents = {
    meet: `
        <h2>🌌 Начало нашей истории</h2>
        <div style="text-align: center; padding: 20px; background: rgba(255, 182, 193, 0.1); border-radius: 15px; margin: 20px 0;">
            <p style="font-size: 18px; margin: 10px 0;">Школа. Первый этаж. Никого нет.</p>
            <p style="font-size: 18px; margin: 10px 0;">Какой-то дебил фоткает нас</p>
        </div>
        <p style="margin-top: 20px; color: #ff4081; font-style: italic; text-align: center; font-size: 20px;">
        Милота... 😊</p>
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    fact: `
        <h2>🔍 Интересный факт</h2>
        <div class="photo-container">
            <img src="https://github.com/vov202/valentine-app2/raw/main/fact.jpg" 
                 alt="Интересный факт"
                 style="width: 100%; height: auto;">
        </div>
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    mirror: `
        <h2>🔮 Зеркало</h2>
        <div class="photo-container">
            <img src="https://github.com/vov202/valentine-app2/raw/main/cat.jpg" 
                 alt="Котик"
                 style="width: 100%; height: auto;">
        </div>
        <p style="text-align: center; font-size: 20px; color: #ff4081; margin-top: 20px; font-weight: bold;">
        Это ты 😇💕</p>
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    tired: `
        <h2>🛏️ Устал засыпать...</h2>
        <div class="music-note">💤😴</div>
        <p style="font-size: 22px; text-align: center; padding: 15px; line-height: 1.6; background: rgba(255, 182, 193, 0.1); border-radius: 15px;">
        Устал засыпать в обнимку с одеялом, вместо тебя...😔 </p>
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    secret: `
        <h2 style="font-family: 'Marck Script', cursive; font-size: 36px; color: #b76e79;">💌 Письмо тебе</h2>
        <div class="secret-letter">
            <div class="letter-hearts">💝💖💗</div>
            <div class="letter-stamp">📬</div>
            <div class="letter-header">
                Моей любимой Анечке 💕
            </div>
            <div class="letter-content">
                Никогда не любил и не понимал смысла писать большие текста, но сейчас не сделать этого я просто не могу.
                
                Я безумно рад, что ты появилась в моей жизни и до сих пор со мной, несмотря на все недоразумения, которые случаются. Иногда я действительно делаю то, чего не следовало бы, но ни разу за всё время я не хотел этим тебя обидеть. Прости меня 🥺
                
                Я очень ценю те моменты, когда мы вместе. Даже если мы просто молчим — меня греет мысль о том, что ты рядом. 😌
                
                Каждый раз, глядя на тебя, я восхищаюсь. Как такая прекрасная девушка может со мной общаться? 😵‍💫 Ты даже не представляешь, насколько шикарно выглядишь в моих глазах, даже если я не говорю об этом. Так что не удивляйся, если я в очередной раз буду сверлить тебя взглядом. 😇
                
                Я до сих пор поражаюсь твоей внимательности. Как по нескольким сообщениям ты понимаешь, что что-то не так? 😶‍🌫️
                
                Я очень ценю твою искренность и открытость по отношению ко мне. Все твои эмоции. Для меня это действительно очень важно. Готов постоянно слушать твои голосовые — они шикарны 🙂‍↕️
                
                Своим присутствием, ты делаешь мою жизнь намного разнообразнее. 🥰
                
                Безумно ценю и люблю тебя, солнце 💘
            </div>
            <div class="letter-signature">
                С любовью, твой 💝
            </div>
        </div>
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    time: `
        <h2>⏳ Наше время</h2>
        <div id="timer" style="font-size: 18px; text-align: center; padding: 20px;">
            Загрузка... 💖
        </div>
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    song: `
        <h2>🎵 Твой трек</h2>
        <p style="margin-bottom: 15px; text-align: center;">Песня, которая напоминает тебя 💕</p>
        
        <div class="song-layout">
            <div class="photo-container">
                <img src="https://github.com/vov202/valentine-app2/raw/main/song-screenshot.jpg" 
                     alt="Скриншот трека"
                     style="width: 100%; height: auto;">
            </div>
            
            <div class="audio-container">
                <button class="play-btn" onclick="playSong()">
                    <span style="font-size: 24px;">▶️</span>
                    Включить трек
                </button>
                
                <div id="audio-player" style="display: none;">
                    <audio controls class="audio-player" id="song-audio">
                        <source src="song-audio.mp3" type="audio/mpeg">
                        Ваш браузер не поддерживает аудио
                    </audio>
                    <p style="text-align: center; color: #666; margin-top: 10px; font-size: 14px;">💕</p>
                </div>
            </div>
        </div>
        
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    photo: `
        <h2>🖼️ С этого всё началось</h2>
        <p style="margin-bottom: 15px; text-align: center;">5 октября 2023 💕</p>
        
        <div class="photo-container">
            <img src="https://github.com/vov202/valentine-app2/raw/main/first_photo.jpg" 
                 alt="Наше первое фото"
                 style="width: 100%; height: auto;">
        </div>
        
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    dossier: `
        <h2>📂 Секретное досье</h2>
        <p style="margin-bottom: 15px; text-align: center;">!!!шок контент!!! 😱</p>
        
        <div class="dossier-grid">
            <div class="dossier-item">
                <img src="https://github.com/vov202/valentine-app2/raw/main/dossier-1.jpg" 
                     alt="Скриншот 1">
                <div class="dossier-text">Скриншот 1</div>
            </div>
            <div class="dossier-item">
                <img src="https://github.com/vov202/valentine-app2/raw/main/dossier-2.jpg" 
                     alt="Скриншот 2">
                <div class="dossier-text">Скриншот 2</div>
            </div>
            <div class="dossier-item">
                <img src="https://github.com/vov202/valentine-app2/raw/main/dossier-3.jpg" 
                     alt="Скриншот 3">
                <div class="dossier-text">Скриншот 3</div>
            </div>
            <div class="dossier-item">
                <img src="https://github.com/vov202/valentine-app2/raw/main/dossier-4.jpg" 
                     alt="Скриншот 4">
                <div class="dossier-text">Скриншот 4</div>
            </div>
            <div class="dossier-item">
                <img src="https://github.com/vov202/valentine-app2/raw/main/dossier-5.jpg" 
                     alt="Скриншот 5">
                <div class="dossier-text">Скриншот 5</div>
            </div>
            <div class="dossier-item">
                <img src="https://github.com/vov202/valentine-app2/raw/main/dossier-6.jpg" 
                     alt="Скриншот 6">
                <div class="dossier-text">Скриншот 6</div>
            </div>
        </div>
        
        <p class="photo-caption">Роблокс удалила мне мама 📱</p>
        
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    congrats: `
        <h2>🎉 Поздравлятор 3000</h2>
        <div class="music-note">💘❤️</div>
        <p style="font-size: 24px; color: #ff4081; text-align: center; font-weight: bold; margin-bottom: 20px;">
        С ДНЁМ ВЛЮБЛЁННЫХ! 💝</p>
        
        <p style="text-align: center; margin: 15px 0; font-size: 18px; line-height: 1.6; padding: 15px; background: rgba(255, 182, 193, 0.1); border-radius: 15px;">
        Ты — самое лучшее, что со мной случилось 💖</p>
        
        <div class="congrats-photos">
            <img src="https://github.com/vov202/valentine-app2/raw/main/congrats-1.jpg" alt="Поздравление 1">
            <img src="https://github.com/vov202/valentine-app2/raw/main/congrats-2.jpg" alt="Поздравление 2">
            <img src="https://github.com/vov202/valentine-app2/raw/main/congrats-3.jpg" alt="Поздравление 3">
            <img src="https://github.com/vov202/valentine-app2/raw/main/congrats-4.jpg" alt="Поздравление 4">
            <img src="https://github.com/vov202/valentine-app2/raw/main/congrats-5.jpg" alt="Поздравление 5">
        </div>
        
        <p style="text-align: center; color: #666; font-size: 16px; margin-top: 20px; padding: 15px; border-top: 2px dashed #ffb6c1;">
        💕🐱💋😻✨💝😘🌟</p>
        
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `,
    
    valentine: `
        <h2>💌 Самый главный вопрос</h2>
        <div class="music-note">💝💖</div>
        <p style="font-size: 26px; text-align: center; color: #ff4081; font-weight: bold; margin: 20px 0; padding: 15px; background: rgba(255, 182, 193, 0.1); border-radius: 15px;">
        Будешь моей валентинкой? 💕</p>
        
        <div class="answer-buttons">
            <button class="yes-btn" id="yesBtn" onclick="answerYes()">Да, конечно, с радостью! ❤️</button>
            <button class="no-btn" id="noBtn" onclick="answerNo()">Не</button>
        </div>
        
        <div id="celebration" style="display: none;">
            <div class="celebration">
                <h2 style="animation: superPulse 0.8s infinite, rainbowGlow 2s infinite !important;">🎉 УРААА! 🎉</h2>
                <p style="font-size: 22px; margin: 15px 0; animation: superPulse 1s infinite;">Так и знал, что согласишься! 💖</p>
                <div style="font-size: 50px; margin: 20px 0; animation: pulse 0.5s infinite;">🥳🎊💕😻✨🎆</div>
                <p style="color: #666; font-size: 14px; margin-top: 10px;">Смотри, фейерверки в твою честь! 🎆</p>
            </div>
        </div>
        
        <button class="back-btn" onclick="hideContent()">Назад</button>
    `
};

// ========== ПЕРЕМЕННЫЕ ==========
let noClickCount = 0;
let yesClickCount = 0;
let timerInterval = null;
let welcomeShown = false; // Флаг, показывалось ли приветствие

// ========== ФУНКЦИИ ==========
function showContent(type) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = contents[type] || '<p>Контент скоро появится... 💕</p>';
    contentDiv.classList.add('active');
    
    // Плавно прокручиваем к контенту
    contentDiv.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    if (type === 'time') {
        updateTimer();
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }
    
    if (type === 'song') {
        document.getElementById('audio-player').style.display = 'none';
    }
    
    if (type === 'valentine') {
        noClickCount = 0;
        yesClickCount = 0;
        document.getElementById('celebration').style.display = 'none';
        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        if (yesBtn && noBtn) {
            yesBtn.style.transform = 'scale(1)';
            yesBtn.style.fontSize = '18px';
            yesBtn.style.background = 'linear-gradient(135deg, #4CAF50, #66BB6A)';
            yesBtn.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
            yesBtn.style.animation = 'none';
            
            const glow = yesBtn.querySelector('.yes-btn-glow');
            if (glow) glow.remove();
            
            noBtn.style.transform = 'scale(1)';
            noBtn.style.left = 'auto';
            noBtn.style.top = 'auto';
            noBtn.style.position = 'relative';
            noBtn.textContent = 'Не';
            noBtn.style.cursor = 'pointer';
            noBtn.disabled = false;
        }
    }
    
    contentDiv.scrollTop = 0;
}

function hideContent() {
    const contentDiv = document.getElementById('content');
    
    // Просто убираем класс active - контент скрывается
    contentDiv.classList.remove('active');
    contentDiv.innerHTML = ''; // Очищаем содержимое
    
    // Останавливаем таймер
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Прокручиваем к началу страницы (к кнопкам)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function playSong() {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.style.display = 'block';
    audioPlayer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function answerYes() {
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'block';
    celebration.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    createFireworks();
}

function answerNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    noClickCount++;
    
    // Совсем немного увеличиваем кнопку "Да" (почти незаметно)
    yesClickCount++;
    yesBtn.style.transform = `scale(${1 + yesClickCount * 0.01})`;
    yesBtn.style.fontSize = `${18 + yesClickCount * 0.1}px`;
    
    // Кнопка "Не" СИЛЬНО убегает
    const container = document.querySelector('.answer-buttons');
    const containerRect = container.getBoundingClientRect();
    
    let newLeft, newTop;
    
    if (noClickCount === 1) {
        noBtn.textContent = 'Точно не? 😢';
        newLeft = Math.random() * (containerRect.width - 150);
        newTop = -50 + Math.random() * 60;
    } else if (noClickCount === 2) {
        noBtn.textContent = 'Ну пожалуйста... 🥺';
        newLeft = Math.random() * (containerRect.width - 180);
        newTop = -70 + Math.random() * 80;
    } else if (noClickCount === 3) {
        noBtn.textContent = 'Я буду грустить 😭';
        newLeft = Math.random() * (containerRect.width - 200);
        newTop = -90 + Math.random() * 100;
    } else {
        noBtn.textContent = 'Ладно, нажми "Да" 😉❤️';
        newLeft = Math.random() * (containerRect.width - 220);
        newTop = -120 + Math.random() * 140;
    }
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.max(0, Math.min(newLeft, containerRect.width - 100))}px`;
    noBtn.style.top = `${newTop}px`;
    noBtn.style.transform = 'scale(1)';
    noBtn.style.fontSize = '18px';
    
    if (noClickCount >= 6) {
        noBtn.style.left = `${Math.random() * (containerRect.width - 250)}px`;
        noBtn.style.top = `${-180 + Math.random() * 250}px`;
    }
}

function updateTimer() {
    const startDate = new Date('2023-10-05T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30.44);
    const finalDays = Math.floor(remainingDays % 30.44);
    
    document.getElementById('timer').innerHTML = `
        <div class="timer-container">
            <div class="timer-main">
                💖 ${days} дней ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} 💖
            </div>
            <div class="timer-details">
                Это:<br>
                <strong>${years} год</strong><br>
                <strong>${months} месяцев</strong><br>
                <strong>${finalDays} дней</strong><br>
                <strong>${hours} часов</strong><br>
                <strong>${minutes} минут</strong><br>
                <strong>${seconds} секунд</strong><br><br>
                <div style="color: #ff6699; font-style: italic;">
                И каждая секунда с тобой — счастье! ✨<br>
                <small style="font-size: 14px;">(обновляется каждую секунду) ⏰</small>
                </div>
            </div>
        </div>`;
}

// ========== ПОКАЗЫВАЕМ ПРИВЕТСТВИЕ И ПРОКРУЧИВАЕМ К НЕМУ ==========
function showWelcomeMessage() {
    if (!welcomeShown) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 60px; margin-bottom: 15px; animation: pulse 2s infinite;">💝</div>
                <h2 style="color: #ff4081;">Привет, любовь моя! 💕</h2>
                <p style="font-size: 18px; line-height: 1.6; margin-bottom: 25px; padding: 15px; background: rgba(255, 182, 193, 0.1); border-radius: 15px;">
                Нажимай на кнопки выше и читай что там 💖</p>
                <button class="back-btn" onclick="hideContent()">Начать просмотр 💕</button>
            </div>
        `;
        contentDiv.classList.add('active');
        welcomeShown = true;
        
        // ВАЖНО: Прокручиваем к приветствию с задержкой, чтобы страница успела загрузиться
        setTimeout(() => {
            contentDiv.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300);
    }
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
if ('ontouchstart' in window) {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.cursor = 'pointer';
    });
}

// Показываем приветствие при загрузке страницы
window.addEventListener('load', function() {
    createDecorations();
    showWelcomeMessage(); // Показываем приветствие и прокручиваем к нему
});

// Также пробуем показать приветствие сразу после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Создаем приветствие заранее
    if (!welcomeShown) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 60px; margin-bottom: 15px; animation: pulse 2s infinite;">💝</div>
                <h2 style="color: #ff4081;">Привет, любовь моя! 💕</h2>
                <p style="font-size: 18px; line-height: 1.6; margin-bottom: 25px; padding: 15px; background: rgba(255, 182, 193, 0.1); border-radius: 15px;">
                Нажимай на кнопки выше и читай что там 💖</p>
                <button class="back-btn" onclick="hideContent()">Начать просмотр 💕</button>
            </div>
        `;
        contentDiv.classList.add('active');
        welcomeShown = true;
        
        // Прокручиваем к приветствию
        setTimeout(() => {
            contentDiv.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 200);
    }
});

document.addEventListener('click', function(event) {
    const content = document.getElementById('content');
    const isClickInsideContent = content.contains(event.target);
    const isClickOnButton = event.target.classList.contains('btn') || 
                            event.target.classList.contains('main-question-btn') ||
                            event.target.classList.contains('play-btn') ||
                            event.target.classList.contains('yes-btn') ||
                            event.target.classList.contains('no-btn');
    
    if (!isClickInsideContent && !isClickOnButton && content.classList.contains('active')) {
        hideContent();
    }
});
