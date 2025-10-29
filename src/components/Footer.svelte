<script>
  import { t } from '../i18n.js';
</script>

<footer class="footer">
  <p>{$t('footer.text', { year: new Date().getFullYear() })}</p>
</footer>

<style>
  .footer{
    text-align:center;
    padding:2rem;
    font-size:.9rem;
    color:#777;
    background:#f1f1f1;
  }
</style>