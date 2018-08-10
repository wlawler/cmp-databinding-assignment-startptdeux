import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { Oddcomponent }  from './Odd/Odd.component';
import { evencomponent} from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    Oddcomponent,
    evencomponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
