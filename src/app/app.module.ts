import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovertPipe } from './covert.pipe';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { InputComponent } from './input/input.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CovertPipe,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    ErrorComponent,
    NavComponent,
    ServiceDetailsComponent,
    InputComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:IndexComponent},
      {path:'about',component:AboutComponent},
      {path:'services',component:ServicesComponent},
      {path:'services/:id',component:ServiceDetailsComponent},
      {path:'contact',component:ContactComponent},
      {path:'**', component:ErrorComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
