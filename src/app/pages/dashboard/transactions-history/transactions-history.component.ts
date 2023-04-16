import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss']
})
export class TransactionsHistoryComponent implements OnInit {

  keywords = "";
  loading = true;
  products = [
    {
      code: '4',
      name: 'ben',
      category: 'test',
      quantity: '4'
    }, {
      code: '4',
      name: 'riaba',
      category: 'test',
      quantity: '4'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
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

  getSeverity(status: any) {
      switch (status.toLowerCase()) {
          case 'unqualified':
              return 'danger';

          case 'qualified':
              return 'success';

          case 'new':
              return 'info';

          case 'negotiation':
              return 'warning';

          case 'renewal':
              return null;

          default:
            return null
      }
  }
}
