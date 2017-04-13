import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 RouterModule.forRoot(appRoutes)
  ],
 providers: [GetdataService]
  bootstrap: [AppComponent]
})
export class AppModule { }
