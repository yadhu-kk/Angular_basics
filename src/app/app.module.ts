import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailpageComponent } from './listing-detailpage/listing-detailpage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingpageComponent } from './edit-listingpage/edit-listingpage.component';
import { MylistingsPageComponent } from './mylistings-page/mylistings-page.component';
import { NewlistingsPageComponent } from './newlistings-page/newlistings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailpageComponent,
    ContactPageComponent,
    EditListingpageComponent,
    MylistingsPageComponent,
    NewlistingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
