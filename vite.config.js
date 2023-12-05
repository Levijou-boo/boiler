// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // src 디렉토리를 루트로 설정
  server: {
    port: 4000,
  },
  preview: {
    port: 5000 // 프리뷰 서버를 위한 다른 포트 설정
  }
});
