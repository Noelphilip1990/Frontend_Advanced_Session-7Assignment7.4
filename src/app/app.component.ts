import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Assignament!';
	role: string;

 roleList :any=[
 {role:'Admin'},
 {role:'Supervisor'},
 {role:'Super admin'},
 {role:'Member'}
 ];
 constructor() { }
 


}
