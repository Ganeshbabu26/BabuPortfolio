import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'babu.jpg'],
      manifest: {
        name: 'Ganeshbabu Portfolio',
        short_name: 'Ganeshbabu',
        description: 'A portfolio site for Ganeshbabu M - Developer & Student',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#00ffe0',
        icons: [
          {
            src: '/babu.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any'
          },
          {
            src: '/babu.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,jpg,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          }
        ],
      }
    })
  ]
});
