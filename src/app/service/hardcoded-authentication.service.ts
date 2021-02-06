import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  autheticate(username, password) {
 //   console.log('before ' + this.isUserLoggedIn());
    if (username === 'KLS' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
   let user = sessionStorage.getItem('authenticatedUser') 
    return !(user===null)
    
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
