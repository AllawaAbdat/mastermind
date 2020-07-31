import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { WdgGameComponent } from './wdg-game/wdg-game.component';
import { WdgHeaderComponent } from './wdg-header/wdg-header.component';
import { WdgHomeComponent } from './wdg-home/wdg-home.component';
import { WdgHeaderStrapComponent } from './wdg-header-strap/wdg-header-strap.component';
import { WdgRulesComponent } from './wdg-rules/wdg-rules.component';
import { WdgThanksComponent } from './wdg-thanks/wdg-thanks.component';
import { WdgFooterComponent } from './wdg-footer/wdg-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WdgGameComponent,
    WdgHeaderComponent,
    WdgHomeComponent,
    WdgHeaderStrapComponent,
    WdgRulesComponent,
    WdgThanksComponent,
    WdgFooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
