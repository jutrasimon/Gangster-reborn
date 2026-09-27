# Instructions du projet

Lire README.md, docs/10-decisions.md et les chapitres concernés avant toute modification.
Les instructions actuelles de Simon priment. Écrire les échanges en français québécois, avec des réponses courtes et concrètes.
Partir de Gangsters: Organized Crime (1998), jamais confondre avec Gangsters 2 ou City of Gangsters.
Distinguer règles originales sourcées, interprétations, propositions et décisions validées. Ne pas inventer des chiffres ou transformer une suggestion en décision.
Pour tout changement convenu : modifier la fiche concernée, les données associées, le journal de décisions et CHANGELOG.md dans le même commit. Lorsqu'un remote dédié est configuré, synchroniser les commits autorisés; signaler tout échec. Ne jamais prétendre avoir poussé sans confirmation.
Les mises à jour se font pendant le travail sur le projet; aucune surveillance autonome en arrière-plan n'est configurée.
Ne pas lancer le développement complet avant la définition d'une tranche jouable. Documenter ce qui reste inconnu.
Chaque système doit expliquer l'action à l'écran, le résultat, les interactions et le plaisir recherché. Éviter les suites de verbes abstraites.

## Depuis la V1

Lire aussi docs/11-prototype-v02.md. Simon a autorisé la première version complète solo contre bot; ne pas traiter l’ancien préalable de tranche jouable comme un blocage. Le multijoueur humain reste hors périmètre actuel.
Après chaque changement de règles ou contenu dans dist/engine.js, exécuter node scripts/export-design.mjs et mettre à jour la section de documentation correspondante. Ne pas éditer l’export à la main.
La publication Sites utilise .openai/hosting.json; lire les compétences Sites avant de modifier/déployer. Le dépôt GitHub de référence reste jutrasimon/Gangster-reborn.
