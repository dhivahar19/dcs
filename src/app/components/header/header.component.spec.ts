import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { LoginComponent } from './../../pages/login/login.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[RouterTestingModule.withRoutes([
        { path: 'login', component: LoginComponent}
      ])],
      providers: [ provideMockStore({}) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#logout should clear the localStorage and navigate to login page', () => {
    spyOn(component.router, 'navigate');
    component.logout();
    expect(component.router.navigate).toHaveBeenCalledWith(['/login']);
    expect(localStorage.getItem('isLoggedIn')).toBeNull();
    expect(localStorage.getItem('loggedInUser')).toBeNull();
  });
  it('should trigger logout function on button click', () => {
    spyOn(component, 'logout');
    const button = fixture.nativeElement.querySelector('a.logout');
    button.click();
    expect(component.logout).toHaveBeenCalled();
  });  
});
