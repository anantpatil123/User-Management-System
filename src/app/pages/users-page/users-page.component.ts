import { Component } from '@angular/core';
import { UserUpcertComponent } from '../../components/user-upcert/user-upcert.component';
import { UserUpcertModule } from '../../components/user-upcert/user-upcert.module';

@Component({
  selector: 'users-page',
  standalone: true,
  imports: [UserUpcertModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

}
