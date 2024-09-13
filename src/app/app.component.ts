import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "portFolio";
}
