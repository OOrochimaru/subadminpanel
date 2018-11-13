import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Job Board',
        icon: 'pi pi-pw pi-file',
        items: [
          // {
          //   // icon: 'pi pi-pw pi-file',
          //   label: 'Jobs', 
          //   routerLink: ['/jobs'],
          // },
          // {
          //   icon: 'pi pi-pw pi-file',
          //   label: 'Jobs Detail', 
          //   routerLink: ['/jobsdetail'],
          // },
          {
            icon: 'pi pi-pw pi-file',
            label: 'Employers', 
            routerLink: ['/employers'],
          },
          // {
          //   icon: 'pi pi-pw pi-file',
          //   label: 'Job Seeker',
          //   routerLink: ['/jobseeker'],
          // },
        ]
      }
    ]
  }

}
