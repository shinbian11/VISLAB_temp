import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  constructor(private ns: NewsService) { }

  News : INews[]=[];

  ngOnInit(): void {
    console.log('asdf'+this.News)
    this.ns.getAll().subscribe(News => {
      
       this.News = News.sort((a, b) => a.id - b.id);
       console.log('plz...! '+this.News)
       });

  }

}
