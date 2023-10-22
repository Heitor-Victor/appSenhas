import { Component } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(public globalVar: ProviderService) {}

  /*variável que irá armazenar o ticket chamado e o mostrará na tela*/
  public presentTicket: any = '';
  /*array que armazenará as senhas chamadas*/
  public calledTickets:Array<any> = []

  /* função para chamada de ticket*/
  callTicket() {
    this.calledTickets.unshift(this.presentTicket)
    this.calledTickets.splice(5,1)
    this.selectTicket();

    if (this.presentTicket.type === 'ticket') {
      this.globalVar.compliedSG++;
      console.log('compliedSG:' + this.globalVar.compliedSG);
    } else if (this.presentTicket.type === 'accessibility') {
      this.globalVar.compliedSP++;
      console.log('compliedSP:' + this.globalVar.compliedSP);
    } else {
      this.globalVar.compliedSE++;
      console.log('compliedSE:' + this.globalVar.compliedSE);
    }
    return this.globalVar.generatedTickets;
  }

  /* função para seleção de ticket por prioridade*/
  selectTicket() {
    let thereIsSP:boolean = false;
    if (this.presentTicket.type !== 'accessibility') {
      for (let i = 0; i < this.globalVar.generatedTickets.length; i++) {
        if (this.globalVar.generatedTickets[i].type === 'accessibility') {
          this.presentTicket = this.globalVar.generatedTickets[i];
          this.globalVar.generatedTickets.splice(i, 1);
          return this.presentTicket
        }
      }
    }
    let thereIsSE:boolean = false;
    if (this.presentTicket.type !== 'document') {
      for (let i = 0; i < this.globalVar.generatedTickets.length; i++) {
        if (this.globalVar.generatedTickets[i].type === 'document') {
          this.presentTicket = this.globalVar.generatedTickets[i];
          this.globalVar.generatedTickets.splice(i, 1);
          return this.presentTicket
        }
      }
    } 
    if (thereIsSP == false && (this.presentTicket.type === "document" || thereIsSE == false)) {
      for (let i = 0; i < this.globalVar.generatedTickets.length; i++) {
        if (this.globalVar.generatedTickets[i].type === 'ticket') {
          this.presentTicket = this.globalVar.generatedTickets[i];
          this.globalVar.generatedTickets.splice(i, 1);
          return this.presentTicket
        }
      }
      this.presentTicket = this.globalVar.generatedTickets[0]
      this.globalVar.generatedTickets.splice(0,1)
      return this.presentTicket
    }
  }
}

