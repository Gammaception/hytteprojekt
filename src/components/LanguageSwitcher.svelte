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
    z-index: 1000; /* keep the switcher above other content */
  }

  button{
    background:white;
    color:#333;
    border:none;
    padding:.25rem .75rem;
    border-radius:4px;
    cursor:pointer;
    box-shadow:0 2px 6px rgba(0,0,0,.15);
  }
  button:hover{background:#f0f0f0;}
</style>

