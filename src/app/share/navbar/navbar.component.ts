import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../service/socket/socket.service";
import {NotificationService} from "../../service/notification/notification.service";
import {AuthorService} from "../../service/author/author.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private name = window.sessionStorage.getItem('name');
  private role = window.sessionStorage.getItem('role');
  private avatar = window.sessionStorage.getItem('avatar');
  private totalItem = window.sessionStorage.getItem('totalItem');
  private wallet= window.sessionStorage.getItem('wallet');

  constructor(private authorService: AuthorService, public socketService: SocketService, public notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
  }

  closeNav() {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "0";
  }

  deleteNotification(id: any) {
    this.notificationService.deleteNotification(id).subscribe();
  }

  openNav(): void {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "250px";
  }

  getName(): string | null {
    return this.name;
  }

  getRole(): string | null {
    return this.role;
  }

  getAvatar(): string | null{
    return this.avatar;
  }

  getTotalItem(): string | null{
    return this.totalItem;
  }

  getWallet(): string | null {
    return this.wallet;
  }

  logOut() {
    this.authorService.logOut().subscribe(()=>{
      this.socketService.disconnectNotification();
      window.sessionStorage.clear();
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      });
    }, (error => {
      console.log(error);
    }));
  }
}
