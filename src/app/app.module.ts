import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { HeaderComponent } from  './dinamic-content/header/header.component';
import { CardContentComponent } from  './dinamic-content/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LeftbarComponent,
    HeaderComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
