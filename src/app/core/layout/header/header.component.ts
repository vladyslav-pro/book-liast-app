import {Component, inject, OnInit} from '@angular/core';
import {LoginPageService} from "../../../login-page/login-page.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private loginService = inject(LoginPageService);

  userName: string = '';

  ngOnInit() {
    this.userName = this.loginService.getUserName;
  }

}
