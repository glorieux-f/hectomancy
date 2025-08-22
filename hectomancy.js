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
        "image": "abîme (1) profond (1)",
        "maxim": "",
        "note": "chute, tomber",
        "yijing": 29,
    },
    "12": {
        "hecto": "12",
        "verb": "précéder",
        "image": "entendre (1) la lumière (2)",
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
        "image": "emmener (1) la foule (4)",
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
        "image": "cours (1) secoué (6)",
        "maxim": "",
        "note": "",
        "yijing": 40
    },
    "17": {
        "hecto": "17",
        "verb": "oppresser",
        "image": "trou (1) clos (7)",
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
        "verb": "déborder",
        "image": "flots (1) hors digues (9)",
        "maxim": "",
        "note": "",
        "yijing": 59
    },
    "20": {
        "hecto": "20",
        "verb": "gaspiller",
        "image": "brûler (2) rien (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "21": {
        "hecto": "21",
        "verb": "succéder",
        "image": "œil (2) humide (1)",
        "maxim": "",
        "note": "après",
        "yijing": 63
    },
    "22": {
        "hecto": "22",
        "verb": "briller",
        "image": "feu (2) lumineux (2)",
        "maxim": "",
        "note": "lumière",
        "yijing": 30
    },
    "23": {
        "hecto": "23",
        "verb": "harmoniser",
        "image": "lumière (2) au ciel (3)",
        "maxim": "",
        "note": "associer, coopérer, vase ajusté",
        "yijing": 13
    },
    "24": {
        "hecto": "24",
        "verb": "occulter",
        "image": "lumière (2) enterrée (4)",
        "maxim": "",
        "note": "",
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
        "image": "lumière (2) en marche (6)",
        "maxim": "",
        "note": "fertile, luxuriant, abondant…",
        "yijing": 55
    },
    "27": {
        "hecto": "27",
        "verb": "changer",
        "image": "brûler (2) les mots (7)",
        "maxim": "",
        "note": "muer, cuir, décortiquer",
        "yijing": 49
    },
    "28": {
        "hecto": "28",
        "verb": "orner",
        "image": "enflammer (2) la pierre (8)",
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
        "verb": "créer",
        "image": "élan (3) du ciel (3)",
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
        "verb": "penser",
        "image": "tête (3) humaine (5)",
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
        "verb": "décider",
        "image": "idée (3) mise en mots (7)",
        "maxim": "",
        "note": "sym-bole, bâton fendu contractuel",
        "yijing": 43
    },
    "38": {
        "hecto": "38",
        "verb": "domestiquer",
        "image": "cheval (3) attaché (8)",
        "maxim": "",
        "note": "",
        "yijing": 26
    },
    "39": {
        "hecto": "39",
        "verb": "apprivoiser",
        "image": "cheval (3) conduit (9)",
        "maxim": "",
        "note": "",
        "yijing": 9
    },


    "40": {
        "hecto": "40",
        "verb": "accumuler",
        "image": "nombre (4) pour rien (0)",
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
        "image": "richesses (4) en haut (3)",
        "maxim": "",
        "note": "",
        "yijing": 12
    },
    "44": {
        "hecto": "44",
        "verb": "accepter",
        "image": "terre (4) réceptive (4)",
        "maxim": "",
        "note": "réceptif, terre",
        "yijing": 2
    },
    "45": {
        "hecto": "45",
        "verb": "compter",
        "image": "masse (4) humaine (5)",
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
        "image": "foule (4) joyeuse (7)",
        "maxim": "",
        "note": "",
        "yijing": 45
    },
    "48": {
        "hecto": "48",
        "verb": "user",
        "image": "poussière (4) moulue (8)",
        "maxim": "",
        "note": "user, élaguer, dépouiller",
        "yijing": 23
    },
    "49": {
        "hecto": "49",
        "verb": "guetter",
        "image": "plaine (4), un portique (9)",
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
        "image": "cœur (5) aux maux (1)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "52": {
        "hecto": "52",
        "verb": "échanger",
        "image": "humanité (5) à deux (2)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "53": {
        "hecto": "53",
        "verb": "prier",
        "image": "humanité (5) au ciel (3)",
        "maxim": "penser à notre fin et au-delà humanise",
        "note": "",
        "yijing":""
    },
    "54": {
        "hecto": "54",
        "verb": "cultiver",
        "image": "humanité (5) à la terre (4)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "55": {
        "hecto": "55",
        "verb": "humaniser",
        "image": "humanité (5) redoublée",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "56": {
        "hecto": "56",
        "verb": "lutter",
        "image": "humanité (5) en marche (6)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "57": {
        "hecto": "57",
        "verb": "enseigner",
        "image": "humanité (5) aux mots (7)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "58": {
        "hecto": "58",
        "verb": "bâtir",
        "image": "humanité (5) aux pierres (8)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "59": {
        "hecto": "59",
        "verb": "juger",
        "image": "humanité (5) aux formes (9)",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    "60": {
        "hecto": "60",
        "verb": "rager",
        "image": "s’agiter (6) pour rien (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "61": {
        "hecto": "61",
        "verb": "germer",
        "image": "force (6) de l’eau (1)",
        "maxim": "",
        "note": "",
        "yijing": 3
    },
    "62": {
        "hecto": "62",
        "verb": "cuire",
        "image": "force (6) du feu (2)",
        "maxim": "", 
        "note": "festoyer",
        "yijing": 21
    },
    "63": {
        "hecto": "63",
        "verb": "étonner",
        "image": "force (6) de l’idée (3)",
        "maxim": "",
        "note": "sans folie, innocent, inatendu",
        "yijing": 25
    },
    "64": {
        "hecto": "64",
        "verb": "revenir",
        "image": "marche (6) vers le pays (4)",
        "maxim": "",
        "note": "",
        "yijing": 24
    },
    "65": {
        "hecto": "65",
        "verb": "encourager",
        "image": "force (6) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "66": {
        "hecto": "66",
        "verb": "réveiller",
        "image": "impulsion (6) initiale (6)",
        "maxim": "",
        "note": "ébranlement, réveiller, impulsion initiale",
        "yijing": 51
    },
    "67": {
        "hecto": "67",
        "verb": "suivre",
        "image": "marche (6) enjouée (7)",
        "maxim": "",
        "note": "",
        "yijing": 17
    },
    "68": {
        "hecto": "68",
        "verb": "mâcher",
        "image": "force (6) des meules (8)",
        "maxim": "",
        "note": "",
        "yijing": 27
    },
    "69": {
        "hecto": "69",
        "verb": "gagner",
        "image": "force (6) juste (9)",
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
        "verb": "articuler",
        "image": "langue (7) fluide (1)",
        "maxim": "",
        "note": "rythmer, ponctuer, mesurer, cadencer",
        "yijing": 60
    },
    "72": {
        "hecto": "72",
        "verb": "disputer",
        "image": "parole (7) enflammée (2)",
        "maxim": "",
        "note": "",
        "yijing": 38
    },
    "73": {
        "hecto": "73",
        "verb": "chanter",
        "image": "plaire (7) au ciel (3)",
        "maxim": "",
        "note": "réaliser la parole, mettre en œuvre, marche rituelle",
        "yijing": 10
    },
    "74": {
        "hecto": "74",
        "verb": "condescendre",
        "image": "parler (7) aux petits (4)",
        "maxim": "",
        "note": "condescendre, regarer de petites choses",
        "yijing": 19
    }, 
    "75": {
        "hecto": "75",
        "verb": "parler",
        "image": "langue (7) humaine (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "76": {
        "hecto": "76",
        "verb": "marier",
        "image": "parole (7) forcée (6)",
        "maxim": "ne promet que ce que tu veux tenir",
        "note": "retour de la petite sœur, concubine, mariage raté",
        "yijing": 54
    },
    "77": {
        "hecto": "77",
        "verb": "rire",
        "image": "réjouir (7) et moquer (7)",
        "maxim": "",
        "note": "",
        "yijing": 58
    },
    "78": {
        "hecto": "78",
        "verb": "perdre",
        "image": "jouer (7) aux dés (8)",
        "maxim": "",
        "note": "débit (% crédit 69)",
        "yijing": 41
    },
    "79": {
        "hecto": "79",
        "verb": "conseiller",
        "image": "parole (7) juste (9)",
        "maxim": "quand la parole naturelle tombe juste, comme une musique",
        "note": "vérité intérieure, juste confiance, centre, croire?",
        "yijing": 61
    },
    

    "80": {
        "hecto": "80",
        "verb": "arrêter",
        "image": "bloquer (8) en vain (0)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "81": {
        "hecto": "81",
        "verb": "entraver",
        "image": "attache (8) membre (1)",
        "maxim": "",
        "note": "entrave, boîter, obstruction",
        "yijing": 39
    },
    "82": {
        "hecto": "82",
        "verb": "camper",
        "image": "entre les pierres (8), feu (2)",
        "maxim": "",
        "note": "camp, hôtel",
        "yijing": 56
    },
    "83": {
        "hecto": "83",
        "verb": "disparaître",
        "image": "rouler (8) air (3)",
        "maxim": "",
        "note": "fuir, retraite, reculer ; pied bouclier",
        "yijing": 33
    },
    "84": {
        "hecto": "84",
        "verb": "réserver",
        "image": "tenir (8) son bien (4)",
        "maxim": "",
        "note": "humilité, modestie (% 46)",
        "yijing": 15
    },
    "85": {
        "hecto": "85",
        "verb": "habiter",
        "image": "pierres (8) humaines (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "86": {
        "hecto": "86",
        "verb": "manquer",
        "image": "pierre (8) qui roule (6)",
        "maxim": "",
        "note": "excès de petit, moins que, cf 97",
        "yijing": 62
    },
    "87": {
        "hecto": "87",
        "verb": "émouvoir",
        "image": "sel (8) sur la langue (7)",
        "maxim": "",
        "note": "salé, émouvoir, inciter",
        "yijing": 31
    },
    "88": {
        "hecto": "88",
        "verb": "arrêter",
        "image": "tenir (8) ferme (8)",
        "maxim": "",
        "note": "arrêter, bloquer, mener à terme et recommencer, porte, chien",
        "yijing": 52
    },
    "89": {
        "hecto": "89",
        "verb": "progresser",
        "image": "pierres (8) roulées (9)",
        "maxim": "",
        "note": "graduellement, arbre sur la montagne",
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
        "image": "endiguer (9) l’eau (1)",
        "maxim": "",
        "note": "puits",
        "yijing": 48
    },
    "92": {
        "hecto": "92",
        "verb": "instituer",
        "image": "vase (9) contenant un feu (2)",
        "maxim": "",
        "note": "chaudron, instituer",
        "yijing": 50
    },
    "93": {
        "hecto": "93",
        "verb": "rencontrer",
        "image": "vase (9) et cheval (3)",
        "maxim": "",
        "note": "copuler",
        "yijing": 44
    },
    "94": {
        "hecto": "94",
        "verb": "Récolter",
        "image": "mesure (9) de grains (4)",
        "maxim": "",
        "note": "grandir, croître, louche",
        "yijing": 46
    },
    "95": {
        "hecto": "95",
        "verb": "sentir",
        "image": "nez (9) humain (5)",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "96": {
        "hecto": "96",
        "verb": "persévérer",
        "image": "devoir (9) en marche (6)",
        "maxim": "",
        "note": "endurer, persévérer, cœur | course du soleil",
        "yijing": 32
    },
    "97": {
        "hecto": "97",
        "verb": "outrepasser",
        "image": "règle (9) moquée (7)",
        "maxim": "",
        "note": "transgresser outrepasser, grande expérience (aspect), cf 86",
        "yijing": 28
    },
    "98": {
        "hecto": "98",
        "verb": "restaurer",
        "image": "nettoyer (9) les vieilles affaires (8)",
        "maxim": "",
        "note": "sorcellerie, désinfecter",
        "yijing": 18
    },
    "99": {
        "hecto": "99",
        "verb": "complaire",
        "image": "formes (9) respectées (9)",
        "maxim": "",
        "note": "sceau, table avec commensaux à genoux",
        "yijing": 57
    },


  
};