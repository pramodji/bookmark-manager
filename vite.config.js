import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dns from 'dns';

// Force Node to prioritize IPv4 so Tauri can find it
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
    plugins: [sveltekit()],

    clearScreen: false,

    server: {
        port: 5173,
        strictPort: true,
        // UNCOMMENTED AND SET TO 127.0.0.1
        host: '127.0.0.1', 
        fs: {
            allow: ['..']
        }
    }
});