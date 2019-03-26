import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { UserInfoComponentComponent } from './user-info-component/user-info-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    UserInfoComponentComponent,
    ProfileComponentComponent,
    SelectComponentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
