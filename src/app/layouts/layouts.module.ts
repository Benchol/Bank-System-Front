import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VerticalComponent } from './vertical/vertical.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    VerticalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
