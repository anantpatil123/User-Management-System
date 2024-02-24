import { Component } from '@angular/core';
import { UserUpcertComponent } from '../../components/user-upcert/user-upcert.component';
import { UserUpcertModule } from '../../components/user-upcert/user-upcert.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'users-page',
  standalone: true,
  imports: [UserUpcertModule,    InputTextModule,
    ButtonModule,],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {
userId: number|undefined;

}
