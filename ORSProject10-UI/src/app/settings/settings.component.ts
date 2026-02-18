import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SETTINGS, locator, route);
  }

  validateForm(form) {
    let validator = this.serviceLocator.dataValidator;
    let flag = true;

    flag = flag && validator.isNotNullObject(form.settingName);
    flag = flag && validator.isNotNullObject(form.settingValue);
    flag = flag && validator.isNotNullObject(form.settingType);
    flag = flag && validator.isNotNullObject(form.settingStatus);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.settingName = data.settingName;
    form.settingValue = data.settingValue;
    form.settingType = data.settingType;
    form.settingStatus = data.settingStatus;
  }
}
