/** 
 * Main component of the application
 */
import {Component} from 'angular2/core';

// Decorator
// Component metadata
@Component({
  selector: 'pm-app', // component directive name
  template: `         
  <div><h1>{{pageTitle}}</h1>
    <div>My First Component</div>
  </div>
  `
})
// Name convention AppComponent - for the root
export class AppComponent {
  pageTitle: string = "Product Management";
}