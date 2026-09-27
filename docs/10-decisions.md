# Journal des décisions

> **Réorientation — 27 septembre 2026 :** ce chapitre conserve des éléments historiques ou exploratoires. Les règles de la V1 ne sont pas la cible du remake. Toute reprise doit être vérifiée contre l’original et validée boucle par boucle. Voir [la démarche actuelle](12-reconstruction.md).

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

## Anciennes questions — ordre remplacé par D012

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

## Réorientation après essai — 27 septembre 2026

- D011 VALIDÉ : la V1 et ses règles ne servent plus de référence. Simon constate que la simulation temporelle, les trajets, les équipements, la carte et les interfaces ne correspondent pas à l’expérience demandée. D008–D010 décrivent uniquement l’ancienne implémentation; ils ne justifient aucun choix futur.
- D012 VALIDÉ : choisir d’abord une technologie capable de porter le jeu, puis construire boucle par boucle. Remplace la démarche de réalisation complète de D007; son périmètre solo contre bot est maintenu. Aucun moteur choisi et aucun ordre définitif de boucles approuvé.
- D013 VALIDÉ : tenir la documentation à jour pendant chaque étape. Corriger les statuts existants; distinguer original vérifié, proposition, validation et implémentation. La durée cible et le mobile ne donnent pas permission de supprimer des systèmes de l’original.

- D014 RECOMMANDATION TECHNIQUE : après comparaison des documentations officielles, proposer Phaser 4 + TypeScript, rendu isométrique 2D, interface HTML/CSS et simulation indépendante. Tiled proposé pour les cartes. Voir docs/13-choix-technique.md. Ni validation par Simon, ni résultat de benchmark à ce stade.
- P006 PROPOSITION : banc T01 consacré au temps, aux trajets, aux véhicules, à la sauvegarde et à la lisibilité mobile. Ses quantités et seuils sont techniques, pas des règles du jeu.

- D015 VALIDÉ : Simon choisit Phaser et demande de commencer par des gyms UI et carte isométrique, à bonifier et autour desquels construire. Remplace le statut de simple recommandation de D014. Le banc complet T01 ne précède plus ces premiers gyms.
- D016 IMPLÉMENTÉ : deux scènes indépendantes dans gyms/, contrôles de test, carte isométrique à tuiles provisoires CC0 et composants UI Phaser. Ni simulation de semaine, ni règles économiques, ni bot dans ces gyms. Leur existence ne valide pas leur DA finale.

- D017 CORRECTION IMPLÉMENTÉE : après capture de Simon, rendu haute densité du gym UI (tampon et textes, plafond ×3), sans changement de dimensions visuelles ni de règles. Validation sur téléphone encore à faire.

- D018 VALIDÉ / IMPLÉMENTÉ : comparer plusieurs représentations de carte avec personnages de référence, points d’intérêt et textes. Ajout de trois vues du même quartier de test (iso rue, dessus, plan) et conservation d’une ancienne miniature de référence. Échelle de jeu distincte de la vue d’ensemble; proportions réglables.
- D019 VALIDÉ / IMPLÉMENTÉ : enrichir le gym UI avec fiches, statistiques, énergie, progression, secteurs d’action, mini-carte et dossiers. Valeurs et temps sont des fixtures réglables, pas une validation des systèmes de gameplay.
