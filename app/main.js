import Armadillo from "./models/Armadillo.js";
// const { default: Armadillo } = require("./models/Armadillo");

import Bat from "./models/Bat.js";

let baryl = new Armadillo("Beryl", "M", "Prickly Pears");
console.log(Armadillo);
console.log(baryl);

let brownRot = new Bat("Brown Rot", "M", "Bugs", "Mosquitos", "Day", "Tree");
console.log(brownRot);

// let critters = [
//   Armadillo,
//   Fox,
//   Opossum,
//   Porcupine,
//   Ringtail,
//   Stinkkatze,
//   WashBear,
// ];
// let birdFowl = [Chicken, Duck, Quail, Turkey];
