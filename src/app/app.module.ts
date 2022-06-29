import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatorComponent } from './creator/creator.component';
import { DecksComponent } from './decks/decks.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ConnexionComponent,
    CreatorComponent,
    DecksComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : []
})
export class AppModule { }

