<script>
  // Import i18n and set a default locale
  import * as i18n from './i18n.js';
  const { locale } = i18n;
  locale.set('en');

  import LanguageSwitcher from './components/LanguageSwitcher.svelte';
  import Hero from './components/Hero.svelte';
  import Features from './components/Features.svelte';
  import Gallery from './components/Gallery.svelte';
  import BookingCTA from './components/BookingCTA.svelte';
  import Footer from './components/Footer.svelte';
</script>

<LanguageSwitcher />
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

