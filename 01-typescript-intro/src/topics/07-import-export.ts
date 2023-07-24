import { Product, TaxCalculation } from './06-function-destructuring';


const ShoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPhone',
        price: 150
    }
];

const [ total, tax] = TaxCalculation({
    products: ShoppingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax);
