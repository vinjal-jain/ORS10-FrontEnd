import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html'
})
export class AuditComponent extends BaseCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.AUDIT, locator, route);
  }

  validateForm(form) {
    let v = this.serviceLocator.dataValidator;
    return v.isNotNullObject(form.actionType)
      && v.isNotNullObject(form.actionBy)
      && v.isNotNullObject(form.actionTime)
      && v.isNotNullObject(form.actionResult);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.actionType = data.actionType;
    form.actionBy = data.actionBy;
    form.actionTime = data.actionTime;
    form.actionResult = data.actionResult;
  }
}
