
import { Component, OnInit } from '@angular/core';
//import { rawListeners } from 'node:process';
//import { Research } from "./research";
//import { ResearchList } from './research-list';
import { IResearch } from 'src/app/shared/models/research';
import {environment} from '../../../environments/environment';
import { ResearchService } from 'src/app/shared/services/research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})

export class ResearchComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  researchTotal : IResearch[]=[];
  researchYear : IResearch[][]=[];

  year = [2021,2020,2019,2018];
  
  constructor(private rs: ResearchService) { }

  ngOnInit(): void {
    this.rs.getAll().subscribe(researchTotal => {
      this.researchTotal = researchTotal.sort((a, b) => a.id - b.id);
      this.researchYear = this.year.map(element => this.researchTotal.filter(a => a.year === element));
   });
  }

}