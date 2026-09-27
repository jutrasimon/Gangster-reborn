# Choix technique — comparaison et banc d’essai

27 septembre 2026. **RECOMMANDATION TECHNIQUE, PAS ENCORE VALIDÉE PAR UN BANC D’ESSAI.**

## Recommandation

Tester **Phaser 4 + TypeScript**, avec une ville en 2D isométrique, une interface de gestion HTML/CSS et une simulation indépendante du rendu. Utiliser Tiled pour éditer la carte et ses métadonnées. Phaser 4.2.1 est une version publiée vérifiée [S2]; verrouiller les versions exactes des dépendances au démarrage du banc d’essai. Ce document ne prétend pas identifier la toute dernière version disponible.

Ce choix répond à la cible navigateur/mobile et à une caméra isométrique fixe. Il ne découle pas de l’ancien prototype. Aucune règle du moteur V1 n’est reconduite automatiquement. Une caméra libre en 3D changerait cette recommandation; elle n’est pas une exigence actuelle.

## Comparaison

Les capacités sont sourcées; les préférences et charges relatives sont une appréciation d’ingénierie, sans mesure comparative réalisée.

| Option | Capacités utiles vérifiées | Travail spécifique / contraintes | Avis pour ce projet |
|---|---|---|---|
| Phaser 4 + TypeScript | Framework de jeu 2D web, scènes, caméras, sprites animés, chargement d’assets, souris et tactile [S1, S2] | Simulation, circulation, ordonnancement, sauvegarde et logique du bot à développer; rendu des bâtiments hauts et masquage à vérifier | Premier candidat au banc d’essai; fournit les services de jeu courants sans imposer nos règles |
| PixiJS 8 + TypeScript | Moteur de rendu 2D, graphe de scène, chargement, interactions souris/tactiles, WebGL et WebGPU [S3] | Davantage de services de jeu à assembler autour du rendu : caméra de jeu, organisation des scènes et audio notamment | Alternative si le contrôle du rendu devient prioritaire; pas un gain évident pour notre premier banc |
| Godot 4 + GDScript | Export navigateur; export mono-thread disponible et recommandé; rendu web Compatibility/WebGL 2 [S4] | Export WebAssembly, contraintes mobiles et Safari documentées; multithreading exige une configuration d’hébergement particulière | Viable, surtout avec une production centrée sur son éditeur; moins direct pour notre interface web et cible navigateur prioritaire |

Aucune de ces solutions ne livre automatiquement « Gangsters ». Le moteur ne fournit ni les décisions des lieutenants, ni une circulation urbaine fidèle, ni les règles criminelles. Aucun chiffre de performance ou de taille de téléchargement n’est affirmé sans mesure.

## Architecture proposée

| Partie | Responsabilité | Frontière à conserver |
|---|---|---|
| Simulation TypeScript | Temps logique, agents, équipes, ordres, déplacements, inventaires, événements, état pseudo-aléatoire | Aucun objet Phaser, HTML ou horloge réelle dans les règles |
| Rendu Phaser | Carte, sprites, animation, profondeur, caméra, sélection | Observe l’état; ne déclenche pas une réussite à la fin d’une animation |
| Interface HTML/CSS | Dossiers, listes d’ordres, équipements, commandes temporelles | Envoie des commandes validées à la simulation; ne modifie pas directement l’état |
| Données de carte | Sol, bâtiments, entrées, rues, trottoirs, zones de sélection | Identifiants stables; graphe de navigation distinct de l’illustration |
| Sauvegarde versionnée | État complet, ordres, positions, temps, graine et progression aléatoire | Même résultat après reprise; stockage navigateur à tester |

Proposition : un pas de simulation fixe de 50 ms au départ, rendu interpolé. Pause, ×1 et accélérations exécutent les mêmes pas logiques. Cette cadence est une hypothèse technique mesurable, pas une règle de durée du jeu. Ne jamais utiliser de grands pas qui sautent des événements pour accélérer. Si le téléphone ne suit pas, limiter la vitesse effective et l’indiquer.

Le changement d’onglet suspend la simulation solo et provoque une sauvegarde; pas de rattrapage massif au retour. Le futur multijoueur demanderait une autorité serveur et une politique de temps distinctes : garder la séparation permet cette évolution, sans promettre une conversion automatique.

Déplacements proposés : graphe de rues et de trottoirs, recherche A*, entrées de bâtiments explicites, capacité des véhicules et transitions embarquer/débarquer. Réservations simples pour éviter les superpositions aux passages étroits. Ce sont des choix d’implémentation à tester, pas une description du code original. Le contrôle offert au joueur sur les trajets reste à documenter contre le manuel.

## Carte, visuel et fabrication des assets

Proposer une ville isométrique composée de sprites de bâtiments, rues, voitures et personnages. Le rendu doit montrer la géographie des actions. Prévoir un plan général et une vue rapprochée tirés du même état; vérifier la pertinence du niveau intermédiaire original avant de réduire les vues.

Tiled prend en charge les cartes isométriques, les couches d’objets et l’export JSON [S5, S6]. L’export ne crée pas à lui seul notre graphe routier : un importeur validé devra traduire les métadonnées. Tester le placement et l’origine des sprites avant de produire une ville entière.

Un petit kit cohérent suffit au banc : sol, rue, trottoir, carrefour, trois bâtiments de hauteurs différentes, une voiture directionnelle et deux silhouettes animées. Les variantes de direction doivent être réellement prévues. La 3D prérendue en sprites reste une option de production, pas un changement de moteur imposé.

Tester en priorité les personnages cachés derrière les bâtiments, le tri de profondeur, les zones tactiles et l’identification des entrées. Les aplats géométriques pourront servir au diagnostic, mais ne suffiront pas à valider le rendu visuel. La fidélité visuelle devra être comparée à des captures identifiées de l’original; cette comparaison visuelle n’est pas réalisée dans cette étude technique.

## Banc d’essai T01 — ville, temps et déplacement

**Périmètre proposé, pas une première boucle économique et pas un jeu complet.**

Scène : quatre blocs, plusieurs entrées de bâtiments, six agents contrôlables, deux véhicules. Des agents supplémentaires servent uniquement aux mesures. Ces quantités sont des fixtures techniques, pas les dimensions du futur jeu.

Scénario observable :

1. Sélectionner une équipe et préparer trois destinations avec un temps d’arrêt fictif à chacune.
2. Lancer l’exécution; voir chaque déplacement, embarquement et arrêt.
3. Mettre en pause, accélérer, sélectionner un agent et suivre sa progression.
4. Détourner l’équipe pendant le trajet, puis reprendre son programme; mesurer l’effet sur l’heure d’arrivée.
5. Sauvegarder au milieu d’un déplacement, recharger et poursuivre.

Les destinations et arrêts fictifs sont des instruments de test. Ils ne valident pas une interface de planification ou une délégation conforme à Gangsters. Le comportement original sera établi lors de la boucle correspondante.

| Vérification | Critère proposé | État |
|---|---|---|
| Indépendance temporelle | Même état au même tick pour les mêmes commandes horodatées à ×1, ×4 et ×8 | Non testé |
| Sauvegarde | Après reprise, état et événements identiques au scénario continu | Non testé |
| Trajets | Pas de traversée de bâtiments; cibles inaccessibles signalées; détour effectif | Non testé |
| Véhicules | Places respectées; positions cohérentes à l’embarquement et au débarquement | Non testé |
| Lecture de la scène | Agent sélectionné identifiable derrière chaque bâtiment; aucune sélection déclenchée par un glissement caméra | Non testé |
| Tactile | Panoramique, pincement et sélection sans conflit avec les panneaux; essais portrait et paysage | Non testé |
| Performance | Objectif 60 images/s; seuil de poursuite 30 images/s soutenues, p95 du temps d’image ≤ 33,3 ms sur la scène représentative | Non mesuré |
| Charge | Mesurer séparément 50, 100 et 200 agents; durée des pas, rendu, mémoire quand disponible et chargement | Non mesuré |
| Endurance | Session de dix minutes avec déplacements et accélération; pas de croissance continue inexpliquée de mémoire | Non mesuré |

Consigner appareil, OS, navigateur, résolution, nombre d’agents, vitesse de simulation et méthode de mesure. Essayer au moins Android/Chrome et iPhone/Safari, dont un appareil intermédiaire; une émulation desktop ne valide pas le téléphone. Les seuils sont proposés, pas des performances promises.

Si la scène ne passe pas : identifier si le coût vient du rendu, des assets ou de la simulation. Tester une correction ciblée, puis réévaluer le candidat si nécessaire. Ne pas simplifier les règles du jeu pour dissimuler un échec technique.

## Résultat de cette étape

- Recherche documentaire terminée pour la comparaison ci-dessus.
- Phaser recommandé comme candidat, sans adoption définitive ni validation de performance.
- Aucun package installé, aucune scène de test construite, aucun changement au site publié.
- Prochain travail proposé : construire T01, documenter ses mesures et ses limites, puis décider si cette base technique convient avant la première boucle de jeu.

## Sources officielles

Consultées le 27 septembre 2026. Les pages évolutives devront être revérifiées lors du verrouillage des versions.

- S1 — [Phaser : capacités du framework](https://phaser.io/why-phaser). La page contient aussi une ancienne mention de roadmap 2025 : elle n’est pas utilisée pour inférer une capacité 3D actuelle.
- S2 — [Phaser 4.2.1, publication du 9 juillet 2026](https://phaser.io/download/release/v4.2.1).
- S3 — [PixiJS 8 : présentation](https://pixijs.com/8.x/guides/getting-started/intro) et [interactions](https://pixijs.com/8.x/guides/components/events).
- S4 — [Godot : export web, documentation stable](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html). L’export mono-thread ne nécessite pas les en-têtes d’isolation imposés au multithreading; Godot n’est donc pas exclu pour ce motif.
- S5 — [Tiled : formats de cartes](https://doc.mapeditor.org/en/stable/manual/introduction/) et [couches](https://doc.mapeditor.org/en/stable/manual/layers/).
- S6 — [Tiled : export JSON](https://doc.mapeditor.org/en/stable/reference/json-map-format/).
