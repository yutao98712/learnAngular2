/**
 * Created by 14262 on 2017/3/1.
 */
import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
     <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls:[ './app.component.css' ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
