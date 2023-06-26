import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private store: Store<fromStore.State>) { 
    // Create the login form
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
  }

  /**
   * @description Submit the login form and check the credentials against mock data
   * @returns void
   */
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // let's check against mock username and password
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', username);

      const userdata = {
        isLoggedIn: true,
        loggedInUser: username
      };
      // dispatch an action for add userdata to store
      this.store.dispatch(new fromStore.AddUserdata(userdata));

      // dispatch an action for fetch userdata from store
      // this.store.dispatch(new fromStore.LoadUserdata());  
      
      this.router.navigate(['/charging-data']);
    } else {
      alert('Invalid username or password');
    }
    // Reset the form
    this.loginForm.reset();
  }
}
