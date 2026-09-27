/** Shared comparison fixture. Dimensions are design test values, not Gangsters rules. */
export type MapMode='street'|'top'|'plan'|'old';
export interface Place {id:string;name:string;short:string;x:number;y:number;w:number;h:number;kind:number;poi:string;}
export const places:Place[]=[
{id:'cafe',name:'Café Bellini',short:'Café',x:-180,y:-160,w:150,h:115,kind:0,poi:'QG'},
{id:'garage',name:'Garage Moreau',short:'Garage',x:180,y:-160,w:180,h:110,kind:2,poi:'AUTO'},
{id:'hotel',name:'Hôtel du Port',short:'Hôtel',x:-180,y:160,w:150,h:132,kind:1,poi:'INFO'},
{id:'bank',name:'Banque Centrale',short:'Banque',x:180,y:160,w:180,h:130,kind:3,poi:'$'},
{id:'depot',name:'Entrepôt Sullivan',short:'Entrepôt',x:-180,y:470,w:180,h:120,kind:2,poi:'STOCK'},
{id:'club',name:'Club Rosa',short:'Club',x:180,y:470,w:150,h:115,kind:0,poi:'RDV'}];
export const actors=[{id:'luca',name:'Luca',x:-45,y:-12},{id:'rose',name:'Rose',x:45,y:52},{id:'enzo',name:'Enzo',x:-46,y:115}];
export function projectLab(x:number,y:number,mode:MapMode){return mode==='street'?{x:(x-y)*.82,y:(x+y)*.41}:{x,y};}
export const route=[{x:-45,y:-12},{x:-45,y:315},{x:95,y:315},{x:95,y:240}];
export const descriptions:Record<MapMode,string>={street:'Isométrique de rue · volume des façades, espace pour circuler.',top:'Vue du dessus · emprises, trottoirs et entrées visibles.',plan:'Plan de quartier · lieux et liaisons; personnages représentés par des pions.',old:'Ancienne miniature · référence de comparaison, cadrée sur toute la ville.'};
