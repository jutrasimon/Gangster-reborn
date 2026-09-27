# Maintenir la bible

## Source de vérité

- Règles retenues : docs/ et journal de décisions.
- Valeurs de réglage futures : data/, référencées par identifiant stable.
- Référence historique : docs/02-original.md et ses sources, séparée des règles retenues.
- Comportement réalisé : code et validation; actuellement aucun.

## À chaque évolution

1. Identifier la décision et son statut réel.
2. Modifier le chapitre et les entrées data/ concernés, sans dupliquer les chiffres.
3. Inscrire date, raison, conséquences et décision remplacée dans le journal.
4. Ajouter une ligne au changelog.
5. Vérifier les liens et les JSON; si du code existe, vérifier uniquement les comportements affectés.
6. Commit cohérent puis push sur le dépôt dédié lorsque configuré. Ne pas écraser des changements distants.

Une idée abandonnée reste dans l'historique avec son motif. Un désaccord documentation/code est enregistré puis résolu explicitement.

## Fiche de système

Identifiant; statut; objectif joueur; informations visibles; actions à l'écran; prérequis; ressources mobilisées; durée; résolution; résultats; information révélée; interactions; cas limites; source historique; différences retenues; critère de validation; questions ouvertes.

## Fiche de contenu

Identifiant; nom; catégorie; statut; fonction; propriétés; valeurs et unités; acquisition; utilisation; restrictions; liens aux actions/systèmes; asset associé; source; version.
