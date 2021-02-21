import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptModule } from '@nativescript/angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component'
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './models/users/user.service';

FriendsComponent

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
     // TODO: The HttpClientInMemoryWebApiModule module intercepts HTTP requests
     // and returns simulated server responses.
     // Remove it when a real server is ready to receive requests.
     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FriendsComponent,
    LandingComponent,
    LoginComponent
  ],
  providers: [
    UserService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
