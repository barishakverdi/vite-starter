// vite.config.js
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

// @see https://vitejs.dev/config/

export default {
    build: {
        sourcemap: true,
        manifest: true,
        assetsDir: "src/",
        outDir: "public/",
        cssCodeSplit: true,
        ssrManifest: true,
    },

    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/views/block'),
        }),
    ],
}
