import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UserType } from '../user-type';
import { UserTypeServiceService } from '../user-type-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  userType: UserType;
  userTypes: UserType[];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService, private userTypeService: UserTypeServiceService) {
    this.user = new User();
    this.userType = new UserType();
  }

  ngOnInit(): void {
    this.getUserTypes();
  }

  private getUserTypes() {
    this.userTypeService.findAllUserTypes().subscribe(data => {
      this.userTypes = data;
    });
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => this.gotoUserList());
  }

  onSubmit() {
    this.saveUser();
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
