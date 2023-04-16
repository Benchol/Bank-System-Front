import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RefundAccoundComponent } from './refund-accound/refund-accound.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    RefundAccoundComponent,
    WithdrawMoneyComponent,
    TransferMoneyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
