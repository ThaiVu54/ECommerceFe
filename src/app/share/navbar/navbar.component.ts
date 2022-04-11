import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../service/socket/socket.service";
import {NotificationService} from "../../service/notification/notification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public socketService: SocketService, public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  closeNav() {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "0";
  }

  deleteNotification(id: any) {
    this.notificationService.deleteNotification(id).subscribe();
  }
}
