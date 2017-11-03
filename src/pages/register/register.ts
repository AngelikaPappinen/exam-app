import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data => {
      console.log('got data ', data); //shows that registration went successfully!
      this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error); //Shows error in case of problem
      this.alert(error.message);
  });
    console.log('Would register user with ', this.uname.value, this.password.value);
  }}

  //This code is made by Angelika Pappinen