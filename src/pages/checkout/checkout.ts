import { categories, Place } from './../../models/place';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'category/:catIndex/place/:placeIndex/checkout'
})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  public place: Place;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
  ) {}

  getPlace() {
    const catIndex = this.navParams.get('catIndex');
    const placeIndex = this.navParams.get('placeIndex');
    this.place = categories[catIndex].places[placeIndex];
  }

  private configurePayment(): void {
    V.init({
        apikey: "ZUZJL7UGHQ20KXLB1URG21Pad9EE8sQU0YK5I3ARjAjFgOu0E",
        paymentRequest:{
        currencyCode: "USD",
        subtotal: "10.00"
      }
    });
    V.on('payment.success', (payment) => {
      const toast = this.toastCtrl.create({
        message: 'Pagamento foi realizado com sucesso.',
        duration: 5000,
        dismissOnPageChange: true,
        closeButtonText: 'Ok',
        showCloseButton: true,
      });
      toast.present();
      this.navCtrl.popToRoot().then(() => {
        const catIndex = this.navParams.get('catIndex');
        const placeIndex = this.navParams.get('placeIndex');
        this.navCtrl.push('BookingStatusPage', {
          catIndex,
          placeIndex,
        });
      });
    });
    V.on('payment.cancel', () => {
      const toast = this.toastCtrl.create({
        message: 'Pagamento foi cancelado com sucesso.',
        duration: 5000,
        dismissOnPageChange: true,
        closeButtonText: 'Ok',
        showCloseButton: true,
      });
      toast.present();
    });
    V.on('payment.error', (payment, error) => {
      console.error(error);
      const toast = this.toastCtrl.create({
        message: 'Desculpe, houve um erro e não pudemos processar o seu pagamento. Por favor, tente novamente.',
        duration: 5000,
        dismissOnPageChange: true,
        closeButtonText: 'Ok',
        showCloseButton: true,
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    this.getPlace();
    this.configurePayment();
  }
}

