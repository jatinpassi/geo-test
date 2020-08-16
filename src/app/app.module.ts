import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        "pk.eyJ1IjoiamF0aW5wYXNzaTExMSIsImEiOiJja2RiZXJ0NHUwcmRwMnR0OW1mbGdmamRsIn0.ZGZM94VjRMCA1qGc6DK6dQ", // Optional, can also be set per map (accessToken input of mgl-map)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
