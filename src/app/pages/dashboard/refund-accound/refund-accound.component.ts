import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/@cores/services/data/data.service';
import { HttpService } from 'src/app/@cores/services/http/http.service';

@Component({
  selector: 'app-refund-accound',
  templateUrl: './refund-accound.component.html',
  styleUrls: ['./refund-accound.component.scss'],
  host: {'class': 'w-full relative'}
})
export class RefundAccoundComponent implements OnInit {

  refundForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private httpService: HttpService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.refundForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern(/[0-9]{4,4}/)]],
      pin: ['', [Validators.required, Validators.pattern(/[0-9]{4,4}/)]]
    })
  }

  onRefund() {
    const amount = this.refundForm.get('amount')?.value;
    const pin = this.refundForm.get('pin')?.value;

    this.httpService.refund(amount, pin)
      .subscribe(data => {
        if(data.status) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Amount added successful',
          });

          const userUpdated = {
            id: data.data.id,
            name: data.data.name,
            username: data.data.username,
            balance: data.data.balance,
            role: data.data.role
          }

          this.dataService.currentUser.next(userUpdated);
          this.initForm()
        }
      })

    

  }

}
