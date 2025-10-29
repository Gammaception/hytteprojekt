<script>
  import { locale } from '../i18n.js';
</script>

<div class="lang-switcher">
  <button on:click={() => locale.set('en')}>EN</button>
  <button on:click={() => locale.set('nb')}>NB</button>
</div>

<style>
  .lang-switcher {
    position: fixed;
    top: 1rem; right: 1rem;
    display:flex;
    gap:.5rem;
  }
  button{
    background:none;
    border:1px solid #333;
    padding:.25rem .75rem;
    border-radius:4px;
    cursor:pointer;
  }
</style>

