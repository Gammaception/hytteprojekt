<script>
  // Demo images – replace with your own if you wish
  const photos = [
    "https://source.unsplash.com/800x600/?cabin,fireplace",
    "https://source.unsplash.com/800x600/?cabin,beds",
    "https://source.unsplash.com/800x600/?cabin,dining",
    "https://source.unsplash.com/800x600/?cabin,wildlife"
  ];
</script>

<section class="gallery">
  <h2>Photo Gallery</h2>
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
    width:100%; height:auto; border-radius:6px;
    object-fit:cover;
  }
</style>