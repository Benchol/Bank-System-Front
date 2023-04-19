import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Transaction } from 'src/app/@cores/models/transaction.model';
import { HttpService } from 'src/app/@cores/services/http/http.service';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss']
})
export class TransactionsHistoryComponent implements OnInit {

  listTransactions: Transaction[] = [];
  keywords = "";
  loading = true;
  
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllTransactions()
  }

  getAllTransactions() {
    this.httpService.getAllMyTransactions()
      .subscribe(data => {
        if(data.status) {
          // this.loading = false;
          this.listTransactions = data.transactions;
          console.log('ok ', this.listTransactions);
          
        }
      })
  }

  search(words: string) {
    console.log(words);
    
  }

  clear(table: Table) {
    table.clear();
  }

  clearSearch() {
    this.keywords = ""
  }

  getTypeTransaction(type: string) {
    switch (type) {
        case 'deposit':
            return 'success';
        case 'transfer':
            return 'warning';
        case 'withdraw':
            return 'danger';
        default:
          return 'danger';
    }
}

}
