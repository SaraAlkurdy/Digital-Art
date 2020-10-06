import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
