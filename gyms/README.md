# Gyms Phaser

Deux scènes indépendantes, sans import de l’ancien moteur `dist/engine.js`.

- `/gyms/#ui` : dossiers, onglets, boutons, sélection et fenêtre déplaçable. Composants dans Phaser; commandes de test en HTML.
- `/gyms/#iso` : ville en tuiles isométriques, caméra tactile/souris, couches et inspecteur.

## Développer

`npm ci`, `npm run check:gyms`, `npm run build:gyms`, puis `npm run serve` et ouvrir `/gyms/`.

`gyms/src/theme.ts` : composants et palettes réutilisables.
`gyms/src/ui-scene.ts` : gym UI.
`gyms/src/iso.ts` : coordonnées et données de test sans dépendance Phaser.
`gyms/src/map-scene.ts` : gym carte.
`gyms/src/main.ts` : navigation et contrôles de test.

Les sorties `dist/gyms/` sont générées et ignorées dans Git. Le build ne remplace pas l’ancien prototype. Les options sont temporaires en mémoire; recharger réinitialise les réglages. Aucun système économique, bot, combat ou planification n’est introduit.

## Assets

Bâtiments et routes : Kenney, CC0. Voir `assets/LICENSE-Kenney.txt`.
- https://kenney.nl/assets/isometric-tiles-buildings
- https://opengameart.org/content/isometric-city

Le kit est provisoire et ne constitue pas la DA finale ni une reproduction des assets de Gangsters. Portraits : atlas original généré pour le prototype du projet, réutilisé pour les composants UI. Aucune automobile moderne du pack n’est incluse.

## Limites

Pas de benchmark mobile réalisé. Le compteur FPS est une mesure instantanée du navigateur, pas une certification de performances. Interface Canvas partiellement accessible : les sélections sont aussi disponibles dans les réglages HTML, mais tous les composants Canvas n’ont pas encore leur équivalent clavier/lecteur d’écran. Le banc de simulation T01 reste à venir.
