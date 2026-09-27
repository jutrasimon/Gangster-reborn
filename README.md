# Gangster — Bible du projet

Documentation 0.3 · 27 septembre 2026 · Reconstruction : choix technique, puis boucles successives.

Un duel de succession criminelle inspiré de Gangsters: Organized Crime. Le parrain est mort; deux prétendants cherchent à reprendre son empire. Navigateur, mobile first, partie cible d'environ une heure.

## Démarche actuelle

Lire [Reconstruction : technologie puis boucles](docs/12-reconstruction.md). La V1 a été écartée comme base de conception : elle abstrait le temps, les déplacements et l’exécution réelle qui font partie du cœur de Gangsters: Organized Crime. Le code est conservé pour historique; sa présence ne valide ni ses règles ni sa technologie.

## Gyms Phaser — travail actuel

[Documentation des gyms](docs/14-gyms-phaser.md) · [Sources](gyms/README.md).

Deux scènes : interface et carte isométrique. `npm ci`, `npm run build:gyms`, puis `npm run serve` et ouvrir `/gyms/#ui` ou `/gyms/#iso`.

## Ancien prototype — conservé pour historique

La V1 est décrite dans [les règles implémentées](docs/11-prototype-v02.md). Les chiffres et catalogues exhaustifs du prototype se trouvent dans [data/prototype-v02.json](data/prototype-v02.json), exportés de `dist/engine.js` via `node scripts/export-design.mjs`.

Local : `npm run serve`, puis ouvrir le port 8000. Tests : `npm test`. Ancien code statique dans `dist/`; les gyms ont leurs sources TypeScript et leur compilation.

## Lire la documentation

1. [Vision et périmètre](docs/01-vision.md)
2. [Référence originale et sources](docs/02-original.md)
3. [Systèmes et interactions](docs/03-systemes.md)
4. [Carte et établissements](docs/04-carte.md)
5. [Personnages et statistiques](docs/05-personnages.md)
6. [Actions et résolution](docs/06-actions.md)
7. [Objets et économie](docs/07-objets-economie.md)
8. [Écrans et expérience](docs/08-ecrans.md)
9. [Direction artistique et technique](docs/09-production.md)
10. [Décisions et questions ouvertes](docs/10-decisions.md)
11. [Méthode de mise à jour](CONTRIBUTING.md)
12. [Historique](CHANGELOG.md)

## Comment lire les statuts

- VALIDÉ : explicitement demandé ou retenu par Simon.
- ORIGINAL DOCUMENTÉ : constat sourcé sur le jeu de 1998; pas automatiquement une règle de notre jeu.
- PROPOSITION : idée discutée, non acceptée.
- À DÉFINIR : règle ou valeur absente.
- À VÉRIFIER : assertion nécessitant une vérification supplémentaire.
- ARCHIVÉ / ÉCARTÉ : conservé pour comprendre l’historique, sans autorité sur le futur jeu.
- IMPLÉMENTÉ : ne signifie pas VALIDÉ; réservé à un comportement réellement présent dans le code.

`data/catalogues.json` conserve le catalogue exploratoire de la version 0.1. `data/prototype-v02.json` décrit les données effectivement implémentées. Une valeur null signifie inconnue, jamais zéro. Les règles du prototype ne sont pas finales et ne constituent pas un inventaire exhaustif de l’original.

## Étude technique

[Comparaison des moteurs et banc d’essai T01](docs/13-choix-technique.md) : Phaser choisi par Simon (D015); performances mobiles et fidélité visuelle non validées.

## Prochain travail

Bonifier les gyms UI et carte isométrique. Construire autour de ces composants par étapes. Le banc de simulation T01 reste une proposition ultérieure.

## Git

Dépôt de référence : https://github.com/jutrasimon/Gangster-reborn (fourni par Simon). Documentation et futur code réunis dans ce dépôt.
