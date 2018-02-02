import { categories, Place } from './../../models/place';
import { Component, Input, OnInit } from '@angular/core';

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
export class PlaceComponent implements OnInit {

  @Input() public catIndex: number;
  @Input() public placeIndex: number;
  public place: Place;

  constructor() {
  }

  getPlace() {
    this.place = categories[this.catIndex].places[this.placeIndex];
    console.log(this.place);
  }

  getStar() {
    if (this.place && this.place.isFavorite) {
      return 'star';
    }
    return 'star-outline';
  }

  ngOnInit() {
    this.getPlace();
  }

}
