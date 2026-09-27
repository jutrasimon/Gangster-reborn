import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
const {outputFiles}=await build({entryPoints:['gyms/src/iso.ts'],bundle:true,write:false,format:'esm',platform:'node'});
const {project,unproject,lots,isRoad}=await import('data:text/javascript;base64,'+Buffer.from(outputFiles[0].text).toString('base64'));
test('isometric selection maps back to logical coordinates, including negative positions',()=>{
 for(let x=-15;x<16;x+=.5)for(let y=-15;y<16;y+=.5){const p=project(x,y),q=unproject(p.x,p.y);assert.ok(Math.abs(x-q.x)<1e-9&&Math.abs(y-q.y)<1e-9);}
});
test('fixture lots never occupy streets and have unique selectable identities',()=>{
 assert.equal(new Set(lots.map(l=>l.id)).size,lots.length);
 for(const l of lots){assert.equal(isRoad(l.x,l.y),false);assert.ok(l.floors>=1&&l.floors<=3);}
});
