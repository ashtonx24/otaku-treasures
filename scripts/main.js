console.log("%c💎 Otaku Treasures Loaded! 💎", "color: #ff4dd2; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px #000;");
console.log("%cHey there, fellow otaku! You found a hidden scroll... 🍜", "color: #ffd700; font-size: 14px;");
console.log("%cExplore our secret trove of anime merch at Otaku Treasures 🏯✨", "color: #87cefa; font-style: italic;");
console.log("%chttps://otaku-treasures.netlify.app", "color: #00ffcc; font-weight: bold;");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  });
// ripple_effect  