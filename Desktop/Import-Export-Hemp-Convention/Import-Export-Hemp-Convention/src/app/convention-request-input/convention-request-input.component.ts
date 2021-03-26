import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from 'src/Service/backend-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-convention-request-input',
  templateUrl: './convention-request-input.component.html',
  styleUrls: ['./convention-request-input.component.css']
})
export class ConventionRequestInputComponent implements OnInit {
  myForm: FormGroup;
  M_IDENTIFY
  // IDENTIFY
  IDENTIFY2
  IDENTIFY3

  nameLicense
  topicnamelist
  txt_date

  ConventionData
  WRITE_AT
  WRITE_DATE
  syslctaddr_thanameplace
  BSN_PREFIXNAME
  BSN_NAME_LASTNAME
  IDENTIFY
  txt_registerCommunityCode
  txt_addressCode
  syslctaddr_thaaddr
  syslctaddr_mu
  syslctaddr_thasoi
  syslctaddr_tharoad
  syslctaddr_thmblnm
  syslctaddr_amphrnm
  syslctaddr_chngwtnm
  syslctaddr_zipcode
  syslctaddr_tel
  syslctaddr_fax
  syslctaddr_email
  addressID
 

  BSN_AMPHR_NAME
  TRADE_NAME
  QUANTITY1
  NARCOTIC_NAME
  DRUG_TYPE_ID
  CONTENT_QUANTITY
  TOTAL_QUANTITY
   


  public hempList: any = [{
    id: 1,
    QUANTITY1: '',
    TRADE_NAME: '',
    NARCOTIC_NAME: '',
    DRUG_TYPE_ID: '',
    CONTENT_QUANTITY: '',
    TOTAL_QUANTITY: '',
   

  }];



  constructor( private http: HttpClient,  private backendApiService : BackendApiService ) { 
   
     
  }

  ngOnInit(): void {

    this.nameLicense ="กท 1/2564";
    this.topicnamelist ="นำเข้ายาเสพติดให้โทษในประเภท 5 เฉพาะกัญชง ใบอนุญาตเลขที่";

    this.backendApiService.GetConventionData().subscribe(
      data=>{
        //console.log(data)
        this.ConventionData= data
        this.syslctaddr_thanameplace = this.ConventionData.CONVENTIONs.syslctaddr_thanameplace  //syslctaddr_thanameplace
        this.BSN_PREFIXNAME =this.ConventionData.CONVENTIONs.BSN_PREFIXNAME 
        this.BSN_NAME_LASTNAME =this.ConventionData.CONVENTIONs.BSN_NAME_LASTNAME 
        //this.txt_firstName =this.ConventionData[0].BSN_NAME_LASTNAME   // ---------หาตัวmap ไม่เจอ  ชื่อผู้ดำเนินกิจการ---------
        // this.txt_lastName =this.User[0].id   //---------หาตัวmap ไม่เจอ  นามสกุล---------
        this.IDENTIFY = this.ConventionData.CONVENTIONs.IDENTIFY
        this.txt_registerCommunityCode = ""  //---------หาตัวmap ไม่เจอ  รหัสทะเบียนวิสาหกิจชุมชน---------
        this.txt_addressCode = ""   //---------หาตัวmap ไม่เจอ  เลขรหัสประจำบ้าน---------
        this.syslctaddr_thaaddr =this.ConventionData.CONVENTIONs.syslctaddr_thaaddr   //syslctaddr_thaaddr  
        this.syslctaddr_mu = this.ConventionData.CONVENTIONs.syslctaddr_mu //syslctaddr_thaaddr
        this.syslctaddr_thasoi =  this.ConventionData.CONVENTIONs.syslctaddr_thasoi   //syslctaddr_thaaddr
        this.syslctaddr_tharoad =  this.ConventionData.CONVENTIONs.syslctaddr_tharoad  //syslctaddr_thaaddr
        this.syslctaddr_thmblnm =  this.ConventionData.CONVENTIONs.syslctaddr_thmblnm   //syslctaddr_thaaddr
        this.syslctaddr_amphrnm =  this.ConventionData.CONVENTIONs.syslctaddr_amphrnm   //syslctaddr_thaaddr
        this.syslctaddr_chngwtnm =  this.ConventionData.CONVENTIONs.syslctaddr_chngwtnm   //syslctaddr_thaaddr
        this.syslctaddr_zipcode =  this.ConventionData.CONVENTIONs.syslctaddr_zipcode  //syslctaddr_thaaddr
        this.syslctaddr_tel =  this.ConventionData.CONVENTIONs.syslctaddr_tel  //syslctaddr_thaaddr
        this.syslctaddr_fax =  this.ConventionData.CONVENTIONs.syslctaddr_fax  //syslctaddr_thaaddr
        this.syslctaddr_email = this.ConventionData.CONVENTIONs.syslctaddr_email   //syslctaddr_thaaddr
        this.BSN_AMPHR_NAME =this.ConventionData.CONVENTIONs.IDENTIFY

        // this.hempList[0].address = this.ConventionData.CONVENTIONs.syslctaddr_thanameplace




      }
    )
  }




  
  addRow() {
    this.hempList.push({
      id: this.hempList.length + 1,
      QUANTITY1: '',
      TRADE_NAME: '',
      NARCOTIC_NAME: '',
      DRUG_TYPE_ID: '',
       CONTENT_QUANTITY: '',
      TOTAL_QUANTITY: '',

   

    });

     console.log(this.hempList);
  }

  editRow(i: number){

  }

  removeRow(i: number) {
    this.hempList.splice(i, 1);
  }

  logValue() {
    //console.log(this.hempList);
  }




  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      alert(JSON.stringify(this.fieldArray))
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }


  CONVENTION: CONVENTION
  ClickAddDes(f: NgForm) {

   // alert(JSON.stringify(f.value))
    //this.M_IDENTIFY = f.value

  //   let doc = {
  //     datatest:  f.value,
  //  datatest2 : this.hempList
     
  //   }


  // let doc = {
  //      BSN_AMPHR_NAME : f.value.BSN_AMPHR_NAME
  //   }
  
  //this.CONVENTION.IDENTIFY = f.value.IDENTIFY  
 
    //console.log(f.value)

    console.log(this.hempList);

    //console.log(f.value)
   // this.M_IDENTIFY.IDENTIFY = f.value.IDENTIFY
   //  this.M_IDENTIFY.IDENTIFY2 = f.value.IDENTIFY2
   // alert(JSON.stringify(this.M_IDENTIFY))
   //alert(JSON.stringify(this.M_IDENTIFY));
    this.backendApiService.AddData(f.value).subscribe(data => {
      alert('status ok55')
      //window.location.reload();
      //this.functional_id = data.functional_id;
     //this.functional_description = data.functional_description;
    });
  }

}



  
interface CONVENTION {
   
  //syslctaddr_thanameplace: string;
  //BSN_NAME_LASTNAME: string;
  //IDENTIFY: string;
  BSN_AMPHR_NAME: string;
 
}
