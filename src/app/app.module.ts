import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './header/user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { UserIdComponent } from './user-id/user-id.component';
import { ColourDirective } from './colour.directive';
import { DelayDirective } from './delay.directive';
import { ItemComponent } from './item/item.component';
import { UserService } from './user.service';
import { NewInterceptorService } from './new-interceptor.service';
import { AuthGuard } from './auth.guard';

const routs = [
  // роут на стартовую страницу:
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'popup'
  },
  {
    path: 'users',

    // подключение гуардов:
    canActivate: [AuthGuard],

    // статические параметры:
    data: {
      titleOne: 'UsersTitleOne',
      titleTwo: 'UsersTitleTwo',
    },
    component: UsersComponent
  },
  {
    path: 'users/:userId',
    component: UserIdComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ColourDirective,
    DelayDirective,
    ItemComponent,
    HomeComponent,
    UsersComponent,
    UserIdComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent
  ],

  // для подключения динамических компонентов:
  entryComponents: [ ItemComponent ],

  imports: [
    BrowserModule,
    HttpClientModule,

    // подключение и инициилизация роута
    // useHash для поддержки использования хзша в роуте:
    RouterModule.forRoot(routs, {useHash: true})
  ],
  providers: [
    UserService,
    AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NewInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }


