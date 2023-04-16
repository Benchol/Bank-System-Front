import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
  host: {'class': 'w-full relative'}
})
export class TransferMoneyComponent implements OnInit {
  transferForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.transferForm = this.formBuilder.group({
      reveiverName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      amount: [0, Validators.required],
      description: [''],
      pin: ['', [Validators.required, Validators.pattern(/[0-9]{4,4}/)]]
    })
  }

  onSend() {}

}
