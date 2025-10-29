<script>
  const features = [
    { icon: "🛌", title: "Cozy Beds", desc: "Queen‑size beds with soft linens." },
    { icon: "🔥", title: "Wood‑Burning Fire Pit", desc: "Enjoy evenings by the fire." },
    { icon: "🍽️", title: "Fully Equipped Kitchen", desc: "Coffee, tea, and a stove." },
    { icon: "🌲", title: "Surrounded by Nature", desc: "Hike, bike, or simply relax." },
  ];
</script>

<section class="features" id="features">
  <h2>Why stay with us?</h2>
  <div class="grid">
    {#each features as f}
      <article class="feature-card">
        <span class="icon">{f.icon}</span>
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </article>
    {/each}
  </div>
</section>

<style>
  .features {
    padding: 4rem 2rem;
    text-align: center;
  }
  h2 { margin-bottom: 2rem; color:#333; }
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  .feature-card {
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,.06);
  }
  .icon { font-size: 3rem; display:block; margin-bottom:.5rem;}
  h3 {margin-top:.25rem;margin-bottom:.75rem;color:#222;}
</style>