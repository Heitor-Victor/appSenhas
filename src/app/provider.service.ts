import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

 
  public generatedTickets:Array<any> = [];
  public currentSG = 0;
  public compliedSG = 0;
  public currentSP = 0;
  public compliedSP = 0;
  public currentSE = 0;
  public compliedSE = 0;

  constructor() { }
}
