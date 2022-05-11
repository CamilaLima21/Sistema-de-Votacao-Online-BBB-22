import { Participante } from './../model/participante';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/RestService';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit {

  title = 'Votação BBB 2022';
  participantes: Participante[] | undefined;

  constructor(private restService : RestService) {

   }

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes(){
    this.restService.getData('/participantes/todos').subscribe((participantes) => {
      this.participantes = participantes;
    });
  }

}
