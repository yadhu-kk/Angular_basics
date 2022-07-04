import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingpageComponent } from './edit-listingpage/edit-listingpage.component';
import { ListingDetailpageComponent } from './listing-detailpage/listing-detailpage.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MylistingsPageComponent } from './mylistings-page/mylistings-page.component';
import { NewlistingsPageComponent } from './newlistings-page/newlistings-page.component';

const routes: Routes = [
  { path: '', component: ListingsPageComponent },
  { path: 'listing-detail/:id', component: ListingDetailpageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'edit-listing', component: EditListingpageComponent },
  { path: 'mylistings', component: MylistingsPageComponent },
  { path: 'newlistings', component: NewlistingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
