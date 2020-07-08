import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Output() createClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
