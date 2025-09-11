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
quadrillage Éthos / Logos / Nomos / Technè

☵ – ☲ : se renfermer ; obscurcir ; censurer ; envaser
(坎 profondeur sans 離 clarté → repli ; opacité ; secret institutionnel ; dépôt matériel)
☵ – ☰ : hésiter ; diluer ; déréguler ; dériver
(坎 sans 乾 direction → indécision ; dilution conceptuelle ; normes flottantes ; dérive des flux)
☵ – ☷ : se noyer ; dissoudre ; se disperser ; déborder
(坎 sans 坤 support → submersion ; dissolution des cadres ; désagrégation collective ; excès d’eau)
☵ – ☳ : s’enliser ; ajourner ; temporiser ; caler
(坎 sans 震 déclenchement → enlisement ; report discursif ; attentisme collectif ; arrêt mécanique)
☵ – ☱ : bouder ; taire ; verrouiller ; thésauriser
(坎 sans 兌 ouverture → bouderie ; rétention d’information ; fermeture des canaux ; accumulation inerte)
☵ – ☴ : acculer ; fouiller ; surveiller ; sonder
(坎 sans 巽 consentement → pression sur autrui ; fouille inquisitrice ; contrôle sans accord ; sondage intrusif)
☵ – ☶ : s’acharner ; saturer ; envahir ; engloutir
(坎 sans 艮 arrêt → acharnement ; surcharge discursive ; envahissement des espaces ; submersion des objets)

☲ – ☵ : papillonner ; simplifier ; déclassifier ; dessécher
(離 clarté sans 坎 profondeur → papillonnage ; réductionnisme ; levée prématurée des secrets ; assèchement)
☲ – ☰ : ergoter ; digresser ; désarticuler ; saturer
(離 sans 乾 direction → chicane ; dispersion argumentative ; perte d’alignement ; surcharge de détails)
☲ – ☷ : blesser ; découper ; humilier ; brûler
(離 sans 坤 support → blessure relationnelle ; découpe froide ; exposition punitive ; brûlure matérielle)
☲ – ☳ : commenter ; étiqueter ; notifier ; baliser
(離 sans 震 élan → parole sans action ; nominalisme ; annonces sans suite ; balisage statique)
☲ – ☱ : sermonner ; dogmatiser ; imposer ; bloquer
(離 sans 兌 échange → morale univoque ; dogme ; communication à sens unique ; blocage des retours)
☲ – ☴ : dévoiler ; dénoncer ; publier ; divulguer
(離 sans 巽 consentement → dévoilement ; dénonciation ; mise en public sans accord ; fuite d’informations)
☲ – ☶ : éblouir ; exagérer ; saturer ; surexposer
(離 sans 艮 limite → éblouissement ; hypertrophie des thèses ; overload institutionnel ; surexposition)

☰ – ☵ : présumer ; simplifier ; décréter ; précipiter
(乾 direction sans 坎 profondeur → présomption ; simplisme doctrinal ; décret hâtif ; précipitation des processus)
☰ – ☲ : imposer ; brouiller ; trancher ; verrouiller
(乾 sans 離 clarté → contrainte ; opacité discursive ; décision sans éclairage ; verrouillage technique)
☰ – ☷ : négliger ; abstraire ; désolidariser ; durcir
(乾 sans 坤 support → dureté ; abstraction déconnectée ; rupture avec le terrain ; rigidification)
☰ – ☳ : procrastiner ; planifier ; annoncer ; ajourner
(乾 sans 震 déclenchement → retard ; plan sans lancement ; annonces sans exécution ; ajournement)
☰ – ☱ : ordonner ; unifier ; isoler ; exclure
(乾 sans 兌 ouverture → ordre autoritaire ; unification forcée ; isolement des voix ; exclusion des accès)
☰ – ☴ : contraindre ; doctriner ; centraliser ; serrer
(乾 sans 巽 consentement → coercition ; doctrine fermée ; recentralisation ; serrage des mécanismes)
☰ – ☶ : empiéter ; étendre ; microgérer ; envahir
(乾 sans 艮 borne → dépassement des limites ; extension indue ; microgestion ; invasion matérielle)

☷ – ☵ : ignorer ; lisser ; minimiser ; colmater
(坤 support sans 坎 profondeur → déni ; lissage narratif ; sous-estimation du risque ; rustines matérielles)
☷ – ☲ : brouiller ; confondre ; embrouiller ; opacifier
(坤 sans 離 clarté → confusion ; amalgame ; désordre collectif ; opacité des interfaces)
☷ – ☰ : se résigner ; diluer ; temporiser ; disperser
(坤 sans 乾 direction → résignation ; dilution des cadres ; attentisme ; dispersion des moyens)
☷ – ☳ : freiner ; amortir ; ajourner ; alourdir
(坤 sans 震 élan → frein psychique ; amorti conceptuel ; reports organisationnels ; inertie matérielle)
☷ – ☱ : étouffer ; taire ; bloquer ; couvrir
(坤 sans 兌 ouverture → étouffement ; silence éditorial ; fermeture des circuits ; couvertures posées)
☷ – ☴ : couver ; prescrire ; s’ingérer ; envahir
(坤 sans 巽 consentement → maternage intrusif ; prescription unilatérale ; ingérence ; intrusion matérielle)
☷ – ☶ : lâcher ; relâcher ; laisser-faire ; s’étaler
(坤 sans 艮 arrêt → relâchement ; détente normative ; permissivité ; étalement)

☳ – ☵ : s’emballer ; court-circuiter ; bousculer ; casser
(震 activation sans 坎 profondeur → emportement ; saut d’étapes ; chocs collectifs ; rupture matérielle)
☳ – ☲ : confondre ; brouiller ; agiter ; brasser
(震 sans 離 clarté → confusion ; flou argumentatif ; agitation de groupe ; brassage stérile)
☳ – ☰ : zigzaguer ; disperser ; dérouter ; gaspiller
(震 sans 乾 direction → errance ; dispersion cognitive ; perte de cap ; gaspillage de ressources)
☳ – ☷ : heurter ; escamoter ; déstabiliser ; fatiguer
(震 sans 坤 support → heurt ; étapes escamotées ; perte d’assise ; usure des matériels)
☳ – ☱ : rudoyer ; asséner ; intimider ; marteler
(震 sans 兌 ouverture → rudesse ; assertions martiales ; intimidation ; coups répétés)
☳ – ☴ : forcer ; imposer ; réquisitionner ; enfoncer
(震 sans 巽 consentement → contrainte ; imposition ; prise autoritaire ; enfoncement des portes)
☳ – ☶ : exagérer ; escalader ; empiéter ; franchir
(震 sans 艮 limite → excès ; surenchère ; empiètement ; franchissement de seuils)

☱ – ☵ : papoter ; survoler ; banaliser ; édulcorer
(兌 ouverture sans 坎 profondeur → bavardage ; superficialité ; trivialisation collective ; édulcoration)
☱ – ☲ : enjoliver ; flouter ; désinformer ; maquiller
(兌 sans 離 clarté → enjolivure ; flou rhétorique ; info dévoyée ; maquillage)
☱ – ☰ : complaire ; relativiser ; céder ; plier
(兌 sans 乾 direction → complaisance ; relativisme ; concessions excessives ; pliage des pièces)
☱ – ☷ : promettre ; exagérer ; décevoir ; lâcher
(兌 sans 坤 support → promesses creuses ; hyperbole ; déception publique ; lâcher en charge)
☱ – ☳ : distraire ; digresser ; temporiser ; ajourner
(兌 sans 震 élan → divertissement ; digression ; pause collective ; reports techniques)
☱ – ☴ : importuner ; manipuler ; harceler ; forcer
(兌 sans 巽 consentement → sollicitation insistante ; manipulation ; harcèlement ; forçage d’accès)
☱ – ☶ : divulguer ; déborder ; transgresser ; dépasser
(兌 sans 艮 borne → indiscrétion ; dépassement discursif ; franchissement des règles ; dépassement de quotas)

☴ – ☵ : éluder ; édulcorer ; esquiver ; arrondir
(巽 pénétration/consentement sans 坎 profondeur → esquive ; adoucissement ; évitement collectif ; arrondi technique)
☴ – ☲ : insinuer ; envelopper ; contourner ; brouiller
(巽 sans 離 clarté → insinuation ; enveloppement rhétorique ; contournement des procédures ; brouillage de signal)
☴ – ☰ : tergiverser ; relativiser ; négocier ; dériver
(巽 sans 乾 direction → tergiversation ; relativisme ; tractations sans cap ; dérive des opérations)
☴ – ☷ : promettre ; sous-estimer ; décevoir ; alléger
(巽 sans 坤 support → promesse légère ; sous-estimation ; déception collective ; allègement excessif)
☴ – ☳ : temporiser ; euphémiser ; ajourner ; retarder
(巽 sans 震 élan → temporisation ; euphémisation ; reports ; retards)
☴ – ☱ : murmurer ; coder ; intriguer ; chiffrer
(巽 sans 兌 ouverture → murmure discret ; message codé ; manœuvres de coulisse ; chiffrement/cryptage)
☴ – ☶ : s’éparpiller ; étendre ; s’enchevêtrer ; déborder
(巽 sans 艮 borne → dispersion ; extension diffuse ; enchevêtrement ; débordement)

☶ – ☵ : s’endurcir ; nier ; refuser ; bloquer
(艮 arrêt sans 坎 profondeur → dureté ; négation des risques ; refus collectif ; blocage matériel)
☶ – ☲ : voiler ; brouiller ; censurer ; étouffer
(艮 sans 離 clarté → voilement ; brouillage doctrinal ; censure ; étouffoir technique)
☶ – ☰ : contrarier ; contredire ; obstruer ; brider
(艮 sans 乾 direction → contrariété ; contradiction de principe ; entraves ; bridage)
☶ – ☷ : priver ; déshumaniser ; rationner ; assécher
(艮 sans 坤 support → privation ; déshumanisation ; rationnement ; sécheresse)
☶ – ☳ : freiner ; inhiber ; paralyser ; éteindre
(艮 sans 震 élan → freinage ; inhibition ; paralysie collective ; extinction)
☶ – ☱ : se fermer ; taire ; interdire ; claquemurer
(艮 sans 兌 ouverture → fermeture ; mutisme ; interdictions ; mise sous cloche)
☶ – ☴ : verrouiller ; rigidifier ; policer ; sceller
(艮 sans 巽 consentement → verrouillage ; rigidification normative ; police des accès ; scellement)



*/

/*
0 — annuler · origine 

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
        "verb": "annuler",
        "formula": "remettre (0) à zéro (0)",
        "note": "",
    },
    "01": {
        "verb": "assourdir",
        "formula": "sans (0) entendre (1)",
        "note": "assourdir, sans bruit, liquider",
    },
    "02": {
        "verb": "aveugler",
        "formula": "sans (0) lumière (2)",
        "note": "sans voir, aveugler",
    },
    "03": {
        "verb": "ruminer",
        "formula": "user (0) l’idée (3)",
        "note": "",
    },
    "04": {
        "verb": "déposséder",
        "formula": "sans (0) avoir (4)",
        "note": "rebaser",
    },
    "05": {
        "verb": "déserter",
        "formula": "sans (0) humanité (5)",
        "note": "recentrer",
    },
    "06": {
        "verb": "relancer",
        "formula": "faux (0) départ (6)",
        "note": "désamorcer, fatiguer, relancer",
    },
    "07": {
        "verb": "refermer",
        "formula": "sans (0) joie (7)",
        "note": "refermer, taire",
    },
    "08": {
        "verb": "abandonner",
        "formula": "perdre (0) les limites (8)",
        "note": "",
    },
    "09": {
        "verb": "réformer",
        "formula": "restaurer (0) l’esprit (9)",
        "note": "",
    },

    "10": {
        "verb": "laver",
        "formula": "flux (1) qui annule (0)",
        "note": "",
        "yijing": ""
    },
    "11": {
        "verb": "couler",
        "formula": "abîme (1) et courant (1)",
        "note": "chute, tomber, herbes sauvages, friche, naviguer",
        "yijing": 29,
        "hexagram": "䷜"
    },
    "12": {
        "verb": "achever",
        "formula": "fleuve (1) à traverser (2)",
        "note": "prévoir, corriger pour l’achèvement",
        "yijing": 64,
        "hexagram": "䷿"
    },
    "13": {
        "verb": "contester",
        "formula": "fond (1) à juger (3)",
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
        "verb": "naviguer",
        "formula": "flux (1) accompagné (5)",
        "note": ""
    },
    "16": {
        "verb": "libérer",
        "formula": "fatalité (1) secouée (6)",
        "note": "affranchir, libérer, démonter, démêler",
        "yijing": 40,
        "hexagram": "䷧"
    },
    "17": {
        "verb": "épuiser",
        "formula": "le fond (1) est ouvert (7)",
        "note": "épuiser, étouffer, opprimer % 91 (puits, abreuver), emmêler",
        "yijing": 47,
        "hexagram": "䷮"
    },
    "18": {
        "verb": "discipliner",
        "formula": "folie (1) cadrée (8)",
        "note": "sanglier dans un filet et plante grimpante : couvrir, bourgeonner, ignorer, batifoler, jeune fou, folâtrer",
        "yijing": 4,
        "hexagram": "䷃"
    },
    "19": {
        "verb": "disperser",
        "formula": "eaux (1) soufflées (9)",
        "note": "disperser, dissoudre, déborder, dissiper, disparaître, jaillir, dissoudre les amas",
        "yijing": 59,
        "hexagram": "䷺"
    },


    "20": {
        "verb": "rompre",
        "formula": "lien (2) annulé (0)",
        "note": "élaguer",
    },
    "21": {
        "verb": "arriver",
        "formula": "rallier (2) le fleuve (1)",
        "note": "après la traversée du fleuve, tempérer, éclairer les profondeurs",
        "yijing": 63,
        "hexagram": "䷾"
    },
    "22": {
        "verb": "éclairer",
        "formula": "soleil (2) lumineux (2)",
        "note": "lumière, phœnix dans un filet, loriot, joindre, focaliser, foyer, concentrer, attirer, briller",
        "yijing": 30,
        "hexagram": "䷝"
    },
    "23": {
        "verb": "assembler",
        "formula": "joindre (2) les grands (3)",
        "note": "associer, coopérer, vase et couvercle ajusté",
        "yijing": 13,
        "hexagram": "䷌"
    },
    "24": {
        "verb": "blesser",
        "formula": "feu (2) dans la chair (4)",
        "note": "phœnix abbatu d’une flèche, occulter, vulgariser, exposition punitive, blessure (feu sous la chair)",
        "yijing": 36,
        "hexagram": "䷣"
    },
    "25": {
        "verb": "débattre",
        "formula": "confronter (2) les cœurs (5)",
        "note": "",
    },
    "26": {
        "verb": "foisonner",
        "formula": "extension (2) en herbe (6)",
        "note": "fertile, luxuriant, abondant… Prodiges. Chaume de maison, allumer, déclencher. Plein",
        "yijing": 55,
        "hexagram": "䷶"
    },
    "27": {
        "verb": "changer",
        "formula": "brûler (2) la peau (7)",
        "note": "muer, cuir, décortiquer, “fire” quelqu’un, moment opportun",
        "yijing": 49,
        "hexagram": "䷰"
    },
    "28": {
        "verb": "styliser",
        "formula": "révéler (2) les bords (8)",
        "note": "beauté, coquillage, beauté par la coupe",
        "yijing": 22,
        "hexagram": "䷕"
    },
    "29": {
        "verb": "perpétuer",
        "formula": "foyer (2) sous le toit (9)",
        "note": "? famille , clan, sacrifice, héritage, perpétuer, habiter, clarté partagée, demeurer",
        "yijing": 37,
        "hexagram": "䷤"
    },
    

    "30": {
        "verb": "blasphémer",
        "formula": "puissance (3) niée (0)",
        "note": "",
    },
    "31": {
        "verb": "prévoir",
        "formula": "idée (3) en germe (1)",
        "note": "avoir faim que le blé pousse, offrande à la pluie, espérer, attendre, préparer",
        "yijing": 5,
        "hexagram": "䷄"
    },
    "32": {
        "verb": "donner",
        "formula": "pouvoir (3) riche (2)",
        "note": "il y a, fortune, grand réalisé, advenir, ",
        "yijing": 14,
        "hexagram": "䷍"
    },
    "33": {
        "verb": "créer",
        "formula": "axes (3) alignés (3)",
        "note": "sec; commençons par une offrande, divination bénéfique",
        "yijing": 1,
        "hexagram": "䷀"
    },
    "34": {
        "verb": "prospérer",
        "formula": "pouvoir (3) aux masses (4)",
        "note": "paix, prospérité, arrivée des grands, imprégner, propager, parfum envahissant, pervading",
        "yijing": 11,
        "hexagram": "䷊"
    },
    "35": {
        "verb": "penser",
        "formula": "idée (3) humaine (5)",
        "note": "",
    },
    "36": {
        "verb": "maîtriser",
        "formula": "pouvoir (3) naturel (6)",
        "note": "bélier bloqué, l’homme intègre réussit par la ruse plutôt que la force, 壯 grand talent ou compétence",
        "yijing": 34,
        "hexagram": "䷡"
    },
    "37": {
        "verb": "proclamer",
        "formula": "la direction (3) tranche (7)",
        "note": "sym-bole, bâton fendu contractuel, déterminer, distinguer, résolution",
        "yijing": 43,
        "hexagram": "䷪"
    },
    "38": {
        "verb": "hériter",
        "formula": "pouvoir (3) du passé (8)",
        "note": "gros bétail, éducation des grands, conserver",
        "yijing": 26,
        "hexagram": "䷙"
    },
    "39": {
        "verb": "policer",
        "formula": "pouvoir (3) des mœurs (9)",
        "note": "petit bétail, domestication des petits",
        "yijing": 9,
        "hexagram": "䷈"
    },


    "40": {
        "verb": "peser",
        "formula": "masse (4) vaine (0)",
        "note": "démonter",
    },
    "41": {
        "verb": "participer",
        "formula": "ressources (4) communes (1)",
        "note": "比 2 humains retournés, comparer (cf. 从 suivre), champ innondé, égaliser",
        "yijing": 8,
        "hexagram": "䷇"
    },
    "42": {
        "verb": "promouvoir",
        "formula": "porter (4) à la lumière (2)",
        "note": "lever du soleil, développer, arriver à la lumière, course du soleil, un oiseau ne recule pas, promouvoir",
        "yijing": 35,
        "hexagram": "䷢"
    },
    "43": {
        "verb": "stagner",
        "formula": "capital (4) au pouvoir (3)",
        "note": "arrivée des petits, négation ou voleurs, personnes égoistes, taxer",
        "yijing": 12,
        "hexagram": "䷋"
    },
    "44": {
        "verb": "recevoir",
        "formula": "terre (4) malléable (4)",
        "note": "réceptif, terre, champ, disponible, former, porter, accueillir",
        "yijing": 2,
        "hexagram": "䷁"
    },
    "45": {
        "verb": "aménager",
        "formula": "moyens (4) pour les gens (5)",
        "note": "",
    },
    "46": {
        "verb": "mobiliser",
        "formula": "les masses (4) tonnent (6)",
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
        "formula": "les couches (4) s’écaillent (8)",
        "note": "user, élaguer, dépouiller, écorcher, vache coupée",
        "yijing": 23,
        "hexagram": "䷖"
    },
    "49": {
        "verb": "observer",
        "formula": "concret (4) mesuré (9)",
        "note": "look up, chercher, admirer, contempler, porte, temple, belvédère, prendre modèle, voir de haut, surveiller",
        "yijing": 20,
        "hexagram": "䷓"
    },

    "50": {
        "verb": "vanter",
        "formula": "gens (5) vains (0)",
        "note": "",
    },
    "51": {
        "verb": "pleurer",
        "formula": "cœur (5) qui coule (1)",
        "note": "",
    },
    "52": {
        "verb": "tromper",
        "formula": "cœur (5) double (2)",
        "note": "",
    },
    "53": {
        "verb": "aspirer",
        "formula": "aimer (5) l’idéal (3)",
        "note": "",
    },
    "54": {
        "verb": "cultiver",
        "formula": "gens (5) de terre (4)",
        "note": "",
    },
    "55": {
        "verb": "humaniser",
        "formula": "personne (5) humaine (5)",
        "note": "",
    },
    "56": {
        "verb": "combattre",
        "formula": "gens (5) impulsifs (6)",
        "note": "",
    },
    "57": {
        "verb": "confier",
        "formula": "cœur (5) qui se donne (7)",
        "note": "",
    },
    "58": {
        "verb": "repousser",
        "formula": "le cœur (5) a ses limites (8)",
        "note": "interdire, borner, sauvegarder",
    },
    "59": {
        "verb": "juger",
        "formula": "personne (5) formelle (9)",
        "note": "",
    },

    "60": {
        "verb": "hésiter",
        "formula": "départs (6) ratés (0)",
        "note": "",
    },
    "61": {
        "verb": "naître",
        "formula": "démarrer (6) dans la difficulté (1)",
        "note": "germer, stationner des troupes, difficulté initiale, rassemblement",
        "yijing": 3,
        "hexagram": "䷂"
    },
    "62": {
        "verb": "punir",
        "formula": "colère (6) éclairée (2)",
        "maxim": "", 
        "note": "festoyer, mordre et unir, peine, torture, exécuter la sentence, mordre dans le problème et statuer",
        "yijing": 21,
        "hexagram": "䷔"
    },
    "63": {
        "verb": "étonner",
        "formula": "naturel (6) droit (3)",
        "note": "sans folie, innocent, inatendu, colère du ciel",
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
        "note": "ébranlement, réveiller, impulsion initiale, colère, printemps, naissance, cascade, alerte",
        "yijing": 51,
        "hexagram": "䷲"
    },
    "67": {
        "verb": "suivre",
        "formula": "vouloir (6) accepter (7)",
        "note": "sacrifice des captifs,  隋 boucher, harmoniser, accorder, push-pull, suivre l’appel",
        "yijing": 17,
        "hexagram": "䷐"
    },
    "68": {
        "verb": "rassasier",
        "formula": "désirs (6) satisfaits (8)",
        "note": "mâchoire de divination, appétit satisfait",
        "yijing": 27,
        "hexagram": "䷚"
    },
    "69": {
        "verb": "gagner",
        "formula": "vouloir (6) diffuser (9)",
        "note": "crédit (% débit, 78), augmenter, gagner, donner?, générosité noble, rançon",
        "yijing": 42,
        "hexagram": "䷩"
    },


    "70": {
        "verb": "parier",
        "formula": "demander (7) l’improbable (0)",
        "note": "",
    },
    "71": {
        "verb": "rythmer",
        "formula": "ponctuer (7) le flux (1)",
        "note": "rythmer, articuler, ponctuer, mesurer, cadencer, charnière",
        "yijing": 60,
        "hexagram": "䷻"
    },
    "72": {
        "verb": "disputer",
        "formula": "diviser (7) le foyer (2)",
        "note": "",
        "yijing": 38,
        "hexagram": "䷥"
    },
    "73": {
        "verb": "marcher",
        "formula": "ouvrir (7) la voie (3)",
        "note": "réaliser la parole, mettre en œuvre, marche rituelle, chercher, trouver, guider, diriger",
        "yijing": 10,
        "hexagram": "䷉"
    },
    "74": {
        "verb": "approcher",
        "formula": "s’ouvrir (7) au bas (4)",
        "note": "condescendre, regarder de petites choses, approcher, expliquer, assiéger, pleurer au deuil, visiter",
        "yijing": 19,
        "hexagram": "䷒"
    }, 
    "75": {
        "verb": "accueillir",
        "formula": "ouvrir (7) le cœur (5)",
        "note": "",
    },
    "76": {
        "verb": "intégrer",
        "formula": "accepter (7) l’imprévu (6)",
        "note": "retour de la petite sœur, concubine, mariage raté, 歸 se livrer 妹 femme pas encore",
        "yijing": 54,
        "hexagram": "䷵"
    },
    "77": {
        "verb": "échanger",
        "formula": "inviter (7) et consentir (7)",
        "note": "ouvrir, agréer, parler, exchange, add, against, and convert, ouvrir, marais, don contre don, palabrer, satisfaction mutuelle",
        "yijing": 58,
        "hexagram": "䷹"
    },
    "78": {
        "verb": "perdre",
        "formula": "demandes (7) bloquées (8)",
        "maxim": "Moins mais mieux",
        "note": "débit (% crédit 69), dette, devoir, diminuer",
        "yijing": 41,
        "hexagram": "䷨"
    },
    "79": {
        "verb": "intérioriser",
        "formula": "accepter (7) ce qui convient (9)",
        "note": "vérité intérieure, juste confiance, centre, croire",
        "yijing": 61,
        "hexagram": "䷼"
    },
    

    "80": {
        "verb": "sidérer",
        "formula": "arrêté (8) dans le vide (0)",
        "note": "",
    },
    "81": {
        "verb": "entraver",
        "formula": "freins (8) et dangers (1)",
        "note": "entrave, boîter, obstruction, chercher la passe plutôt que forcer, contourner",
        "yijing": 39,
        "hexagram": "䷦"
    },
    "82": {
        "verb": "voyager",
        "formula": "aux frontières (8), foyer (2)",
        "note": "camp, hôtel, voyager, vagabond, expédition militaire, voyager en bordure, vivre en hôte",
        "yijing": 56,
        "hexagram": "䷷"
    },
    "83": {
        "verb": "reculer",
        "formula": "tenir (8) en force (3)",
        "note": "fuir, retraite, reculer ; pied bouclier, disparaître",
        "yijing": 33,
        "hexagram": "䷠"
    },
    "84": {
        "verb": "modérer",
        "formula": "tenir (8) bas (4)",
        "note": "humilité, modestie (% 46), niveler, humilier, modérer",
        "yijing": 15,
        "hexagram": "䷎"
    },
    "85": {
        "verb": "habiter",
        "formula": "pierre (8) humaine (5)",
        "note": "",
    },
    "86": {
        "verb": "canaliser",
        "formula": "borner (8) le flux (6)",
        "note": "excès de petit, moins que, cf 97, refouler, réfréner",
        "yijing": 62,
        "hexagram": "䷽"
    },
    "87": {
        "verb": "séduire",
        "formula": "retenue (8) et sentiment (7)",
        "note": "salé, émouvoir, inciter, cf. 96 persévérer, endurer, influencer par présence calme, influence réciproque",
        "yijing": 31,
        "hexagram": "䷞"
    },
    "88": {
        "verb": "calmer",
        "formula": "tenir (8) tranquille (8)",
        "note": "couper, arrêter, bloquer, mener à terme et recommencer, porte, chien, main, nœud, pause, borne, consolidation",
        "yijing": 52,
        "hexagram": "䷳"
    },
    "89": {
        "verb": "progresser",
        "formula": "patiente (8) pression (9)",
        "note": "graduellement, arbre sur la montagne, infiltrer, progresser, mûrir",
        "yijing": 53,
        "hexagram": "䷴"
    },


    "90": {
        "verb": "culpabiliser",
        "formula": "pression (9) vaine (0)",
        "note": "",
    },
    "91": {
        "verb": "abreuver",
        "formula": "diffuser (9) l’eau (1)",
        "note": "puits commun, fontaine publique, puiser, ressourcer",
        "yijing": 48,
        "hexagram": "䷯"
    },
    "92": {
        "verb": "consacrer",
        "formula": "souffler (9) sur la flamme (2)",
        "note": "chaudron, instituer, tripode, deviner, présager, prophétiser, divination, repas, faire d’un support un foyer de sens",
        "yijing": 50,
        "hexagram": "䷱"
    },
    "93": {
        "verb": "rencontrer",
        "formula": "infléchir (9) la direction (3)",
        "note": "copuler, rencontrer, coupler",
        "yijing": 44,
        "hexagram": "䷫"
    },
    "94": {
        "verb": "croître",
        "formula": "le souffle (9) de la terre (4)",
        "note": "grandir, croître, louche, dater la moisson, monter par imprégnation",
        "yijing": 46,
        "hexagram": "䷭"
    },
    "95": {
        "verb": "obliger",
        "formula": "presser (9) une personne (5)",
        "note": "",
    },
    "96": {
        "verb": "endurer",
        "formula": "le souffle (9) accélère (6)",
        "note": "endurer, persévérer, cœur | course du soleil, routine synchronized to pulses",
        "yijing": 32,
        "hexagram": "䷟"
    },
    "97": {
        "verb": "surcharger",
        "formula": "pression (9) à l’acceptation (7)",
        "note": "transgresser outrepasser, masse critique, grande expérience (aspect), excès de grand, cf 86",
        "yijing": 28,
        "hexagram": "䷛"
    },
    "98": {
        "verb": "aérer",
        "formula": "air (9) confiné (8)",
        "note": "sorcellerie, désinfecter, ranger les affaires des parents, maladie sexuelle, malédiction, infecter; quelque chose pourrit à l'intérieur, corriger, corriger en ré-imprégnant",
        "yijing": 18,
        "hexagram": "䷑"
    },
    "99": {
        "verb": "conformer",
        "formula": "formes (9) respectées (9)",
        "note": "sceau, table avec commensaux à genoux, s’agenouiller devant l’autel, calculer, dater, complaire",
        "yijing": 57,
        "hexagram": "䷸"
    },


  
};