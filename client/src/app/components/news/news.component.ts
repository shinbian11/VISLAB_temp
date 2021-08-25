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
  data : Date;
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  ngOnInit(): void {
    this.ns.getAll().subscribe(News => {
       this.News = News.sort((a, b) => b.id - a.id);

       //e.g.) (날짜 형식 변환) 2021-08-21T15:00:00.000Z 의 Date 형식을 2021-08-21 string 형식으로 변환
       this.News.forEach(element => element.date = this.ChangeDate(element.date)) 
       });
      }

  ChangeDate(date) : string {
      this.data = new Date(date);

      //console.log(this.data.getFullYear()+'-' + (this.data.getMonth()+1) + '-'+this.data.getDate());
      return (this.monthNames[this.data.getMonth()] + ' ' + this.data.getDate() + ', ' + this.data.getFullYear());
      
    }
}
