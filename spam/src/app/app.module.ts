import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FraseCompComponent } from './frase-comp/frase-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FraseCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
