import { StatesProvider } from './../../providers/states/states';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, App } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  public loginForm: any;
  public backgroundImage = 'assets/imgs/background-2.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public app: App,
    public states: StatesProvider,
  ) { }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      this.navCtrl.pop().catch(() => {
        return this.navCtrl.setRoot('TabsPage');
      });
    });

    loading.present();
  }

  goToSignup() {
    this.navCtrl.push('SignupPage');
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }

}
