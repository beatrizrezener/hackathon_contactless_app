import { StatesProvider, Favorites } from './../../providers/states/states';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  public favorites: Favorites[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public state: StatesProvider,
    ) {}

  ionViewDidLoad() {
    this.favorites = this.state.favorites;
  }

}
