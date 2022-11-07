import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveFormComponent } from './responsive-form/responsive-form.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DailogComponent } from './dailog/dailog.component';
import { MirostatuspageComponent } from './mirostatuspage/mirostatuspage.component';
import { RequestaccesPageComponent } from './requestacces-page/requestacces-page.component';
import { FormValadiationComponent } from './components/form-valadiation/form-valadiation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormValadiationFormGroupComponent } from './components/form-valadiation-form-group/form-valadiation-form-group.component';
import { FormValadiationFormBuliderComponent } from './components/form-valadiation-form-bulider/form-valadiation-form-bulider.component';


@NgModule({
  declarations: [
    AppComponent,
    ResponsiveFormComponent,
    Form2Component,
    Form1Component,
    DailogComponent,
    MirostatuspageComponent,
    RequestaccesPageComponent,
    FormValadiationComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsComponent,
    FormValadiationFormGroupComponent,
    FormValadiationFormBuliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule ,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
