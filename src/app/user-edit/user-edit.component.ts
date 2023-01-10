import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  idUser: number;
  user: User = new User();

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.userService.findUserById(this.idUser).subscribe(data => {
      this.user = data;
    });
  }

  onSubmit() {
    this.userService.updateUser(this.idUser, this.user).subscribe(data => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
