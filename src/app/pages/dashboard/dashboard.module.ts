import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RefundAccoundComponent } from './refund-accound/refund-accound.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { RouterModule } from '@angular/router';


import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';
import { CardModule } from 'primeng/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RefundAccoundComponent,
    WithdrawMoneyComponent,
    TransferMoneyComponent,
    TransactionsHistoryComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    TagModule,
    ProgressBarModule,
    CardModule,
    NgApexchartsModule
  ],
  providers: [MessageService]
})
export class DashboardModule { }
