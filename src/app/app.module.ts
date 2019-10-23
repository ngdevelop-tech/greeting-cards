import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';
import { CreateGreetingCardComponent } from './create-greeting-card/create-greeting-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GreetingCardComponent,
    CreateGreetingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
