import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api'
import { User } from 'src/app/@cores/models/user.model';
import { DataService } from 'src/app/@cores/services/data/data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sidebarVisible = false;
  items!: MenuItem[];
  currentUser!: User;

  constructor(
    private messageService: MessageService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(
      (user: User | null) => {
        if(user) {
          this.currentUser = user
        }
      }
    )
    this.items = [
      {
          label: this.currentUser.name,
          items: [
              {
                  label: 'Settings',
                  icon: 'pi pi-wrench',
                  command: () => {
                      
                  }
              },
              {
                  label: 'Log out',
                  icon: 'pi pi-sign-out',
                  command: () => {
                    console.log('Hello');
                    
                    this.dataService.isConnected.next(false)
                  }
              }
          ]
      }
  ];
  }

}
