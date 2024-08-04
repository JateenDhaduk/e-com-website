import './style.css'
import products from "/Users/jateendhaduk/ecomm_project/api/product.json";
import { showProductContainer } from './homeproductcard';
//console.log(products);

// call the function to display the data//
showProductContainer(products);