import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuItems = [
    { 
      action: null,
      label: 'Home', 
      icon: 'po-icon-home',
      link: '/home' 
    },
    {
      action: null,
      label: 'Teste',
      link: '/teste'
    }
  ]
}