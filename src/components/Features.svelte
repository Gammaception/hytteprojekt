<script>
  import { t } from '../i18n.js';   // translation helper

  const featureKeys = ['beds', 'firepit', 'kitchen', 'nature'];
  const icons = {
    beds: '🛌',
    firepit: '🔥',
    kitchen: '🍽️',
    nature: '🌲'
  };
</script>

<section class="features" id="features">
  <h2>{$t('features.heading')}</h2>
  <div class="grid">
    {#each featureKeys as key}
      <article class="feature-card">
        <span class="icon">{icons[key]}</span>
        <h3>{$t(`features.${key}.title`)}</h3>
        <p>{$t(`features.${key}.desc`)}</p>
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