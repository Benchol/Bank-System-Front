import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/@cores/models/user.model';
import { DataService } from 'src/app/@cores/services/data/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUser!: User;

  constructor(
      private router: Router,
      private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(
      (user: User | null) => {
        if(user) {
          this.currentUser = user;
        }
      } 
    )
  }

  navigate(link: string) {
    this.router.navigate([link])
  }

}
