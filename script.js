document.addEventListener('DOMContentLoaded', () => {
    // Card flip functionality
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove flipped class from all other cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
            
            // Toggle flipped class on clicked card
            card.classList.toggle('flipped');
        });
    });

    // Music control
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicText = musicToggle.querySelector('.music-text');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicText.textContent = 'Play Music';
        } else {
            bgMusic.play();
            musicText.textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });

    // Floating hearts animation
    const heartsContainer = document.querySelector('.hearts-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position
        const startPositionX = Math.random() * window.innerWidth;
        heart.style.left = `${startPositionX}px`;
        
        // Random size
        const size = Math.random() * 20 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 10;
        heart.style.animationDuration = `${duration}s`;
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Create hearts periodically
    setInterval(createHeart, 300);

    // Reply functionality for each card
    ['sad', 'angry', 'miss', 'happy'].forEach(emotion => {
        const replyText = document.getElementById(`replyText-${emotion}`);
        const saveReply = document.getElementById(`saveReply-${emotion}`);
        if (replyText && saveReply) {
            // Load saved reply if exists
            const savedReply = localStorage.getItem(`loveReply-${emotion}`);
            if (savedReply) {
                replyText.value = savedReply;
            }
            saveReply.addEventListener('click', () => {
                const reply = replyText.value.trim();
                if (reply) {
                    localStorage.setItem(`loveReply-${emotion}`, reply);
                    saveReply.textContent = 'Saved!';
                    setTimeout(() => {
                        saveReply.textContent = 'Save Reply';
                    }, 2000);
                }
            });
        }
    });
}); 