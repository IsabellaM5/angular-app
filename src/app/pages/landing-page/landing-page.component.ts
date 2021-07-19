import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.userService.userInfo = this.userForm.value;
    this.router.navigateByUrl('/pokemon');
    console.log(this.userForm.value);
    this.userForm.reset({'name': '', 'age': ''});

    console.log(this.userForm.value);
  }
}