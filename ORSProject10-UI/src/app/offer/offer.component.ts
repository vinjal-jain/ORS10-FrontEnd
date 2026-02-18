import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent extends BaseCtl {

  errorMessageTitle: string = '';
  errorMessageOfferCode: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.OFFER, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;

    flag = flag && validator.isNotNullObject(form.offerCode);
    flag = flag && validator.isNotNullObject(form.discountAmount);
    flag = flag && validator.isNotNullObject(form.expiryDate);
    flag = flag && validator.isNotNullObject(form.offerStatus);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.offerCode = data.offerCode;
    form.discountAmount = data.discountAmount;
    form.expiryDate = data.expiryDate;
    form.offerStatus = data.offerStatus;
  }

  validateName(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const inputChar = event.key;
    const alphabetPattern = /^[a-zA-Z]*$/;

    if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
      event.preventDefault();
      this.errorMessageOfferCode = 'Only alphabets are allowed.';
      return;
    }

    if (inputValue.length < 3) {
      this.errorMessageOfferCode = 'Offer Code must be at least 3 characters long.';
    } else if (inputValue.length > 15) {
      this.errorMessageOfferCode = 'Offer Code must not exceed 15 characters.';
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
