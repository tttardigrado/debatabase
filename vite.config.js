import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  	svelte(),
  	VitePWA({
  		manifest: {
  			theme_color : "#1fb2a6",
  			background_color : "#1d232a",
  			display : "standalone",
  			scope : "/",
  			start_url : "/",
  			short_name : "Debatabase",
  			description : "A content agregator for competitive debate resources",
  			name : "Debatabase",
  			icons: [
  			  {
  			    src: 'apple-touch-icon-180x180.png',
  			    sizes: '180x180',
  			    type: 'image/png'
  			  },
  			  {
  			    src: 'maskable-icon-512-512.png',
  			    sizes: '512x512',
  			    type: 'image/png'
  			  },
  			  {
  			    src: 'pwa-512-512.png',
  			    sizes: '512x512',
  			    type: 'image/png'
  			  },
  			  {
  			    src: 'pwa-192x192.png',
  			    sizes: '192x192',
  			    type: 'image/png'
  			  },
  			  {
  			    src: 'pwa-64x64.png',
  			    sizes: '64x64',
  			    type: 'image/png'
  			  },
  			]
  		}

  	})
  ],
})

