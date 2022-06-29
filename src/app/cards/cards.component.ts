import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private services_service:ServicesService) { }

  ngOnInit(): void {}

// getCards(){
//   this.services_service.getCards().subscribe((cards)=> {
//     this. = cards;
//   })

}
