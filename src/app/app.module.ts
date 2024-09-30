import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroresModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
