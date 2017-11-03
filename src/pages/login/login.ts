import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser () {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('You are logged in.');
      this.navCtrl.setRoot( LoggedinPage );
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log(this.uname.value, this.password.value);
  }

}
