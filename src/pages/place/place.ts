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
  public catIndex: number;
  public placeIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private getPlace(): void {
    this.catIndex = Number(this.navParams.get('catIndex'));
    this.placeIndex = Number(this.navParams.get('placeIndex'));
    this.place = categories[this.catIndex].places[this.placeIndex];
  }

  ionViewDidLoad() {
    this.getPlace();
  }

}
