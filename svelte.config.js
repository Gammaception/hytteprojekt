// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';

export default {
  // Enable Svelte preprocessor (SCSS, TypeScript, etc.) if you need it.
  preprocess: sveltePreprocess(),
  	compilerOptions: {
		compatibility: {
			componentApi: 4,
        }
    },
  kit: {
    // The "adapter" defines where your build output will go.
    adapter: {
      name: 'auto',   // use Vite's default for SPA
      options: {}
    },

    // For a simple static site you can leave the following as defaults.
    vite: {},          // additional Vite configuration can go here
  }
};