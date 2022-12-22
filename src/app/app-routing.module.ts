import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CampgianComponent } from './components/campgian/campgian.component';
import { FormValadiationFormBuliderComponent } from './components/form-valadiation-form-bulider/form-valadiation-form-bulider.component';
import { FormValadiationFormGroupComponent } from './components/form-valadiation-form-group/form-valadiation-form-group.component';
import { FormValadiationComponent } from './components/form-valadiation/form-valadiation.component';
import { KitsComponent } from './components/kits/kits.component';
import { NgModelFormComponent } from './components/ng-model-form/ng-model-form.component';
import { ProductStatusComponent } from './components/product-status/product-status.component';
import { ProgressLabelComponent } from './components/progress-label/progress-label.component';
import { ProgressStepComponent } from './components/progress-step/progress-step.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { MirostatuspageComponent } from './mirostatuspage/mirostatuspage.component';
import { RequestaccesPageComponent } from './requestacces-page/requestacces-page.component';
import { ResponsiveFormComponent } from './responsive-form/responsive-form.component';


const routes: Routes = [
  { path: '', component: Form1Component },
  { path: 'direct', component: Form2Component },
  { path: 'form1', component: Form1Component },
  { path: 'header', component: ResponsiveFormComponent },
  { path: 'child', component: MirostatuspageComponent },
  { path: 'acces', component: RequestaccesPageComponent },
  { path: 'form', component: FormValadiationComponent },
  {path:'reactiveForm', component:ReactiveFormsComponent},
  {path:'form-group', component:FormValadiationFormGroupComponent},
  {path:'form-bulider', component:FormValadiationFormBuliderComponent},
  {path:'ng-model', component:NgModelFormComponent},
  {path:'kits', component:KitsComponent},
  {path:'Addproduct', component:AddproductComponent},
  {path:'productStatus', component:ProductStatusComponent},
  {path:'productLabel', component:ProgressLabelComponent},
  {path:'progressStep', component:ProgressStepComponent},
  {path:'campigan', component:CampgianComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
