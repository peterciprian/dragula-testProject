import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SomeComponent } from './some.component';
import { DragulaModule } from 'ng2-dragula';
import { AnotherComponent } from './another.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DragulaModule.forRoot()],
  declarations: [AppComponent, SomeComponent, AnotherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
