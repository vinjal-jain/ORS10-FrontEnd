import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html'
})
export class CandidateComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService,
    public route: ActivatedRoute) {
    super(locator.endpoints.CANDIDATE, locator, route);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.candidateCode = data.candidateCode;
    form.candidateName = data.candidateName;
    form.email = data.email;
    form.skillSet = data.skillSet;
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;

    flag = flag && validator.isNotNullObject(form.candidateCode);
    flag = flag && validator.isNotNullObject(form.candidateName);
    flag = flag && validator.isNotNullObject(form.email);
    flag = flag && validator.isNotNullObject(form.skillSet);

    return flag;
  }
}