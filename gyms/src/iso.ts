/** Logical map coordinates are independent of Phaser. */
export const TILE_W = 132, TILE_H = 66;
export function project(x:number,y:number){return {x:(x-y)*TILE_W/2,y:(x+y)*TILE_H/2};}
export function unproject(x:number,y:number){return {x:x/TILE_W+y/TILE_H,y:y/TILE_H-x/TILE_W};}
export function isRoad(x:number,y:number){return x===3||x===7||y===3||y===7;}
export interface Lot {id:string;x:number;y:number;name:string;floors:number;kind:number;}
const names=['Épicerie Bellini','Atelier Moreau','Hôtel du Port','Café de la Gare','Entrepôt Sullivan','Imprimerie Centrale','Tailleur Lombardi','Boulangerie Rosa','Garage des Docks'];
export const lots:Lot[]=[];
for(let y=0;y<11;y++)for(let x=0;x<11;x++)if(!isRoad(x,y)&&(x+y)%3!==0)lots.push({id:`lot-${x}-${y}`,x,y,name:names[(x+2*y)%names.length],floors:1+(x*7+y*3)%3,kind:(x+y)%4});
