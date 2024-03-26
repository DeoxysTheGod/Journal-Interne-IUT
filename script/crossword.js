// VERSION GENERATION ALEATOIRE
// listePersonnes = [
//     "quentin",
//     "aurore",
//     "clement",
//     "antonin",
//     "axel"
// ];
//
// function initGrille() {
//     let grille = new Array(listePersonnes).fill("0");
//     let largeurMin = listePersonnes.reduce((a, b) => a.length > b.length ? a : b, "");
//     for(let i = 0; i < largeurMin.length * 2; i++) {
//         if(Math.random() > 0.5) continue;
//         // separerNom(listePersonnes).forEach(nom => {
//         //     grille.push(nom);
//         // });
//     }
//
//     console.log(grille);
// }
//
// function separerNom(liste) {
//     let listeSeparee = [];
//     liste.forEach(nom => {
//         listeSeparee.push(nom.split(""));
//     });
//     return listeSeparee;
// }
//
// initGrille();

// VERSION STATIQUE

// Aurore, Quentin, Axel, Maxime, Angelo de mis seulement pour l'instant
let grille = [
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'M', 'A', 'X', 'I', 'M', 'E', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'Q', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'U', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'N', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'U', 'A', 'A', 'A', 'A', 'T', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'R', 'A', 'A', 'A', 'I', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'O', 'A', 'A', 'N', 'A', 'A', 'A'],
    ['A', 'A', 'N', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'R', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'G', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'E', 'A', 'A', 'A', 'X', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'L', 'A', 'A', 'A', 'A', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'O', 'A', 'A', 'A', 'A', 'A', 'L', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
]

function afficherGrille() {
    let motMeleeDiv = document.getElementById('crossword-game');
    console.log(motMeleeDiv);
    motMeleeDiv.appendChild(document.createElement('table'));
}

afficherGrille();