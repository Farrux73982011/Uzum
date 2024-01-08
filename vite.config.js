import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        card: resolve(__dirname, 'pages/card/card.html'),
        poisk: resolve(__dirname, 'pages/poisk/index.html'),
        product_page: resolve(__dirname, 'pages/product_page/product.html'),
    },
    },
  },
})