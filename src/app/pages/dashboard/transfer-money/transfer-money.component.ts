import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpService } from 'src/app/@cores/services/http/http.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
  host: {'class': 'w-full relative'}
})
export class TransferMoneyComponent implements OnInit {
  transferForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.transferForm = this.formBuilder.group({
      receiverName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      amount: [0, Validators.required],
      description: [''],
      pin: ['', [Validators.required, Validators.pattern(/[0-9]{4,4}/)]]
    })
  }

  onSend() {
    const receiverName = this.transferForm.get('receiverName')?.value;
    const accountNumber = this.transferForm.get('accountNumber')?.value;
    const amount = this.transferForm.get('amount')?.value;
    const description = this.transferForm.get('description')?.value;
    const pin = this.transferForm.get('pin')?.value;

    // console.log(receiverName, accountNumber, amount, description, pin);

    this.httpService.transferMoney(receiverName, accountNumber, amount, description, pin)
      .subscribe(data => {
        if(data.status) {
          console.log('Hello', data);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Transfer successful',
          });
        }
      })
    
  }

}
