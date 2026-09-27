# Prototype 0.2 — règles effectivement implémentées

> **Réorientation — 27 septembre 2026 :** ce chapitre conserve des éléments historiques ou exploratoires. Les règles de la V1 ne sont pas la cible du remake. Toute reprise doit être vérifiée contre l’original et validée boucle par boucle. Voir [la démarche actuelle](12-reconstruction.md).
27 septembre 2026. Statut : ARCHIVE DU PROTOTYPE ÉCARTÉ COMME BASE DE CONCEPTION.

Simon autorise une première version complète à ajuster après essai, sans multijoueur humain. Cette autorisation a été interprétée trop largement lors du développement. Elle ne transforme pas ces valeurs en design définitif ni en règles originales de 1998.

## Jouer et reprendre

Jeu solo sur navigateur, clan Russo humain contre clan Moretti bot. Partie sauvegardée automatiquement dans localStorage sur le même navigateur/appareil. Nouvelle campagne avec confirmation de remplacement. Pas de compte, de synchronisation entre appareils ou de serveur multijoueur.

16 semaines par défaut, options 8 ou 24. Aucun chronomètre. Objectif d'environ une heure non mesuré avec des joueurs; la durée dépend de leur planification. Le bot possède trois profils : prudent, opportuniste, impitoyable. Seule sa propension à attaquer varie; il ne reçoit pas de bonus de ressources.

## Carte

Six quartiers, trois établissements chacun, 18 au total. Little Italy, Le Centre, North End, Les Docks, Southside, Blackwater. Carte de contrôle schématique, non simulation de déplacements dans les rues. Les positions sont dans data/prototype-v02.json et dist/engine.js.

Deux établissements dans un quartier donnent son contrôle. Un quartier sans majorité reste disputé. La fermeture d'un commerce ne supprime pas son contrôle.

Chaque clan commence avec une propriété-QG et un racket dans son quartier initial. Les deux QG sont protégés contre les opérations hostiles et ne peuvent être achetés. Les autres lieux commencent indépendants.

La portée est accordée si une implantation du clan partage le quartier cible ou se trouve à une distance de Manhattan inférieure à 540 unités de carte. Une voiture attribuée à un participant lève cette restriction. Cette portée s'applique aux extorsions, achats, prises, descentes et sabotages. Les enquêtes restent libres sur toute la carte.

## Victoire

- Contrôler au moins 4 quartiers à la fin de 2 semaines consécutives.
- À la dernière semaine, comparer l'influence : 2 par établissement + 2 supplémentaires par propriété + 5 par quartier + 1 par tranche complète de 500 $ en caisse + respect.
- Prendre un commerce adverse apporte 1 respect; le perdant en perd 1, sans passer sous zéro.
- En cas d'égalité d'influence, comparer la trésorerie. Égalité parfaite : partie nulle.
- Perdre tous ses membres entraîne la défaite; disparition des deux organisations : partie nulle.

Ce système territorial est une hypothèse de prototype choisie pour rendre la V1 jouable. Il ne constitue pas une validation définitive de P001.

## Personnages et moyens

5 membres par clan au départ; 8 maximum. Chaque personnage possède Force, Intimidation, Affaires et Discrétion, de 1 à 5, sans progression dans cette version. Profils, noms, portraits et chiffres exhaustifs dans le catalogue exporté.

Une affectation par membre et par semaine; une opération mobilise 1 à 3 membres. Les salaires sont 35 + 5 × meilleure compétence; frais de recrutement 180 + 25 × meilleure compétence. Les candidats sont uniques et disputés; une opération qui arrive après leur recrutement échoue sans dépense. Les recrues agissent la semaine suivante et sont payées dès la semaine de recrutement.

Arme : 180 $, +2 Force pour les attaques et la garde. Voiture : 260 $, portée étendue. Achat attribué immédiatement à un membre disponible, persistant et sans consommer son affectation. Pas de revente ou transfert dans cette version.

Loyauté initiale 100. Une paie incomplète retire 25 à tous les membres, même en détention; une paie complète restaure 5 jusqu'à 100. À zéro, le membre quitte le clan et redevient candidat connu avec 60 de loyauté. Une blessure empêche d'agir la semaine suivante. Une arrestation empêche d'agir les deux semaines suivantes, sauf avocat.

## Actions

| Action | Coût | Effet | Pression |
|---|---:|---|---:|
| Racketter | 0 | Prendre la protection d'un indépendant, selon Intimidation | +7 |
| Acheter | Prix du lieu | Transformer indépendant ou propre racket en propriété; récupérer l'enveloppe existante | 0 |
| Collecter | 0 | Récupérer l'enveloppe avec bonus 4 % × meilleure Affaires de l'équipe | 0 |
| Protéger | 0 | Ajouter la somme des Forces et bonus d'armes à la défense pendant la semaine | 0 |
| Enquêter | 0 | Dossier valable 3 semaines suivantes, +12 points sur prochaine opération, révéler un candidat caché si disponible | 0 |
| Prendre le contrôle | 60 | Reprendre un lieu rival; propriété conservée, enveloppe vidée | +18 |
| Faire une descente | 0 | Voler au rival jusqu'à 260 $, limité à sa trésorerie | +14 |
| Saboter | 80 | Annuler les revenus cette semaine et la suivante | +16 |
| Ouvrir un speakeasy | 320 | Sur une propriété : +100 $ et +4 pression par semaine d'activité | +10 |
| Soudoyer la police | 140 | Baisser la pression | −22 |
| Recruter | Frais du candidat | Recrue disponible semaine suivante | 0 |
| Mandater un avocat | 180 | Tous les détenus du clan disponibles semaine suivante | −6 |

Les fonds sont réservés à la planification et réellement débités à l'exécution. Annuler libère fonds et hommes. Une cible devenue invalide ou une caisse insuffisante annule l'opération sans dépense. Une même action sur un même lieu ne peut être doublée par un clan pendant une semaine. La phase s'arrête au résultat final de la partie.

## Résolution et probabilités

Le bot planifie lors du lancement, avant toute résolution. Gardes, enquêtes, corruption et avocat passent d'abord. L'ordre au sein de cette phase, puis parmi les autres actions, est aléatoire et reproductible par graine. Il n'y a pas de contrôle tactique pendant la courte présentation des résultats.

Probabilité pour extorsion, prise, descente, sabotage :

`borne(18, 95, 56 + 6 × puissance − 5 × défense + renseignement + événement)`.

Puissance = somme de la compétence pertinente (+2 par arme si Force). Défense = résistance du bâtiment (3, 4 ou 5) +3 si cible rivale +1 si propriété + force et armes des gardes. Renseignement =12 si bonus actif; la pluie ajoute 10 au sabotage. L'interface affiche une estimation hors gardes adverses, explicitement annoncée comme telle.

Tirage entier 1–100. Un échec hostile blesse un participant tiré au sort. L'extorsion ratée ne blesse personne. Pression et coût sont appliqués même sur échec. Les autres actions sont garanties seulement si leurs prérequis restent valides au moment de résolution.

Après une opération réussie d'extorsion, de prise, de descente ou de sabotage, le bonus d'enquête est consommé. Il reste disponible si l'opération échoue. Les gardes n'occupent pas durablement le lieu : il faut renouveler l'ordre chaque semaine.

## Économie et autorités

Trésorerie initiale : 1 400 $ chacun. L'extorsion réussie place immédiatement une enveloppe initiale; en fin de semaine, un racket ouvert accumule à nouveau son revenu. Plafond : 4 × revenu de base. Les propriétés ouvertes versent automatiquement revenu de base + activité clandestine.

Les événements modifient le revenu, puis les salaires sont prélevés. La caisse ne devient pas négative, mais une paie incomplète affecte la loyauté.

À partir de 60 de pression, probabilité d'arrestation en fin de semaine : `(pression − 40) / 100`. Si déclenchée, un membre non détenu est choisi au hasard. Si pression au moins 80 et activité clandestine existante, la même intervention ferme aussi un speakeasy pour les deux semaines suivantes. La pression baisse ensuite de 6, bornée entre 0 et 100.

Cette V1 regroupe les autorités dans une pression policière. Elle ne simule pas encore des policiers individuels, le FBI distinct, les témoins, les procès, les pots-de-vin nominatifs ou les comptables recrutables.

## Événements

Premier tour : deuil, sans modificateur. Ensuite, tirage parmi : revenus +25 %; +5 pression par opération criminelle; revenus divisés par deux aux Docks et à Southside; rumeurs (texte contextuel, les enquêtes découvrent déjà des candidats); pluie (+10 points au sabotage). Les deux camps subissent les mêmes effets. Pas de jauge de chaos globale.

## Bot

Même économie, paie, ordres, portée et effectifs. Priorise baisse de pression, avocat, recrutement financé, collectes et extension. Peut investir en propriété ou activité clandestine, protéger et prendre les lieux rivaux. Il n'utilise pas encore tout le catalogue (notamment enquêtes, descentes, sabotage, équipement). Il connaît les candidats cachés; cette asymétrie de connaissance est une simplification documentée, pas un avantage économique direct. Les ordres du joueur ne sont pas utilisés pour choisir une contre-opération spécifique.

## Interface

Carte → fiche de lieu → choix d'action → 1 à 3 personnages → estimation/coût → ordre. Écrans Famille, Ordres, Affaires et Journal. Les ordres sont annulables. La présentation des résultats est courte, puis un compte rendu explique effets et causes. Bilan final et nouvelle campagne. Portraits originaux générés, atlas 4×2; une identité visuelle peut être réutilisée entre clans dans cette V1.

## Limites volontaires

Pas de multijoueur humain; pas de déplacement continu ou combat manuel; pas de mort individuelle, assassinat ciblé ou enlèvement; pas de stocks commerciaux/chaînes logistiques; pas de carte procédurale; pas de progression; pas de négociation diplomatique; pas de gérants permanents. Ces domaines restent dans le périmètre de discussion, sans être présentés comme implémentés.

## Technique et validation

JavaScript ESM sans framework, HTML/CSS/SVG pour une carte fonctionnelle. Résolution pure dans dist/engine.js; UI dans dist/app.js. Pas de service distant de gameplay. Images et code servis statiquement. Sources + données + docs dans GitHub; publication privée Sites.

`node --test tests/engine.test.js` vérifie engagements, portée, propriété/collecte, recrutement, sauvegarde, fin de partie et invariants de 60 campagnes. Simulation exploratoire de 100 parties avec politiques automatiques : 53 victoires camp 0, 47 camp 1; durée 7–16 semaines, moyenne 12,91. Ce n'est pas un test d'équilibrage humain.

Aperçu navigateur supervisé indisponible pour cette sortie statique dans cet environnement. Aucun résultat de test visuel mobile réel n'est revendiqué. WebMCP est optionnel et protégé par détection; validation en contexte supporté indisponible. Les outils partagent la validation du moteur.
