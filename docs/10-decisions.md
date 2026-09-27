# Journal des décisions

> Mise à jour 0.2 : la V1 solo contre bot est implémentée. Les règles jouables, leurs valeurs et leurs limites sont dans [Prototype 0.2](11-prototype-v02.md). Les éléments exploratoires ci-dessous restent utiles pour les prochaines itérations; ils ne décrivent plus tous l’état actuel du code.

Date initiale : 2026-09-27, heure de Toronto. Source des validations : conversation de conception avec Simon.

| ID | Statut | Décision / piste | Conséquence |
|---|---|---|---|
| D001 | VALIDÉ | Partir des bases de Gangsters: Organized Crime et améliorer progressivement | Référence historique séparée des adaptations |
| D002 | VALIDÉ | Version initiale 1v1 navigateur mobile first | Concevoir pour deux adversaires et usage tactile |
| D003 | VALIDÉ | Durée cible environ une heure | Budget temporel à mesurer, pas encore de manches fixées |
| D004 | VALIDÉ | Parrain mort, deux prétendants, guerre interne dans une ville en crise | Cadre de la partie |
| D005 | VALIDÉ | Disponibilité des gens centrale | Documenter les engagements et affectations |
| D006 | VALIDÉ | Bible exhaustive évolutive et projet sur Git | Documentation mise à jour avec les changements |
| P001 | PROPOSITION | Victoire par majorité de quartiers maintenue une manche | Non retenue; reprendre l'étude des conditions originales |
| P002 | PROPOSITION | Dix manches d'environ cinq minutes | Aucun calendrier adopté |
| P003 | PROPOSITION | Affectations permanentes et opérations ponctuelles | À comparer aux ordres de l'original |
| P004 | PROPOSITION | Candidats présents dans la ville, disputés entre joueurs | Découverte/offres/conflits à définir |
| P005 | PROPOSITION | Chaos distinct de la pression policière | Prémisse narrative ne valide pas une jauge |

## Questions, dans l'ordre de travail proposé

1. Q001 : Que signifient exactement bâtiment, bloc, territoire et quartier dans l'original puis dans notre version?
2. Q002 : Quelle condition de victoire sert la succession en une heure, en partant du multijoueur original?
3. Q003 : Comment le temps et les ordres fonctionnent-ils?
4. Q004 : Quelle taille d'organisation permet de vrais choix sur mobile?
5. Q005 : Quelles informations sont cachées et comment les découvrir?
6. Q006 : Quels revenus et coûts doivent être reproduits?
7. Q007 : Quel contrôle pendant les opérations et quels effets distincts?
8. Q008 : Quelles conséquences policières, judiciaires et internes?
9. Q009 : Quelle représentation visuelle et quelle technologie servent ces décisions?

## Corrections de méthode

Ne pas confondre une explication abstraite de la décision avec une boucle jouable. Ne pas utiliser une règle de contrôle de quartiers inventée pour expliquer le jeu original. Ne pas confondre argent et points de victoire. Une référence documentée n'est pas une validation de transposition.

## Décisions du 27 septembre 2026 — prototype

- D007 VALIDÉ : Simon demande la version complète initiale, puis ajustements; pas de multijoueur humain pour le moment, le second joueur est un bot. Remplace le périmètre initial de D002 pour cette V1.
- D008 IMPLÉMENTÉ — HYPOTHÈSE : règles et valeurs de docs/11-prototype-v02.md choisies pour rendre la version jouable. Elles restent révisables après essai.
- D009 IMPLÉMENTÉ : carte 6 quartiers / 18 établissements, 12 actions, 4 compétences, 16 personnages dont 6 candidats, armes/voitures, bot, économie, pression, sauvegarde locale, victoire et rejeu.
- D010 IMPLÉMENTÉ : JavaScript ESM statique, sans backend de gameplay; publication Sites privée et code GitHub.
