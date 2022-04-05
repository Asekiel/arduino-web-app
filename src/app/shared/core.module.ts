import { AsyncPipe, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { RoverNotificationsService } from "./rover-notifications.service";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [],
    providers: [RoverNotificationsService, AuthService, AsyncPipe]
  })
  export class CoreModule { }