import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportExportConventionRequestInputComponent } from './import-export-convention-request-input/import-export-convention-request-input.component';
import { ConventionRequestInputComponent } from './convention-request-input/convention-request-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportExportConventionRequestInputComponent,
    ConventionRequestInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,


    RouterModule.forRoot([
      {path:'', component: AppComponent, pathMatch:'full'},
      {path:'import-export-convention-request-input', component: ImportExportConventionRequestInputComponent},
      {path:'convention-request-input', component: ConventionRequestInputComponent},


      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
