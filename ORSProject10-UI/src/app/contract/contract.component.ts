import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html'
})
export class ContractComponent extends BaseCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.CONTRACT, locator, route);
  }

  validateForm(form) {
    let v = this.serviceLocator.dataValidator;
    return v.isNotNullObject(form.name)
      && v.isNotNullObject(form.city)
      && v.isNotNullObject(form.dob)
      && v.isNotNullObject(form.mobileNo);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.name = data.name;
    form.city = data.city;
    form.dob = data.dob;
    form.mobileNo = data.mobileNo;
  }
}
