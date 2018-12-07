import { Component, OnInit } from '@angular/core';
import { Prato } from '../prato';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {
  prato : Prato = {
    id: 1,
    name: "Outro prato"
  };
  constructor() { }

  ngOnInit() {
  }

}
