# Gangster — Bible du projet

Version 0.2 · 27 septembre 2026 · Prototype solo jouable contre un bot.

Un duel de succession criminelle inspiré de Gangsters: Organized Crime. Le parrain est mort; deux prétendants cherchent à reprendre son empire. Navigateur, mobile first, partie cible d'environ une heure.

## Version jouable

La V1 est décrite dans [les règles implémentées](docs/11-prototype-v02.md). Les chiffres et catalogues exhaustifs du prototype se trouvent dans [data/prototype-v02.json](data/prototype-v02.json), exportés de `dist/engine.js` via `node scripts/export-design.mjs`.

Local : `npm run serve`, puis ouvrir le port 8000. Tests : `npm test`. Code statique dans `dist/`, sans compilation ni dépendances.

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
- IMPLÉMENTÉ : réservé à un comportement réellement présent dans le code.

`data/catalogues.json` conserve le catalogue exploratoire de la version 0.1. `data/prototype-v02.json` décrit les données effectivement implémentées. Une valeur null signifie inconnue, jamais zéro. Les règles du prototype ne sont pas finales et ne constituent pas un inventaire exhaustif de l’original.

## Prochain travail

Tester la V1 avec Simon : lisibilité de la carte, intérêt des affectations, rythme, agressivité du bot et plaisir des interactions. Les choix de prototype sont révisables.

## Git

Dépôt de référence : https://github.com/jutrasimon/Gangster-reborn (fourni par Simon). Documentation et futur code réunis dans ce dépôt.
