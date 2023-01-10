import { Component, OnInit } from '@angular/core';
import { UserType } from '../user-type';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTypeServiceService } from '../user-type-service.service';

@Component({
  selector: 'app-user-type-form',
  templateUrl: './user-type-form.component.html',
  styleUrls: ['./user-type-form.component.css']
})
export class UserTypeFormComponent implements OnInit {

  userType: UserType;

  constructor(private route: ActivatedRoute, private router: Router, private userTypeService: UserTypeServiceService) {
    this.userType = new UserType();
  }

  ngOnInit(): void {

  }

  saveUserType() {
    this.userTypeService.createUserType(this.userType).subscribe(data => this.gotoUserTypeList());
  }

  onSubmit() {
    this.saveUserType();
  }

  gotoUserTypeList() {
    this.router.navigate(['/usertypes']);
  }
}
