import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

// console.log(join(__dirname));
// // C:\Users\javie\Documents\Ejercicios\React\formik-validated

// console.log(join(__filename));
// // C:\Users\javie\Documents\Ejercicios\React\formik-validated\vite.config.js

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
	},
	resolve: {
		alias: {
			'@': join(__dirname, './src'),
			'#': join(__dirname, './*'),
		},
	},
});
