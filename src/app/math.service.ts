import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public piValue():number{
    return 3.141;
  }

  public addNumbers(num1,num2):number{
    return num1+num2;
  }
}
