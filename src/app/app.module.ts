import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//Angular custom Toasts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//SafePipe
import { SafePipeModule } from 'safe-pipe';

//Inapp
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

//Screen Orientation
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({swipeBackEnabled: false}),
    AppRoutingModule,

    //HTTP
    HttpClientModule,

    //Angular Custom Toasts
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    //SafePipe
    SafePipeModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    //InApp
    InAppBrowser,

    //ScreenOrientation
    ScreenOrientation
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
