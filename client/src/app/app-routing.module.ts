import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'navbar',component:NavbarComponent},
{path:'footer',component:FooterComponent},
{path:'home',component:HomeComponent,children: [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component:LogoutModalComponent  },
],},
{ path: 'register',component:RegisterComponent},
{ path:'contact-us',component:ContactUsComponent},
{ path:'',redirectTo:'/login',pathMatch:'full'},
{ path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
