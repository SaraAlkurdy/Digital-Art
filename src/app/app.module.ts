import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { ContactComponent } from './contact/contact.component';
import { ModalModule } from 'ngb-modal';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPhotoswipeModule } from 'ngx-photoswipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { CarouselModule as primeng } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";


const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PricingComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgWizardModule.forRoot(ngWizardConfig),
    ModalModule,
    NgbModalModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgxPhotoswipeModule.forRoot(),
    FontAwesomeModule,
    Angular2PhotoswipeModule,
    AccordionModule,
    primeng,
    GalleriaModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
