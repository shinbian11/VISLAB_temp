import { Component, OnInit } from '@angular/core';
import { Research } from './research';
import { ResearchList } from './research-list';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.scss']
})


export class ResearchListComponent implements OnInit {

  research : Research[] = ResearchList;
  
  constructor() { }

  ngOnInit(): void {

  }

}
