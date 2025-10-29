<script>
  export let title = "Welcome to Cozy Cabin";
  export let subtitle =
    "Enjoy nature without sacrificing comfort.";
</script>

<section class="hero">
  <div class="overlay">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <button on:click={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
      View Features
    </button>
  </div>
</section>

<style>
  .hero {
    height: 60vh;
    background: url("https://source.unsplash.com/featured/?cabin,nature") center / cover no-repeat;
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
    background: #ff7f50;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background .2s;
  }
  button:hover {
    background: #e66b44;
  }
</style>
