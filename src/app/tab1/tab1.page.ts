import { Component } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor(private globalVar:ProviderService) {}
  /*variável que irá armazenar o ticket gerado e exibirá na tela */
  public presentTicket= '';

  /*função geradora de tickets*/
  newTicket(type: String) {
    switch(type) {
      case 'SG': {
        this.globalVar.currentSG ++
        this.presentTicket = 'SG' + this.globalVar.currentSG;
        this.globalVar.generatedTickets.push({
          number: 'SG'+ this.globalVar.currentSG,
          type: 'ticket'
        });
        console.log(this.globalVar.generatedTickets)
        break;
      }
      case 'SP': {
        this.globalVar.currentSP ++
        this.presentTicket = 'SP' + this.globalVar.currentSP;
        this.globalVar.generatedTickets.push({
          number: 'SP'+ this.globalVar.currentSP,
          type: 'accessibility'
        });
        console.log(this.globalVar.generatedTickets)
        break;
      }
      case 'SE': {
        this.globalVar.currentSE ++
        this.presentTicket = 'SE' + this.globalVar.currentSE;
        this.globalVar.generatedTickets.push({
          number: 'SE'+ this.globalVar.currentSE,
          type: 'document'
        });
        console.log(this.globalVar.generatedTickets)
        break;
      }
    }
    return this.globalVar.generatedTickets;
  }



}
