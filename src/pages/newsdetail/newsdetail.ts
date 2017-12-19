import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common'
/**
 * Generated class for the NewsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {
 public Community;
 public newsobj;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
	  this.Community = "Lions Club International";
	  this.newsobj = navParams.get('param1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsdetailPage');
  console.log(this.newsobj);
  }
}

