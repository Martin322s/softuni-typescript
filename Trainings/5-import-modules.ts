import { sum } from './5-export-modules';
import  * as calculator  from './5-export-modules';

console.log(sum(1, 2));
console.log(calculator.subtract(3, 2));
console.log(calculator.default);
