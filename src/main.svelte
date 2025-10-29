<script>
  // You can import global styles or components here
</script>

<svelte:head>
  <title>My Modern Website</title>
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Add any meta tags or external stylesheets here -->
</svelte:head>

<main class="container">
  <h1>Welcome to My Modern Website</h1>
  <!-- Your main app component goes here -->
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, sans-serif;
    background-color: #f9f9f9;
    color: #222;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>

