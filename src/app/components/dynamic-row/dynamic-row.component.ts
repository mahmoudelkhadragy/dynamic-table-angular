import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-row',
  templateUrl: './dynamic-row.component.html',
  styleUrls: ['./dynamic-row.component.css'],
})
export class DynamicRowComponent implements OnInit {
  @Input() data: string[];
  @Output() logData = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {}
}
