import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor( private router:Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }
  processLogout() {
     sessionStorage.removeItem('sid');
    this.router.navigate(['login']);

    
  }
}
