import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TierraDelFuegoComponent } from './component/tierra-del-fuego/tierra-del-fuego.component';
import { MapaArgentinaComponent } from './pages/mapa-argentina/mapa-argentina.component';
import { BuenosAiresComponent } from './component/buenos-aires/buenos-aires.component';
import { JujuyComponent } from './component/jujuy/jujuy.component';
import { SaltaComponent } from './component/salta/salta.component';
import { FormosaComponent } from './component/formosa/formosa.component';
import { ChacoComponent } from './component/chaco/chaco.component';
import { MisionesComponent } from './component/misiones/misiones.component';
import { SantiagoComponent } from './component/santiago/santiago.component';
import { LaPampaComponent } from './component/la-pampa/la-pampa.component';
import { MendozaComponent } from './component/mendoza/mendoza.component';
import { NeuquenComponent } from './component/neuquen/neuquen.component';
import { RioNegroComponent } from './component/rio-negro/rio-negro.component';
import { ChubutComponent } from './component/chubut/chubut.component';
import { SantaCruzComponent } from './component/santa-cruz/santa-cruz.component';
import { CabaComponent } from './component/caba/caba.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    MapaArgentinaComponent,
    TierraDelFuegoComponent,
    BuenosAiresComponent,
    JujuyComponent,
    SaltaComponent,
    FormosaComponent,
    ChacoComponent,
    MisionesComponent,
    SantiagoComponent,
    LaPampaComponent,
    MendozaComponent,
    NeuquenComponent,
    RioNegroComponent,
    ChubutComponent,
    SantaCruzComponent,
    CabaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
