import { categories, Place } from './../../models/place';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'category/:catIndex/place/:placeIndex/status'
})
@Component({
  selector: 'page-booking-status',
  templateUrl: 'booking-status.html',
})
export class BookingStatusPage {

  public place: Place;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  getPlace() {
    const catIndex = this.navParams.get('catIndex');
    const placeIndex = this.navParams.get('placeIndex');
    this.place = categories[catIndex].places[placeIndex];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingStatusPage');
    this.getPlace();
  }

}
