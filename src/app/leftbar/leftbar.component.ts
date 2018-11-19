import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'srm-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {

  @Input() menua
  @Input() menub

  menu1 = [
    {"icone": "fas fa-globe fa-2x",
    "descricao": "Painel de Gestão"},
    {"icone": "fas fa-at fa-2x",
    "descricao": "Conta Digital"}
  ]

  menu2 = [
    {"icone": "fas fa-history fa-2x",
    "descricao": "Ant. de Recebíveis"}
  ]

  constructor() { }

  ngOnInit() {
    this.menua = this.menu1;
    this.menub = this.menu2;
    
  }

}
