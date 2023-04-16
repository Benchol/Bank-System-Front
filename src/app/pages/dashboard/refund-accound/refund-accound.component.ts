import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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

  refund() {
    const amount = this.refundForm.get('amount')?.value;
    const pin = this.refundForm.get('pin')?.value;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Amount added successful',
    });

  }

}
