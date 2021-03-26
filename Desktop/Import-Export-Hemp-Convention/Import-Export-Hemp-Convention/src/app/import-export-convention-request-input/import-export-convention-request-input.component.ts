import { Directive,Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BackendApiService } from '../../Service/backend-api.service';

 


@Component({
  selector: 'app-import-export-convention-request-input',
  templateUrl: './import-export-convention-request-input.component.html',
  styleUrls: ['./import-export-convention-request-input.component.css']
})
export class ImportExportConventionRequestInputComponent implements OnInit {

  // declare variable to Json array type

   


  data
  date
  User
  ConventionData

  process_id
  checked
  txt_date
  txt_writeAt
  txt_addrNameplace
  txt_bsnPrefixName    
  txt_fullName
  //txt_firstName
  //txt_lastName
  IDENTIFY
  txt_registerCommunityCode
  txt_addressCode
  txt_syslctaddr_thaaddr
  txt_mu
  txt_soi
  txt_road
  txt_tambon
  txt_amphor
  txt_province
  txt_zipcode
  txt_phone
  txt_fax
  txt_email

  topicnamelist


  myForm

   myForm2
   //namedata: string = "";
  syslctaddr_thanameplace ="บริษัท องค์การเภสัชกรรม จำกัด"

  topicNameList = [
    {
      id: 280000202,
      name: "นำเข้ายาเสพติดให้โทษในประเภท 5 เฉพาะกัญชง ใบอนุญาตเลขที่",
      checked:  true
    },
    {
      id: 280000203,
      name: "ส่งออกยาเสพติดให้โทษในประเภท 5 เฉพาะกัญชง ใบอนุญาตเลขที่",
      checked: false
    }
    
  ]
  // topicName = "นำเข้ายาเสพติดให้โทษในประเภท 5 เฉพาะกัญชง ใบอนุญาตเลขที่";
  nameLicense= "กท 1/2564";  // ใช้ตัวแปรนี้นะ LCNNO_DISPLAY_LICENSE_LOCATION
  constructor( private http: HttpClient,  private backendApiService : BackendApiService ) { 
    this.myForm = new FormGroup({
      process_id: new FormControl(),
      data: new FormControl(),
      checked: new FormControl(),
      nameLicense: new FormControl(),    
      txt_date: new FormControl(),
      txt_writeAt: new FormControl(),
      txt_addrNameplace: new FormControl(),
      txt_bsnPrefixName: new FormControl(),
      txt_fullName: new FormControl(),   
      //txt_firstName: new FormControl(),
      //txt_lastName: new FormControl(),
      txt_identifyBSN: new FormControl(),
      txt_registerCommunityCode: new FormControl(),
      txt_addressCode: new FormControl(),
      txt_syslctaddr_thaaddr: new FormControl(),
      txt_mu: new FormControl(),
      txt_soi: new FormControl(),
      txt_road: new FormControl(),
      txt_tambon: new FormControl(),
      txt_amphor: new FormControl(),
      txt_province: new FormControl(),
      txt_zipcode: new FormControl(),
      txt_phone: new FormControl(),
      txt_fax: new FormControl(),
      txt_email: new FormControl(),
      IDENTIFY: new FormControl(),

      

    
      
      //namedata: new FormControl(),
      date: new FormControl(),

      
     
   });
  }
   

  async ngOnInit() {
    this.topicNameList =this.topicNameList
    this.nameLicense ="กท 1/2564";
    this.checked =true
    this.topicnamelist ="นำเข้ายาเสพติดให้โทษในประเภท 5 เฉพาะกัญชง ใบอนุญาตเลขที่";

    // this.backendApiService.GetConventionData().subscribe(
    //   data=>{
    //     //alert('55');
    //     //this.ConventionData = data
    //      //console.log(this.ConventionData)
    //      //alert(JSON.stringify(data.CONVENTIONs.IDA))
 
    //     this.data = data
    //       //console.log(data.CONVENTIONs.IDA)
    //   }
    // )

     
    await this.backendApiService.GetConventionData().subscribe(
      data=>{
      //alert('557')
         console.log(data)
        this.ConventionData = data
        //this.User =data;
        //this.namedata =this.User[0].name
        this.process_id = 280000202
        //this.txt_writeAt =  this.ConventionData.WRITE_AT
        //this.txt_date =  this.ConventionData[0].WRITE_DATE
        this.txt_addrNameplace = this.ConventionData.CONVENTIONs.syslctaddr_thanameplace  //syslctaddr_thanameplace
        this.txt_bsnPrefixName =this.ConventionData.CONVENTIONs.BSN_PREFIXNAME 
        this.txt_fullName =this.ConventionData.CONVENTIONs.BSN_NAME_LASTNAME 
        //this.txt_firstName =this.ConventionData[0].BSN_NAME_LASTNAME   // ---------หาตัวmap ไม่เจอ  ชื่อผู้ดำเนินกิจการ---------
        // this.txt_lastName =this.User[0].id   //---------หาตัวmap ไม่เจอ  นามสกุล---------
        this.IDENTIFY= "" //IDENTIFY_BSN 
        this.txt_registerCommunityCode = ""  //---------หาตัวmap ไม่เจอ  รหัสทะเบียนวิสาหกิจชุมชน---------
        this.txt_addressCode = ""   //---------หาตัวmap ไม่เจอ  เลขรหัสประจำบ้าน---------
        this.txt_syslctaddr_thaaddr =this.ConventionData.CONVENTIONs.syslctaddr_thaaddr   //syslctaddr_thaaddr  
        this.txt_mu = this.ConventionData.CONVENTIONs.syslctaddr_mu //syslctaddr_thaaddr
        this.txt_soi =  this.ConventionData.CONVENTIONs.syslctaddr_thasoi   //syslctaddr_thaaddr
        this.txt_road =  this.ConventionData.CONVENTIONs.syslctaddr_tharoad  //syslctaddr_thaaddr
        this.txt_tambon =  this.ConventionData.CONVENTIONs.syslctaddr_thmblnm   //syslctaddr_thaaddr
        this.txt_amphor =  this.ConventionData.CONVENTIONs.syslctaddr_amphrnm   //syslctaddr_thaaddr
        this.txt_province =  this.ConventionData.CONVENTIONs.syslctaddr_chngwtnm   //syslctaddr_thaaddr
        this.txt_zipcode =  this.ConventionData.CONVENTIONs.syslctaddr_zipcode  //syslctaddr_thaaddr
        this.txt_phone =  this.ConventionData.CONVENTIONs.syslctaddr_tel  //syslctaddr_thaaddr
        this.txt_fax =  this.ConventionData.CONVENTIONs.syslctaddr_fax  //syslctaddr_thaaddr
        this.txt_email = this.ConventionData.CONVENTIONs.syslctaddr_email   //syslctaddr_thaaddr

        
    //     //this.IDENTIFY_BSN = this.User[0].phone
    //     //alert(this.namedata )
    //     //console.log(this.User[0].name)
      }
    )
  }

  CONVENTIONs: CONVENTIONs
  
  submit(data){
   //console.log(data.txt_identifyBSN);
   const formData = new FormData();


   this.CONVENTIONs = data.IDENTIFY  
    console.log(this.CONVENTIONs)
    //alert(data)
     
   //this.CONVENTIONs.IDENTIFY = data.CONVENTIONs.IDENTIFY

   //formData.append("IDENTIFY", this.myForm.get('txt_identifyBSN').value);
 
  //formData.append("process_id", this.myForm.get('process_id').value);
  // formData.append("nameLicense", this.myForm.get('nameLicense').value);
  // formData.append("txt_writeAt", this.myForm.get('txt_writeAt').value);
  // formData.append("txt_date", this.myForm.get('txt_date').value);
  // formData.append("txt_addrNameplace", this.myForm.get('txt_addrNameplace').value);
  // formData.append("txt_bsnPrefixName", this.myForm.get('txt_bsnPrefixName').value);
  // formData.append("txt_fullName", this.myForm.get('txt_fullName').value);
  // formData.append("IDENTIFY", this.myForm.get('txt_identifyBSN').value);
  // formData.append("txt_registerCommunityCode", this.myForm.get('txt_registerCommunityCode').value);
  // formData.append("txt_addressCode", this.myForm.get('txt_addressCode').value);
  // formData.append("txt_syslctaddr_thaaddr", this.myForm.get('txt_syslctaddr_thaaddr').value);
  // formData.append("txt_mu", this.myForm.get('txt_mu').value);
  // formData.append("txt_soi", this.myForm.get('txt_soi').value);
  // formData.append("txt_road", this.myForm.get('txt_road').value);
  // formData.append("txt_tambon", this.myForm.get('txt_tambon').value);
  // formData.append("txt_amphor", this.myForm.get('txt_amphor').value);
  // formData.append("txt_province", this.myForm.get('txt_province').value);
  // formData.append("txt_zipcode", this.myForm.get('txt_zipcode').value);
  // formData.append("txt_phone", this.myForm.get('txt_phone').value);
  // formData.append("txt_fax", this.myForm.get('txt_fax').value);
  // formData.append("txt_email", this.myForm.get('txt_email').value);

  
   //console.log(this.txt_date)
             //alert('123')
    //   this.backendApiService.AddData(this.CONVENTIONs).subscribe(
    //    data=>{
    //              //console.log(data)   
    //              alert('789')
    //   }
    //  )
     
  }

}


  
interface CONVENTIONs {
   
    IDENTIFY: string;
 
  
 
}

