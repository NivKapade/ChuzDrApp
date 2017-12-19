import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { NewemrpopoverPage } from '../newemrpopover/newemrpopover';
import { MedicalRecordServiceProvider } from '../../providers/medical-record-service/medical-record-service';
import { TokenServiceProvider } from '../../providers/token-service/token-service'
/**
 * Generated class for the MedicalRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-medical-record',
  templateUrl: 'medical-record.html',
})
export class MedicalRecordPage {

  members:any;
  records:any;
  tokenRes: any;
  loading: any;  
  familyMemberList: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public popOver:PopoverController,private medicalRecordService: MedicalRecordServiceProvider, private tokenService: TokenServiceProvider, public loadingCtrl: LoadingController  ) {
    this.members = ["Member1","Member2","Member3","Member4"];
    this.records = [{date:"1/12/2017",numberofreports:"1",numberofpres:"2",reports:["assets/imgs/logo.png",'assets/imgs/logo.png','assets/imgs/logo.png'],pres:["assets/imgs/logo.png",'assets/imgs/logo.png','assets/imgs/logo.png']}];
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad OffersPage');
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
       this.loading.present();
      this.tokenService.getToken().then(data => {
        this.tokenRes = data;
        if (this.tokenRes.status == "success") {
          console.log(this.tokenRes);
          this.getFamilyMembers()
          
        } else {
  
        }
      });
  }
  
     presentPopover() {
      let popover = this.popOver.create(NewemrpopoverPage);
      popover.present();
    }
    getFamilyMembers()
    {
      
        debugger
        this.tokenService.getToken().then(data => {
          this.tokenRes = data;
          if (this.tokenRes.status == "success") {
            this.medicalRecordService.getMembers(this.tokenRes.responseObject).then(response => {
              debugger;
              console.log(response);
              this.familyMemberList = response["0"].FamilyMemberList;
              console.log(this.familyMemberList);
              this.loading.dismiss();
            });
          } else {
    
          }
        });

    }
}


