import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NavbarService } from '../../shared/resources/navbar.service';
import { ActionService } from '../../shared/resources/action.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  private data: Array<any> = [];

  constructor(
    private NavbarService: NavbarService,
    private ActionService: ActionService,
  ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    // this.data = [];
    this.data = [
      {
        title: 'Home',
        icon: 'fas fa-home',
        link: 'home',
      },
      {
        title: 'Painel de Gestão',
        icon: 'fas fa-globe',
        link: 'management-panel',
      },
      {
        title: 'Conta Digital',
        icon: 'fas fa-at',
        link: 'digital-account',
      },
      {
        title: 'Ant. de Recebimento',
        icon: 'fas fa-history',
        link: 'receipt',
      },
    ];
    this.NavbarService.list().subscribe(data => {
      // for (const item of data) {
      //   this.data.push(item);
      // }
    });
  }
}
