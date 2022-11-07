import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValadiationFormBuliderComponent } from './components/form-valadiation-form-bulider/form-valadiation-form-bulider.component';
import { FormValadiationFormGroupComponent } from './components/form-valadiation-form-group/form-valadiation-form-group.component';
import { FormValadiationComponent } from './components/form-valadiation/form-valadiation.component';
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
  {path:'form-bulider', component:FormValadiationFormBuliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
