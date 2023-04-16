import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/@cores/models/user.model';
import { DataService } from 'src/app/@cores/services/data/data.service';
import { HttpService } from 'src/app/@cores/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _Activatedroute: ActivatedRoute,
    private messageService: MessageService,
    private httpService: HttpService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log('params', this._Activatedroute.snapshot.paramMap.get('isNewMember'));
    
    if(this._Activatedroute.snapshot.paramMap.get('isNewMember')) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Account created successful',
      });
    }
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['rianaben', Validators.required],
      pin: ['hero', [Validators.required, Validators.pattern(/[0-9]{4,4}/)]],
      rememberMe: [false, []],
    });
  }
  
  onLogin() {
    const username = this.loginForm.get('username')?.value;
    const pin = this.loginForm.get('pin')?.value;

    this.httpService.login(username, pin)
      .subscribe(data => {
        if(data.status) {
          const user: User = {
            id: data.data.id,
            name: data.data.name,
            username: data.data.username,
            balance: data.data.balance,
            role: data.data.role
          }
          
          localStorage.setItem('token', data.token);
          this.dataService.currentUser.next(user)
          this.dataService.isConnected.next(true)
          this.router.navigate(['/dashboard'])
        }
      })
  }
}
