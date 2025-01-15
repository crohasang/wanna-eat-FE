import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(() => {
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
          type: 'module'
        },
        manifest: {
          name: 'Wanna Eat',
          short_name: 'Wanna Eat',
          description: 'App for workers to decide food',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/favicon/favicon-16x16.png',
              sizes: '16x16',
              type: 'image/png'
            },
            {
              src: '/favicon/favicon-32x32.png',
              sizes: '32x32',
              type: 'image/png'
            },
            {
              src: '/favicon/favicon-96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: '/favicon/favicon-128x128.png',
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: '/favicon/favicon-196x196.png',
              sizes: '196x196',
              type: 'image/png'
            },
            {
              src: '/favicon/favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        }
      })
    ],
  }
})
