import {writeFileSync} from 'node:fs';
import {RULES,ACTIONS,DISTRICTS,EVENTS,newGame} from '../dist/engine.js';
const s=newGame({seed:1});
writeFileSync(new URL('../data/prototype-v02.json',import.meta.url),JSON.stringify({version:'0.2',status:'implemented_prototype_hypotheses',source:'dist/engine.js',rules:RULES,actions:ACTIONS,districts:DISTRICTS,buildings:s.buildings,characters:[...s.crew,...s.candidates],events:EVENTS},null,2)+'\n');
