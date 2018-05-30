import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../app/services/libraryService';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-log-in',
  providers: [LibraryService],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private person = {};
  public username;
  public password;
  constructor(
    private router: Router,
    private libraryService: LibraryService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  logIn(user, pass) {
    this.authService.logIn1(user, pass).then(res => {
      console.log(res);
      if (res.access === 'AdminAccess') {
        sessionStorage.setItem('isLoogedIn', '1');
        this.router.navigate(['/admin']);
      } else if (res.access === 'UserAccess') {
        this.libraryService.setCurrentUser(res.data);
        sessionStorage.setItem('isLoogedIn', '1');
        this.router.navigate(['/user']);
      }
    }).catch(err => {
      alert(err);
    });
  }
}
