import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';
//import { MealBox } from './classes/meal-box';
//import { Beans, Meat, Rice } from './classes/meals';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();
console.log(veganDishBuilder.getMeal());

/*

COMPOSITE

const rice = new Rice('Arroz', 20);
const beans = new Beans('Feijao', 10);
const meat = new Meat('Carne', 30);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);

console.log(mealBox);
console.log(mealBox.getPrice());

*/
