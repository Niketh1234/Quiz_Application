import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NavbarComponent,
    StartpageComponent,
    HttpClientModule,
    TopicsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
