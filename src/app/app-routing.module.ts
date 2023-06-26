import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { ChargingDataComponent } from './pages/charging-data/charging-data.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'charging-data',
    canActivate: [ AuthGuard ], 
    component: ChargingDataComponent
  },  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },  
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
