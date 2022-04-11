import { Injectable } from '@angular/core';
import {NotificationService} from "../notification/notification.service";
import {Notification} from "../../model/notification";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}
  public getNotifications(): Notification[]{
    return this.notifications;
  }
}
