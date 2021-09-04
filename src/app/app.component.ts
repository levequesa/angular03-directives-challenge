import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular03-directives-challenge';
  bonjourTitle : string = 'Bonjour !';
  isAdmin : boolean = true;

}
