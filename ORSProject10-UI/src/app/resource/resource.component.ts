import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.RESOURCE, locator, route);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.resourceCode = data.resourceCode;
    form.resourceName = data.resourceName;
    form.resourceType = data.resourceType;
    form.resourceStatus = data.resourceStatus;
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;

    flag = flag && validator.isNotNullObject(form.resourceCode);
    flag = flag && validator.isNotNullObject(form.resourceName);
    flag = flag && validator.isNotNullObject(form.resourceType);
    flag = flag && validator.isNotNullObject(form.resourceStatus);

    return flag;
  }
}