class Bat {
  constructor(name, gender, foodType, favoriteFood, sleepTime, home) {
    this.name = name;
    this.gender = gender;
    this.foodType = foodType;
    this.favoriteFood = favoriteFood;
    this.sleepTime = sleepTime;
    this.home = home;
  }

  eat(food) {
    return `${this.name} the Bat loves ${food}`;
  }
}

export default Bat;
