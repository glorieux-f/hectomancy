const news = ["00", "00", "00", "00", "00", "00", "00", "00", "00"];

// 1 : eau, oreille, élastique, tristesse, traversant
// 2 : tortue, dur, coque, graine, casque, arme
// 3 : ciel, rond, métal
// 4 : tissu, marmite, économie
// 5 : humain
// 6 : mouvement
// 7 : embrouiller, casser, chamane
// 8 : fruit, graine, montagne, sentier, porte, doigt
// 9 : dispersion, ajustement, vent, cordeau, nez, odeur

/*
0 — réinitialisation · origine · effacement

0-1 : effacer pour recommencer vs se lancer, plonger, prendre un risque.
0-2 : nettoyer le cadre vs poser deux pôles et choisir.
0-3 : revenir au sans-forme vs introduire un tiers/schème.
0-4 : annuler les engagements vs s’appuyer sur le terrain/les moyens.
0-5 : se retirer vs coordonner l’effort pour qu’il reste humain.
0-6 : couper l’impulsion vs déclencher/mobiliser.
0-7 : réduire au silence vs ouvrir l’échange explicite.
0-8 : nettoyer quand on est déjà à l’arrêt vs arrêter, ralentir, discipliner.
0-9 : abandonner la diffusion vs enraciner et récolter.

1 — flux · profondeur · chenal

1-0 : oser malgré l’incertitude vs réinitialiser les paramètres.
1-2 : un courant à travers l’opaque vs deux lignes distinctes (complémentaires ou opposées).
1-3 : pousser dans un seul flux vs dégager un schème tiers.
1-4 : avancer dans le chenal vs tenir compte du terrain/ressources.
1-5 : avancer en tête vs articuler comment les humains portent le flux.
1-6 : plongée continue vs choc initial/impulsion.
1-7 : intériorité/profondeur vs communication explicite/externe.
1-8 : traverser vs s’arrêter au seuil.
1-9 : creuser un passage vs diffuser/enraciner.

2 — dualité · contraste · relation

2-0 : distinguer vs effacer.
2-1 : deux lignes nettes vs indistinction dans un même courant.
2-3 : fourche tenue vs tiers extérieur qui réconcilie.
2-4 : trancher entre options vs composer avec le terrain/les moyens.
2-5 : choisir des compromis vs répartir les charges pour qu’elles soient soutenables.
2-6 : décider vs déclencher/mobiliser l’un des choix.
2-7 : clarifier la différence vs créer de la résonance entre différences.
2-8 : comparer vs imposer une limite.
2-9 : décision locale vs pratique partagée/transmise.

3 — triade · schème · médiation

3-0 : donner forme vs revenir au vide.
3-1 : schème opérant vs flux pur.
3-2 : tiers de réconciliation vs binaire qui reste ouvert.
3-4 : armature intelligible vs appui sur terrain/ressources.
3-5 : cadre d’intelligibilité vs coordination humaine des gestes.
3-6 : déclencheur conceptuel vs déclencheur énergétique (choc).
3-7 : re-cadre le sens vs donne de l’air social/visibilité.
3-8 : forme qui ouvre des prises vs fermeture/discipline.
3-9 : carte mentale vs héritage et transmission de pratiques.

4 — peuple · terrain · moyens · ressources

4-0 : s’ancrer dans le réel vs tout remettre à zéro.
4-1 : composer avec le terrain/les moyens vs forcer un flux.
4-2 : prendre appui sur les ressources vs rester au niveau du choix abstrait.
4-3 : matérialité et logistique vs schème/triangulation conceptuelle.
4-5 : moyens/matière vs soutenabilité humaine/coordination.
4-6 : ressources prêtes vs impulsion à donner.
4-7 : ancrage local/peuple vs mise en scène/exposition.
4-8 : terrain souple vs barrières dures.
4-9 : base matérielle vs diffusion/enracinement des usages.

5 — centre humain · coordination · soin

5-0 : re-calibrer humainement vs effacer la situation.
5-1 : articuler comment porter le flux vs pousser le flux tel quel.
5-2 : répartir les charges vs trancher entre pôles.
5-3 : ajuster corps/attention vs ajuster concepts/schèmes.
5-4 : humaniser la situation vs chercher/optimiser les moyens.
5-6 : coordonner les efforts vs augmenter l’impulsion/la cadence.
5-7 : communication non verbale/proximale (ton, gestes, care) vs communication explicite/externe.
5-8 : articulation souple du geste vs cadre contraignant.
5-9 : prendre soin des acteurs vs prendre soin de la transmission.

6 — impulsion · mobilisation · choc

6-0 : démarrer vs remettre à zéro.
6-1 : choc initial vs plongée dans l’inconnu (flux continu).
6-2 : pousser un côté vs peser encore les options.
6-3 : énergie d’attaque vs schème de compréhension.
6-4 : lancer malgré les moyens imparfaits vs patienter/adapter aux ressources.
6-5 : impulsion de production vs coordination des personnes.
6-7 : produire/mobiliser vs annoncer/relier.
6-8 : démarrer vs arrêter.
6-9 : faire partir vs faire prendre (essaimage).

7 — ouverture · échange · résonance

7-0 : faire entendre des voix vs silence/effacement.
7-1 : extérioriser/partager vs approfondir en dedans.
7-2 : relier des différences vs les aiguiser.
7-3 : oxygène social vs schème de médiation.
7-4 : exposition/accès vs terrain/moyens.
7-5 : communication explicite/externe vs communication non verbale/interne.
7-6 : communication vs production/mobilisation.
7-8 : ouvrir les portes vs les fermer.
7-9 : attirer/faire venir vs confier/faire hériter.

8 — limite · consolidation · discipline

8-0 : arrêt pour protéger vs remettre les paramètres à zéro.
8-1 : seuil/porte vs chenal/flux.
8-2 : fixer un bord vs maintenir une fourche.
8-3 : clôturer/capper vs recomposer par un tiers.
8-4 : contrainte dure vs optimisation par les moyens/terrain.
8-5 : prise ferme vs articulation souple.
8-6 : dire stop vs impulser.
8-7 : dire « non » vs dire « entrez ».
8-9 : contenir vs laisser se répandre et s’enraciner.

9 — diffusion · enracinement · récolte

9-0 : consolider/hériter vs effacer.
9-1 : disséminer en multiples canaux vs un seul chenal.
9-2 : au-delà du choix : partager la pratique vs choisir encore.
9-3 : faire circuler le schème vs découvrir/poser le schème.
9-4 : transmettre et outiller les communautés vs rester au niveau des moyens/terrain.
9-5 : soins des communautés vs soins des porteurs individuels.
9-6 : essaimer au-delà de l’impulsion vs rester dans le démarrage.
9-7 : confier/former vs susciter/annoncer.
9-8 : imprégner/traverser les limites vs les défendre.*/

/*
Domain glossaries (quick substitutions)

Psychology.
☰ will/agency · ☷ attachment/care · ☳ impulsivity/startle · ☴ internalized norms/habits · ☵ anxiety/ambivalence · ☶ inhibition/self-control · ☲ attention/identity/meaning · ☱ sociability/hedonics.

Politics.
☰ executive/sovereign authority · ☷ populace/administration · ☳ mobilization/protest · ☴ culture/legal diffusion · ☵ security/intelligence/crisis · ☶ judiciary/checks/boundaries · ☲ media/ideology/visibility · ☱ public opinion/coalitions/markets.

Management.
☰ vision/CEO mandate · ☷ operations/supply chain · ☳ launch/change kickoff · ☴ culture/process improvement · ☵ liquidity/operational risk · ☶ compliance/guardrails · ☲ analytics/brand/tech platform · ☱ customers/incentives/partner ecosystem.
*/
const deca = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["espace", "est", "ouest", "sud", "nord", "ici", "nord-est", "sud-est", "nord-ouest", "sud-ouest"],
    ["néant", "eau", "feu", "ciel", "terre", "centre", "foudre", "lac", "montagne", "vent"],
    ["transparent", "bleu", "rouge", "blanc", "noir", "jaune", "brun", "rose", "gris", "vert" ],
    // nez
    ["os", "oreille", "œil", "tête", "ventre", "cœur", "pied", "bouche", "main", "nez"],
    // matières, feuilles, pierre
    // ["verre", "eau", "feu", "air", "terre", "chair", "bois", "métal", "pierre", "feuille"],
    // outil, mur, digue, route, arme
    // ["roue", "arc", "", "", "", "moteur", "pot", "armure", "nœud", "voile"],
    // jour, nuit, soleil, nuage, vent, froid, chaud
    // ["pays", "lune", "soleil", "ciel", "plaine", "ville", "foudre", "lac", "mont", "vent"],
    // ça, verbe, nom, nous vouloir-devoir 
    ["ça", "je", "toi", "quand", "où", "nous", "verbe", "qualité", "nom", "manière"],
    // onde
    // ["point", "cercle", "ligne", "angle", "carré", "centre", "", "", "cube", ""],
    // argent, droit, politique
    ["culture", "cause", "but", "religion", "économie", "politique", "médecine", "art", "technique", "science"],
        // travail, rencontre
    ["vie", "santé", "couple", "chance", "maison", "famille", "naissance", "projets", "deuil", "dettes"],
    // manger, grandir, attaquer, défendre, jeune , vieux, lent, vif
    // musique, rythme, harmonie, chant, danse
    // ["", "musique", "spectacle", "inspiration", "", "écrire", "", "rêve", "répétition", "idée"],
    // politique
    ["reset", "risques", "interprète", "stratège", "soin", "pivot", "urgence", "négociateur", "contrôle", "routeur"],
    ["", "peuple", "mœurs", "état", "pays", "société", "guerre", "mythe", "loi", ""]

];
const hecto = {    
    "00": {
        "hecto": "00",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "01": {
        "hecto": "01",
        "verb": "liquider",
        "image": "supprimer (0) le flux (1)",
        "maxim": "",
        "note": "reset risk sense, assourdir, sans bruit",
        "yijing":""
    },
    "02": {
        "hecto": "02",
        "verb": "renommer",
        "image": "sans (0) voir (2)",
        "maxim": "",
        "note": "Reset → Schema (“schema from zero”), sans voir, aveugler",
        "yijing":""
    },
    "03": {
        "hecto": "03",
        "verb": "ressasser",
        "image": "sans (0) idée (3)",
        "maxim": "",
        "note": "Reset → Goal Select (“blank-slate strategy”)",
        "yijing":""
    },
    "04": {
        "hecto": "04",
        "verb": "déposséder",
        "image": "sans (0) avoir (4)",
        "maxim": "",
        "note": "rebuild clean, rebaser",
        "yijing":""
    },
    "05": {
        "hecto": "05",
        "verb": "déserter",
        "image": "sans (0) humanité (5)",
        "maxim": "",
        "note": "Reset → Transition (“versioned pivot”), recentrer",
        "yijing":""
    },
    "06": {
        "hecto": "06",
        "verb": "fatiguer",
        "image": "sans (0) vouloir (6)",
        "maxim": "",
        "note": "Reset → Trigger (“safe launch”), déclencher",
        "yijing":""
    },
    "07": {
        "hecto": "07",
        "verb": "désoler",
        "image": "sans (0) joie (7)",
        "maxim": "Reset → Feedback (“metrics before motion”)",
        "note": "",
        "yijing":""
    },
    "08": {
        "hecto": "08",
        "verb": "reposer",
        "image": "sans (0) arrêt (8)",
        "maxim": "",
        "note": "Reset → Gate (“thresholds as ground rules”)",
        "yijing":""
    },
    "09": {
        "hecto": "09",
        "verb": "réformer",
        "image": "annuler (0) les habitudes (9)",
        "maxim": "",
        "note": "Reset → Propagate (“seeded broadcast”)",
        "yijing":""
    },

    // 10

    "10": {
        "hecto": "10",
        "verb": "rincer",
        "image": "flux (1) d’annulation (0)",
        "maxim": "",
        "note": "Risk Sense → Reset (“kill-switch rebaseline”)",
        "yijing": ""
    },
    "11": {
        "hecto": "11",
        "verb": "couler",
        "image": "abîme (1) et courant (1)",
        "maxim": "",
        "note": "chute, tomber, herbes sauvages, friche, naviguer",
        "yijing": 29,
        "hexagram": "䷜"
    },
    "12": {
        "hecto": "12",
        "verb": "prévoir",
        "image": "fleuve (1) à traverser (2)",
        "maxim": "",
        "note": "prévoir, corriger pour l’achèvement",
        "yijing": 64,
        "hexagram": "䷿"
    },
    "13": {
        "hecto": "13",
        "verb": "quereller",
        "image": "confusion (1) au pouvoir (3)",
        "maxim": "",
        "note": "plaider, accuser, contester, dispute, embrouille, 訟 parole + commun, public, duc, juge",
        "yijing": 6,
        "hexagram": "䷅"
    },
    "14": {
        "hecto": "14",
        "verb": "commander",
        "image": "emmener (1) les masses (4)",
        "maxim": "",
        "note": "armée",
        "yijing": 7,
        "hexagram": "䷆"
    },
    "15": {
        "hecto": "15",
        "verb": "naviguer",
        "image": "flux (1) accompagné (5)",
        "maxim": "",
        "note": ""
    },
    "16": {
        "hecto": "16",
        "verb": "libérer",
        "image": "fatalité (1) secouée (6)",
        "maxim": "",
        "note": "affranchir, libérer, démonter, démêler",
        "yijing": 40,
        "hexagram": "䷧"
    },
    "17": {
        "hecto": "17",
        "verb": "épuiser",
        "image": "flux (1) ouvert (7)",
        "maxim": "",
        "note": "épuiser, étouffer, opprimer % 91 (puits, aménager), emmêler",
        "yijing": 47,
        "hexagram": "䷮"
    },
    "18": {
        "hecto": "18",
        "verb": "discipliner",
        "image": "folie (1) cadrée (8)",
        "maxim": "",
        "note": "sanglier dans un filet et plante grimpante : couvrir, bourgeonner, ignorer, batifoler, jeune fou, folâtrer",
        "yijing": 4,
        "hexagram": "䷃"
    },
    "19": {
        "hecto": "19",
        "verb": "diffuser",
        "image": "flot (1) ventilé (9)",
        "maxim": "",
        "note": "disperser, dissoudre, déborder, dissiper, disparaître, jaillir",
        "yijing": 59,
        "hexagram": "䷺"
    },


    "20": {
        "hecto": "20",
        "verb": "rompre",
        "image": "lien (2) annulé (0)",
        "maxim": "",
        "note": "Schema → Reset (“deprecate to minimal core”), élaguer",
        "yijing":""
    },
    "21": {
        "hecto": "21",
        "verb": "accomplir",
        "image": "relier (2) le fleuve (1)",
        "maxim": "",
        "note": "après la traversée du fleuve, tempérer",
        "yijing": 63,
        "hexagram": "䷾"
    },
    "22": {
        "hecto": "22",
        "verb": "éclairer",
        "image": "soleil (2) lumineux (2)",
        "maxim": "",
        "note": "lumière, phœnix dans un filet, loriot, joindre, focaliser, foyer, concentrer, attirer, briller",
        "yijing": 30,
        "hexagram": "䷝"
    },
    "23": {
        "hecto": "23",
        "verb": "assembler",
        "image": "joindre (2) les grands (3)",
        "maxim": "",
        "note": "associer, coopérer, vase et couvercle ajusté",
        "yijing": 13,
        "hexagram": "䷌"
    },
    "24": {
        "hecto": "24",
        "verb": "occulter",
        "image": "lumières (2) pour les masses (4)",
        "maxim": "",
        "note": "phœnix abbatu d’une flèche, occulter, vulgariser",
        "yijing": 36,
        "hexagram": "䷣"
    },
    "25": {
        "hecto": "25",
        "verb": "concilier",
        "image": "joindre (2) les cœurs (5)",
        "maxim": "",
        "note": "",
    },
    "26": {
        "hecto": "26",
        "verb": "foisonner",
        "image": "extension (2) de la nature (6)",
        "maxim": "",
        "note": "fertile, luxuriant, abondant… Prodiges. Chaume de maison",
        "yijing": 55,
        "hexagram": "䷶"
    },
    "27": {
        "hecto": "27",
        "verb": "changer",
        "image": "éclairer (2) le consentement (7)",
        "maxim": "",
        "note": "muer, cuir, décortiquer, “fire” quelqu’un, moment opportun",
        "yijing": 49,
        "hexagram": "䷰"
    },
    "28": {
        "hecto": "28",
        "verb": "styliser",
        "image": "révéler (2) la structure (8)",
        "maxim": "",
        "note": "beauté, coquillage",
        "yijing": 22,
        "hexagram": "䷕"
    },
    "29": {
        "hecto": "29",
        "verb": "demeurer",
        "image": "foyer (2) organisé (9)",
        "maxim": "",
        "note": "famille , clan, sacrifice, héritage, perpétuer, habiter",
        "yijing": 37,
        "hexagram": "䷤"
    },
    

    "30": {
        "hecto": "30",
        "verb": "invoquer",
        "image": "ascendant (3) vide (0)",
        "maxim": "",
        "note": "Goal Select → Reset (“sunset & archive”), clore",
    },
    "31": {
        "hecto": "31",
        "verb": "préparer",
        "image": "ciel (3) incertain (1)",
        "maxim": "",
        "note": "avoir faim que le blé pousse, offrande à la pluie, espérer, attendre, préparer",
        "yijing": 5,
        "hexagram": "䷄"
    },
    "32": {
        "hecto": "32",
        "verb": "accomplir",
        "image": "ciel (3) lumineux (2)",
        "maxim": "",
        "note": "il y a, fortune, grand réalisé, advenir",
        "yijing": 14,
        "hexagram": "䷍"
    },
    "33": {
        "hecto": "33",
        "verb": "créer",
        "image": "pouvoir (3) céleste (3)",
        "maxim": "",
        "note": "sec; commençons par une offrande, divination bénéfique",
        "yijing": 1,
        "hexagram": "䷀"
    },
    "34": {
        "hecto": "34",
        "verb": "redistribuer",
        "image": "pouvoir (3) en bas (4)",
        "maxim": "",
        "note": "paix, prospérité, arrivée des grands, imprégner, propager, parfum envahissant, pervading",
        "yijing": 11,
        "hexagram": "䷊"
    },
    "35": {
        "hecto": "35",
        "verb": "penser",
        "image": "idée (3) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "36": {
        "hecto": "36",
        "verb": "maîtriser",
        "image": "pouvoir (3) naturel (6)",
        "maxim": "",
        "note": "bélier bloqué, l’homme intègre réussit par la ruse plutôt que la force, 壯 grand talent ou compétence",
        "yijing": 34,
        "hexagram": "䷡"
    },
    "37": {
        "hecto": "37",
        "verb": "proclamer",
        "image": "le pouvoir (3) tranche (7)",
        "maxim": "",
        "note": "sym-bole, bâton fendu contractuel, déterminer, distinguer, résolution",
        "yijing": 43,
        "hexagram": "䷪"
    },
    "38": {
        "hecto": "38",
        "verb": "perpétuer",
        "image": "pouvoir (3) du passé (8)",
        "maxim": "",
        "note": "gros bétail, éducation des grands, conserver",
        "yijing": 26,
        "hexagram": "䷙"
    },
    "39": {
        "hecto": "39",
        "verb": "policer",
        "image": "pouvoir (3) des mœurs (9)",
        "maxim": "",
        "note": "petit bétail, domestication des petits",
        "yijing": 9,
        "hexagram": "䷈"
    },


    "40": {
        "hecto": "40",
        "verb": "peser",
        "image": "masse (4) vaine (0)",
        "maxim": "",
        "note": "Integrate → Reset (“decommission safely”), démonter",
        "yijing":""
    },
    "41": {
        "hecto": "41",
        "verb": "participer",
        "image": "argent (4) commun (1)",
        "maxim": "",
        "note": "比 2 humains retournés, comparer (cf. 从 suivre), champ innondé, égaliser",
        "yijing": 8,
        "hexagram": "䷇"
    },
    "42": {
        "hecto": "42",
        "verb": "élever",
        "image": "sur terre (4), soleil (2)",
        "maxim": "",
        "note": "lever du soleil, développer, arriver à la lumière, course du soleil, un oiseau ne recule pas",
        "yijing": 35,
        "hexagram": "䷢"
    },
    "43": {
        "hecto": "43",
        "verb": "stagner",
        "image": "masses (4) au pouvoir (3)",
        "maxim": "",
        "note": "arrivée des petits, négation ou voleurs, personnes égoistes, taxer",
        "yijing": 12,
        "hexagram": "䷋"
    },
    "44": {
        "hecto": "44",
        "verb": "recevoir",
        "image": "terre (4) malléable (4)",
        "maxim": "",
        "note": "réceptif, terre, champ",
        "yijing": 2,
        "hexagram": "䷁"
    },
    "45": {
        "hecto": "45",
        "verb": "aménager",
        "image": "moyens (4) pour les personnes (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "46": {
        "hecto": "46",
        "verb": "mobiliser",
        "image": "les masses (4) démarrent (6)",
        "maxim": "",
        "note": "parier, investir, concéder un fief, éléphant-image, imaginer, enthousiasme ; 予 payer 象 un éléphant",
        "yijing": 16,
        "hexagram": "䷏"
    },
    "47": {
        "hecto": "47",
        "verb": "convier",
        "image": "foule (4) invitée (7)",
        "maxim": "",
        "note": "assembler pour un sacrifice, collectionner, champ moissonner, masser, faire affluer les contributions",
        "yijing": 45,
        "hexagram": "䷬"
    },
    "48": {
        "hecto": "48",
        "verb": "dépouiller",
        "image": "peau (4) coupée (8)",
        "maxim": "",
        "note": "user, élaguer, dépouiller, écorcher, vache coupée",
        "yijing": 23,
        "hexagram": "䷖"
    },
    "49": {
        "hecto": "49",
        "verb": "observer",
        "image": "concret (4) mesuré (9)",
        "maxim": "",
        "note": "look up, chercher, admirer, contempler, porte, temple, belvédère, prendre modèle, voir de haut, surveiller",
        "yijing": 20,
        "hexagram": "䷓"
    },

    "50": {
        "hecto": "50",
        "verb": "vanter",
        "image": "personne (5) vaine (0)",
        "maxim": "",
        "note": "Transition → Reset (“stabilize post-pivot”), stabiliser",
        "yijing":""
    },
    "51": {
        "hecto": "51",
        "verb": "pleurer",
        "image": "cœur (5) qui coule (1)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "52": {
        "hecto": "52",
        "verb": "préférer",
        "image": "cœur (5) tiraillé (2)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "53": {
        "hecto": "53",
        "verb": "chercher",
        "image": "cœur (5) à l’idée (3)",
        "maxim": "penser à notre fin et au-delà humanise",
        "note": "",
        "yijing":""
    },
    "54": {
        "hecto": "54",
        "verb": "cultiver",
        "image": "personne (5) à la terre (4)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "55": {
        "hecto": "55",
        "verb": "humaniser",
        "image": "personne (5) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "56": {
        "hecto": "56",
        "verb": "combattre",
        "image": "cœur (5) impulsif (6)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "57": {
        "hecto": "57",
        "verb": "témoigner",
        "image": "cœur (5) qui parle (7)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "58": {
        "hecto": "58",
        "verb": "protéger",
        "image": "le cœur (5) a ses limites (8)",
        "maxim": "",
        "note": "interdire, borner, sauvegarder",
        "yijing":""
    },
    "59": {
        "hecto": "59",
        "verb": "juger",
        "image": "personne (5) aux formes (9)",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    "60": {
        "hecto": "60",
        "verb": "hésiter",
        "image": "départs (6) ratés (0)",
        "maxim": "",
        "note": "Trigger → Reset (“abort to zero”), relâcher",
        "yijing":""
    },
    "61": {
        "hecto": "61",
        "verb": "démarrer",
        "image": "entrer (6) dans le fleuve (1)",
        "maxim": "",
        "note": "germer, stationner des troupes, difficulté initiale, rassemblement",
        "yijing": 3,
        "hexagram": "䷂"
    },
    "62": {
        "hecto": "62",
        "verb": "punir",
        "image": "colère (6) éclairée (2)",
        "maxim": "", 
        "note": "festoyer, mordre et unir, peine, torture, exécuter la sentence, mordre dans le problème et statuer",
        "yijing": 21,
        "hexagram": "䷔"
    },
    "63": {
        "hecto": "63",
        "verb": "étonner",
        "image": "agir (6) droit (3)",
        "maxim": "",
        "note": "sans folie, innocent, inatendu, colère du ciel",
        "yijing": 25,
        "hexagram": "䷘"
    },
    "64": {
        "hecto": "64",
        "verb": "retourner",
        "image": "partir (6) au pays (4)",
        "maxim": "",
        "note": "revenir, demi-tour, mort",
        "yijing": 24,
        "hexagram": "䷗"
    },
    "65": {
        "hecto": "65",
        "verb": "encourager",
        "image": "impulsion (6) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "66": {
        "hecto": "66",
        "verb": "réveiller",
        "image": "choc (6) initial (6)",
        "maxim": "",
        "note": "ébranlement, réveiller, impulsion initiale, colère, printemps, naissance",
        "yijing": 51,
        "hexagram": "䷲"
    },
    "67": {
        "hecto": "67",
        "verb": "accorder",
        "image": "vouloir (6) l’entente (7)",
        "maxim": "",
        "note": "sacrifice des captifs,  隋 boucher, harmoniser, push-pull, suivre",
        "yijing": 17,
        "hexagram": "䷐"
    },
    "68": {
        "hecto": "68",
        "verb": "rassasier",
        "image": "appétit (6) satisfait (8)",
        "maxim": "",
        "note": "mâchoire de divination",
        "yijing": 27,
        "hexagram": "䷚"
    },
    "69": {
        "hecto": "69",
        "verb": "accroître",
        "image": "vouloir (6) la convenance (9)",
        "maxim": "",
        "note": "crédit (% débit, 78), augmenter, gagner, donner?, générosité noble, rançon",
        "yijing": 42,
        "hexagram": "䷩"
    },


    "70": {
        "hecto": "70",
        "verb": "espérer",
        "image": "demander (7) l’impossible (0)",
        "maxim": "",
        "note": "Feedback → Reset (“close, then clear”), conclure",
        "yijing":""
    },
    "71": {
        "hecto": "71",
        "verb": "rythmer",
        "image": "diviser (7) le flux (1)",
        "maxim": "",
        "note": "rythmer, articuler, ponctuer, mesurer, cadencer, charnière",
        "yijing": 60,
        "hexagram": "䷻"
    },
    "72": {
        "hecto": "72",
        "verb": "disputer",
        "image": "diviser (7) le foyer (2)",
        "maxim": "",
        "note": "",
        "yijing": 38,
        "hexagram": "䷥"
    },
    "73": {
        "hecto": "73",
        "verb": "marcher",
        "image": "ouvrir (7) la voie (3)",
        "maxim": "",
        "note": "réaliser la parole, mettre en œuvre, marche rituelle, chercher, trouver, guider, diriger",
        "yijing": 10,
        "hexagram": "䷉"
    },
    "74": {
        "hecto": "74",
        "verb": "visiter",
        "image": "s’ouvrir (7) aux masses (4)",
        "maxim": "",
        "note": "condescendre, regarder de petites choses, approcher, expliquer, assiéger, pleurer au deuil",
        "yijing": 19,
        "hexagram": "䷒"
    }, 
    "75": {
        "hecto": "75",
        "verb": "accueillir",
        "image": "ouvrir (7) le cœur (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "76": {
        "hecto": "76",
        "verb": "intégrer",
        "image": "accepter (7) l’imprévu (6)",
        "maxim": "",
        "note": "retour de la petite sœur, concubine, mariage raté, 歸 se livrer 妹 femme pas encore",
        "yijing": 54,
        "hexagram": "䷵"
    },
    "77": {
        "hecto": "77",
        "verb": "échanger",
        "image": "inviter (7) et consentir (7)",
        "maxim": "",
        "note": "exchange, add, against, and convert, ouvrir, marais, don contre don, palabrer, satisfaction mutuelle",
        "yijing": 58,
        "hexagram": "䷹"
    },
    "78": {
        "hecto": "78",
        "verb": "restreindre",
        "image": "demandes (7) bloquées (8)",
        "maxim": "Moins mais mieux",
        "note": "débit (% crédit 69), dette, devoir, diminuer",
        "yijing": 41,
        "hexagram": "䷨"
    },
    "79": {
        "hecto": "79",
        "verb": "intérioriser",
        "image": "accepter (7) les convenances (9)",
        "maxim": "",
        "note": "vérité intérieure, juste confiance, centre, croire",
        "yijing": 61,
        "hexagram": "䷼"
    },
    

    "80": {
        "hecto": "80",
        "verb": "sidérer",
        "image": "arrêté (8) sur rien (0)",
        "maxim": "",
        "note": "Gate → Reset (“drain and purge”), désencombrer",
        "yijing":""
    },
    "81": {
        "hecto": "81",
        "verb": "entraver",
        "image": "freins (8) et risques (1)",
        "maxim": "",
        "note": "entrave, boîter, obstruction, chercher la passe plutôt que forcer, contourner",
        "yijing": 39,
        "hexagram": "䷦"
    },
    "82": {
        "hecto": "82",
        "verb": "voyager",
        "image": "vers la montagne (8), foyer (2)",
        "maxim": "",
        "note": "camp, hôtel, voyager, vagabond, expédition militaire",
        "yijing": 56,
        "hexagram": "䷷"
    },
    "83": {
        "hecto": "83",
        "verb": "reculer",
        "image": "tenir (8) en force (3)",
        "maxim": "",
        "note": "fuir, retraite, reculer ; pied bouclier, disparaître",
        "yijing": 33,
        "hexagram": "䷠"
    },
    "84": {
        "hecto": "84",
        "verb": "modérer",
        "image": "tenir (8) à terre (4)",
        "maxim": "",
        "note": "humilité, modestie (% 46), niveler, humilier, modérer",
        "yijing": 15,
        "hexagram": "䷎"
    },
    "85": {
        "hecto": "85",
        "verb": "habiter",
        "image": "pierre (8) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "86": {
        "hecto": "86",
        "verb": "refouler",
        "image": "tenir (8) son naturel (6)",
        "maxim": "",
        "note": "excès de petit, moins que, cf 97, refouler, réfréner ; keep low, move small, verify often ; nuancer",
        "yijing": 62,
        "hexagram": "䷽"
    },
    "87": {
        "hecto": "87",
        "verb": "séduire",
        "image": "retenue (8) et sentiment (7)",
        "maxim": "",
        "note": "salé, émouvoir, inciter, cf. 96 persévérer, endurer, influencer par présence calme",
        "yijing": 31,
        "hexagram": "䷞"
    },
    "88": {
        "hecto": "88",
        "verb": "calmer",
        "image": "tenir (8) tranquille (8)",
        "maxim": "",
        "note": "arrêter, bloquer, mener à terme et recommencer, porte, chien, main, nœud, pause",
        "yijing": 52,
        "hexagram": "䷳"
    },
    "89": {
        "hecto": "89",
        "verb": "mûrir",
        "image": "patiente (8) pression (9)",
        "maxim": "",
        "note": "graduellement, arbre sur la montagne, infiltrer, progresser, mûrir",
        "yijing": 53,
        "hexagram": "䷴"
    },


    "90": {
        "hecto": "90",
        "verb": "culpabiliser",
        "image": "pression (9) inutile (0)",
        "maxim": "",
        "note": "Propagate → Reset (“recall to baseline”), actualiser",
        "yijing":""
    },
    "91": {
        "hecto": "91",
        "verb": "ressourcer",
        "image": "capter (9) l’eau (1)",
        "maxim": "",
        "note": "puits, puiser",
        "yijing": 48,
        "hexagram": "䷯"
    },
    "92": {
        "hecto": "92",
        "verb": "consacrer",
        "image": "dater (9) le foyer (2)",
        "maxim": "",
        "note": "chaudron, instituer, tripode, deviner, présager, prophétiser, divination, repas, faire d’un support un foyer de sens",
        "yijing": 50,
        "hexagram": "䷱"
    },
    "93": {
        "hecto": "93",
        "verb": "rencontrer",
        "image": "dater (9) la force (3)",
        "maxim": "",
        "note": "copuler, rencontrer, coupler",
        "yijing": 44,
        "hexagram": "䷫"
    },
    "94": {
        "hecto": "94",
        "verb": "élever",
        "image": "arpenter (9) le champ (4)",
        "maxim": "",
        "note": "grandir, croître, louche, dater la moisson",
        "yijing": 46,
        "hexagram": "䷭"
    },
    "95": {
        "hecto": "95",
        "verb": "obliger",
        "image": "presser (9) une personne (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "96": {
        "hecto": "96",
        "verb": "durer",
        "image": "rythmer (9) les impulsions (6)",
        "maxim": "",
        "note": "endurer, persévérer, cœur | course du soleil, routine synchronized to pulses",
        "yijing": 32,
        "hexagram": "䷟"
    },
    "97": {
        "hecto": "97",
        "verb": "surcharger",
        "image": "pression (9) à l’acceptation (7)",
        "maxim": "",
        "note": "transgresser outrepasser, masse critique, grande expérience (aspect), excès de grand, cf 86",
        "yijing": 28,
        "hexagram": "䷛"
    },
    "98": {
        "hecto": "98",
        "verb": "réparer",
        "image": "infiltrations (9) arrêtées (8)",
        "maxim": "",
        "note": "sorcellerie, désinfecter, ranger les affaires des parents, maladie sexuelle, malédiction, infecter; quelque chose pourrit à l'intérieur, corriger",
        "yijing": 18,
        "hexagram": "䷑"
    },
    "99": {
        "hecto": "99",
        "verb": "conformer",
        "image": "formes (9) respectées (9)",
        "maxim": "",
        "note": "sceau, table avec commensaux à genoux, s’agenouiller devant l’autel, calculer, dater, complaire",
        "yijing": 57,
        "hexagram": "䷸"
    },


  
};