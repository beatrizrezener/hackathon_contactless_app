import { categories, Place } from './../../models/place';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'category/:catIndex/place/:placeIndex'
})
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  public place: Place;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private getPlace(): void {
    const catIndex = this.navParams.get('catIndex');
    const placeIndex = this.navParams.get('placeIndex');
    this.place = categories[catIndex].places[placeIndex];
  }

  ionViewDidLoad() {
    this.getPlace();
  }

}
