<script>
  // Import the translation helper from your i18n module
  import { t } from '../i18n.js';

  // Demo images – replace with your own if you wish
  const photos = [
    '/a2.jpg',
    '/a3.jpg',
    '/a4.jpg',
    '/a5.jpg'
  ];
</script>

<section class="gallery">
  <!-- Use the translation helper for the heading -->
  <h2>{$t('gallery.heading')}</h2>
  <div class="grid">
    {#each photos as p}
      <img src={p} alt="Cabin photo" loading="lazy" />
    {/each}
  </div>
</section>

<style>
  .gallery {
    padding: 4rem 2rem;
    text-align: center;
  }
  h2 { margin-bottom: 1.5rem; color:#333;}
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  img {
    width:100%;
    height:auto;
    border-radius:6px;
    object-fit:cover;
  }
</style>