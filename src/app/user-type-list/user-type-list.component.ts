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
  sortProperty: string = 'id';
  sortOrder = 1;

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

  sortBy(property: string) {
    this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = property;
    this.userTypes = [...this.userTypes.sort((a: any, b: any) => {
      let result = 0;
      if (a[property] < b[property]) {
        result = -1;
      }
      if (a[property] > b[property]) {
        result = 1;
      }
      return result * this.sortOrder;
    })];
  }

  sortIcon(property: string) {
    if (property === this.sortProperty) {
      return this.sortOrder === 1 ? '▲' : '▼';
    }
    return '';
  }
}
