import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExperiencePage } from '../experience/experience';
import { HobbiesPage } from '../hobbies/hobbies';
import { EducationPage } from '../education/education';
import { TechnicalPage } from '../technical/technical';
import { SoftPage } from '../soft/soft';
import { ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  public isDisabled:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  

}
