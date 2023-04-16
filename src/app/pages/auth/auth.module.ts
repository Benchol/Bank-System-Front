import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    ToastModule
  ],
  providers: [MessageService]
})
export class AuthModule { }
