import { Component } from '@angular/core';

@Component({
  selector: 'buh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Barnacles';
  links = [
    {title: "test", path: "/"},
    {title: "test", path: "/"},
    {title: "test", path: "/"},
  ]
}
