import { ProductCustomizationDecorator } from './product-customization';
import { ProductStampDecorator } from './product-stamp-decorator';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const stampedTShirt = new ProductStampDecorator(tShirt);
const doubleStampedTShirt = new ProductStampDecorator(stampedTShirt);
const customizationTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(stampedTShirt.getPrice(), stampedTShirt.getName());
console.log(doubleStampedTShirt.getPrice(), doubleStampedTShirt.getName());
console.log(customizationTShirt.getPrice(), customizationTShirt.getName());
