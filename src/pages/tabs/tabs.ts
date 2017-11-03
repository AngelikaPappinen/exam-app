import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { AboutPage } from '../about/about';
import { ExperiencePage } from '../experience/experience';
import { ContactsPage } from '../contacts/contacts';
import { EducationPage } from '../education/education';
import { HobbiesPage } from '../hobbies/hobbies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = ExperiencePage;
  tab3Root = ContactsPage;
  tab4Root = EducationPage;
  tab5Root = HobbiesPage;

  constructor() {

  }
}
//Mentioned all my pages, which I want to be visible in the tab
//Angelika Pappinen