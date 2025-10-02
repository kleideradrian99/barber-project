import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./user-login/user-login.component').then(m => m.UserLoginComponent) },
    { path: 'register', loadComponent: () => import('./user-register/user-register.component').then(m => m.UserRegisterComponent) },
    { path: 'profile', loadComponent: () => import('./user-profile/user-profile.component').then(m => m.UserProfileComponent) },
    { path: 'barbers', loadComponent: () => import('./user-barbers/user-barbers.component').then(m => m.UserBarbersComponent) },
    { path: 'barber/:id', loadComponent: () => import('./user-barbers/user-barber-profile/user-barber-profile.component').then(m => m.UserBarberProfileComponent) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
