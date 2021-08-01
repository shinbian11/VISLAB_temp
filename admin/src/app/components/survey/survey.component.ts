import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from 'rxjs';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from 'src/app/models/publication';
import { ResearchService } from 'src/app/services/research.service';
import { Research } from 'src/app/models/research'; 
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';

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

  array1 : string[] = ['member','publication','research','course','event','banner'];
  answer;
  ren;

  member : Member[]=[];
  publication :Publication[]=[];
  research : Research[]=[];
  course : Course[]=[];
  
  constructor(
    public modal: NgbActiveModal,
    private ms: MemberService, 
    private ps: PublicationService, 
    private rs: ResearchService, 
    private cs: CourseService) { 

    this.renderPage = this.renderPage;
  }


  ngOnInit(): void {

    this.ms.getAll().subscribe(member => {
      this.member = member.sort((a, b) => a.index - b.index);
    });
    this.ps.getAll().subscribe(publication => {
      this.publication = publication.sort((a, b) => a.id - b.id);
    });
    this.rs.getAll().subscribe(research => {
      this.research = research.sort((a, b) => a.id - b.id);
    });
    this.cs.getAll().subscribe(course => {
      this.course = course.sort((a, b) => a.id - b.id);
    });

    this.answer = [this.member,this.publication,this.research,this.course]; // 여기에서 값이 안 들어가네 ㅠㅠ
    
    //this.answer1.forEach((element,idx)=>console.log(idx+ '||'+ element));

    this.array1.forEach(
      (element, idx) => {
        if(element === this.renderPage){
          this.ren = this.answer[idx];
        }
      }
    );
  }
  
}
