/** 
 * Directive component
 */
import {Component} from 'angular2/core';

// Decorator
// Component metadata
@Component({
  selector: 'pm-products', // component directive name
  templateUrl : 'app/products/product-list.component.html' // relative path to the view
})

export class ProductListComponent {
  
}