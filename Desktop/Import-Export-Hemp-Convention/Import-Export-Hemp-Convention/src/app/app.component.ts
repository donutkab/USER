import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from 'src/Service/backend-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Import-Export-Hemp-Convention';
  myForm: FormGroup;
  namedata
  User
  name
  syslctaddr_thanameplace
  constructor( private http: HttpClient,  private backendApiService : BackendApiService ) { 
    this.myForm = new FormGroup({
      syslctaddr_thanameplace: new FormControl(),
      namedata: new FormControl(),
      date: new FormControl(),


      User: new FormControl(),
   
     
   });
  }
  
  IDENTIFY
  IDENTIFY2
  IDENTIFY3


  testIDA
   async ngOnInit() {
 
       await this.backendApiService.GetConventionData().subscribe(
         data=>{
                //  this.IDENTIFY = data.CONVENTIONs.
           
               
           //this.namedata =this.User[0].name
            //alert(JSON.stringify( this.testIDA))
          //console.log(this.User[0].name)
        }
      )
  
      //   //alert(this.namedata )
      //   //console.log(this.User[0].name)
      }

      M_IDENTIFY: AdditiveSynonyms;

     datatest
      ClickAddDes(f: NgForm) {

        // let doc= {
        //   idatata : this.editida,
        //   status : this.statusIdSelection,
        //   STAFF_REMARK: this.staffRemark
        // }
       
        
    let doc = {
      IDENTIFY: "5555",
      IDENTIFY2: "6666",
      IDENTIFY3: "57777555"
     
    }

       // alert(JSON.stringify(f.value))
        this.M_IDENTIFY = f.value
       // this.M_IDENTIFY.IDENTIFY = f.value.IDENTIFY
       //  this.M_IDENTIFY.IDENTIFY2 = f.value.IDENTIFY2
       // alert(JSON.stringify(this.M_IDENTIFY))
       alert(JSON.stringify(this.M_IDENTIFY));
        this.backendApiService.AddData(f.value).subscribe(data => {
          alert('status ok55')
          //window.location.reload();
          //this.functional_id = data.functional_id;
         //this.functional_description = data.functional_description;
        });
      }




      submit(data){

      }
  }
 

  
// interface Functional2 {
//   IDENTIFY: string;
 
// }


interface AdditiveSynonyms {
  IDENTIFY: string;
  IDENTIFY2: string;
  IDENTIFY3: string;
  // IDA: string;
  // IDA
  // foods_code: string;
  // foods_name: string;
  // foods_description_th: string;
  // foods_description_en: string;
  // parent_id: number;
  // parent_id_1: number;
  // parent_id_2: number;
  // parent_id_3: number;
}
 