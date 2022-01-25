import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DemoComponent } from './demo/demo.component';
import { FirstComponent } from './first/first.component';
import { InteractComponent } from './interact/interact.component';
import { NewreactiveComponent } from './newreactive/newreactive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ToArrayComponent } from './to-array/to-array.component';


const routes: Routes = [
  {path:"template",component: TemplateDrivenComponent},
  {path:"reactive",component: ReactiveComponent},
  {path:"newreactive",component: NewreactiveComponent},  
  {path:"pipes",component: PipeComponent},
  {path:"data",component:DataComponent},
  {path:"interact",component:InteractComponent },
  {path:"rxjs",component:RxjsComponent},
  {path:"toarray",component:ToArrayComponent},
  {path:'subject',component:SubjectComponent},
  {path : 'first',component:FirstComponent },
  {path:'demo',component:DemoComponent},
  {path:'interact',component:InteractComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
