import numeral from 'numeral';
import css from './index.css';

const courseValue = numeral(1000).format('$0,0.00');
console.log("I would pay for this awsome course!");
console.log(`I would pay ${courseValue} for this awsome course!`);
