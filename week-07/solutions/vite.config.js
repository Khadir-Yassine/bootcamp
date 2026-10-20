import {defineConfig} from 'vite';
export default defineConfig({server:{proxy:{'/api':'http://localhost:3001','/users':'http://localhost:3001'}}});
