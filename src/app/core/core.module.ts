import { Error404Component } from './components/error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    NavBarComponent,
    Error404Component,
  ],
  imports:[
    RouterModule.forChild([
        {
          path: '**', component: Error404Component
        },
    ]),
  ],
  exports: [
    NavBarComponent,
    Error404Component,
  ]
})
export class CoreModule{

}
