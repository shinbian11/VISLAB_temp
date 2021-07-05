
import { Component, OnInit } from '@angular/core';
import { Research } from "./research";
import { ResearchList } from './research-list';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  researchTotal : Research[] = ResearchList;

  research2021 = this.researchTotal.slice(0, 3);
  research2020 = this.researchTotal.slice(3, 5);
  research2019 = this.researchTotal.slice(5, 9);
  research2018 = this.researchTotal.slice(9, 11);

  constructor() { }

  ngOnInit(): void {
  }

}