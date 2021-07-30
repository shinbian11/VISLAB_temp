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
  //이 변수의 값에 따라서, Survey 컴포넌트의 html 파일을 조금씩 다르게 보여줘야 한다.

 @Input() public renderPage;

  constructor(public modal: NgbActiveModal) { 
    this.renderPage = this.renderPage;
  }
  
  ngOnInit(): void {
  }
  
}
