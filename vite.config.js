import { defineConfig } from 'vite';
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/bruno-portfolio/' : '/',
  server: { host: '0.0.0.0', port: 4173, strictPort: true, allowedHosts: ['terminal.local'] }
});
