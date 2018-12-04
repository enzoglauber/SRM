import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NavbarService } from '../../shared/resources/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  private data: Array<any> = [];

  constructor(
    private NavbarService: NavbarService
  ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.data = [];
    this.NavbarService.list().subscribe(data => {
      for (const item of data) {
        this.data.push(item);
      }
    });
  }
}
