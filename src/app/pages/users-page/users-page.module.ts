import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';


@NgModule({
  declarations: [],
  imports: [
    UsersPageComponent,
    CommonModule,
    UsersPageRoutingModule
  ],exports:[UsersPageComponent]
})
export class UsersPageModule { }
