import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute, Router } from '@angular/router';


import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { AuthGuard } from '../app/services/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LogInComponent },
    { path: 'user', canActivate: [AuthGuard], component: UserMainComponent, data: { id: null } },
    { path: 'admin', canActivate: [AuthGuard], component: AdminMenuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
