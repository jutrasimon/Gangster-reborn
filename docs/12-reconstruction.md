# Reconstruction — technologie puis boucles

27 septembre 2026. Démarche VALIDÉE par Simon; technologie et séquence de boucles À DÉFINIR.

## Ce qui change

La V1 abstrait les opérations en ordres résolus à la fin d’une manche. Elle manque le cœur demandé : organiser le temps des équipes, les voir agir et se déplacer dans une ville, intervenir pendant l’exécution. Elle est conservée pour historique, sans servir de blueprint. Les documents 01 à 11 doivent être réexaminés avant toute réutilisation de règles. Les faits sourcés restent distincts des propositions anciennes.

Le projet reste un jeu navigateur, pensé pour mobile, solo contre bot pour le moment, avec deux prétendants à la succession du parrain. La durée d’environ une heure reste une cible à tester, pas un motif pour abstraire arbitrairement la simulation.

## 1. Choisir la technologie

Évaluer les candidats sur les capacités nécessaires, avant de choisir un moteur :

| Besoin à prendre en charge | Vérification attendue |
|---|---|
| Ville lisible, rues, bâtiments, personnages et véhicules | Scène représentative, caméra et sélection tactile; comparaison aux écrans originaux |
| Simulation du temps indépendante de l’affichage | Pause et accélération sans altérer le résultat des actions |
| Déplacements et circulation | Chemins sur les rues, agents à pied et véhicules, réaffectation en cours |
| Planification et interventions | Ordres préparés, progression observable et interruption pendant l’exécution |
| Interface de gestion | Équipes, équipements, ordres et informations accessibles sur téléphone |
| Sauvegarde | Reprise de l’état de simulation et des ordres en cours |
| Production et maintenance | Pipeline d’assets, débogage, tests, export web et déploiement reproductibles |
| Performance mobile | Mesures sur une scène représentative; budget d’agents, mémoire et temps de chargement à définir |

La comparaison doit s’appuyer sur les documentations officielles actuelles. Aucun choix parmi moteurs, bibliothèques de rendu ou solution maison n’est fait ici. Ne pas réutiliser JavaScript/SVG simplement parce que la V1 existe.

Après comparaison, un banc d’essai technique limité vérifiera les risques principaux. Son contenu et ses mesures seront consignés; ce n’est pas une nouvelle version complète du jeu. Le futur multijoueur peut informer la séparation simulation/interface, mais n’est pas à implémenter maintenant.

## 2. Construire une boucle à la fois

L’ordre des boucles sera défini après le choix technique. Pour chacune :

1. Décrire une situation concrète du jeu original, avec pages du manuel et, si nécessaire, observation de gameplay.
2. Décrire ce que le joueur voit, prépare, déclenche, surveille et modifie; préciser les interactions et le plaisir attendu.
3. Séparer fonctionnement original, adaptations proposées et décisions validées. Noter explicitement les inconnues.
4. Implémenter une tranche limitée avec critères observables.
5. Vérifier le comportement et faire évaluer l’expérience; documenter les écarts avant d’élargir.

## Référence de départ

[Manuel de Gangsters: Organized Crime](https://www.scribd.com/document/211002430/Gangsters-Instuction-Manual).

Repères déjà consultés : organisation des équipes et des ressources (p. 32–37), horloge hebdomadaire et vues de la ville (p. 68–74), interventions Street Orders (p. 80–81), compétences et équipements (p. 92–95). Ces repères ne constituent pas une déconstruction complète du manuel.

Restent notamment à établir précisément : allocation et estimation du temps, ordre d’exécution, distribution automatique des tâches par les lieutenants, contrôle manuel des itinéraires, embarquement et capacité des véhicules. Ne pas transformer les souvenirs de ces mécanismes en règles confirmées.

## Documentation vivante

À chaque étape, mettre à jour le chapitre concerné, les données associées, le journal de décisions et le changelog dans le même commit. Mentionner les sources et les limites de validation. Le code prouve ce qui existe, pas ce que Simon a accepté ni ce que faisait le jeu original.

Comparaison disponible : [choix technique et banc T01](13-choix-technique.md). Phaser est recommandé comme candidat, sans résultat de banc d’essai. Aucun changement de gameplay ou redéploiement n’est inclus dans cette réorientation documentaire.
