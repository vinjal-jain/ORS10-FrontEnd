import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css']
})
export class OfferlistComponent extends BaseListCtl implements OnInit {

  myKey = "";
  errorMessageOfferCode: string = '';

  public form = {
    error: false,
    message: null,
    preload: [],
    data: { id: null },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  base64Data: any;
  retrieveResonse: any;
  message: string;

  constructor(
    public locator: ServiceLocatorService,
    public route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    super(locator.endpoints.OFFER, locator, route);
  }

  validateFullName(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const inputChar = event.key;
    const alphabetPattern = /^[a-zA-Z]*$/;

    if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
      event.preventDefault();
      this.errorMessageOfferCode = 'Only alphabets are allowed.';
      return;
    }

    if (inputValue.length < 3) {
      this.errorMessageOfferCode = 'Offer Code must be at least 3 characters.';
    } else if (inputValue.length > 15) {
      this.errorMessageOfferCode = 'Offer Code must contain only 15 characters.';
    } else {
      this.errorMessageOfferCode = '';
    }
  }

  validateAlphabetInput(event) {
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);

    if (!/^[a-zA-Z]+$/.test(charStr)) {
      event.preventDefault();
    }
  }

}
