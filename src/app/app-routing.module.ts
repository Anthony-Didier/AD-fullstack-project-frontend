import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserTypeEditComponent } from './user-type-edit/user-type-edit.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'usertypes', component: UserTypeListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'addusertype', component: UserTypeFormComponent },
  { path: 'updateuser/:id', component: UserEditComponent },
  { path: 'updateusertype/:id', component: UserTypeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
