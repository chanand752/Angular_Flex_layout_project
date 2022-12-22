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
import { NgModelFormComponent } from './components/ng-model-form/ng-model-form.component';
import { MatDailogboxComponent } from './components/mat-dailogbox/mat-dailogbox.component';
import { KitsComponent } from './components/kits/kits.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductStatusComponent } from './components/product-status/product-status.component';
import { ProgressLabelComponent } from './components/progress-label/progress-label.component';
import { ProgressStepComponent } from './components/progress-step/progress-step.component';
import { ProgressStepperComponent } from './components/progress-stepper/progress-stepper.component';
import { CampgianComponent } from './components/campgian/campgian.component';
import { CampgianDialogComponent } from './components/campgian-dialog/campgian-dialog.component';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';

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
    FormValadiationFormBuliderComponent,
    NgModelFormComponent,
    MatDailogboxComponent,
    KitsComponent,
    AddproductComponent,
    ProductStatusComponent,
    ProgressLabelComponent,
    ProgressStepComponent,
    ProgressStepperComponent,
    CampgianComponent,
    CampgianDialogComponent,
    ForbiddenNameDirective,

  ],
  entryComponents:[ MatDailogboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule ,
    ReactiveFormsModule,
    NgxDatatableModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
