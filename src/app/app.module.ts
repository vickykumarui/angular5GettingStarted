import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BookDetailTileComponent } from './book/book-detail-title/book-detail-title.component';
import { BookDetailUserComponent } from './book/book-detail-user/book-detail-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AdminconfigurationComponent } from './admin/admin-configuration/admin-configuration.component';
// tslint:disable-next-line:max-line-length
import { AdminManagementComponent } from './admin/admin-management/admin-management.component';
import { AdminTrackBooksComponent } from './admin/admin-track-books/admin-track-books.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { LibraryService } from '../app/services/libraryService';
import { AuthService } from '../app/services/auth.service';
import { BookLogComponent } from './book/book-log/book-log.component';

import { AuthGuard } from '../app/services/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    BookDetailTileComponent,
    BookDetailUserComponent,
    LogInComponent,
    UserProfileComponent,
    AdminconfigurationComponent,
    AdminMenuComponent,
    AdminManagementComponent,
    AdminTrackBooksComponent,
    UserMainComponent,
    BookLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LibraryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
