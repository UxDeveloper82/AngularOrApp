import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepairCardComponent } from './repair-card/repair-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './personal/personal.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepairCardComponent,
    NavComponent,
    ContactComponent,
    MyservicesComponent,
    GalleryComponent,
    BlogComponent,
    LoginComponent,
    AboutComponent,
    PersonalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
