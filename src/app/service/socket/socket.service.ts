import { Injectable } from '@angular/core';
import {NotificationService} from "../notification/notification.service";
import {Notification} from "../../model/notification";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private notifications: Notification[] = [];
  private stompClients: any;

  constructor(private notificationService: NotificationService) {}
  public getNotifications(): Notification[]{
    return this.notifications;
  }

  disconnectNotification() {
    if (this.stompClients != null){
      this.stompClients.disconnect();
    }
  }
}
