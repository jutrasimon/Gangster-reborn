# Gangster — Bible du projet

Version 0.1 · 27 septembre 2026 · Conception, aucun gameplay implémenté.

Un duel de succession criminelle inspiré de Gangsters: Organized Crime. Le parrain est mort; deux prétendants cherchent à reprendre son empire. Navigateur, mobile first, partie cible d'environ une heure.

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

Les JSON dans data/ sont des catalogues de conception, pas des données de jeu prêtes à exécuter. Une valeur null signifie inconnue, jamais zéro. Cette première version couvre les domaines à documenter; elle ne prétend pas contenir des règles finales ni l'inventaire exhaustif de l'original.

## Prochain travail

Définir précisément bâtiment, bloc, quartier et contrôle, en partant de l'original. Puis comparer ses conditions de victoire à notre succession. Aucun moteur, carte finale ou nombre de manches n'est choisi.

## Git

Dépôt de référence : https://github.com/jutrasimon/Gangster-reborn (fourni par Simon). Documentation et futur code réunis dans ce dépôt.
