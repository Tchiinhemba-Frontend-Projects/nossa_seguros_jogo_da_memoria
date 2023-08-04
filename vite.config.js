import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


function getSystemPath() {
  const string = path.resolve(__dirname);


  if (string.startsWith('C')) {
    return `./src/styles/variables.scss`
  } else {
    return path.resolve(__dirname, 'src', 'styles', 'variables.scss');
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${getSystemPath()}";`
      }
    }
  }
})
