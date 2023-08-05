import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { DummyDataComponent } from './dummy-data/dummy-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DummyDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
 // bootstrap: [AppComponent],
 //bootstrap: [AppComponent ,DummyDataComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(appRef: ApplicationRef): void {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-app', customElement);

    // const customElement = createCustomElement(DummyDataComponent, { injector: this.injector });
    // customElements.define('my-dummy', customElement);
  }
}
