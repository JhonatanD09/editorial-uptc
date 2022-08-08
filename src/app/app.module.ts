import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { initializeApp,provideFirebaseApp, } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore, } from '@angular/fire/firestore';
import { NewsAndEventsComponent } from './components/news-and-events/news-and-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GeneralInformationComponent } from './components/general-information/general-information.component'


@NgModule({

  declarations: [
    AppComponent,
    SocialNetworksComponent,
    NewsAndEventsComponent,
    NavbarComponent,
    BannerComponent,
    GeneralInformationComponent,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
