import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-caba',
  templateUrl: './caba.component.html',
  styleUrls: ['./caba.component.css']
})
export class CabaComponent implements OnInit {

  templateSelected:TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
