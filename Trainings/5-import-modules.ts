import { sumFunction } from './5-export-modules';
import  * as calculator  from './5-export-modules';

console.log(sumFunction(1, 2));
console.log(calculator.subtract(3, 2));
console.log(calculator.default);
