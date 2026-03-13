import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html'
})
export class PermissionComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PERMISSION, locator, route);
  }

  validateForm(form) {

    let flag = true;
    let validator = this.serviceLocator.dataValidator;

    flag = flag && validator.isNotNullObject(form.permissionCode);
    flag = flag && validator.isNotNullObject(form.permissionName);
    flag = flag && validator.isNotNullObject(form.moduleName);
    flag = flag && validator.isNotNullObject(form.accessType);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.permissionCode = data.permissionCode;
    form.permissionName = data.permissionName;
    form.moduleName = data.moduleName;
    form.accessType = data.accessType;
  }
}