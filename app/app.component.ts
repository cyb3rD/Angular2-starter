/** 
 * Main component of the application
 * Container   
 */
import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';

// Decorator
// Component metadata
@Component({
  // component directive name
  selector: 'pm-app', 
  template: `         
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  // array of components
  directives: [ProductListComponent] 
})
// Name convention AppComponent - for the root
export class AppComponent {
  pageTitle: string = "Product Management";
}