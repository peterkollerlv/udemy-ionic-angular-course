import {Component, OnInit} from '@angular/core';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';
import {IonItemSliding} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  newOffer = `/places/tabs/offers/new`;

  offers: Place[] = [];

  constructor(private placesService: PlacesService, private router: Router) {
  }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding){
    slidingItem.close().then();
    this.router.navigateByUrl(`/places/tabs/offers/edit/${offerId}`).then();
    console.log(`editing offer id: ${offerId}`);
  }
}
