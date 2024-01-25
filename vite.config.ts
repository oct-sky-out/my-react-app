import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vercel()],
	ssr: {
		noExternal: [
			// MUI needs to be pre-processed by Vite in production: https://github.com/brillout/vite-plugin-ssr/discussions/901
			'@mui/base',
			'@mui/icons-material',
			'@mui/material',
			'@mui/utils',
			'@mui/x-date-pickers', // これを追加
		],
	},
});
