/** UI uses device pixels for rendering, CSS pixels for layout. */
export function uiDensity(deviceRatio=1){return Math.min(3,Math.max(1,Number.isFinite(deviceRatio)?deviceRatio:1));}
export function density(){return uiDensity(window.devicePixelRatio||1);}
export function bufferSize(width:number,height:number,ratio:number){return {width:Math.max(1,Math.round(width*ratio)),height:Math.max(1,Math.round(height*ratio))};}
