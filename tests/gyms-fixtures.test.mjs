import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
async function load(file){const r=await build({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node'});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));}
const {places,projectLab,route}=await load('gyms/src/map-fixture.ts');
const {profiles,uiState,selectProfile,clampPercent,uiLayout}=await load('gyms/src/ui-fixture.ts');
test('comparison buildings remain outside both street corridors at every supported width',()=>{for(let sw=72;sw<=140;sw+=4)for(const l of places){const cx=Math.sign(l.x)*(sw/2+130);assert.ok(Math.abs(cx)-l.w/2>sw/2+18);for(const cross of [0,315])assert.ok(Math.abs(l.y-cross)-l.h/2>sw/2+18);}});
test('shared reference geometry projects to finite points for each mode',()=>{assert.equal(new Set(places.map(p=>p.id)).size,places.length);for(const mode of ['street','top','plan'])for(const pt of [...places,...route]){const p=projectLab(pt.x,pt.y,mode);assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y));}});
test('profile switch resets editable demo values and stops animation',()=>{uiState.playing=true;uiState.energy=0;selectProfile(2);assert.equal(uiState.energy,profiles[2].energy);assert.equal(uiState.playing,false);assert.equal(uiState.selected,2);assert.equal(clampPercent(103),100);assert.equal(clampPercent(-2),0);assert.ok(uiLayout(390).height>1130+42);});
