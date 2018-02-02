import { Category, categories } from './../../models/place';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-booking',
  templateUrl: 'my-booking.html',
})
export class MyBookingPage {

  public categories: Category[] = categories;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public getIndex(index: number, length: number): number {
    return index % length;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBookingPage');
  }

}
