import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spam';

  articles = new Array<string>();

  onDrakaris(testo : HTMLInputElement, numero: HTMLInputElement){
    let frase = testo.value; //prendo il valore della prima textbox
    let num = Number(numero.value);

    console.log('dati ricevuti' + frase + '-' +num);

    for (let index = 0; index < num; index++) {
    this.articles.push(frase);
  }
  return false
  }
}

