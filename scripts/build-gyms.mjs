import { build } from 'esbuild';
import { mkdir, cp, copyFile } from 'node:fs/promises';
await mkdir('dist/gyms', {recursive:true});
await build({entryPoints:['gyms/src/main.ts'],bundle:true,minify:true,sourcemap:false,outfile:'dist/gyms/app.js',target:'es2022',legalComments:'eof'});
await Promise.all([copyFile('gyms/index.html','dist/gyms/index.html'),copyFile('gyms/style.css','dist/gyms/style.css'),cp('gyms/assets','dist/gyms/assets',{recursive:true})]);
console.log('Gyms compilés dans dist/gyms');
