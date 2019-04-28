import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentsComponent } from './parents/parents.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    ChildrenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[ChildrenComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
