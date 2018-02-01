import { StatesProvider } from './../../providers/states/states';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public logged: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public states: StatesProvider
  ) {
  }

  private watchLoginStatusChanges(): void {
    this.logged = this.states.logged;
    this.states.onLoggedStatusChanged.subscribe((statusLogin) => {
      console.log(statusLogin);
      this.logged = statusLogin;
    });
  }

  public logout(): void {
    this.states.logout();
  }

  ionViewDidLoad() {
    this.watchLoginStatusChanges();
  }

}
