const deca = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["espace", "est", "ouest", "sud", "nord", "ici", "nord-est", "sud-est", "nord-ouest", "sud-ouest"],
    ["néant", "eau", "feu", "ciel", "terre", "centre", "foudre", "lac", "montagne", "vent"],
    ["transparent", "bleu", "rouge", "blanc", "noir", "jaune", "brun", "rose", "gris", "vert" ],
    // nez
    ["os", "oreille", "œil", "tête", "ventre", "cœur", "pied", "bouche", "main", "peau"],
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
        "verb": "il",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "02": {
        "hecto": "02",
        "verb": "elle",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "03": {
        "hecto": "03",
        "verb": "quand",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "04": {
        "hecto": "04",
        "verb": "où",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "05": {
        "hecto": "05",
        "verb": "je",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "06": {
        "hecto": "06",
        "verb": "verbe",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "07": {
        "hecto": "07",
        "verb": "vouloir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "08": {
        "hecto": "08",
        "verb": "nom",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "09": {
        "hecto": "09",
        "verb": "devoir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    // 10

    "10": {
        "hecto": "10",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "11": {
        "hecto": "11",
        "verb": "tomber",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 29,
    },
    "12": {
        "hecto": "12",
        "verb": "entreprendre",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 64,
    },
    "13": {
        "hecto": "13",
        "verb": "contester",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 6
    },
    "14": {
        "hecto": "14",
        "verb": "commander",
        "image": "",
        "maxim": "",
        "note": "armée",
        "yijing": 7
    },
    "15": {
        "hecto": "15",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "16": {
        "hecto": "16",
        "verb": "affranchir",
        "image": "Dénouer le joug",
        "maxim": "",
        "note": "",
        "yijing": 40
    },
    "17": {
        "hecto": "17",
        "verb": "épuiser",
        "image": "",
        "maxim": "",
        "note": "étouffer, opprimer % puits, aménager",
        "yijing":""
    },
    "18": {
        "hecto": "18",
        "verb": "jouer",
        "image": "",
        "maxim": "",
        "note": "batifoler, porc sous l’herbe ? jeune fou,  opposé à , chasser le porc, courage",
        "yijing":""
    },
    "19": {
        "hecto": "19",
        "verb": "diffuser",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing": 59
    },


    "20": {
        "hecto": "20",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "21": {
        "hecto": "21",
        "verb": "succéder",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "22": {
        "hecto": "22",
        "verb": "rayonner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "23": {
        "hecto": "23",
        "verb": "coopérer",
        "image": "",
        "maxim": "",
        "note": "associer, coopérer",
        "yijing":""
    },
    "24": {
        "hecto": "24",
        "verb": "dissimuler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "25": {
        "hecto": "25",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "26": {
        "hecto": "26",
        "verb": "foisonner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "27": {
        "hecto": "27",
        "verb": "abolir",
        "image": "",
        "maxim": "",
        "note": "muer, cuir",
        "yijing":""
    },
    "28": {
        "hecto": "28",
        "verb": "orner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "29": {
        "hecto": "29",
        "verb": "hériter",
        "image": "",
        "maxim": "",
        "note": "famille , clan, sacrifice, héritage, perpétuer",
        "yijing": ""
    },
    

    "30": {
        "hecto": "30",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "31": {
        "hecto": "31",
        "verb": "attendre",
        "image": "",
        "maxim": "",
        "note": "avoir faim que le blé pousse",
        "yijing":""
    },
    "32": {
        "hecto": "32",
        "verb": "avoir",
        "image": "",
        "maxim": "",
        "note": "il y a",
        "yijing":""
    },
    "33": {
        "hecto": "33",
        "verb": "axer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "34": {
        "hecto": "34",
        "verb": "distribuer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "35": {
        "hecto": "35",
        "verb": "vouloir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "36": {
        "hecto": "36",
        "verb": "pouvoir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "37": {
        "hecto": "37",
        "verb": "déterminer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "38": {
        "hecto": "38",
        "verb": "atteler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "39": {
        "hecto": "39",
        "verb": "carresser",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },


    "40": {
        "hecto": "40",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "41": {
        "hecto": "41",
        "verb": "unifier",
        "image": "",
        "maxim": "",
        "note": "alliance et nivellement",
        "yijing":""
    },
    "42": {
        "hecto": "42",
        "verb": "promouvoir",
        "image": "",
        "maxim": "",
        "note": "arriver à la lumière",
        "yijing":""
    },
    "43": {
        "hecto": "43",
        "verb": "refuser",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "44": {
        "hecto": "44",
        "verb": "accepter",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "45": {
        "hecto": "45",
        "verb": "conduire",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "46": {
        "hecto": "46",
        "verb": "spéculer",
        "image": "",
        "maxim": "",
        "note": "ville?, éléphant-image",
        "yijing": 16
    },
    "47": {
        "hecto": "47",
        "verb": "rassembler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "48": {
        "hecto": "48",
        "verb": "élaguer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "49": {
        "hecto": "49",
        "verb": "contempler",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },


    "50": {
        "hecto": "50",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "51": {
        "hecto": "51",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "52": {
        "hecto": "52",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "53": {
        "hecto": "53",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "54": {
        "hecto": "54",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "55": {
        "hecto": "55",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "56": {
        "hecto": "56",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "57": {
        "hecto": "57",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "58": {
        "hecto": "58",
        "verb": "soigner",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "59": {
        "hecto": "59",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },

    "60": {
        "hecto": "60",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "61": {
        "hecto": "61",
        "verb": "germer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "62": {
        "hecto": "62",
        "verb": "manger",
        "image": "",
        "maxim": "",
        "note": "festoyer",
        "yijing":""
    },
    "63": {
        "hecto": "63",
        "verb": "danser",
        "image": "",
        "maxim": "",
        "note": "sans folie, innocent",
        "yijing":""
    },
    "64": {
        "hecto": "64",
        "verb": "revenir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
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
        "verb": "impulsion",
        "image": "",
        "maxim": "",
        "note": "ébranlement, réveiller, impulsion initiale",
        "yijing":""
    },
    "67": {
        "hecto": "67",
        "verb": "suivre",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "68": {
        "hecto": "68",
        "verb": "nourrir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "69": {
        "hecto": "69",
        "verb": "augmenter",
        "image": "",
        "maxim": "",
        "note": "crédit (% débit, 78)",
        "yijing": 42
    },


    "70": {
        "hecto": "70",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "71": {
        "hecto": "71",
        "verb": "rythmer",
        "image": "",
        "maxim": "",
        "note": "ponctuer, mesurer",
        "yijing": 60
    },
    "72": {
        "hecto": "72",
        "verb": "diverger",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "73": {
        "hecto": "73",
        "verb": "pratiquer",
        "image": "",
        "maxim": "",
        "note": "réaliser la parole, mettre en œuvre",
        "yijing":""
    },
    "74": {
        "hecto": "74",
        "verb": "approcher",
        "image": "",
        "maxim": "",
        "note": "condescendre, regarer de petites choses",
        "yijing":""
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
        "verb": "épouser",
        "image": "",
        "maxim": "",
        "note": "retour de la petite sœur, mariage raté",
        "yijing":""
    },
    "77": {
        "hecto": "77",
        "verb": "enjouer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "78": {
        "hecto": "78",
        "verb": "diminuer",
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
        "verb": "",
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
        "note": "",
        "yijing":""
    },
    "83": {
        "hecto": "83",
        "verb": "échapper",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "84": {
        "hecto": "84",
        "verb": "retenir",
        "image": "",
        "maxim": "",
        "note": "humilité, modestie (% 46)",
        "yijing": 15
    },
    "85": {
        "hecto": "85",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "86": {
        "hecto": "86",
        "verb": "perfectionner",
        "image": "",
        "maxim": "",
        "note": "petite expérience (aspect)",
        "yijing":""
    },
    "87": {
        "hecto": "87",
        "verb": "exciter",
        "image": "",
        "maxim": "",
        "note": "salé",
        "yijing":""
    },
    "88": {
        "hecto": "88",
        "verb": "achever",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "89": {
        "hecto": "89",
        "verb": "progresser",
        "image": "",
        "maxim": "",
        "note": "graduellement",
        "yijing":""
    },


    "90": {
        "hecto": "90",
        "verb": "",
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
        "yijing":""
    },
    "92": {
        "hecto": "92",
        "verb": "instaurer",
        "image": "",
        "maxim": "",
        "note": "chaudron, instituer",
        "yijing":""
    },
    "93": {
        "hecto": "93",
        "verb": "rencontrer",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "94": {
        "hecto": "94",
        "verb": "croître",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "95": {
        "hecto": "95",
        "verb": "",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },
    "96": {
        "hecto": "96",
        "verb": "endurer",
        "image": "",
        "maxim": "",
        "note": "persévérer cœur-lunes",
        "yijing":""
    },
    "97": {
        "hecto": "97",
        "verb": "transgresser",
        "image": "",
        "maxim": "",
        "note": "transgresser outrepasser, grande expérience (aspect)",
        "yijing":""
    },
    "98": {
        "hecto": "98",
        "verb": "assainir",
        "image": "",
        "maxim": "",
        "note": "sorcellerie, désinfecter",
        "yijing":""
    },
    "99": {
        "hecto": "99",
        "verb": "adoucir",
        "image": "",
        "maxim": "",
        "note": "",
        "yijing":""
    },


  
};