import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipstertest9SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [Jhipstertest9SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
