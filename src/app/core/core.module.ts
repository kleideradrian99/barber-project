import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ]
})
export class CoreModule { }
