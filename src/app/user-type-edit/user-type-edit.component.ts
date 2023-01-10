import { Component, OnInit } from '@angular/core';
import { UserType } from '../user-type';
import { UserTypeServiceService } from '../user-type-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-type-edit',
  templateUrl: './user-type-edit.component.html',
  styleUrls: ['./user-type-edit.component.css']
})
export class UserTypeEditComponent implements OnInit {
  idUserType: number;
  userType: UserType = new UserType();

  constructor(private route: ActivatedRoute, private router: Router, private userTypeService: UserTypeServiceService) { }

  ngOnInit(): void {
    this.idUserType = this.route.snapshot.params['id'];
    this.userTypeService.findUserTypeById(this.idUserType).subscribe(data => {
      this.userType = data;
    });
  }

  onSubmit() {
    this.userTypeService.updateUserType(this.idUserType, this.userType).subscribe(data => this.gotoUserTypeList());
  }

  gotoUserTypeList() {
    this.router.navigate(['/usertypes']);
  }
}
