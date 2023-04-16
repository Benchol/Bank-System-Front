import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/@cores/services/http/http.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isApproved = false;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/[0-9]{4,4}/)]],
      approval: [false, Validators.required],
    });
  }

  sleep(millsec: number): Promise<void> {
    return new Promise((resolve) =>
      window.setTimeout(() => {
        resolve();
      }, millsec)
    );
  }

  onRegister() {
    const name = this.registerForm.get('name')?.value;
    const username = this.registerForm.get('username')?.value;
    const pin = this.registerForm.get('pin')?.value;

    console.log(name, username, pin);
    this.httpService.register(name, username, pin).subscribe(async (data) => {
      console.log('Response ', data);
      if (data.status) {
        
        this.router.navigate(['/auth/login', { isNewMember: true }]);
      }
    });
  }
}
