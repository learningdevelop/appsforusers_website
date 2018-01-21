
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

// Routes
import { app_routing } from './app-routing.module';

// Services
import { WebinfoService } from './services/webinfo.service';
import { ProductsService } from './services/products.service';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ProductoComponent,
    ContactComponent,
    SearchComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    app_routing
  ],
  providers: [
    WebinfoService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
