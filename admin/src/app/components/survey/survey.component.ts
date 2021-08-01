import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements OnInit {

  //member.component.ts에서 modalRef.componentInstance.renderPage = page; 를 통해 전달된 renderPage 변수를 받아옴!
  //renderPage 변수에는 (member/publication/research/course/event/banner) 중 하나가 들어있다.
  //이 변수의 값에 따라서, Survey 컴포넌트의 html 파일을 조금씩 다르게 보여주는 역할을 ngOnInit() 내에 추가함.

 @Input() public renderPage;

  array1 : string[] = ['member','publication','research','course','event','banner'];
  answerFields : string[][] =[
    ['index', 'name', 'role', 'degree', 'employment', 'email', 'is_alumni', 'image_path', 'actions'],
    ['id','title','venue','type','conference_prefix','published_in','published_url','volume','no','pages','year','conference_info','postfix','status','rank'],
    [ 'id','title','year','month','obliquedesc','members'],
    ['id','type','title','subtitle','content','subcontent','prerequisite','semester_button']
  ]

  renderingRow : string[];
  renderingField : string;

  constructor(public modal: NgbActiveModal) {
    this.renderPage = this.renderPage;
  }


  ngOnInit(): void {

    //html 파일 form 부분 다르게 구성하는 부분
    
    this.array1.forEach(
      (element, idx) => {
        if(element === this.renderPage){
         this.renderingRow = this.answerFields[idx];
         this.renderingField = element;
        }
      }
    );

  }
  
}
