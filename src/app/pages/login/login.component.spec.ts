import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  type ErrorMessagesType = {
    required?: () => string;
    minlength?: (params: { requiredLength: any }) => string;
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ FormsModule, ReactiveFormsModule ],
      providers: [ FormBuilder, provideMockStore({}) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Login form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });  
  it('Username field validity', () => { 
    let username = component.loginForm.controls['username']; 
    expect(username.valid).toBeFalsy(); 
    let errors: ErrorMessagesType; 
    errors = username.errors || {}; 
    expect(errors['required']).toBeTruthy(); 
    username.setValue("test"); 
    errors = username.errors || {}; 
    expect(errors['required']).toBeFalsy(); 
    expect(errors['minlength']).toBeFalsy();
    username.setValue("tes"); 
    errors = username.errors || {}; 
    expect(errors['required']).toBeFalsy(); 
    expect(errors['minlength']).toBeTruthy();    
  });
  it('Password field validity', () => {
    let password = component.loginForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
    let errors: ErrorMessagesType; 
    errors = password.errors || {}; 
    expect(errors['required']).toBeTruthy(); 
    password.setValue("test"); 
    errors = password.errors || {}; 
    expect(errors['required']).toBeFalsy(); 
    expect(errors['minlength']).toBeFalsy(); 
    password.setValue("tes"); 
    errors = password.errors || {}; 
    expect(errors['required']).toBeFalsy(); 
    expect(errors['minlength']).toBeTruthy();      
  });
  it('submitting a form emits a user', waitForAsync(() => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue("test");
    component.loginForm.controls['password'].setValue("test");
    expect(component.loginForm.valid).toBeTruthy();
  }));
  it('should call onSubmit when the form is submitted', () => {
    spyOn(component, 'onSubmit').and.callThrough();

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });
  it('should display success message when username and password are correct', () => {
    const form = fixture.nativeElement.querySelector('form');
    const usernameInput = form.querySelector('#username');
    const passwordInput = form.querySelector('#password');
    const submitButton = form.querySelector('button[type="submit"]');

    usernameInput.value = 'admin';
    passwordInput.value = 'password';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    spyOn(window, 'alert');

    submitButton.click();

    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });
  it('should display error message when username or password is incorrect', () => {
    const form = fixture.nativeElement.querySelector('form');
    const usernameInput = form.querySelector('#username');
    const passwordInput = form.querySelector('#password');
    const submitButton = form.querySelector('button[type="submit"]');

    usernameInput.value = 'admin';
    passwordInput.value = 'wrongpassword';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    spyOn(window, 'alert');

    submitButton.click();

    expect(window.alert).toHaveBeenCalledWith('Invalid username or password');
  });  
});
