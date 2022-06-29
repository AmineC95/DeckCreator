import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatorComponent } from './creator/creator.component';
import { DecksComponent } from './decks/decks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'decks', component:DecksComponent},
  { path: 'creator', component:CreatorComponent},
  { path: 'cards', component:CardsComponent},
  { path: 'connexion', component:ConnexionComponent},
  { path: 'cards', component:CardsComponent},
  { path: '', pathMatch:'full',redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
