import { categories } from './../../models/place';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'category/:catIndex'
})
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  public category;
  public catIndex: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  public getCategory(): void {
    this.catIndex = Number(this.navParams.get('catIndex'));
    this.category = categories[this.catIndex];
  }

  ionViewDidLoad() {
    this.getCategory();
  }

}
