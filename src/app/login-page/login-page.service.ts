import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private userName = signal<string>('');

  constructor() {
    const localName = localStorage.getItem('userName');
    if (localName) {
      this.userName.set(JSON.parse(localName));
    }
  }

  setUserName(name: string) {
    this.userName.set(name);
    localStorage.setItem('userName', JSON.stringify(name));
  }

  get getUserName(): string {
    return this.userName();
  }

}
