
const news = [
    "01",
    "02",
    "10",

    "88",
    "91",
    "92",

    "93",
    "96",
    "99",
];


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
Notions en suspens
prudence, justice, force, tempérance
crainte, espérance, honte, orgueil, jalousie

Verbes en suspens : 
défendre, transfigurer, donner, passer, aller, venir, rendre, ajouter, retrancher, choisir, décider, juger, tenter, chercher, trouver, montrer, éclairer, établir, engager, dégager, risquer, permettre, céder, secourir, éviter, parfaire, corriger, améliorer, compter, interdire, demander, répondre, convenir, conclure, déduire, renforcer, souiller, user, instituer, partager, répartir, tourner


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
    ["", "ne", "comme, qui", "le", "juste","de", "avec", "mais", "pour"],
    ["espace", "est", "ouest", "sud", "nord", "ici", "nord-est", "sud-est", "nord-ouest", "sud-ouest"],
    ["néant", "eau", "feu", "ciel", "terre", "centre", "foudre", "lac", "montagne", "vent"],
    ["transparent", "bleu", "rouge", "blanc", "noir", "jaune", "brun", "rose", "gris", "vert" ],
    ["annuler", "", "", "", "", "", "sortir, lever", "ouvrir", "fermer", "entrer"],
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
    ["", "peuple", "mœurs", "état", "pays", "société", "guerre", "mythe", "loi", ""],
    ["nul", "dans", "que", "l’", "de", "juste", "vers","avec", "mais", "pour"],

];
const hecto = {    
    "00": {
        "verb": "annuler",
        "formula": "remettre (0) à zéro (0)",
        "note": "",
    },
    "01": {
        "verb": "assourdir",
        "formula": "étouffer (0) le son (1)",
        "note": "assourdir, sans bruit, liquider",
    },
    "02": {
        "verb": "aveugler",
        "formula": "éteindre (0) la lumière (2)",
        "note": "sans voir, aveugler, cacher, lumière noire",
    },
    "03": {
        "verb": "détrôner",
        "formula": "vider (0) le pouvoir (3)",
        "note": "",
    },
    "04": {
        "verb": "exiler",
        "formula": "sans (0) terre (4)",
        "note": "rebaser",
    },
    "05": {
        "verb": "écœurer",
        "formula": "perdre (0) courage (5)",
        "note": "recentrer, déserter dans le sens de faire un désert mais pas partir",
    },
    "06": {
        "verb": "relancer",
        "formula": "faux (0) départ (6)",
        "note": "désamorcer, fatiguer, relancer",
    },
    "07": {
        "verb": "bavarder",
        "formula": "le rien (0) parle (7)",
        "note": "refermer, taire, annoncer, afficher",
    },
    "08": {
        "verb": "réserver",
        "formula": "espace (0) protégé (8)",
        "note": "laisser",
    },
    "09": {
        "verb": "tramer",
        "formula": "l’espace (0) des lignes (9)", // ??? nouvelles
        "note": "accorder, sans vent",
    },

    "10": {
        "verb": "sentir",
        "formula": "humeurs (1) cachées (0)",
        "note": "",
        "yijing": ""
    },

    "11": {
        "verb": "traverser",
        "formula": "failles (1) et courants (1)",
        "note": "traverser, répétition, chute, tomber, herbes sauvages, friche, naviguer, sonder, jauger, baliser, assainir, drainer",
        "yijing": 29,
        "hexagram": "䷜"
    },
    "12": {
        "verb": "parfaire",
        "formula": "du trouble (1) à l’évidence (2)",
        "note": "achever, espérer, prévoir, corriger pour l’achèvement, pas encore",
        "yijing": 64,
        "hexagram": "䷿"
    },
    "13": {
        "verb": "contester",
        "formula": "le singulier trouble (1) la direction (3)",
        "note": "plaider, accuser, contester, dispute, embrouille, 訟 parole + commun, public, duc, juge",
        "yijing": 6,
        "hexagram": "䷅"
    },
    "14": {
        "verb": "commander",
        "formula": "aligner (1) les rangs (4)",
        "note": "armée",
        "yijing": 7,
        "hexagram": "䷆"
    },
    "15": {
        "verb": "écouter",
        "formula": "flux (1) au cœur (5)",
        "note": "tromper, illusion"
    },
    "16": {
        "verb": "libérer",
        "formula": "les eaux (1) jaillissent (6)",
        "note": "release, affranchir, libérer, démonter, démêler",
        "yijing": 40,
        "hexagram": "䷧"
    },
    "17": {
        "verb": "paraître",
        "formula": "le singulier (1) sous les conventions (7)",
        "note": "vider, coincer, cible, épuiser, étouffer, opprimer % 91 (puits, abreuver), emmêler, approfondir, obstruction",
        "yijing": 47,
        "hexagram": "䷮"
    },
    "18": {
        "verb": "apprendre",
        "formula": "ignorance (1) formée (8)",
        "note": "sanglier dans un filet et plante grimpante : couvrir, bourgeonner, ignorer, batifoler, jeune fou, folâtrer",
        "yijing": 4,
        "hexagram": "䷃"
    },
    "19": {
        "verb": "dissoudre",
        "formula": "l’eau (1) disperse (9)",
        "note": "disperser, dissoudre, déborder, dissiper, disparaître, jaillir, dissoudre les amas, enseigner",
        "yijing": 59,
        "hexagram": "䷺"
    },


    "20": {
        "verb": "voir",
        "formula": "éclairer (2) l’indistinct (0)",
        "note": "",
    },
    "21": {
        "verb": "aboutir",
        "formula": "voir (2) le singulier (1)",
        "note": "après la traversée du fleuve, tempérer, éclairer les profondeurs, désenchanter",
        "yijing": 63,
        "hexagram": "䷾"
    },
    "22": {
        "verb": "éclairer",
        "formula": "distinguer (2) et relier (2)",
        "note": "dianoia, clarifier, riche, lumière, phœnix dans un filet, loriot, joindre, focaliser, foyer, concentrer, attirer, briller 離",
        "yijing": 30,
        "hexagram": "䷝"
    },
    "23": {
        "verb": "fédérer",
        "formula": "associer (2) l’autre (3)",
        "note": "associer, coopérer, vase et couvercle ajusté",
        "yijing": 13,
        "hexagram": "䷌"
    },
    "24": {
        "verb": "cacher",
        "formula": "vérité (2) enterrée (4)",
        "note": "vérité cachée (occulter), phœnix abbatu d’une flèche, vulgariser, exposition punitive, blessure (feu sous la chair)",
        "yijing": 36,
        "hexagram": "䷣"
    },
    "25": {
        "verb": "converser",
        "formula": "joindre (2) les cœurs (5)",
        "note": "",
    },
    "26": {
        "verb": "éblouir",
        "formula": "lumière (2) blessante (6)",
        "note": "regorger, éblouir, culminer, foisonner, abonder, fertile, luxuriant, abondant… Prodiges. Chaume de maison, allumer, déclencher. Plein. Son ample du tambour",
        "yijing": 55,
        "hexagram": "䷶"
    },
    "27": {
        "verb": "réformer",
        "formula": "la vérité (2) est accepté (7)",
        "note": "réformer, kairos de la réforme, mandater, muer, cuir, décortiquer, “fire” quelqu’un, moment opportun, changer, transformer",
        "yijing": 49,
        "hexagram": "䷰"
    },
    "28": {
        "verb": "habiller",
        "formula": "révéler (2) la forme (8)",
        "note": "styliser, élégance, polir, beauté, coquillage, beauté par la coupe",
        "yijing": 22,
        "hexagram": "䷕"
    },
    "29": {
        "verb": "coordonner",
        "formula": "les distinctions (2) diffusent (9)",
        "note": "famille , clan, sacrifice, héritage, perpétuer, habiter, clarté partagée, demeurer 家人",
        "yijing": 37,

        "hexagram": "䷤"
    },
    

    "30": {
        "verb": "être",
        "formula": "acte (3) pur (0)",
        "note": "pouvoir du vide : axe, tendre à faire ceci",
    },
    "31": {
        "verb": "attendre", 
        "formula": "puissance (3) immergée (1)",
        "note": "avoir faim que le blé pousse, offrande à la pluie, espérer, attendre, patienter, préparer",
        "yijing": 5,
        "hexagram": "䷄"
    },
    "32": {
        "verb": "afficher",
        "formula": "pouvoir (3) manifeste (2)",
        "note": "avoir, il y a, fortune, grand réalisé, advenir, donner? chance, au ciel une étoile, fortune, généreux",
        "yijing": 14,
        "hexagram": "䷍"
    },
    "33": {
        "verb": "orienter",
        "formula": "créer (3) du sens (3)",
        "note": "animer, orienter, imaginer, conférer le mandat, animer, activer, orienter, sec; commençons par une offrande, divination bénéfique, agir, tourner, créer, inventer",
        "yijing": 1,
        "hexagram": "䷀"
    },
    "34": {
        "verb": "apaiser",
        "formula": "créer (3) l’aisance (4)",
        "note": "paix, prospérité, arrivée des grands, imprégner, propager, parfum envahissant, pervading, ease, aisance",
        "yijing": 11,
        "hexagram": "䷊"
    },
    "35": {
        "verb": "incarner",
        "formula": "le sens (3) en personne (5)",
        "note": "sens propre",
    },
    "36": {
        "verb": "maîtriser",
        "formula": "force (3) naturelle (6)",
        "note": "bélier bloqué, l’homme intègre réussit par la ruse plutôt que la force, 壯 grand talent ou compétence, puissance en expansion",
        "yijing": 34,
        "hexagram": "䷡"
    },
    "37": {
        "verb": "trancher",
        "formula": "direction (3) proclamée (7)",
        "note": "sym-bole, bâton fendu contractuel, déterminer, distinguer, résolution",
        "yijing": 43,
        "hexagram": "䷪"
    },
    "38": {
        "verb": "domestiquer",
        "formula": "cheval (3) enclos (8)",
        "note": "gros bétail, éducation des grands, conserver, stocker, retenir par la forme",
        "yijing": 26,
        "hexagram": "䷙"
    },
    "39": {
        "verb": "accoutumer",
        "formula": "pouvoir (3) des usages (9)",
        "note": "petit bétail, domestication des petits",
        "yijing": 9,
        "hexagram": "䷈"
    },


    "40": {
        "verb": "avoir",
        "formula": "moyens (4) potentiels (0)",
        "note": "",
    },
    "41": {
        "verb": "confluer",
        "formula": "la poussière (4) va au fleuve (1)",
        "note": "rallier à un centre, 比 2 humains retournés, comparer (cf. 从 suivre), champ innondé, égaliser, participer",
        "yijing": 8,
        "hexagram": "䷇"
    },
    "42": {
        "verb": "promouvoir",
        "formula": "porter (4) à la connaissance (2)",
        "note": "lever du soleil, développer, arriver à la lumière, course du soleil, un oiseau ne recule pas, promouvoir",
        "yijing": 35,
        "hexagram": "䷢"
    },
    "43": {
        "verb": "dissocier",
        "formula": "les pauvres tombent (4), les riches montent (3)",
        "note": "clore, suspendre, cloisonner, refuser, désordonner, arrivée des petits, négation ou voleurs, otherwise, personnes égoistes, taxer",
        "yijing": 12,
        "hexagram": "䷋"
    },
    "44": {
        "verb": "soutenir",
        "formula": "matière (4) étendue (4)",
        "note": "réceptif, terre, champ, disponible, former, porter, accueillir",
        "yijing": 2,
        "hexagram": "䷁"
    },
    "45": {
        "verb": "adapter",
        "formula": "moyens (4) pour les gens (5)",
        "note": "",
    },
    "46": {
        "verb": "mobiliser",
        "formula": "rangs (4) et tambours (6)",
        "note": "parier, investir, concéder un fief, éléphant-image, imaginer, enthousiasme ; 予 payer 象 un éléphant, tambour",
        "yijing": 16,
        "hexagram": "䷏"
    },
    "47": {
        "verb": "convier",
        "formula": "foule (4) invitée (7)",
        "note": "assembler pour un sacrifice, collectionner, champ moissonner, masser, faire affluer les contributions",
        "yijing": 45,
        "hexagram": "䷬"
    },
    "48": {
        "verb": "dépouiller",
        "formula": "support (4) mis-à-nu (8)",
        "note": "démanteler, érosion, perte, user, élaguer, dépouiller, écorcher, vache coupée",
        "yijing": 23,
        "hexagram": "䷖"
    },
    "49": {
        "verb": "admirer",
        "formula": "la foule (4) et le modèle (9)",
        "note": "épiphanie, manifestation, l’ordre s’appuie sur les modèles et non la compulsion, look up, chercher, admirer, contempler, porte, temple, belvédère, prendre modèle, voir de haut, surveiller, inspection des régions, diffuser l’instruction",
        "yijing": 20,
        "hexagram": "䷓"
    },

    "50": {
        "verb": "jouer",
        "formula": "cœur (5) libre (0)",
        "note": "vivre, jouer",
    },
    "51": {
        "verb": "pleurer",
        "formula": "cœur (5) qui coule (1)",
        "note": "",
    },
    "52": {
        "verb": "hésiter",
        "formula": "cœur (5) double (2)",
        "note": "",
    },
    "53": {
        "verb": "réfléchir",
        "formula": "gens (5) d’idéaux (3)",
        "note": "",
    },
    "54": {
        "verb": "travailler",
        "formula": "cœur (5) au jardin (4)",
        "note": "cœur en chair: incarner, ",
    },
    "55": {
        "verb": "civiliser",
        "formula": "humaniser (5) la vie (5)",
        "note": "policer",
    },
    "56": {
        "verb": "attaquer",
        "formula": "gens (5) de colère (6)",
        "note": "",
    },
    "57": {
        "verb": "confier",
        "formula": "cœur (5) ouvert (7)",
        "note": "% 75 réjouir",
    },
    "58": {
        "verb": "habiter",
        "formula": "humaniser (5) le cadre (8)",
        "note": "interdire, borner, sauvegarder",
    },
    "59": {
        "verb": "adoucir",
        "formula": "le cœur (5) diffuse (9)",
        "note": "recentrer ; accorder (les parties) ; susciter l’assentiment",
    },

    "60": {
        "verb": "aller",
        "formula": "ça va (6) arriver (0)",
        "note": "",
    },
    "61": {
        "verb": "germer",
        "formula": "sortir (6) la singularité (1)",
        "note": "naître, germer, stationner des troupes, difficulté initiale, rassemblement",
        "yijing": 3,
        "hexagram": "䷂"
    },
    "62": {
        "verb": "proportionner",
        "formula": "force (6) éclairée (2)",
        "maxim": "", 
        "note": "festoyer, mordre et unir, peine, torture, exécuter la sentence, mordre dans le problème et statuer, punir",
        "yijing": 21,
        "hexagram": "䷔"
    },
    "63": {
        "verb": "étonner",
        "formula": "naturel (6) droit (3)",
        "note": "candider, sans folie, innocent, inatendu, colère du ciel",
        "yijing": 25,
        "hexagram": "䷘"
    },
    "64": {
        "verb": "retourner", 
        "formula": "partir (6) du bas (4)",
        "note": "revenir, demi-tour, mort",
        "yijing": 24,
        "hexagram": "䷗"
    },
    "65": {
        "verb": "encourager",
        "formula": "impulsion (6) humaine (5)",
        "note": "",
    },
    "66": {
        "verb": "réveiller",
        "formula": "choc (6) initial (6)",
        "note": "déclencher, sortir, lancer, ébranlement, réveiller, impulsion initiale, colère, printemps, naissance, cascade, alerte, heurter, frapper",
        "yijing": 51,
        "hexagram": "䷲"
    },
    "67": {
        "verb": "convenir",
        "formula": "vouloir (6) accepter (7)",
        "note": "suivre, se conformer, le sens est l’adhésion à la séquence des signes, sacrifice des captifs,  隋 boucher, harmoniser, accorder, push-pull, suivre l’appel",
        "yijing": 17,
        "hexagram": "䷐"
    },
    "68": {
        "verb": "satisfaire",
        "formula": "potentiel (6) abouti (8)",
        "note": "discipline de la bouche ? mâchoire de divination, appétit satisfait, se projeter dans le cadre, rassasier, nourrir, enseigner",
        "yijing": 27,
        "hexagram": "䷚"
    },
    "69": {
        "verb": "accroître",
        "formula": "potentiel (6) multiplié (9)",
        "note": "crédit (% débit, 78), augmenter, gagner, donner?, générosité noble, rançon, ajouter, apprendre du bon, réallouer du mou au levier",
        "yijing": 42,
        "hexagram": "䷩"
    },


    "70": {
        "verb": "vouloir",
        "formula": "demande (7) gratuite (0)",
        "note": "puissance de la parole pure, au commencent était le verbe",
    },
    "71": {
        "verb": "mesurer",
        "formula": "marquer (7) le continu (1)",
        "note": "節, rythmer, articuler, ponctuer, mesurer, cadencer, charnière",
        "yijing": 60,
        "hexagram": "䷻"
    },
    "72": {
        "verb": "diverger",
        "formula": "exprimer (7) sa différence (2)",
        "note": "diffraction, se voir sans se regarder",
        "yijing": 38,
        "hexagram": "䷥"
    },
    "73": {
        "verb": "appliquer",
        "formula": "parole (7) en acte (3)",
        "note": "réaliser la parole, mettre en œuvre, marche rituelle, chercher, trouver, guider, diriger",
        "yijing": 10,
        "hexagram": "䷉"
    },
    "74": {
        "verb": "approcher",
        "formula": "s’ouvrir (7) au terrain (4)",
        "note": "visiter, condescendre, regarder de petites choses, approcher, expliquer, assiéger, pleurer au deuil, visiter",
        "yijing": 19,
        "hexagram": "䷒"
    }, 
    "75": {
        "verb": "réjouir",
        "formula": "contenter (7) les cœurs (5)",
        "note": "ouvrir les cœurs ?",
    },
    "76": {
        "verb": "déroger",
        "formula": "admettre (7) l’imprévu (6)",
        "note": "exception à la règle, retour de la petite sœur, concubine, mariage raté, 歸 se livrer 妹 femme pas encore",
        "yijing": 54,
        "hexagram": "䷵"
    },
    "77": {
        "verb": "échanger",
        "formula": "donner (7) et accepter (7)",
        "note": "accord mutuel par échange explicite, départager, amitié, ouvrir, agréer, parler, exchange, add, against, and convert, ouvrir, marais, don contre don, palabrer, satisfaction mutuelle, défouler, étudier et discuter avec des amis",
        "yijing": 58,
        "hexagram": "䷹"
    },
    "78": {
        "verb": "rogner",
        "formula": "demandes (7) refusées (8)",
        "note": "réduire, moins mais mieux, optimiser, débit (% crédit 69), dette, devoir, diminuer, retrancher",
        "yijing": 41,
        "hexagram": "䷨"
    },
    "79": {
        "verb": "intérioriser",
        "formula": "s’accorder (7) à un air (9)",
        "note": "intérioriser, comprendre, intégrer, vérité intérieure, juste confiance, centre, croire",
        "yijing": 61,
        "hexagram": "䷼"
    },
    

    "80": {
        "verb": "devoir",
        "formula": "détermination (8) sans objet (0)",
        "note": "",
    },
    "81": {
        "verb": "dévier",
        "formula": "récifs (8) et courants (1)",
        "note": "aider, entrave, boîter, obstruction, chercher la passe plutôt que forcer, contourner, entraver",
        "yijing": 39,
        "hexagram": "䷦"
    },
    "82": {
        "verb": "voyager",
        "formula": "hors de chez soi (8), remarqué (2)",
        "note": "séjourner, pause temporaire, squatter, s’accomoder, camp, hôtel, voyager, vagabond, expédition militaire, voyager en bordure, vivre en hôte",
        "yijing": 56,
        "hexagram": "䷷"
    },
    "83": {
        "verb": "reculer",
        "formula": "repli (8) stratégique (3)",
        "note": "pureté par la distance, fuir, retraite, reculer ; pied bouclier, disparaître",
        "yijing": 33,
        "hexagram": "䷠"
    },
    "84": {
        "verb": "modérer",
        "formula": "profil (8) bas (4)",
        "note": "modérer, tempérer, se contenir, égaliser, répartir, humilité, modestie (% 46), niveler, humilier, modérer",
        "yijing": 15,
        "hexagram": "䷎"
    },
    "85": {
        "verb": "protéger",
        "formula": "limites (8) personnelles (5)",
        "note": "",
    },
    "86": {
        "verb": "ajuster",
        "formula": "contrôle (8) du tir (6)",
        "note": "ajuster, corriger, affiner, viser?, excès de petit, moins que, cf 97, refouler, réfréner, canaliser",
        "yijing": 62,
        "hexagram": "䷽"
    },
    "87": {
        "verb": "aimer",
        "formula": "constance (8) du goût (7)",
        "note": "séduire, courtoisie, politesse, salé, émouvoir, inciter, cf. 96 persévérer, endurer, influencer par présence calme, influence réciproque, incliner — faire pencher la volonté l’une vers l’autre",
        "yijing": 31,
        "hexagram": "䷞"
    },
    "88": {
        "verb": "achever",
        "formula": "fini (8) et clos (8)",
        "note": "couper, arrêter, bloquer, mener à terme et recommencer, porte, chien, main, nœud, pause, borne, consolidation",
        "yijing": 52,
        "hexagram": "䷳"
    },
    "89": {
        "verb": "progresser",
        "formula": "appui (8) et pénétration (9)",
        "note": "graduellement, arbre sur la montagne, infiltrer, progresser, mûrir",
        "yijing": 53,
        "hexagram": "䷴"
    },


    "90": {
        "verb": "venir",
        "formula": "il arrive (9) que (0)",
        "note": "",
    },
    "91": {
        "verb": "irriguer",
        "formula": "diffuser (9) l’eau (1)",
        "note": "puits commun, fontaine publique, puiser, ressourcer",
        "yijing": 48,
        "hexagram": "䷯"
    },
    "92": {
        "verb": "habiliter",
        "formula": "modèle (9) reconnu (2)",
        "note": "officialiser est l’aboutissement visible d’un travail de “cuisson” et d’“habilitation”, instituer, assimiler en transformant, chaudron, cuisiner, tripode, deviner, présager, prophétiser, divination, repas, faire d’un support un foyer de sens",
        "yijing": 50,
        "hexagram": "䷱"
    },
    "93": {
        "verb": "rencontrer",
        "formula": "infléchit (9) la direction (3)",
        "note": "tentation, copuler, rencontrer, coupler",
        "yijing": 44,
        "hexagram": "䷫"
    },
    "94": {
        "verb": "enraciner",
        "formula": "pénétrer (9) la terre (4)",
        "note": "grandir, croître, louche, dater la moisson, monter par imprégnation",
        "yijing": 46,
        "hexagram": "䷭"
    },
    "95": {
        "verb": "influencer",
        "formula": "conformer (9) les gens (5)",
        "note": "",
    },
    "96": {
        "verb": "endurer",
        "formula": "souffle (9) rapide (6)",
        "note": "endurer, persévérer, cœur | course du soleil, routine synchronized to pulses, durée, constance",
        "yijing": 32,
        "hexagram": "䷟"
    },
    "97": {
        "verb": "excéder",
        "formula": "presser (9) l’accord (7)",
        "note": "transgresser outrepasser, masse critique, grande expérience (aspect), excès de grand, cf 86",
        "yijing": 28,
        "hexagram": "䷛"
    },
    "98": {
        "verb": "assainir",
        "formula": "infiltrations (9) arrêtées (8)",
        "note": "sorcellerie, désinfecter, ranger les affaires des parents, maladie sexuelle, malédiction, infecter; quelque chose pourrit à l’intérieur, corriger, corriger en ré-imprégnant",
        "yijing": 18,
        "hexagram": "䷑"
    },
    "99": {
        "verb": "insinuer",
        "formula": "infuser (9) et infléchir (9)",
        "note": "s’absorber, diriger la trajectoire?, entrer, conformer, mouler, sceau, table avec commensaux à genoux, s’agenouiller devant l’autel, calculer, dater, complaire, céder, 巽",
        "yijing": 57,
        "hexagram": "䷸"
    },


  
};