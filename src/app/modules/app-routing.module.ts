import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoComponent } from '../components/page2/page-two/page-two.component'
import { AppComponent } from '../components/app-component/app.component'

const routes: Routes = [{
  path: 'secondpage',
  component: PageTwoComponent
},
{path:'firstpage',
component:AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
