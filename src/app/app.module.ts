import { CourseModule } from './courses/course.modules';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      },

    ]),
    HttpClientModule,
    CourseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
