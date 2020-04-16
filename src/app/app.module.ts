import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { AboutpageComponent } from './components/about/aboutpage/aboutpage.component';
import { ContactpageComponent } from './components/contact/contactpage/contactpage.component';
import { ParticlesDirective } from './util/particles.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    ContactpageComponent,
    ParticlesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
