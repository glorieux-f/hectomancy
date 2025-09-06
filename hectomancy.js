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
    // ça, verbe, nom, nous vouloir-devoir ?
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
        "verb": "assourdir",
        "image": "sans (0) bruit (1)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "02": {
        "hecto": "02",
        "verb": "aveugler",
        "image": "sans (0) voir (2)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "03": {
        "hecto": "03",
        "verb": "ressasser",
        "image": "sans (0) idée (3)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "04": {
        "hecto": "04",
        "verb": "déposséder",
        "image": "sans (0) avoir (4)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "05": {
        "hecto": "05",
        "verb": "déserter",
        "image": "sans (0) humanité (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "06": {
        "hecto": "06",
        "verb": "fatiguer",
        "image": "sans (0) vouloir (6)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "07": {
        "hecto": "07",
        "verb": "désoler",
        "image": "sans (0) joie (7)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "08": {
        "hecto": "08",
        "verb": "défaire",
        "image": "sans (0) arrêt (8)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "09": {
        "hecto": "09",
        "verb": "mystifier",
        "image": "sans (0) forme (9)",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    // 10

    "10": {
        "hecto": "10",
        "verb": "vomir",
        "image": "plonger (1) au néant (0)",
        "maxim": "",
        "note": "",
        "yijing": ""
    },
    "11": {
        "hecto": "11",
        "verb": "couler",
        "image": "abîme (1) profond (1)",
        "maxim": "",
        "note": "chute, tomber, herbes sauvages, friche",
        "yijing": 29,
    },
    "12": {
        "hecto": "12",
        "verb": "prévoir",
        "image": "fleuve (1) à traverser (2)",
        "maxim": "",
        "note": "",
        "yijing": 64,
    },
    "13": {
        "hecto": "13",
        "verb": "quereller",
        "image": "? oreille (1) du pouvoir (3)",
        "maxim": "",
        "note": "plaider, accuser, contester, dispute, embrouille, 訟 parole + commun, public, duc, juge",
        "yijing": 6
    },
    "14": {
        "hecto": "14",
        "verb": "commander",
        "image": "emmener (1) les masses (4)",
        "maxim": "",
        "note": "armée",
        "yijing": 7
    },
    "15": {
        "hecto": "15",
        "verb": "écouter",
        "image": "oreille (1) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "16": {
        "hecto": "16",
        "verb": "affranchir",
        "image": "fatalité (1) secouée (6)",
        "maxim": "",
        "note": "affranchir, libérer, démonter, démêler",
        "yijing": 40
    },
    "17": {
        "hecto": "17",
        "verb": "vider",
        "image": "fleuve (1), embouchure (7)",
        "maxim": "",
        "note": "épuiser, étouffer, opprimer % 91 (puits, aménager), emmêler",
        "yijing": 47
    },
    "18": {
        "hecto": "18",
        "verb": "discipliner",
        "image": "fleuve (1) arrêté (8)",
        "maxim": "",
        "note": "sanglier dans un filet et plante grimpante : couvrir, bourgeonner, ignorer, batifoler, jeune fou, folâtrer",
        "yijing": 4
    },
    "19": {
        "hecto": "19",
        "verb": "diffuser",
        "image": "flots (1) éparpillés (9)",
        "maxim": "",
        "note": "disperser, dissoudre, déborder, dissiper, disparaître, jaillir",
        "yijing": 59
    },


    "20": {
        "hecto": "20",
        "verb": "coller",
        "image": "adhérer (2) à rien (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "21": {
        "hecto": "21",
        "verb": "accomplir",
        "image": "relier (2) le fleuve (1)",
        "maxim": "",
        "note": "après la traversée du fleuve",
        "yijing": 63
    },
    "22": {
        "hecto": "22",
        "verb": "briller",
        "image": "soleil (2) lumineux (2)",
        "maxim": "",
        "note": "lumière, phœnix dans un filet, auréole?, joindre, focaliser, foyer, concentrer, attirer",
        "yijing": 30
    },
    "23": {
        "hecto": "23",
        "verb": "assembler",
        "image": "joindre (2) les grands (3)",
        "maxim": "",
        "note": "associer, coopérer, vase et couvercle ajusté",
        "yijing": 13
    },
    "24": {
        "hecto": "24",
        "verb": "vulgariser",
        "image": "lumières (2) pour les masses (4)",
        "maxim": "",
        "note": "phœnix abbatu d’une flèche, occulter",
        "yijing": 36
    },
    "25": {
        "hecto": "25",
        "verb": "regarder",
        "image": "œil (2) humain (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "26": {
        "hecto": "26",
        "verb": "foisonner",
        "image": "extension (2) de la nature (6)",
        "maxim": "",
        "note": "fertile, luxuriant, abondant… Prodiges. Chaume de maison",
        "yijing": 55
    },
    "27": {
        "hecto": "27",
        "verb": "changer",
        "image": "éclairer (2) le consentement (7)",
        "maxim": "",
        "note": "muer, cuir, décortiquer, “fire” quelqu’un, moment opportun",
        "yijing": 49
    },
    "28": {
        "hecto": "28",
        "verb": "orner",
        "image": "feu (2) de pierres (8)",
        "maxim": "",
        "note": "beauté, coquillage",
        "yijing": 22
    },
    "29": {
        "hecto": "29",
        "verb": "demeurer",
        "image": "foyer (2) contenu (9)",
        "maxim": "",
        "note": "famille , clan, sacrifice, héritage, perpétuer, habiter",
        "yijing": 37
    },
    

    "30": {
        "hecto": "30",
        "verb": "invoquer",
        "image": "ascendant (3) vide (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "31": {
        "hecto": "31",
        "verb": "espérer",
        "image": "ciel (3) pluvieux (1)",
        "maxim": "",
        "note": "avoir faim que le blé pousse, offrande à la pluie, espérer, attendre",
        "yijing": 5
    },
    "32": {
        "hecto": "32",
        "verb": "advenir",
        "image": "ciel (3) ensoleillé (2)",
        "maxim": "",
        "note": "il y a, fortune, grand réalisé",
        "yijing": 14
    },
    "33": {
        "hecto": "33",
        "verb": "créer",
        "image": "pouvoir (3) céleste (3)",
        "maxim": "",
        "note": "sec; commençons par une offrande, divination bénéfique",
        "yijing": 1
    },
    "34": {
        "hecto": "34",
        "verb": "redistribuer",
        "image": "grands (3) en bas (4)",
        "maxim": "",
        "note": "paix, prospérité, arrivée des grands, imprégner, propager, parfum envahissant, pervading",
        "yijing": 11
    },
    "35": {
        "hecto": "35",
        "verb": "penser",
        "image": "tête (3) humaine (5)",
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
        "yijing": 34
    },
    "37": {
        "hecto": "37",
        "verb": "juger",
        "image": "le pouvoir (3) tranche (7)",
        "maxim": "",
        "note": "sym-bole, bâton fendu contractuel, déterminer, distinguer, résolution",
        "yijing": 43
    },
    "38": {
        "hecto": "38",
        "verb": "conserver",
        "image": "pouvoir (3) du passé (8)",
        "maxim": "",
        "note": "gros bétail, éducation des grands",
        "yijing": 26
    },
    "39": {
        "hecto": "39",
        "verb": "policer",
        "image": "pouvoir (3) des mœurs (9)",
        "maxim": "",
        "note": "petit bétail, domestication des petits",
        "yijing": 9
    },


    "40": {
        "hecto": "40",
        "verb": "peser",
        "image": "masse (4) vaine (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "41": {
        "hecto": "41",
        "verb": "égaliser",
        "image": "champ (4) innondé (1)",
        "maxim": "",
        "note": "比 2 humains retournés, comparer (cf. 从 suivre)",
        "yijing": 8
    },
    "42": {
        "hecto": "42",
        "verb": "prospérer",
        "image": "sur terre (4), soleil (2)",
        "maxim": "",
        "note": "lever du soleil, développer, arriver à la lumière, course du soleil, un oiseau ne recule pas",
        "yijing": 35
    },
    "43": {
        "hecto": "43",
        "verb": "corrompre",
        "image": "petits (4) en haut (3)",
        "maxim": "",
        "note": "arrivée des petits, négation ou voleurs, personnes égoistes, taxer",
        "yijing": 12
    },
    "44": {
        "hecto": "44",
        "verb": "conformer",
        "image": "terre (4) réceptive (4)",
        "maxim": "",
        "note": "réceptif, terre, champ",
        "yijing": 2
    },
    "45": {
        "hecto": "45",
        "verb": "??",
        "image": "masse (4) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "46": {
        "hecto": "46",
        "verb": "mobiliser",
        "image": "les masses (4) démarrent (6)",
        "maxim": "",
        "note": "parier, investir, ville?, concéder un fief, éléphant-image, imaginer, enthousiasme ; 予 payer 象 un éléphant",
        "yijing": 16
    },
    "47": {
        "hecto": "47",
        "verb": "convoquer",
        "image": "foule (4) joyeuse (7)",
        "maxim": "",
        "note": "assembler pour un sacrifice, collectionner, champ moissonner, masser",
        "yijing": 45
    },
    "48": {
        "hecto": "48",
        "verb": "dépouiller",
        "image": "poussière (4) moulue (8)",
        "maxim": "",
        "note": "user, élaguer, dépouiller",
        "yijing": 23
    },
    "49": {
        "hecto": "49",
        "verb": "observer",
        "image": "petits (4), ? (9)",
        "maxim": "",
        "note": "look up, chercher, admirer, contempler, porte, temple, belvédère, prendre modèle, voir de haut, surveiller",
        "yijing": 20
    },

    "50": {
        "hecto": "50",
        "verb": "vanter",
        "image": "personne (5) vaine (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "51": {
        "hecto": "51",
        "verb": "soigner",
        "image": "personne (5) aux maux (1)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "52": {
        "hecto": "52",
        "verb": "échanger",
        "image": "personne (5) aux autres (2)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "53": {
        "hecto": "53",
        "verb": "prier",
        "image": "personne (5) au ciel (3)",
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
        "verb": "lutter",
        "image": "personne (5) impulsive (6)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "57": {
        "hecto": "57",
        "verb": "enseigner",
        "image": "personne (5) aux sens (7)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "58": {
        "hecto": "58",
        "verb": "bâtir",
        "image": "personne (5) aux pierres (8)",
        "maxim": "",
        "note": "",
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
        "note": "",
        "yijing":""
    },
    "61": {
        "hecto": "61",
        "verb": "coloniser",
        "image": "passer (6) le fleuve (1)",
        "maxim": "",
        "note": "germer, stationner des troupes, difficulté initiale, rassemblement",
        "yijing": 3
    },
    "62": {
        "hecto": "62",
        "verb": "punir",
        "image": "nature (6) écartelée (2)",
        "maxim": "", 
        "note": "festoyer, mordre et unir, peine, torture",
        "yijing": 21
    },
    "63": {
        "hecto": "63",
        "verb": "étonner",
        "image": "tonnerre (6) de ciel (3)",
        "maxim": "",
        "note": "sans folie, innocent, inatendu, colère du ciel?",
        "yijing": 25
    },
    "64": {
        "hecto": "64",
        "verb": "retourner",
        "image": "partir (6) au pays (4)",
        "maxim": "",
        "note": "revenir, demi-tour, mort",
        "yijing": 24
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
        "yijing": 51
    },
    "67": {
        "hecto": "67",
        "verb": "poursuivre",
        "image": "vouloir (6) accepter (7)",
        "maxim": "",
        "note": "sacrifice des captifs,  隋 boucher",
        "yijing": 17
    },
    "68": {
        "hecto": "68",
        "verb": "rassasier",
        "image": "vouloir (6) la fin (8)",
        "maxim": "",
        "note": "mâchoire de divination",
        "yijing": 27
    },
    "69": {
        "hecto": "69",
        "verb": "gracier",
        "image": "vouloir (6) la loi (9)",
        "maxim": "",
        "note": "crédit (% débit, 78), augmenter, gagner, donner?, générosité noble, rançon",
        "yijing": 42
    },


    "70": {
        "hecto": "70",
        "verb": "droguer",
        "image": "joie (7) fausse (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "71": {
        "hecto": "71",
        "verb": "rythmer",
        "image": "diviser (7) le flux (1)",
        "maxim": "",
        "note": "rythmer, articuler, ponctuer, mesurer, cadencer, charnière",
        "yijing": 60
    },
    "72": {
        "hecto": "72",
        "verb": "disputer",
        "image": "diviser (7) le foyer (2)",
        "maxim": "",
        "note": "",
        "yijing": 38
    },
    "73": {
        "hecto": "73",
        "verb": "conduire",
        "image": "s’ouvrir (7) au sens (3)",
        "maxim": "",
        "note": "réaliser la parole, mettre en œuvre, marche rituelle, chercher, trouver, guider, diriger",
        "yijing": 10
    },
    "74": {
        "hecto": "74",
        "verb": "visiter",
        "image": "ouvrir (7) le champ (4)",
        "maxim": "",
        "note": "condescendre, regarder de petites choses, approcher, expliquer?, assiéger, pleurer au deuil",
        "yijing": 19
    }, 
    "75": {
        "hecto": "75",
        "verb": "goûter",
        "image": "langue (7) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "76": {
        "hecto": "76",
        "verb": "intégrer",
        "image": "consentir (7) à l’élan (6)",
        "maxim": "",
        "note": "retour de la petite sœur, concubine, mariage raté, 歸 se livrer 妹 femme pas encore",
        "yijing": 54
    },
    "77": {
        "hecto": "77",
        "verb": "échanger",
        "image": "don (7) contre don (7)",
        "maxim": "",
        "note": "exchange, add, against, and convert, ouvrir, marais, don contre don, palabrer",
        "yijing": 58
    },
    "78": {
        "hecto": "78",
        "verb": "perdre",
        "image": "ouverture (7) bloquée (8)",
        "maxim": "",
        "note": "débit (% crédit 69), dette, devoir, diminuer",
        "yijing": 41
    },
    "79": {
        "hecto": "79",
        "verb": "intérioriser",
        "image": "aimer (7) la loi (9)",
        "maxim": "",
        "note": "vérité intérieure, juste confiance, centre, croire?",
        "yijing": 61
    },
    

    "80": {
        "hecto": "80",
        "verb": "sidérer",
        "image": "arrêté (8) sur rien (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "81": {
        "hecto": "81",
        "verb": "entraver",
        "image": "barrer (8) le fleuve (1)",
        "maxim": "",
        "note": "entrave, boîter, obstruction",
        "yijing": 39
    },
    "82": {
        "hecto": "82",
        "verb": "voyager",
        "image": "vers la montagne (8), foyer (2)",
        "maxim": "",
        "note": "camp, hôtel, voyager, vagabond, expédition militaire",
        "yijing": 56
    },
    "83": {
        "hecto": "83",
        "verb": "reculer",
        "image": "tenir (8) en force (3)",
        "maxim": "",
        "note": "fuir, retraite, reculer ; pied bouclier, disparaître",
        "yijing": 33
    },
    "84": {
        "hecto": "84",
        "verb": "humilier",
        "image": "tenir (8) à terre (4)",
        "maxim": "",
        "note": "humilité, modestie (% 46)",
        "yijing": 15
    },
    "85": {
        "hecto": "85",
        "verb": "fabriquer",
        "image": "main (8) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "86": {
        "hecto": "86",
        "verb": "refouler",
        "image": "tenir (8) sa nature (6)",
        "maxim": "",
        "note": "excès de petit, moins que, cf 97, refouler, réfréner",
        "yijing": 62
    },
    "87": {
        "hecto": "87",
        "verb": "attirer",
        "image": "maintenir (8) la joie (7)",
        "maxim": "",
        "note": "salé, émouvoir, inciter, cf. 96 persévérer, endurer",
        "yijing": 31
    },
    "88": {
        "hecto": "88",
        "verb": "calmer",
        "image": "tenir (8) tranquille (8)",
        "maxim": "",
        "note": "arrêter, bloquer, mener à terme et recommencer, porte, chien, main, nœud",
        "yijing": 52
    },
    "89": {
        "hecto": "89",
        "verb": "progresser",
        "image": "degré (8) surmonté (9)",
        "maxim": "",
        "note": "graduellement, arbre sur la montagne, infiltrer",
        "yijing": 53
    },


    "90": {
        "hecto": "90",
        "verb": "culpabiliser",
        "image": "pression (9) inutile (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "91": {
        "hecto": "91",
        "verb": "puiser",
        "image": "mesure (9) d’eau (1)",
        "maxim": "",
        "note": "puits",
        "yijing": 48
    },
    "92": {
        "hecto": "92",
        "verb": "fonder",
        "image": "dater (9) le foyer (2)",
        "maxim": "",
        "note": "chaudron, instituer, tripode, deviner, présager, prophétiser, divination",
        "yijing": 50
    },
    "93": {
        "hecto": "93",
        "verb": "rencontrer",
        "image": "dater (9) la force (3)",
        "maxim": "",
        "note": "copuler, rencontrer, coupler",
        "yijing": 44
    },
    "94": {
        "hecto": "94",
        "verb": "récolter",
        "image": "dater (9) la moisson (4)",
        "maxim": "",
        "note": "grandir, croître, louche",
        "yijing": 46
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
        "verb": "endurer",
        "image": "presser (9) sa nature (6)",
        "maxim": "",
        "note": "endurer, persévérer, cœur | course du soleil",
        "yijing": 32
    },
    "97": {
        "hecto": "97",
        "verb": "outrepasser",
        "image": "règle (9) ouverte (7)",
        "maxim": "",
        "note": "transgresser outrepasser, masse critique, grande expérience (aspect), excès de grand, cf 86",
        "yijing": 28
    },
    "98": {
        "hecto": "98",
        "verb": "empoisonner",
        "image": "? transmettre (9) un poids (8)",
        "maxim": "",
        "note": "sorcellerie, désinfecter, ranger les affaires des parents, maladie sexuelle, malédiction, infecter",
        "yijing": 18
    },
    "99": {
        "hecto": "99",
        "verb": "complaire",
        "image": "formes (9) respectées (9)",
        "maxim": "",
        "note": "sceau, table avec commensaux à genoux, s’agenouiller devant l’autel, calculer, dater",
        "yijing": 57
    },


  
};