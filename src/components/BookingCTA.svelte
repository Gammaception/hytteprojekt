<script>
  // Import the translation helper
  import { t } from '../i18n.js';

  // The nightly price (no longer exported)
  const pricePerNight = '$120';

  // Booking dates
  const startDate = new Date().toISOString().substr(0, 10);
  const endDate   = new Date(Date.now() + 86400000 * 7).toISOString().substr(0, 10);

  function bookNow() {
    alert(`Booking started for ${pricePerNight}/night.\nFrom: ${startDate}\nTo: ${endDate}`);
  }
</script>

<section class="booking">
  <h2>{$t('bookingCTA.heading')}</h2>
  <p>{$t('bookingCTA.pricePerNight', { price: pricePerNight })}</p>
  <button on:click={bookNow}>{$t('bookingCTA.reserveButton')}</button>
</section>

<style>
  .booking {
    background:#538cd2;
    color:white;
    padding:3rem 1.5rem;
    text-align:center;
  }
  h2 {margin-bottom:.75rem;}
  button{
    margin-top:1rem;
    padding:.75rem 1.25rem;
    font-size:1.05rem;
    background:#fff;
    color:#538cd2;
    border:none;
    cursor:pointer;
    border-radius:4px;
    transition:all .2s ease;
  }
  button:hover{box-shadow:0 3px 8px rgba(0,0,0,.15);}
</style>