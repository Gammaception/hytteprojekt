<script>
  import Hero from './components/Hero.svelte';
  import Features from './components/Features.svelte';
  import Gallery from './components/Gallery.svelte';
  import BookingCTA from './components/BookingCTA.svelte';
  import Footer from './components/Footer.svelte';

  // You can customize props here or fetch data via an API
</script>

<Hero />

<Features />
<Gallery />
<BookingCTA />

<Footer />

<style>
  :global(body) {
    margin:0;
    font-family: system-ui, sans-serif;
    color:#333;
    background:#fafafa;
    line-height:1.6;
  }
  h2 {color:#222;}
</style>



