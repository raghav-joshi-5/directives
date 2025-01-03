import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { csshighlighter } from './shared/component/directives/css-highlighter.directive';
import { RendererDirective } from './shared/component/directives/renderer.directive';
import { EventdirDirective } from './shared/component/directives/eventdir.directive';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DropdownDirective } from './shared/component/directives/dropdown.directive';
import { HostbindingDirective } from './shared/component/directives/hostbinding.directive';

@NgModule({
  declarations: [AppComponent, csshighlighter, RendererDirective, EventdirDirective, NavbarComponent, DropdownDirective, HostbindingDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
