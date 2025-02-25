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
        "verb": "entendre",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "02": {
        "hecto": "02",
        "verb": "voir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "03": {
        "hecto": "03",
        "verb": "penser",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "04": {
        "hecto": "04",
        "verb": "avoir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "05": {
        "hecto": "05",
        "verb": "vivre",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "06": {
        "hecto": "06",
        "verb": "vouloir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "07": {
        "hecto": "07",
        "verb": "dire",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "08": {
        "hecto": "08",
        "verb": "faire",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "09": {
        "hecto": "09",
        "verb": "savoir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    // 10

    "10": {
        "hecto": "10",
        "verb": "mouiller",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": ""
    },
    "11": {
        "hecto": "11",
        "verb": "couler",
        "image": "abîme (1) approfondi (1)",
        "maxim": "",
        "note": "chute, tomber",
        "yijing": 29,
    },
    "12": {
        "hecto": "12",
        "verb": "précéder",
        "image": "oreille (1) brillante (2)",
        "maxim": "",
        "note": "",
        "yijing": 64,
    },
    "13": {
        "hecto": "13",
        "verb": "contester",
        "image": "plainte (1) élevée (3)",
        "maxim": "",
        "note": "plaider, accuser",
        "yijing": 6
    },
    "14": {
        "hecto": "14",
        "verb": "commander",
        "image": "flot (1) boueux (4)",
        "maxim": "",
        "note": "armée",
        "yijing": 7
    },
    "15": {
        "hecto": "15",
        "verb": "isoler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "16": {
        "hecto": "16",
        "verb": "affranchir",
        "image": "joug (1) secoué (6)",
        "maxim": "",
        "note": "",
        "yijing": 40
    },
    "17": {
        "hecto": "17",
        "verb": "oppresser",
        "image": "tige (1) plantée (7)",
        "maxim": "",
        "note": "épuiser, étouffer, opprimer % 91 (puits, aménager)",
        "yijing": 47
    },
    "18": {
        "hecto": "18",
        "verb": "folâtrer",
        "image": "Herbes folles",
        "maxim": "",
        "note": "bourgeonner, ignorer, batifoler, porc sous l’herbe ? jeune fou,  opposé à , chasser le porc, courage",
        "yijing": 4
    },
    "19": {
        "hecto": "19",
        "verb": "répandre",
        "image": "eaux (1) étales (9)",
        "maxim": "",
        "note": "",
        "yijing": 59
    },
    "20": {
        "hecto": "20",
        "verb": "brûler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "21": {
        "hecto": "21",
        "verb": "succéder",
        "image": "œil (2) humide (1)",
        "maxim": "",
        "note": "",
        "yijing": 63
    },
    "22": {
        "hecto": "22",
        "verb": "briller",
        "image": "",
        "maxim": "",
        "note": "lumière",
        "yijing": 30
    },
    "23": {
        "hecto": "23",
        "verb": "harmoniser",
        "image": "foyer (2) idéal (3)",
        "maxim": "",
        "note": "associer, coopérer, vase ajusté",
        "yijing": 13
    },
    "24": {
        "hecto": "24",
        "verb": "occulter",
        "image": "oiseau (2) tombé (4)",
        "maxim": "",
        "note": "",
        "yijing": 36
    },
    "25": {
        "hecto": "25",
        "verb": "aimer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "26": {
        "hecto": "26",
        "verb": "foisonner",
        "image": "graine (2) énergique (6)",
        "maxim": "",
        "note": "",
        "yijing": 55
    },
    "27": {
        "hecto": "27",
        "verb": "abolir",
        "image": "coquille (2) décortiquée (7)",
        "maxim": "",
        "note": "muer, cuir, décortiquer",
        "yijing": 49
    },
    "28": {
        "hecto": "28",
        "verb": "orner",
        "image": "coquille (2) fleurie (8)",
        "maxim": "",
        "note": "beauté, coquillage, ",
        "yijing": 22
    },
    "29": {
        "hecto": "29",
        "verb": "perpétuer",
        "image": "feu (2) couvert (9)",
        "maxim": "",
        "note": "famille , clan, sacrifice, héritage, perpétuer",
        "yijing": 37
    },
    

    "30": {
        "hecto": "30",
        "verb": "orienter",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "31": {
        "hecto": "31",
        "verb": "attendre",
        "image": "ciel (3) nuageux (1)",
        "maxim": "",
        "note": "avoir faim que le blé pousse, offrande à la pluie",
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
        "verb": "inspirer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 1
    },
    "34": {
        "hecto": "34",
        "verb": "redistribuer",
        "image": "pouvoir (3) généreux (4)",
        "maxim": "",
        "note": "paix, prospérité",
        "yijing": 11
    },
    "35": {
        "hecto": "35",
        "verb": "gouverner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "36": {
        "hecto": "36",
        "verb": "forcer",
        "image": "hache (3) cognée (6) ?",
        "maxim": "",
        "note": "",
        "yijing": 34
    },
    "37": {
        "hecto": "37",
        "verb": "certifier",
        "image": "bâton (3) fendu (7)",
        "maxim": "",
        "note": "sym-bole, bâton fendu contractuel",
        "yijing": 43
    },
    "38": {
        "hecto": "38",
        "verb": "dompter",
        "image": "cheval (3) harnaché (8)",
        "maxim": "",
        "note": "",
        "yijing": 26
    },
    "39": {
        "hecto": "39",
        "verb": "apprivoiser",
        "image": "cheval (3) carressé (9)",
        "maxim": "",
        "note": "",
        "yijing": 9
    },


    "40": {
        "hecto": "40",
        "verb": "accumuler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "41": {
        "hecto": "41",
        "verb": "unifier",
        "image": "foule (4) égalisée (1)",
        "maxim": "",
        "note": "比 2 humains retournés, comparer ; 从 suivre",
        "yijing": 8
    },
    "42": {
        "hecto": "42",
        "verb": "avancer",
        "image": "(4) terre (2) ensoleillée",
        "maxim": "",
        "note": "arriver à la lumière, course du soleil, un oiseau ne recule pas",
        "yijing": 35
    },
    "43": {
        "hecto": "43",
        "verb": "appauvrir",
        "image": "richesses (4) concentrées (3)",
        "maxim": "",
        "note": "",
        "yijing": 12
    },
    "44": {
        "hecto": "44",
        "verb": "accepter",
        "image": "",
        "maxim": "",
        "note": "réceptif, terre",
        "yijing": 2
    },
    "45": {
        "hecto": "45",
        "verb": "gérer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "46": {
        "hecto": "46",
        "verb": "escompter",
        "image": "argent (4) risqué (6)",
        "maxim": "",
        "note": "ville?, éléphant-image, imaginer, enthousiasme",
        "yijing": 16
    },
    "47": {
        "hecto": "47",
        "verb": "rassembler",
        "image": "foule (6) harranguée (7)",
        "maxim": "",
        "note": "",
        "yijing": 45
    },
    "48": {
        "hecto": "48",
        "verb": "user",
        "image": "poussière (4) ?? (8)",
        "maxim": "",
        "note": "user, élaguer, dépouiller",
        "yijing": 23
    },
    "49": {
        "hecto": "49",
        "verb": "guetter",
        "image": "plaine (4) porte (9) ",
        "maxim": "",
        "note": "porte, temple",
        "yijing": 20
    },

    "50": {
        "hecto": "50",
        "verb": "humaniser",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "51": {
        "hecto": "51",
        "verb": "soigner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "52": {
        "hecto": "52",
        "verb": "commercer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "53": {
        "hecto": "53",
        "verb": "prier",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "54": {
        "hecto": "54",
        "verb": "cultiver",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "55": {
        "hecto": "55",
        "verb": "civiliser",
        "image": "humanité (5) redoublée",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "56": {
        "hecto": "56",
        "verb": "combattre",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "57": {
        "hecto": "57",
        "verb": "enseigner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "58": {
        "hecto": "58",
        "verb": "bâtir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "59": {
        "hecto": "59",
        "verb": "juger",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    "60": {
        "hecto": "60",
        "verb": "tonner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "61": {
        "hecto": "61",
        "verb": "germer",
        "image": "riz (6) innondé (1)",
        "maxim": "",
        "note": "",
        "yijing": 3
    },
    "62": {
        "hecto": "62",
        "verb": "manger",
        "image": "",
        "maxim": "", 
        "note": "festoyer",
        "yijing": 21
    },
    "63": {
        "hecto": "63",
        "verb": "surprendre",
        "image": "",
        "maxim": "",
        "note": "sans folie, innocent",
        "yijing": 25
    },
    "64": {
        "hecto": "64",
        "verb": "revenir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 24
    },
    "65": {
        "hecto": "65",
        "verb": "vivre",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "66": {
        "hecto": "66",
        "verb": "réveiller",
        "image": "",
        "maxim": "",
        "note": "ébranlement, réveiller, impulsion initiale",
        "yijing": 51
    },
    "67": {
        "hecto": "67",
        "verb": "agréer",
        "image": "marche (6) plaisante (7)",
        "maxim": "",
        "note": "",
        "yijing": 17
    },
    "68": {
        "hecto": "68",
        "verb": "nourrir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 27
    },
    "69": {
        "hecto": "69",
        "verb": "gagner",
        "image": "",
        "maxim": "",
        "note": "crédit (% débit, 78)",
        "yijing": 42
    },


    "70": {
        "hecto": "70",
        "verb": "embrumer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "71": {
        "hecto": "71",
        "verb": "ponctuer",
        "image": "",
        "maxim": "",
        "note": "rythmer, ponctuer, mesurer, cadencer",
        "yijing": 60
    },
    "72": {
        "hecto": "72",
        "verb": "diverger",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 38
    },
    "73": {
        "hecto": "73",
        "verb": "appliquer",
        "image": "",
        "maxim": "",
        "note": "réaliser la parole, mettre en œuvre, marche rituelle",
        "yijing": 10
    },
    "74": {
        "hecto": "74",
        "verb": "approcher",
        "image": "",
        "maxim": "",
        "note": "condescendre, regarer de petites choses",
        "yijing": 19
    }, 
    "75": {
        "hecto": "75",
        "verb": "parler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "76": {
        "hecto": "76",
        "verb": "marier",
        "image": "",
        "maxim": "",
        "note": "retour de la petite sœur, concubine, mariage raté",
        "yijing": 54
    },
    "77": {
        "hecto": "77",
        "verb": "enjouer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 58
    },
    "78": {
        "hecto": "78",
        "verb": "perdre",
        "image": "",
        "maxim": "",
        "note": "débit (% crédit 69)",
        "yijing": 41
    },
    "79": {
        "hecto": "79",
        "verb": "croire",
        "image": "",
        "maxim": "",
        "note": "vérité intérieure, juste confiance",
        "yijing": 61
    },
    

    "80": {
        "hecto": "80",
        "verb": "arrêter",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "81": {
        "hecto": "81",
        "verb": "entraver",
        "image": "",
        "maxim": "",
        "note": "entrave, boîter, obstruction",
        "yijing": 39
    },
    "82": {
        "hecto": "82",
        "verb": "voyager",
        "image": "",
        "maxim": "",
        "note": "camp, hôtel",
        "yijing": 56
    },
    "83": {
        "hecto": "83",
        "verb": "fuir",
        "image": "",
        "maxim": "",
        "note": "fuir, retraite, reculer",
        "yijing": 33
    },
    "84": {
        "hecto": "84",
        "verb": "réserver",
        "image": "",
        "maxim": "",
        "note": "humilité, modestie (% 46)",
        "yijing": 15
    },
    "85": {
        "hecto": "85",
        "verb": "habiter",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "86": {
        "hecto": "86",
        "verb": "détailler",
        "image": "",
        "maxim": "",
        "note": "excès de petit",
        "yijing": 62
    },
    "87": {
        "hecto": "87",
        "verb": "émouvoir",
        "image": "",
        "maxim": "",
        "note": "salé, émouvoir, inciter",
        "yijing": 31
    },
    "88": {
        "hecto": "88",
        "verb": "enraciner",
        "image": "",
        "maxim": "",
        "note": "arrêter, bloquer, mener à terme et recommencer, porte, chien",
        "yijing": 52
    },
    "89": {
        "hecto": "89",
        "verb": "imprégner",
        "image": "",
        "maxim": "",
        "note": "graduellement",
        "yijing": 53
    },


    "90": {
        "hecto": "90",
        "verb": "souffler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "91": {
        "hecto": "91",
        "verb": "aménager",
        "image": "",
        "maxim": "",
        "note": "puits",
        "yijing": 48
    },
    "92": {
        "hecto": "92",
        "verb": "instituer",
        "image": "",
        "maxim": "",
        "note": "chaudron, instituer",
        "yijing": 50
    },
    "93": {
        "hecto": "93",
        "verb": "rencontrer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 44
    },
    "94": {
        "hecto": "94",
        "verb": "pousser",
        "image": "",
        "maxim": "",
        "note": "grandir, croître",
        "yijing": 46
    },
    "95": {
        "hecto": "95",
        "verb": "civiliser",
        "image": "exigence (9) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "96": {
        "hecto": "96",
        "verb": "persévérer",
        "image": "règle (9) énergique (6)",
        "maxim": "",
        "note": "endurer, persévérer, cœur | course du soleil",
        "yijing": 32
    },
    "97": {
        "hecto": "97",
        "verb": "transgresser",
        "image": "",
        "maxim": "",
        "note": "transgresser outrepasser, grande expérience (aspect)",
        "yijing": 28
    },
    "98": {
        "hecto": "98",
        "verb": "assainir",
        "image": "",
        "maxim": "",
        "note": "sorcellerie, désinfecter",
        "yijing": 18
    },
    "99": {
        "hecto": "99",
        "verb": "obéir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 57
    },


  
};