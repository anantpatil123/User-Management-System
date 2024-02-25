import { Component, Input, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'user-upcert',
  standalone: true,
  imports: [  InputTextModule,
    ButtonModule,ReactiveFormsModule,FormsModule,RouterOutlet,HttpClientModule
  ],
  templateUrl: './user-upcert.component.html',
  styleUrls: ['./user-upcert.component.scss']
})
export class UserUpcertComponent {
  [x: string]: any;
  userForm: FormGroup;
  @Input() userId: any;
  editMode: boolean = false;
  constructor(public fb: FormBuilder,
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      'firstName': new FormControl(  null , [Validators.required, Validators.minLength(3), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]),
      'lastName': new FormControl<any>(null, [Validators.required,]),
      'address': new FormControl<any>(null, [Validators.required,]),
      'email': new FormControl<any>(null, [Validators.required, Validators.email],),
      'phoneNumber': new FormControl<any>(null, [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]),
    })

  }

  ngOnInit() {

    this.userId = this.activeRoute.snapshot.paramMap.get('userId');
    if (this.userId) {
      this.editMode = true;
      console.log("UserId ",this.userId);
      this.getUserById(this.userId);
    }
  }

  onSubmit() {
  if(this.userForm.valid || this.userId == null){
    console.log("Form Value", this.userForm.value);
       this.createUser(this.userForm.value);
  }else  {
    this.updateUser(this.userForm.value)
    
  }
}


  createUser(formValue:User) {
    if (this.userForm.valid) {
      const user = formValue;
      this.userService.createUser(user).subscribe((res:any) => {
        console.log("Created User ",res);
      }, (error: any) => {
        console.log("Error", error);
      });
    }
  }

  updateUser(formValue:User) {
    if (this.userForm.valid) {
      const user = formValue;
      this.userService.updateUser(this.userId, user).subscribe(() => {
      }, (error: any) => {
        console.log("Error", error);
      });
    }
  }

  getUserById(userId:any){
this.userService.getUserById(userId).subscribe((res:any)=>{
  this.userForm.patchValue(res);
})
  }

}
