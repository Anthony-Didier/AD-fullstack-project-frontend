import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';
import { UserTypeServiceService } from './user-type-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    UserTypeListComponent,
    UserTypeFormComponent,
    UserTypeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
