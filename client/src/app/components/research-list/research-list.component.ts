import { Component, Input, OnInit } from '@angular/core';
import {IResearch} from '../../shared/models/research';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.scss']
})



export class ResearchListComponent implements OnInit {

  
  @Input() receivedList : IResearch[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}