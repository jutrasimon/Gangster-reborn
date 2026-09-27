export const VERSION=2;
export const RULES={weeks:16,startCash:1400,maxCrew:8,weaponCost:180,carCost:260,illegalCost:320,bribeCost:140,lawyerCost:180,heatDecay:6,dominanceDistricts:4,dominanceWeeks:2};
export const DISTRICTS=[
 {id:0,name:'Little Italy',tag:'LA FAMILLE',x:24,y:40,w:276,h:270},
 {id:1,name:'Le Centre',tag:'LES AFFAIRES',x:336,y:40,w:276,h:270},
 {id:2,name:'North End',tag:'LES NOTABLES',x:648,y:40,w:276,h:270},
 {id:3,name:'Les Docks',tag:'LE PORT',x:24,y:374,w:276,h:270},
 {id:4,name:'Southside',tag:'LES ATELIERS',x:336,y:374,w:276,h:270},
 {id:5,name:'Blackwater',tag:'LE CLAN MORETTI',x:648,y:374,w:276,h:270},
];
const PLACES=[['Chez Rosa','restaurant',90,350],['Mont-de-piété','pawn',70,300],['Club Bellini','club',140,520],['Hôtel Imperial','hotel',150,620],['Grand magasin','store',120,480],['Union Bank','bank',180,720],['The Blue Note','club',150,580],['Pharmacie Adler','store',90,360],['Salle de billard','pool',85,340],['Entrepôt n° 7','warehouse',100,420],['Taverne du port','bar',125,480],['Garage Sullivan','garage',80,320],['Union des ouvriers','union',115,430],['Imprimerie du soir','press',90,360],['Distillerie fermée','factory',130,500],['Le Royal','hotel',90,350],['Maison de jeux','club',70,300],['Brasserie Moretti','bar',140,520]];
const PEOPLE=[
 ['Vincent « Vinnie » Russo','Le bras droit',0,4,3,2,3],['Rose « La Veuve » Caron','La négociatrice',4,2,5,4,3],['Eddie « Fingers » Cole','Le discret',2,2,2,3,5],['Salvatore Bassi','Le cogneur',3,5,4,1,2],['Josephine Marchand','La comptable',6,1,2,5,3],['Arthur « Doc » Finch','Le spécialiste',5,3,3,4,4],['Luca Ferraro','Le vétéran',1,5,3,2,3],['Frankie Walsh','Le recruteur',7,2,4,4,3],
 ['Enzo Moretti','Le rival',0,4,3,2,3],['Clara Santini','La stratège',4,2,5,4,3],['Tommy Doyle','Le limier',2,2,2,3,5],['Bruno Costa','Le soldat',3,5,4,1,2],['Louis Moreau','Le financier',5,1,2,5,3],['Nora « Lucky » Hayes','La joueuse',6,3,4,4,4],['Mickey Burke','Le chauffeur',7,4,3,2,5],['Paul « Silence » Leroy','Le tireur',0,5,2,2,5]
];
export const ACTIONS={
 extort:{name:'Racketter',icon:'hand',skill:'intimidation',heat:7,cost:0,desc:'Imposer ta protection. Le commerce versera une enveloppe chaque semaine, à récupérer.'},
 buy:{name:'Acheter',icon:'key',skill:'business',heat:0,cost:'price',desc:'Acquérir un commerce. Son revenu sera automatique; il comptera davantage dans la succession.'},
 collect:{name:'Collecter',icon:'cash',skill:'business',heat:0,cost:0,desc:'Récupérer les enveloppes accumulées dans ce commerce. Réussite garantie s’il est encore à toi.'},
 guard:{name:'Protéger',icon:'shield',skill:'force',heat:0,cost:0,desc:'Défendre ce lieu pendant la semaine. Ton homme renforce toutes ses défenses.'},
 scout:{name:'Enquêter',icon:'eye',skill:'stealth',heat:0,cost:0,desc:'Révéler le lieu pour 3 semaines et gagner +12 points de chance sur ta prochaine opération ici. Peut découvrir un candidat.'},
 attack:{name:'Prendre le contrôle',icon:'target',skill:'force',heat:18,cost:60,desc:'Déloger le clan rival. En cas de succès, tu reprends son racket; une propriété reste une propriété.'},
 raid:{name:'Faire une descente',icon:'bolt',skill:'force',heat:14,cost:0,desc:'Voler jusqu’à 260 $ au clan rival sans changer le propriétaire. Risque de blessure.'},
 sabotage:{name:'Saboter',icon:'fire',skill:'stealth',heat:16,cost:80,desc:'Fermer le commerce rival cette semaine et la suivante. Son contrôle reste au rival.'},
 illegal:{name:'Ouvrir un speakeasy',icon:'glass',skill:'business',heat:10,cost:320,desc:'Installer un bar clandestin dans ta propriété. +100 $ par semaine et +4 de pression.'},
 bribe:{name:'Soudoyer la police',icon:'badge',skill:'business',heat:-22,cost:140,desc:'Faire baisser la pression de 22 points. L’homme est occupé toute la semaine.'},
 recruit:{name:'Recruter',icon:'person',skill:'business',heat:0,cost:'recruit',desc:'Engager un candidat repéré. Disponible la semaine suivante. Chaque candidat est unique.'},
 lawyer:{name:'Mandater un avocat',icon:'scales',skill:'business',heat:-6,cost:180,desc:'Libérer tous tes hommes arrêtés pour la semaine suivante. Baisse aussi la pression de 6.'}
};
export const EVENTS=[
 {id:'quiet',name:'Une ville en deuil',desc:'Les anciens du parrain observent les deux camps. Aucun effet cette semaine.'},
 {id:'festival',name:'Le samedi des bonnes affaires',desc:'Tous les commerces rapportent 25 % de plus cette semaine.'},
 {id:'police',name:'Le commissaire serre la vis',desc:'La police surveille les rues. Les opérations criminelles génèrent 5 points de pression supplémentaires.'},
 {id:'strike',name:'Grève sur les quais',desc:'Les revenus des Docks et de Southside sont réduits de moitié cette semaine.'},
 {id:'rumor',name:'Des langues se délient',desc:'Les enquêtes facilitent le recrutement : elles découvrent un candidat caché si disponible.'},
 {id:'rain',name:'Pluie sur Blackwater',desc:'La discrétion est favorisée : +10 points de chance pour les sabotages.'}
];
export function random(s){s.seed=(Math.imul(1664525,s.seed)+1013904223)>>>0;return s.seed/4294967296;}
export function person(id,side=null){const [name,role,portrait,force,intimidation,business,stealth]=PEOPLE[id];return {id,name,role,portrait,force,intimidation,business,stealth,side,wage:35+Math.max(force,intimidation,business,stealth)*5,fee:180+Math.max(force,intimidation,business,stealth)*25,weapon:false,car:false,readyAt:1,arrestedUntil:0,loyalty:100,known:id===5||id===7};}
export function newGame({seed=Date.now(),weeks=16,difficulty='normal'}={}){
 const s={version:VERSION,seed:seed>>>0,week:1,maxWeeks:weeks,difficulty,phase:'planning',winner:null,reason:'',cash:[1400,1400],heat:[8,8],respect:[0,0],hold:[0,0],orders:[],nextOrder:1,guards:{},reports:[],lastReport:[],event:EVENTS[0],intel:[{},{}],candidates:[],crew:[],settings:{sound:false},history:[]};
 s.buildings=PLACES.map(([name,type,income,price],i)=>{let side=i<2?0:i===15||i===16?1:null;const d=Math.floor(i/3),k=i%3,base=DISTRICTS[d];return {id:i,name,type,income,price,district:d,x:base.x+44+(k===1?144:k===2?72:0),y:base.y+90+(k===2?118:0),side,owned:i===0||i===15,illegal:false,stash:side!==null&&! (i===0||i===15)?income:0,closedUntil:0,resistance:3+(i%3),hq:i===0||i===15};});
 for(let i=0;i<5;i++)s.crew.push(person(i,0));for(let i=8;i<13;i++)s.crew.push(person(i,1));for(const i of [5,6,7,13,14,15])s.candidates.push(person(i));return s;
}
export const crewOf=(s,side)=>s.crew.filter(c=>c.side===side);
export function available(s,c){return c.readyAt<=s.week&&c.arrestedUntil<=s.week&&!s.orders.some(o=>o.crewIds.includes(c.id));}
export function districtOwner(s,d){const b=s.buildings.filter(b=>b.district===d);for(const side of [0,1])if(b.filter(b=>b.side===side).length>=2)return side;return null;}
export function territories(s,side){return DISTRICTS.filter(d=>districtOwner(s,d.id)===side).length;}
export function score(s,side){const b=s.buildings.filter(b=>b.side===side);return b.length*2+b.filter(b=>b.owned).length*2+territories(s,side)*5+Math.floor(s.cash[side]/500)+s.respect[side];}
export function cost(s,action,b,recruitId){if(action==='buy')return b?.price??0;if(action==='recruit')return s.candidates.find(c=>c.id===recruitId)?.fee??0;return ACTIONS[action]?.cost??0;}
export function reserved(s,side){return s.orders.filter(o=>o.side===side).reduce((n,o)=>n+o.cost,0);}
export function income(s,side){return s.buildings.filter(b=>b.side===side&&b.owned&&b.closedUntil<s.week).reduce((n,b)=>n+b.income+(b.illegal?100:0),0);}
export function wages(s,side){return crewOf(s,side).reduce((n,c)=>n+c.wage,0);}
export function reachable(s,side,b){return s.buildings.some(a=>a.side===side&&(a.district===b.district||Math.abs(a.x-b.x)+Math.abs(a.y-b.y)<540));}
export function validation(s,side,action,bid,ids=[],recruitId=null){
 if(s.winner!==null||s.phase!=='planning')return 'La partie est terminée.';
 const a=ACTIONS[action],b=s.buildings.find(b=>b.id===bid);if(!a||!b)return 'Cible inconnue.';
 if(!ids.length)return 'Choisis au moins un membre de ton équipe.';
 if(ids.length>3||new Set(ids).size!==ids.length)return 'Une opération accepte de 1 à 3 personnes différentes.';
 const team=ids.map(id=>s.crew.find(c=>c.id===id));if(team.some(c=>!c||c.side!==side||!available(s,c)))return 'Un de ces membres est déjà occupé ou indisponible.';
 if(s.orders.some(o=>o.side===side&&o.action===action&&o.buildingId===bid&&action!=='recruit'))return 'Cet ordre est déjà prévu ici.';
 if(['extort','buy','attack','raid','sabotage'].includes(action)&&!reachable(s,side,b)&&!team.some(c=>c.car))return 'Trop loin de ton territoire. Affecte un chauffeur avec une voiture.';
 if(['extort','buy','collect','illegal'].includes(action)&&b.closedUntil>=s.week)return 'Le commerce est fermé cette semaine.';
 if(action==='extort'&&b.side!==null)return 'Ce commerce paie déjà une protection.';
 if(action==='buy'&&(b.hq||b.owned||b.side===1-side))return 'Ce commerce ne peut pas être acheté.';
 if(['collect','guard','illegal'].includes(action)&&b.side!==side)return 'Ce commerce ne fait pas partie de ton réseau.';
 if(action==='collect'&&(b.owned||b.stash<=0))return 'Aucune enveloppe à collecter.';
 if(action==='illegal'&&(!b.owned||b.illegal))return 'Il faut une propriété sans activité clandestine.';
 if(['attack','raid','sabotage'].includes(action)&&(b.side!==1-side||b.hq))return 'Choisis un commerce adverse, hors quartier général.';
 if(action==='recruit'){
 const c=s.candidates.find(c=>c.id===recruitId);if(!c||(!c.known&&side===0))return 'Ce candidat est indisponible.';
 if(crewOf(s,side).length+s.orders.filter(o=>o.side===side&&o.action==='recruit').length>=RULES.maxCrew)return 'Ton organisation est complète (8 membres).';
 if(s.orders.some(o=>o.side===side&&o.recruitId===recruitId))return 'Ce candidat est déjà contacté.';
 }
 if(action==='lawyer'&&!crewOf(s,side).some(c=>c.arrestedUntil>s.week))return 'Personne n’est en détention.';
 if(cost(s,action,b,recruitId)>s.cash[side]-reserved(s,side))return 'Fonds disponibles insuffisants.';
 return null;
}
export function addOrder(s,side,action,bid,ids,recruitId=null){const error=validation(s,side,action,bid,ids,recruitId);if(error)return {ok:false,error};const o={id:s.nextOrder++,side,action,buildingId:bid,crewIds:[...ids],recruitId,cost:cost(s,action,s.buildings[bid],recruitId)};s.orders.push(o);return {ok:true,order:o};}
export function cancelOrder(s,id){const i=s.orders.findIndex(o=>o.id===id&&o.side===0);if(i<0||s.phase!=='planning')return false;s.orders.splice(i,1);return true;}
export function equip(s,id,kind){const c=s.crew.find(c=>c.id===id);if(!c||c.side!==0||!['weapon','car'].includes(kind)||c[kind]||!available(s,c)||s.phase!=='planning'||s.winner!==null)return false;const n=kind==='weapon'?RULES.weaponCost:RULES.carCost;if(s.cash[0]-reserved(s,0)<n)return false;s.cash[0]-=n;c[kind]=true;return true;}
export function odds(s,side,action,b,team,{actual=false}={}){
 if(['buy','collect','guard','scout','illegal','bribe','recruit','lawyer'].includes(action))return 100;
 const key=ACTIONS[action].skill;const power=team.reduce((n,c)=>n+c[key]+(key==='force'&&c.weapon?2:0),0);
 const guarded=(s.guards[b.id]||[]).reduce((n,c)=>n+c.force+(c.weapon?2:0),0);
 const defense=b.resistance+(b.side===1-side?3:0)+(b.owned?1:0)+(actual?guarded:0);
 const intel=s.intel[side][b.id];const bonus=intel&&intel.expires>=s.week&&intel.bonus?12:0;
 return Math.max(18,Math.min(95,56+power*6-defense*5+bonus+(s.event.id==='rain'&&action==='sabotage'?10:0)));
}
function log(s,side,title,text,tone='neutral',buildingId=null){s.lastReport.push({side,title,text,tone,buildingId});}
export function planBot(s,side=1){
 const prior=s.orders.filter(o=>o.side===side);if(prior.length)return;
 const free=()=>crewOf(s,side).filter(c=>available(s,c));
 const queue=(act,b,people,recruit=null)=>addOrder(s,side,act,b.id,people.map(c=>c.id),recruit).ok;
 const home=s.buildings.find(b=>b.hq&&b.side===side);
 if(s.heat[side]>45&&free().length)queue('bribe',home,[free().sort((a,b)=>b.business-a.business)[0]]);
 if(crewOf(s,side).some(c=>c.arrestedUntil>s.week)&&free().length&&s.cash[side]>500)queue('lawyer',home,[free()[0]]);
 if(crewOf(s,side).length<7&&s.week<Math.max(4,s.maxWeeks-4)&&s.cash[side]>850&&free().length){const c=s.candidates.filter(c=>c.known||side===1).sort((a,b)=>(b.force+b.intimidation)-(a.force+a.intimidation))[0];if(c)queue('recruit',home,[free().sort((a,b)=>b.business-a.business)[0]],c.id);}
 const risk=s.difficulty==='calm'?0.18:s.difficulty==='ruthless'?0.65:0.42;
 let tries=0;
 while(free().length&&tries++<12){
 const f=free(),cash=s.cash[side]-reserved(s,side),mine=s.buildings.filter(b=>b.side===side),neutrals=s.buildings.filter(b=>b.side===null&&b.closedUntil<s.week&&reachable(s,side,b)),enemies=s.buildings.filter(b=>b.side===1-side&&!b.hq&&reachable(s,side,b));
 const stash=mine.filter(b=>!b.owned&&b.stash>0&&b.closedUntil<s.week&&!s.orders.some(o=>o.side===side&&o.action==='collect'&&o.buildingId===b.id)).sort((a,b)=>b.stash-a.stash)[0];
 if(stash&&(cash<650||stash.stash>220)){if(queue('collect',stash,[f.sort((a,b)=>a.business-b.business)[0]]))continue;}
 if(enemies.length&&random(s)<risk&&s.heat[side]<70){const target=enemies.sort((a,b)=>((s.buildings.filter(x=>x.district===b.district&&x.side===side).length)*5+b.income/80)-((s.buildings.filter(x=>x.district===a.district&&x.side===side).length)*5+a.income/80))[0];const team=f.sort((a,b)=>b.force-a.force).slice(0,2);if(queue('attack',target,team))continue;}
 if(neutrals.length){const target=neutrals.sort((a,b)=>(s.buildings.filter(x=>x.district===b.district&&x.side===side).length*200+b.income)-(s.buildings.filter(x=>x.district===a.district&&x.side===side).length*200+a.income))[0];const act=cash>target.price+450&&random(s)<0.6?'buy':'extort';if(queue(act,target,[f.sort((a,b)=>b[ACTIONS[act].skill]-a[ACTIONS[act].skill])[0]]))continue;}
 const upgrade=mine.find(b=>b.owned&&!b.illegal&&b.closedUntil<s.week&&!s.orders.some(o=>o.action==='illegal'&&o.buildingId===b.id));
 if(upgrade&&cash>650&&queue('illegal',upgrade,[f[0]]))continue;
 if(stash&&queue('collect',stash,[f[0]]))continue;
 if(enemies.length&&s.heat[side]<65&&queue('attack',enemies[Math.floor(random(s)*enemies.length)],f.sort((a,b)=>b.force-a.force).slice(0,2)))continue;
 const guard=mine.filter(b=>!b.hq&&!s.orders.some(o=>o.action==='guard'&&o.buildingId===b.id)).sort((a,b)=>b.income-a.income)[0];if(guard&&queue('guard',guard,[f[0]]))continue;
 if(s.heat[side]>15&&queue('bribe',home,[f[0]]))continue;break;
 }
}
export function resolveWeek(s){
 if(s.phase!=='planning'||s.winner!==null)return [];
 planBot(s);s.phase='resolving';s.lastReport=[];s.guards={};const was=s.week;
 const orders=s.orders.map(o=>({...o,initiative:random(s)}));
 orders.sort((a,b)=>{const priority=o=>['guard','scout','bribe','lawyer'].includes(o.action)?0:1;return priority(a)-priority(b)||a.initiative-b.initiative;});
 for(const o of orders){
 const b=s.buildings[o.buildingId],team=o.crewIds.map(id=>s.crew.find(c=>c.id===id)).filter(Boolean),side=o.side,a=ACTIONS[o.action];
 if(!team.length||team.some(c=>c.readyAt>was||c.arrestedUntil>was)){log(s,side,'Opération interrompue',`${a.name} · ${b.name} : équipe indisponible.`,'bad',b.id);continue;}
 let invalid= ['collect','guard','illegal'].includes(o.action)&&b.side!==side||['attack','raid','sabotage'].includes(o.action)&&b.side!==1-side||o.action==='extort'&&b.side!==null||o.action==='buy'&&(b.owned||b.side===1-side)||o.action==='recruit'&&!s.candidates.some(c=>c.id===o.recruitId)||['extort','buy','collect','illegal'].includes(o.action)&&b.closedUntil>=was;
 if(invalid||s.cash[side]<o.cost){log(s,side,'La situation a changé',`${a.name} · ${b.name} : ordre annulé, fonds non dépensés.`,'neutral',b.id);continue;}
 s.cash[side]-=o.cost;
 const chance=odds(s,side,o.action,b,team,{actual:true}),roll=Math.floor(random(s)*100)+1,success=roll<=chance;
 if(a.heat>0)s.heat[side]=Math.min(100,s.heat[side]+a.heat+(s.event.id==='police'?5:0));else s.heat[side]=Math.max(0,s.heat[side]+a.heat);
 const test=chance<100?` Chance ${chance} % · tirage ${roll}.`:'';
 if(!success){
 if(['attack','raid','sabotage'].includes(o.action)){const hurt=team[Math.floor(random(s)*team.length)];hurt.readyAt=was+2;log(s,side,'L’opération tourne mal',`${b.name} résiste. ${hurt.name.split(' «')[0]} est blessé, indisponible la semaine prochaine.${test}`,'bad',b.id);}
 else log(s,side,'Refus de payer',`${b.name} refuse ta protection.${test}`,'bad',b.id);
 continue;
 }
 switch(o.action){
 case 'extort':b.side=side;b.stash+=b.income;log(s,side,'Une nouvelle protection',`${b.name} rejoint ton réseau. Une première enveloppe de ${b.income} $ t’attend.${test}`,'good',b.id);break;
 case 'buy':b.side=side;b.owned=true;s.cash[side]+=b.stash;b.stash=0;log(s,side,'Les clés ont changé de mains',`${b.name} devient ta propriété. Revenus automatiques : ${b.income} $ / semaine.`,'good',b.id);break;
 case 'collect':{const bonus=1+Math.max(...team.map(c=>c.business))*0.04;const amount=Math.round(b.stash*bonus);s.cash[side]+=amount;b.stash=0;log(s,side,'L’enveloppe est arrivée',`${b.name} : ${amount} $ collectés, bonus de négociation inclus.`,'good',b.id);break;}
 case 'guard':s.guards[b.id]=team;log(s,side,'Des hommes sur place',`${b.name} est protégé pour la semaine. +${team.reduce((n,c)=>n+c.force+(c.weapon?2:0),0)} de défense.`,'neutral',b.id);break;
 case 'scout':{s.intel[side][b.id]={expires:was+3,bonus:true};const candidate=s.candidates.find(c=>!c.known);if(candidate){candidate.known=true;log(s,side,'Un nouveau contact',`${candidate.name} est disponible au recrutement.`,'good',b.id);}log(s,side,'Dossier complété',`${b.name} : activité et résistance connues. +12 points sur la prochaine opération hostile ici.`,'good',b.id);break;}
 case 'attack':{const old=b.side;b.side=side;b.stash=0;s.respect[side]+=1;s.respect[old]=Math.max(0,s.respect[old]-1);log(s,side,'Le territoire bascule',`${b.name} passe sous ton contrôle.${test}`,'good',b.id);log(s,old,'Un établissement perdu',`${b.name} a été repris par le clan rival.`,'bad',b.id);break;}
 case 'raid':{const n=Math.min(s.cash[1-side],260);s.cash[1-side]-=n;s.cash[side]+=n;log(s,side,'Une descente payante',`${b.name} : ${n} $ dérobés à la caisse adverse.${test}`,'good',b.id);log(s,1-side,'La caisse a été vidée',`${b.name} : ${n} $ perdus.`,'bad',b.id);break;}
 case 'sabotage':b.closedUntil=was+1;log(s,side,'Rideau baissé',`${b.name} ne produira aucun revenu cette semaine ni la suivante.${test}`,'good',b.id);log(s,1-side,'Commerce saboté',`${b.name} ferme jusqu’à la fin de la semaine ${was+1}.`,'bad',b.id);break;
 case 'illegal':b.illegal=true;log(s,side,'Un bar derrière la façade',`${b.name} abrite un speakeasy. +100 $ de revenu, +4 de pression par semaine.`,'good',b.id);break;
 case 'bribe':log(s,side,'Le commissariat regarde ailleurs','La pression policière baisse de 22 points.','good',b.id);break;
 case 'lawyer':for(const c of crewOf(s,side))if(c.arrestedUntil>was)c.arrestedUntil=was+1;log(s,side,'Les portes de la cellule s’ouvrent','Les membres arrêtés seront disponibles la semaine prochaine.','good',b.id);break;
 case 'recruit':{const i=s.candidates.findIndex(c=>c.id===o.recruitId);const c=s.candidates.splice(i,1)[0];c.side=side;c.readyAt=was+1;s.crew.push(c);log(s,side,'Bienvenue dans la famille',`${c.name}. Disponible la semaine prochaine, salaire ${c.wage} $ / semaine.`,'good',b.id);break;}
 }
 if(['extort','attack','raid','sabotage'].includes(o.action)&&s.intel[side][b.id])s.intel[side][b.id].bonus=false;
 }
 for(const side of [0,1]){
 let revenue=0;for(const b of s.buildings.filter(b=>b.side===side&&b.closedUntil<was)){const mult=s.event.id==='festival'?1.25:s.event.id==='strike'&&[3,4].includes(b.district)?0.5:1;const value=Math.round((b.income+(b.illegal?100:0))*mult);if(b.owned)revenue+=value;else b.stash=Math.min(b.income*4,b.stash+value);if(b.illegal)s.heat[side]=Math.min(100,s.heat[side]+4);}
 const pay=wages(s,side);s.cash[side]+=revenue;const shortage=s.cash[side]<pay;s.cash[side]=Math.max(0,s.cash[side]-pay);
 for(const c of crewOf(s,side))c.loyalty=Math.max(0,Math.min(100,c.loyalty+(shortage?-25:5)));
 log(s,side,'Les comptes de la semaine',`Propriétés : +${revenue} $ · salaires : −${pay} $.${shortage?' Paie incomplète : −25 de loyauté.':''}`,shortage?'bad':'neutral');
 for(const c of [...crewOf(s,side)])if(c.loyalty<=0){s.crew=s.crew.filter(x=>x.id!==c.id);c.side=null;c.loyalty=60;c.known=true;c.readyAt=was+1;c.arrestedUntil=0;s.candidates.push(c);log(s,side,'Une chaise vide',`${c.name} quitte la famille après plusieurs paies incomplètes.`,'bad');}
 if(s.heat[side]>=60){const risk=(s.heat[side]-40)/100;if(random(s)<risk){const members=crewOf(s,side).filter(c=>c.arrestedUntil<=was);if(members.length){const c=members[Math.floor(random(s)*members.length)];c.arrestedUntil=was+3;log(s,side,'Une arrestation',`${c.name} est détenu pendant 2 semaines. Un avocat peut accélérer sa sortie.`,'bad');}const illegal=s.buildings.filter(b=>b.side===side&&b.illegal);if(illegal.length&&s.heat[side]>=80){const b=illegal[Math.floor(random(s)*illegal.length)];b.closedUntil=was+2;log(s,side,'Descente de police',`${b.name} est fermé pendant 2 semaines.`,'bad',b.id);}}}
 s.heat[side]=Math.max(0,s.heat[side]-RULES.heatDecay);
 s.hold[side]=territories(s,side)>=RULES.dominanceDistricts?s.hold[side]+1:0;
 }
 s.history.push({week:was,score:[score(s,0),score(s,1)],cash:[...s.cash],territories:[territories(s,0),territories(s,1)]});
 for(const side of [0,1])if(s.hold[side]>=RULES.dominanceWeeks){s.winner=side;s.reason='Quatre quartiers tenus pendant deux semaines consécutives.';}
 if(!crewOf(s,0).length||!crewOf(s,1).length){s.winner=!crewOf(s,0).length&&!crewOf(s,1).length?2:!crewOf(s,0).length?1:0;s.reason='Une organisation n’a plus aucun membre.';}
 if(was>=s.maxWeeks&&s.winner===null){const a=score(s,0),b=score(s,1);s.winner=a===b?(s.cash[0]===s.cash[1]?2:s.cash[0]>s.cash[1]?0:1):a>b?0:1;s.reason='Le conseil de la famille a tranché selon l’influence acquise.';}
 s.reports.unshift({week:was,entries:s.lastReport.filter(r=>r.side===0)});s.reports=s.reports.slice(0,16);s.orders=[];s.guards={};s.week++;s.phase='planning';if(s.winner===null)s.event=EVENTS[1+Math.floor(random(s)*(EVENTS.length-1))];return s.lastReport.filter(r=>r.side===0);
}
export function publicState(s){return {week:s.week,maxWeeks:s.maxWeeks,winner:s.winner,cash:s.cash[0],reserved:reserved(s,0),heat:s.heat[0],score:[score(s,0),score(s,1)],crew:crewOf(s,0),buildings:s.buildings.map(b=>({id:b.id,name:b.name,district:b.district,side:b.side,owned:b.owned,...(b.side===0||s.intel[0][b.id]?.expires>=s.week?{stash:b.stash,income:b.income,illegal:b.illegal}: {})})),orders:s.orders.filter(o=>o.side===0)};}
