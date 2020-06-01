import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipstertest9SharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [Jhipstertest9SharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
