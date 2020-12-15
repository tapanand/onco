import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CarouselModule, CardsModule } from "angular-bootstrap-md";

import { AppComponent } from './app.component';
import { KnowYourDoctorsComponent } from './components/know-your-doctors/know-your-doctors.component';
import { FreeAssessmentsComponent } from './components/free-assessments/free-assessments.component';
import { YourJourneyComponent } from './components/your-journey/your-journey.component';
import { CarouselComponent } from './components/utils/carousel/carousel.component';

import { CarouselItemDirective } from './components/utils/carousel/carousel-item.directive';

import { CarouselItemElement } from "./components/utils/carousel/carousel-item-element.directive";

@NgModule({
  declarations: [
    AppComponent,
    KnowYourDoctorsComponent,
    FreeAssessmentsComponent,
    YourJourneyComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    CardsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
