import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route}
    {path:"home", component: HomeComponent, data: { animation: 'HomePage' }},
    {path:"services", component: ServicesComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'careers', component: CareersComponent}
];
