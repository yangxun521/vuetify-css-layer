import {resolve} from 'path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        VueSetupExtend(),
        Vuetify({
            autoImport: true,
            styles: {
                configFile: 'src/styles/settings.scss',
            },
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router'
            ],
        }),
        Components({
        }),
    ],
    optimizeDeps: {
        exclude: [
            'vuetify',
            'vue-router',
            'unplugin-vue-router/runtime',
            'unplugin-vue-router/data-loaders',
            'unplugin-vue-router/data-loaders/basic',
        ],
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    server: {
        host: '0.0.0.0',
    },
})
