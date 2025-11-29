import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY so it can be used in the browser code
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY),
      // Polyfill for libraries interacting with process.env to prevent "process is not defined"
      'process.env': {}
    }
  };
});