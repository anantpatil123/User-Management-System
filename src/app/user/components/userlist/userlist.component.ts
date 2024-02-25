import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  standalone: true,
  imports: [InputTextModule,
    ButtonModule, RouterOutlet, HttpClientModule,RouterLink
  ]
})
export class UserlistComponent {
  userList: User[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe((res: any) => {
      this.userList = res;
    })
  }

  deleteUser(userId:number){
    this.userService.deleteUser(userId).subscribe((res: any) => {
      this.getUserList();
    })  
  }
}
