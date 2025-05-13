import { defineConfig } from "vite";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    outDir: 'docs', // 输出目录设置为 docs
  },
});
