import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html'
})
export class AtmComponent extends BaseCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ATM, locator, route);
  }

  validateForm(form) {
    let v = this.serviceLocator.dataValidator;

    return v.isNotNullObject(form.location)
      && v.isNotNullObject(form.cashAvailable)
      && v.isNotNullObject(form.dob);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.location = data.location;
    form.cashAvailable = data.cashAvailable;
    form.dob = data.dob;
    form.remark = data.remark;
  }
}
