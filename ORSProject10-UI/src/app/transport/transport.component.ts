import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html'
})
export class TransportComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService,
    public route: ActivatedRoute) {

    super(locator.endpoints.TRANSPORT, locator, route);

  }
  validateForm(form) {
    let v = this.serviceLocator.dataValidator;
    return v.isNotNullObject(form.vehicleType)
      && v.isNotNullObject(form.driverName)
      && v.isNotNullObject(form.charges)

  }

  populateForm(form, data) {
    form.id = data.id;
    form.vehicleType = data.vehicleType;
    form.driverName = data.driverName;
    form.charges= data.charges;

  }
}

