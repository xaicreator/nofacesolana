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
