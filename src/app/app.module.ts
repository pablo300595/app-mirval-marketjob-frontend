import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/common-components/sidebar/sidebar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ServicesComponent } from './components/services/services.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrintingAnimationComponent } from './components/animation/printing-animation/printing-animation.component';
import { ShortDescriptionPipe } from './components/home/pipes/short-description.pipe';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NotificationsComponent,
    ServicesComponent,
    ChatsComponent,
    ProfileComponent,
    MenuComponent,
    PrintingAnimationComponent,
    ShortDescriptionPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
