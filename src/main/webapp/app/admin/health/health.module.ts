import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipstertest9SharedModule } from 'app/shared/shared.module';

import { HealthComponent } from './health.component';
import { HealthModalComponent } from './health-modal.component';

import { healthRoute } from './health.route';

@NgModule({
  imports: [Jhipstertest9SharedModule, RouterModule.forChild([healthRoute])],
  declarations: [HealthComponent, HealthModalComponent],
  entryComponents: [HealthModalComponent],
})
export class HealthModule {}
