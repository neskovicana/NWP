import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { VetListComponent } from './vet/vet-list/vet-list.component';
import { CreateVetComponent } from './vet/create-vet/create-vet.component';
import { VetDetailsComponent } from './vet/vet-details/vet-details.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vets/list', component: VetListComponent, canActivate: [authGuard] },
  { path: 'vets/create', component: CreateVetComponent, canActivate: [authGuard] },
  { path: 'vets/:phoneNumber', component: VetDetailsComponent, canActivate: [authGuard] },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
