import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number) {
    this.router.navigate(['updateuser', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      this.getUsers();
    })
  }
}
