<script>
  export let pricePerNight = "$120";
  const startDate = new Date().toISOString().substr(0,10);
  const endDate = new Date(Date.now() + 86400000 * 7).toISOString().substr(0,10);

  function bookNow() {
    alert(`Booking started for ${pricePerNight}/night.\nFrom: ${startDate}\nTo: ${endDate}`);
  }
</script>

<section class="booking">
  <h2>Book Your Stay Today!</h2>
  <p>{pricePerNight} per night – fully refundable.</p>
  <button on:click={bookNow}>Reserve Now</button>
</section>

<style>
  .booking {
    background:#ff7f50;
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
    color:#ff7f50;
    border:none;
    cursor:pointer;
    border-radius:4px;
    transition:all .2s ease;
  }
  button:hover{box-shadow:0 3px 8px rgba(0,0,0,.15);}
</style>