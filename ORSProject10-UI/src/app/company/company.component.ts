import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService,
    public route: ActivatedRoute) {
    super(locator.endpoints.COMPANY, locator, route);
  }



  validateForm(form) {
    let v = this.serviceLocator.dataValidator;
    return v.isNotNullObject(form.companyName)
      && v.isNotNullObject(form.industry)
      && v.isNotNullObject(form.city)
  }

  populateForm(form, data) {
    form.id = data.id;
    form.companyName = data.companyName;
    form.industry = data.industry;
    form.city = data.city;

  }

}