import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //
 @Input() child!:string;
 //
 @Output() chiled = new EventEmitter<boolean>();
 //
 didVote = false;
 //
  constructor() { }

  ngOnInit(): void {
  }
  //
  chil(agreed: boolean) {
    this.didVote = true;
     this.chiled.emit(agreed);
  }

}
