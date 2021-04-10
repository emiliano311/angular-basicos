import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModulo } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DgzModule } from './dbz/dgz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModulo,
    ContadorModule,
    DgzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
