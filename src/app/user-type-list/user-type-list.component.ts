import { Component, OnInit } from '@angular/core';
import { UserType } from '../user-type';
import { UserTypeServiceService } from '../user-type-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent implements OnInit {

  userTypes: UserType[];

  constructor(private userTypeService: UserTypeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getUserTypes();
  }

  private getUserTypes() {
    this.userTypeService.findAllUserTypes().subscribe(data => {
      this.userTypes = data;
    });
  }

  updateUserType(id: number) {
    this.router.navigate(['updateusertype', id]);
  }

  deleteUserType(id: number) {
    this.userTypeService.deleteUserType(id).subscribe(data => {
      this.getUserTypes();
    })
  }
}
