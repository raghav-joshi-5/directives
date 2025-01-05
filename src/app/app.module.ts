import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { csshighlighter } from './shared/component/directives/css-highlighter.directive';
import { RendererDirective } from './shared/component/directives/renderer.directive';
import { EventdirDirective } from './shared/component/directives/eventdir.directive';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DropdownDirective } from './shared/component/directives/dropdown.directive';
import { HostbindingDirective } from './shared/component/directives/hostbinding.directive';
import { CreditcarddirComponent } from './shared/component/directives/creditcarddir/creditcarddir.component';
import { CreditcardDirective } from './shared/component/directives/creditcard.directive';
import { TolowercasedirDirective } from './shared/component/directives/tolowercasedir.directive';
import { DropdownliDirective } from './shared/component/directives/dropdownli.directive';
import { HighlighterDirective } from './shared/component/directives/highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    csshighlighter,
    RendererDirective,
    EventdirDirective,
    NavbarComponent,
    DropdownDirective,
    HostbindingDirective,
    CreditcarddirComponent,
    CreditcardDirective,
    TolowercasedirDirective,
    DropdownliDirective,
    HighlighterDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
