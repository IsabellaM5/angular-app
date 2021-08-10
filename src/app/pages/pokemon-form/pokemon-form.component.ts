import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  userForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.userService.userInfo = this.userForm.value;
    this.router.navigateByUrl('pokemon');
    console.log(this.userForm.value);
    this.userForm.reset({'name': '', 'age': ''});
    console.log(this.userForm.value);
  }
}