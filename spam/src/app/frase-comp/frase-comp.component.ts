import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frase-comp',
  templateUrl: './frase-comp.component.html',
  styleUrls: ['./frase-comp.component.css']
})
export class FraseCompComponent implements OnInit {
@Input() frase:string;
  constructor() { }

  ngOnInit() {
  }

}
