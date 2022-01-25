import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { NewreactiveComponent } from './newreactive/newreactive.component';
import { PipesPipe } from './pipes.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { EmployeePipe } from './employee.pipe';
import { DataComponent } from './data/data.component';
import { InteractComponent } from './interact/interact.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { IntervalComponent } from './interval/interval.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { FirstComponent } from './first/first.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    NewreactiveComponent,
    PipesPipe,
    PipeComponent,
    EmployeePipe,
    DataComponent,
    InteractComponent,
    RxjsComponent,
    IntervalComponent,
    ToArrayComponent,
    FirstComponent,
    DemoComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
