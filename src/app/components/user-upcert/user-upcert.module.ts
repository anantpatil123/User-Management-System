import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUpcertComponent } from './user-upcert.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    UserUpcertComponent,
    CommonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ],exports:[UserUpcertComponent]
})
export class UserUpcertModule { }
