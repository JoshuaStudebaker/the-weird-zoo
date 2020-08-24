import Armadillo from "./models/Armadillo.js";
// const { default: Armadillo } = require("./models/Armadillo");

import Bat from "./models/Bat.js";

let baryl = new Armadillo("Beryl", "M", "Prickly Pears");
console.log(Armadillo);
console.log(baryl);

let bats = {
  brownRot: new Bat("Brown Rot", "M", "Bugs", "Mosquitos", "Day", "Tree"),
  hangrik: new Bat("Hangrik", "M", "Fruit", "Apricots", "Day", "Cave"),
};

function drawBatsFoods() {
  let template = "";
  for (let key in bats) {
    let bfs = bats[key];
    template += `<p>${bfs.eat(bfs.favoriteFood)}</p>`;
  }

  document.getElementById("bats").innerHTML = template;
}

drawBatsFoods();
