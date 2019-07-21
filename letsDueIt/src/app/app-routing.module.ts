import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyListComponent } from './components/my-list/my-list.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'myList', component: MyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
