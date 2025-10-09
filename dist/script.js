<p>💰 Market Cap: <span id="market-cap">Loading...</span></p>

<script>
  async function updateMarketCap() {
    try {
      const res = await fetch('https://pump.fun/api/coins/7rnxiXfV4kajobuZ2qBHjVPBhhcT82TPdzF3cPfHpump');
      const data = await res.json();
      const marketCap = data.marketCap;
      
      document.getElementById('market-cap').textContent = `$${(marketCap / 1000).toFixed(1)}K`;
    } catch (error) {
      console.error("Market cap fetch failed:", error);
      document.getElementById('market-cap').textContent = "Unavailable";
    }
  }

  updateMarketCap();
</script>
const audio = document.getElementById('wickAudio');
const toggle = document.getElementById('soundToggle');
let playing = false;

// Fade in audio
function fadeInAudio() {
  audio.volume = 0;
  const fade = setInterval(() => {
    if (audio.volume < 0.5) {
      audio.volume += 0.05;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

// Unlock autoplay after user interacts
function enableAudio() {
  if (!playing) {
    audio.play().then(() => {
      playing = true;
      fadeInAudio();
      toggle.textContent = '🔊';
    }).catch(err => console.warn('Autoplay blocked:', err));
  }
}

// Manual toggle
toggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggle.textContent = '🔊';
  } else {
    audio.pause();
    toggle.textContent = '🔈';
  }
});

document.addEventListener('click', enableAudio, { once: true });
document.addEventListener('scroll', enableAudio, { once: true });
const audio = document.getElementById('wickAudio');
const toggle = document.getElementById('soundToggle');
const hint = document.getElementById('soundHint');
let isPlaying = false;

function fadeInAudio() {
  audio.volume = 0;
  const fade = setInterval(() => {
    if (audio.volume < 0.5) {
      audio.volume += 0.05;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

function playAudio() {
  audio.play().then(() => {
    isPlaying = true;
    fadeInAudio();
    hint.classList.add('fade-out'); // hide hint
    toggle.textContent = "🔊";
  }).catch(err => console.warn("Autoplay blocked:", err));
}

toggle.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    toggle.textContent = "🔈";
  } else {
    playAudio();
  }
});

// Play audio on first interaction (click/scroll)
document.addEventListener('click', playAudio, { once: true });
document.addEventListener('scroll', playAudio, { once: true });


