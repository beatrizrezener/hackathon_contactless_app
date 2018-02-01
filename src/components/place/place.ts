import { Component } from '@angular/core';

/**
 * Generated class for the PlaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'place',
  templateUrl: 'place.html'
})
export class PlaceComponent {

  text: string;

  constructor() {
    console.log('Hello PlaceComponent Component');
    this.text = 'Hello World';
  }

}
