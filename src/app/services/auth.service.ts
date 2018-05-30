import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn: boolean;
  redirectUrl: string;
  constructor() {
    if (sessionStorage.getItem('isLoogedIn') === '1') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  private validIds = {
    'validAdminIds': [
      'admin'],
    'validUserIDs': ['vicky', 'kumar'],
    'admin': 'admin',
    'vicky': 'vicky@123',
    'kumar': 'kumar@123'

  };
  logIn1(email, password): Promise<any> {
    const resolveObj = {
      access: '',
      data: undefined
    };
    if (this.validIds.validAdminIds.indexOf(email) !== -1 && this.validIds[email] === password) {
      resolveObj.access = 'AdminAccess';
      this.isLoggedIn = true;
      this.redirectUrl = '/admin';
      return Promise.resolve(resolveObj);
    } else if (this.validIds.validUserIDs.indexOf(email) !== -1 && this.validIds[email] === password) {
      resolveObj.access = 'UserAccess';
      this.redirectUrl = '/user';
      this.isLoggedIn = true;
      resolveObj.data = this.validIds.validUserIDs.indexOf(email) + 1;
      return Promise.resolve(resolveObj);
    } else {
      return Promise.reject('Aunthentication failed');
    }
  }
}
