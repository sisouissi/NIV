import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
    // Charge les variables d'environnement
    const env = loadEnv(mode, process.cwd(), '');

    return {
        // Définit les variables d'environnement pour être utilisées dans le code
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        // Définit les alias de chemin
        resolve: {
            alias: {
                '@': resolve(__dirname, '.'), // Alias '@' pointe vers le répertoire courant
            }
        },
        // Configuration CSS pour utiliser Tailwind CSS
        css: {
            postcss: {
                plugins: [
                    require('tailwindcss'), // Ajoute Tailwind CSS comme plugin PostCSS
                    require('autoprefixer') // Ajoute Autoprefixer pour la prise en charge des préfixes automatiques
                ]
            }
        },
        // Plugins Vite
        plugins: [react()] // Utilise le plugin React pour Vite
    };
});
