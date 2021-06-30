import { Component, Input, OnInit } from '@angular/core';
import { Research } from '../research/research';
import { ResearchList } from '../research/research-list';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.scss']
})



export class ResearchListComponent implements OnInit {

  
  @Input() receivedList : Research[] = ResearchList;

  constructor() { }

  ngOnInit(): void {

  }

}