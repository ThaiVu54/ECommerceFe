import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../service/author/author.service";
import {Jwtresponse} from "../../model/jwtresponse";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private message: string = '';
  private jwtResponse: Jwtresponse = {};

  constructor(private authService: AuthorService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public getMessage() {
    return this.message;
  }

  public login(loginForm: any): void {
    this.authService.login(loginForm.value).subscribe((jwtResponse) => {
      this.jwtResponse = jwtResponse;
      console.log(this.jwtResponse);
      // @ts-ignore
      window.sessionStorage.setItem("name", this.jwtResponse.name);
      // @ts-ignore
      window.sessionStorage.setItem("token", this.jwtResponse.token);
      // @ts-ignore
      window.sessionStorage.setItem("avatar", this.jwtResponse.avatar);
      // @ts-ignore
      window.sessionStorage.setItem("totalItem", this.jwtResponse.totalItem);
      // @ts-ignore
      window.sessionStorage.setItem("wallet", this.jwtResponse.wallet);
      // @ts-ignore
      window.sessionStorage.setItem("lockWallet", this.jwtResponse.lockWallet);

      let roles = this.jwtResponse.authorities;
      // @ts-ignore
      if (roles.length == 1) {
        // @ts-ignore
        window.sessionStorage.setItem("role", roles[0].authority)
      } else {
        // @ts-ignore
        for (let i = 0; i < roles.length; i++) {
          // @ts-ignore
          if (roles[i].authority == 'ROLE_VIP') {
            // @ts-ignore
            window.sessionStorage.setItem("role", roles[i].authority);
            break;
          }
          // @ts-ignore
          if (roles[i].authority == 'ROLE_PROVIDER') {
            // @ts-ignore
            window.sessionStorage.setItem("role", roles[i].authority);
          }
        }
      }
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      });
    }, (error) => {
      this.message = error;
    });
  }
}
