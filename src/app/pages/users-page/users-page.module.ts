import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { UserUpcertModule } from '../../components/user-upcert/user-upcert.module';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    UsersPageComponent,
    CommonModule,
    UsersPageRoutingModule,UserUpcertModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
  ],exports:[UsersPageComponent]
})
export class UsersPageModule { }
