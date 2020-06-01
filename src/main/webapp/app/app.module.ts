import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipstertest9SharedModule } from 'app/shared/shared.module';
import { Jhipstertest9CoreModule } from 'app/core/core.module';
import { Jhipstertest9AppRoutingModule } from './app-routing.module';
import { Jhipstertest9HomeModule } from './home/home.module';
import { Jhipstertest9EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipstertest9SharedModule,
    Jhipstertest9CoreModule,
    Jhipstertest9HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipstertest9EntityModule,
    Jhipstertest9AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipstertest9AppModule {}
