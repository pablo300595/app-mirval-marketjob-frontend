import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  isLoged: boolean
  constructor() { }

  ngOnInit(): void {
    this.isLoged = true
  }

}
