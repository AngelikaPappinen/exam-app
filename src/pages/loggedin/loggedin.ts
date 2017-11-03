import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email: string;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }
//Be sure to mention toAbout in Loggedin.ts. Angelika Pappinen
  toAbout() {
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }
  }