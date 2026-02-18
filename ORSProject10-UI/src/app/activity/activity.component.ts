import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent extends BaseCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ACTIVITY, locator, route);
  }

  validateForm(form) {
    let v = this.serviceLocator.dataValidator;
    return v.isNotNullObject(form.activityName)
      && v.isNotNullObject(form.performedBy)
      && v.isNotNullObject(form.activityTime)
      && v.isNotNullObject(form.activityStatus);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.activityName = data.activityName;
    form.performedBy = data.performedBy;
    form.activityTime = data.activityTime;
    form.activityStatus = data.activityStatus;
  }
}
