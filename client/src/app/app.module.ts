import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlusSquare as farPlusSquare, faHandPointLeft as farHandPointLeft } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CerveceriaHomeComponent } from './pages/cerveceria-home/cerveceria-home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { ManipulateItemComponent } from './components/manipulate-item/manipulate-item.component';
import { InputFormComponent } from './ui/input-form/input-form.component';
import { UniversidadesHomeComponent } from './pages/universidades-home/universidades-home.component';
import { ManipulateCerveceriaComponent } from './pages/manipulate-cerveceria/manipulate-cerveceria.component';
import { FarmaciasHomeComponent } from './pages/farmacias-home/farmacias-home.component';
import { CaesHomeComponent } from './pages/caes-home/caes-home.component';
import { SupermercadosHomeComponent } from './pages/supermercados-home/supermercados-home.component';
import { ManipulateUniversidadComponent } from './pages/manipulate-universidad/manipulate-universidad.component';
import { ManipulateFarmaciaComponent } from './pages/manipulate-farmacia/manipulate-farmacia.component';
import { ManipulateCaeComponent } from './pages/manipulate-cae/manipulate-cae.component';
import { ManipulateSupermercadoComponent } from './pages/manipulate-supermercado/manipulate-supermercado.component';
import { ItemCardComponent } from './ui/item-card/item-card.component';
import { TengoCercaHomeComponent } from './pages/tengo-cerca-home/tengo-cerca-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CerveceriaHomeComponent,
    LayoutComponent,
    AddCardComponent,
    ManipulateItemComponent,
    InputFormComponent,
    UniversidadesHomeComponent,
    ManipulateCerveceriaComponent,
    FarmaciasHomeComponent,
    CaesHomeComponent,
    SupermercadosHomeComponent,
    ManipulateUniversidadComponent,
    ManipulateFarmaciaComponent,
    ManipulateCaeComponent,
    ManipulateSupermercadoComponent,
    ItemCardComponent,
    TengoCercaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(farPlusSquare, farHandPointLeft);
  }
}
