import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssignmenttwoComponent } from './assignmenttwo/assignmenttwo.component';

@NgModule({
  declarations: [AppComponent, AssignmenttwoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
