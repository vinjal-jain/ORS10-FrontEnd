import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-atmlist',
  templateUrl: './atm-list.component.html',
  styleUrls: ['./atm-list.component.css']
})

export class AtmlistComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.ATM, locator, route);
  }

}
