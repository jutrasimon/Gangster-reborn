# Gyms Phaser — 0.1

27 septembre 2026. Choix de Phaser et démarche par gyms : VALIDÉS (D015). Fonctionnalités ci-dessous : IMPLÉMENTÉES. Ergonomie, rendu final et performances mobiles : À VALIDER.

## But

Avoir des surfaces de test réutilisables pour construire progressivement le jeu. Les gyms sont séparés de l’ancien prototype et n’importent aucune de ses règles. Navigation directe entre les deux scènes, réglages visibles sur ordinateur et ouvrables sur téléphone.

## Gym UI — /gyms/#ui

À l’écran : quatre dossiers de personnages, sélection, trois onglets, boutons et fenêtre déplaçable. Ces composants sont dessinés et manipulés par Phaser. Les réglages du gym sont en HTML.

Réglages : palette nuit/papier, titres agrandis, action désactivée, personnage occupé, sélection d’un dossier, ouverture de fenêtre et réinitialisation. Une action de test affiche un accusé visuel. La barre de titre déplace la fenêtre dans les limites de la scène. Échap la ferme.

Ce gym sert à comparer densité, hiérarchie, état actif/inactif et taille tactile. Les noms, rôles et horaires sont des fixtures. Les onglets équipement et ordres ne simulent ni achat, ni affectation, ni consommation de temps.

## Gym carte isométrique — /gyms/#iso

Carte de test 11 × 11 cases, rues aux coordonnées 3 et 7 sur chaque axe. Bâtiments placés hors des rues, avec un à trois étages de test. Projection 132 × 66 pixels par case.

Actions : glisser la caméra, pincer ou utiliser la molette pour zoomer, boutons de zoom/cadrage, flèches du clavier, toucher un bâtiment pour le sélectionner. L’inspecteur présente nom, coordonnées, identifiant et nombre d’étages. Une liste HTML permet aussi de sélectionner un bâtiment.

Couches : grille, étiquettes, bâtiments, étages, transparence et vue en plan diagnostique. Le plan partage les données de la vue isométrique; ce n’est pas encore la vue stratégique de l’original. Le compteur FPS expose la fréquence instantanée du rendu.

Les assets proviennent de Kenney, CC0; sources et licence dans gyms/README.md et gyms/assets/. Ce kit provisoire ne valide ni le style graphique, ni l’architecture de la ville définitive. Aucun agent mobile, véhicule, trajet ou système économique n’est présent.

## Modules à bonifier

| Module | Rôle actuel | Prochaine extension possible, non engagée |
|---|---|---|
| theme.ts | Palettes, panneau, bouton, texte | États clavier, variantes, tailles et tokens communs |
| ui-scene.ts | Dossiers et fenêtre de test | Inventaire visuel, ordres multiples, panneaux à comparer à l’original |
| iso.ts | Projection et fixtures sans Phaser | Charger une vraie carte éditée; dissocier données et fixtures |
| map-scene.ts | Rendu, caméra, couches, sélection | Occlusion ciblée, entrées, agents et réseau de déplacement |
| main.ts | Navigation et réglages | Autres gyms ciblés, après choix de leur périmètre |

Le choix antérieur d’une UI HTML/CSS pour le produit n’est pas figé : ce gym teste expressément des composants Phaser. La frontière finale entre HTML et Canvas devra être décidée d’après les essais.

## Validation effectuée

- Compilation TypeScript stricte sans erreur.
- Tests de projection/inversion, y compris coordonnées négatives et fractionnaires.
- Test de cohérence : lots uniques, hors des rues et nombre d’étages borné.
- Construction du bundle local et vérification des assets requis.
- Pas de test navigateur interactif ni de mesure sur téléphone dans cet environnement : aperçu statique non compatible avec le circuit de prévisualisation disponible; contrôle navigateur requis indisponible. La publication ne doit pas être présentée comme une validation visuelle.

## Limites connues

État des réglages uniquement en mémoire. Le retour dans la scène carte recadre la caméra et efface la sélection. Accessibilité Canvas partielle; pas encore de navigation clavier entre tous les composants. Pas de sauvegarde de partie, de simulation temporelle ni de benchmark T01. Palettes et kit urbain sont provisoires.

## Build et publication

Phaser 4.2.1 et outils verrouillés par package-lock.json. `npm ci`, `npm run check:gyms`, `node --test tests/iso.test.mjs`, `npm run build:gyms`. Les sources sont dans gyms/; dist/gyms/ est généré. Hébergement statique existant conservé, ancien prototype à la racine. Aucun changement aux règles de l’ancien jeu.

## Correctif netteté mobile — 27 septembre 2026

Après capture de Simon montrant le Canvas flou par rapport au HTML, le gym UI utilise un tampon adapté au devicePixelRatio (plafond ×3), des textures de texte à la même densité et une caméra compensée. Mise en page et glissement des fenêtres restent en pixels CSS; les entrées passent par le Scale Manager. Redimensionnement et changement de gym recalculent les dimensions. La carte garde son rendu ×1 pour ne pas augmenter son coût GPU dans ce correctif ciblé. Le code Phaser 4.2.1 installé ne propose pas de résolution globale GameConfig : utiliser Scale.NONE, taille du tampon et zoom CSS inverse. Validation de types et des conversions; netteté et gestes à confirmer sur le téléphone réel.
