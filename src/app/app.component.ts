import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from "./user/pages/users-page/users-page.component";
import { UserlistComponent } from './user/components/userlist/userlist.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,
        RouterOutlet,
        HttpClientModule, UsersPageComponent,UserlistComponent]
})
export class AppComponent {
  title = 'user-management-system';
}
