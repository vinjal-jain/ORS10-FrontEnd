import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html'
})
export class InquiryComponent extends BaseCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.INQUIRY, locator, route);
  }

  validateForm(form) {
    let v = this.serviceLocator.dataValidator;
    return v.isNotNullObject(form.inquirerName)
      && v.isNotNullObject(form.email)
      && v.isNotNullObject(form.inquirySubject)
      && v.isNotNullObject(form.inquiryStatus);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.inquirerName = data.inquirerName;
    form.email = data.email;
    form.inquirySubject = data.inquirySubject;
    form.inquiryStatus = data.inquiryStatus;
  }
}
