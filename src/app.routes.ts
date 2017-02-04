// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsageComponent } from './usage/usage.component';
import { HomeComponent } from './home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usage', component: UsageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);