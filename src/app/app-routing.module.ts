import { StatsComponent } from './stats/stats.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path:'home',
    component:StatsComponent
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'profile',
    component:ProfileComponent
  },{
    path:'help',
    component:HelpComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
