import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserBarberProfileComponent } from './user-barbers/user-barber-profile/user-barber-profile.component';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        UserLoginComponent,
        UserRegisterComponent,
        UserProfileComponent,
        UserBarberProfileComponent
    ]
})
export class UserModule { }
