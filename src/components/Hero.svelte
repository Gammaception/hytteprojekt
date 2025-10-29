<script>
  import { t } from '../i18n.js'; // translation helper
</script>

<section class="hero">
  <div class="overlay">
    <h1>{$t('hero.title')}</h1>
    <p>{$t('hero.subtitle')}</p>
    <button on:click={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
      {$t('hero.view')}
    </button>
  </div>
</section>

<style>
  .hero {
    height: 60vh;
    background: url("/gallery/a1.jpg") center / cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay {
    text-align: center;
    color: white;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    background: #538cd2;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background .2s;
  }
  button:hover {
    background: #538cd2;
  }
</style>

