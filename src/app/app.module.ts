import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './header/user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ColourDirective } from './colour.directive';
import { DelayDirective } from './delay.directive';
import { ItemComponent } from './item/item.component';
import { UserService } from './user.service';
import { NewInterceptorService } from './new-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ColourDirective,
    DelayDirective,
    ItemComponent
  ],

  // для подключения динамических компонентов:
  entryComponents: [ ItemComponent ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NewInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }


