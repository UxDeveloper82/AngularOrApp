import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { PersonalComponent } from './personal/personal.component';
import { RepairCardComponent } from './repair-card/repair-card.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'myservices', component: MyservicesComponent},
  { path: 'personal', component: PersonalComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path: 'repairs', component: RepairCardComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
