import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { UserUpcertModule } from '../../components/user-upcert/user-upcert.module';


@NgModule({
  declarations: [],
  imports: [
    UsersPageComponent,
    CommonModule,
    UsersPageRoutingModule,UserUpcertModule
  ],exports:[UsersPageComponent]
})
export class UsersPageModule { }
