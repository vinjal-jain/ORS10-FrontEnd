import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settingslist',
  templateUrl: './settingslist.component.html',
  styleUrls: ['./settingslist.component.css']
})
export class SettingslistComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SETTINGS, locator, route);
  }
}
