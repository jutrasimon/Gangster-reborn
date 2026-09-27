/** UI fixtures only: no gameplay rules, balances, or progression system. */
export const skillNames=['Tir','Intimidation','Organisation','Discrétion','Conduite','Endurance'];
export const profiles=[
{name:'Rose Bellini',role:'Lieutenante',frame:4,alias:'« La patronne »',skills:[3,5,5,4,2,3],energy:78,xp:64,progress:38,location:'Café Bellini',action:'Collecte',note:'Coordonne une équipe de trois personnes. Exemple de note libre.'},
{name:'Luca Moretti',role:'Chauffeur',frame:1,alias:'« Le rapide »',skills:[2,2,3,4,5,4],energy:42,xp:37,progress:64,location:'Garage Moreau',action:'Déplacement',note:'Assigné au véhicule de l’équipe. Fiche fictive pour tester les informations.'},
{name:'Enzo Russo',role:'Homme de main',frame:0,alias:'« Le calme »',skills:[5,4,2,3,2,5],energy:91,xp:83,progress:16,location:'Hôtel du Port',action:'Surveillance',note:'Attend près de l’entrée de l’hôtel. Scénario d’interface uniquement.'},
{name:'Josephine Cole',role:'Comptable',frame:6,alias:'« Les comptes »',skills:[1,2,5,4,3,2],energy:65,xp:52,progress:79,location:'Banque Centrale',action:'Vérification',note:'Prépare un dossier financier. Les fonctions des spécialistes restent à concevoir.'}];
export const uiState={theme:'night' as 'night'|'paper',large:false,selected:0,disabled:false,busy:true,modal:false,toast:'',tab:0,energy:78,xp:64,progress:38,playing:false,sector:0,document:0};
export function selectProfile(i:number){uiState.selected=Math.max(0,Math.min(profiles.length-1,i));const p=profiles[uiState.selected];uiState.energy=p.energy;uiState.xp=p.xp;uiState.progress=p.progress;uiState.playing=false;}
export function clampPercent(n:number){return Math.max(0,Math.min(100,n));}
export function uiLayout(width:number){const compact=width<740;return {compact,pad:compact?14:24,height:compact?1200:810};}
