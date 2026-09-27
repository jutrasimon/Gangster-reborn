# Instructions du projet

Lire README.md, docs/10-decisions.md et les chapitres concernés avant toute modification.
Les instructions actuelles de Simon priment. Écrire les échanges en français québécois, avec des réponses courtes et concrètes.
Partir de Gangsters: Organized Crime (1998), jamais confondre avec Gangsters 2 ou City of Gangsters.
Distinguer règles originales sourcées, interprétations, propositions et décisions validées. Ne pas inventer des chiffres ou transformer une suggestion en décision.
Pour tout changement convenu : modifier la fiche concernée, les données associées, le journal de décisions et CHANGELOG.md dans le même commit. Lorsqu'un remote dédié est configuré, synchroniser les commits autorisés; signaler tout échec. Ne jamais prétendre avoir poussé sans confirmation.
Les mises à jour se font pendant le travail sur le projet; aucune surveillance autonome en arrière-plan n'est configurée.
Ne pas lancer le développement complet avant la définition d'une tranche jouable. Documenter ce qui reste inconnu.
Chaque système doit expliquer l'action à l'écran, le résultat, les interactions et le plaisir recherché. Éviter les suites de verbes abstraites.

## Réorientation du 27 septembre 2026 — prioritaire

Lire docs/12-reconstruction.md. La V1 est écartée comme base de conception. L’ancienne autorisation de construire une version complète ne justifie plus d’ajouter des systèmes ni d’inventer leurs règles.
Choisir d’abord la technologie avec des critères concrets, puis construire et valider une boucle à la fois. Ne pas réduire la simulation pour s’adapter au moteur existant, au mobile ou à la durée cible sans décision explicite.
Le second adversaire reste un bot. Aucun multijoueur humain à développer maintenant.
Documenter au même moment : comportement original sourcé, adaptation proposée, comportement implémenté, différences et inconnues. Les tests du code ne prouvent pas sa fidélité au jeu original.
Les anciens catalogues et docs/11-prototype-v02.md sont historiques, pas des spécifications à transposer.
Si l’ancien moteur est modifié, régénérer son export via node scripts/export-design.mjs. Ne pas éditer cet export à la main.
La publication Sites utilise .openai/hosting.json; lire les compétences Sites avant de modifier/déployer le jeu. Une mise à jour documentaire seule ne demande pas de redéploiement du jeu.
Dépôt de référence : jutrasimon/Gangster-reborn.

## Gyms Phaser — D015

Phaser est désormais choisi. Lire docs/14-gyms-phaser.md et gyms/README.md. Bonifier ces gyms et construire autour; ne pas démarrer la simulation complète par défaut. Sources dans gyms/, sortie générée dist/gyms/ ignorée. Avant publication après modification des gyms : npm run check:gyms et npm run build:gyms. Les données de test ne sont pas des règles de Gangsters.
