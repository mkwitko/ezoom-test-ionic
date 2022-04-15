import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title;

  // Passar url completa
  @Input() url;

  @Input() menu = true;
  @Input() color = 'primary';

  constructor() { }

  ngOnInit() {}

}
