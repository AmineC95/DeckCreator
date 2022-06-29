import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShow = false;
  account(){
    console.log('clicked')
    this.isShow = !this.isShow;
  }
  postAccount(){
    
  }
}
