<p>💰 Market Cap: <span id="market-cap">Loading...</span></p>

<script>
  // Fetch Market Cap
  async function updateMarketCap() {
    try {
      const res = await fetch('https://pump.fun/api/coins/7rnxiXfV4kajobuZ2qBHjVPBhhcT82TPdzF3cPfHpump');
      const data = await res.json();
      const marketCap = data.marketCap;

      document.getElementById('market-cap').textContent = 
        marketCap ? `$${(marketCap / 1000).toFixed(1)}K` : "Unavailable";
    } catch (error) {
      console.error("Market cap fetch failed:", error);
      document.getElementById('market-cap').textContent = "Unavailable";
    }
  }

  updateMarketCap();
</script>

<script>
  // Audio Controls
  const audio = document.getElementById('wickAudio');
  const toggle = document.getElementById('soundToggle');
  const hint = document.getElementById('soundHint');
  let isPlaying = false;

  // Fade-in effect
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

  // Play audio and hide hint
  function playAudio() {
    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
        fadeInAudio();
        if (hint) hint.classList.add('fade-out'); // hide hint
        toggle.textContent = "🔊";
      }).catch(err => console.warn("Autoplay blocked:", err));
    }
  }

  // Toggle audio manually
  toggle.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      toggle.textContent = "🔈";
    } else {
      playAudio();
    }
  });

  // Play audio on first user interaction (click/scroll)
  document.addEventListener('click', playAudio, { once: true });
  document.addEventListener('scroll', playAudio, { once: true });
</script>
