import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    ButtonModule, RouterOutlet, HttpClientModule
  ]
})
export class UserlistComponent {
  userList: User[] | undefined;
  cards: any[] = [
    { id: 1, title: 'Card 1', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
  ];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.userService.getUsers().subscribe((res: any) => {
      this.userList = res.users;
      console.log("userList",this.userList);
      
    })
  }
}
