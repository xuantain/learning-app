import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatsPage } from '../pages/chats/chats';
import { ChatsOptionsComponent } from '../pages/chats/chats-options';
import { NewChatComponent } from "../pages/chats/new-chat";
import { LoginPage } from '../pages/login/login';
import { MessagesPage } from '../pages/messages/messages';
import { MessagesOptionsComponent } from "../pages/messages/messages-options";
import { ProfilePage } from '../pages/profile/profile';
import { VerificationPage } from '../pages/verification/verification';
import { PhoneService } from "../services/phone";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ChatsOptionsComponent,
    NewChatComponent,
    MessagesOptionsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule,
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ChatsOptionsComponent,
    NewChatComponent,
    MessagesOptionsComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhoneService
  ]
})
export class AppModule {}
