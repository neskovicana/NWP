import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VetItemComponent } from './vet/vet-item/vet-item.component';
import { PetItemComponent } from './pet/pet-item/pet-item.component';
import { CreateVetComponent } from './vet/create-vet/create-vet.component';
import { VetListComponent } from './vet/vet-list/vet-list.component';
import { VetService } from './services/vet.service';
import { MessageService } from './services/message.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { PetClinicAppInterceptor } from './services/pet-clinic-app.interceptor';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { RegisterComponent } from './user/register/register.component';
import { VetDetailsComponent } from './vet/vet-details/vet-details.component';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    VetItemComponent,
    PetItemComponent,
    CreateVetComponent,
    VetListComponent,
    LoginComponent,
    RegisterComponent,
    VetDetailsComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    VetService,
    MessageService,
    AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PetClinicAppInterceptor,
      multi: true
    },
    UserService,
    UserStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
