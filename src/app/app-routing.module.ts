import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { AuthGuard } from './guards/auth.guard';
const routes: Routes=[
  {path:'register', component:RegisterPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'homepage',
  canActivate:[AuthGuard],
    loadChildren:()=> 
  import('./modules/home-page/home-page.module').then((m)=> m.HomePageModule)},
    {path:'', redirectTo:'/register', pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
