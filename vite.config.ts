import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                audits: 'audits.html',
                research: 'research.html',
            },
        },
    },
})
