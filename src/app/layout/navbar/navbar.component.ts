import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sidebarVisible = false;
  items!: MenuItem[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Account',
          items: [
              {
                  label: 'Settings',
                  icon: 'pi pi-wrench',
                  command: () => {
                      
                  }
              },
              {
                  label: 'Log out',
                  icon: 'pi pi-arrow-circle-right',
                  command: () => {
                  }
              }
          ]
      }
  ];
  }

}
