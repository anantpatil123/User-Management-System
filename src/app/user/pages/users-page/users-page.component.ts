import { Component } from '@angular/core';
import { UserUpcertComponent } from '../../components/user-upcert/user-upcert.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'users-page',
    standalone: true,
    templateUrl: './users-page.component.html',
    styleUrl: './users-page.component.scss',
    imports: [InputTextModule,
        ButtonModule, UserUpcertComponent]
})
export class UsersPageComponent {
userId: number|undefined;

}
