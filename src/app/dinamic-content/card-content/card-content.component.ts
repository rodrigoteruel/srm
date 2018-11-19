import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'srm-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  @Input() acoes1;
  @Input() acoes2;

  acoesa = [
    {"acao": "Reverter", "ref":"#"},
    {"acao": "Editar", "ref":"#"},
    {"acao": "Remover", "ref":"#"}
  ];

  acoesb = [
    {"acao": "Cancelar", "ref":"#"},
    {"acao": "Renovar", "ref":"#"},
    {"acao": "Retorno", "ref":"#"},
    {"acao": "Atualizar", "ref":"#"}
  ];

  constructor() { }

  ngOnInit() {
    this.acoes1 = this.acoesa;
    this.acoes2 = this.acoesb;
  }

}
