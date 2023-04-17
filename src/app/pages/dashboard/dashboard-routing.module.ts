import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RefundAccoundComponent } from './refund-accound/refund-accound.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent
    }, {
      path: 'refund',
      component: RefundAccoundComponent
    }, {
      path: 'transfer',
      component: TransferMoneyComponent
    }, {
      path: 'withdraw',
      component: WithdrawMoneyComponent
    }, {
      path: 'transactions',
      component: TransactionsHistoryComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
