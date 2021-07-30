import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements OnInit {

  @Input() receivedPage : string; 

  //@Input()을 이용하여 매개변수를 전달하려면 , 전달하고자 하는 값이 있는 component의 html 코드에서 [path] = 'value' 를 통해 전달해야 하는데,
  //이는 부모-자식 관계의 컴포넌트에서만 가능한 방법 아닌가요??
  //저는 부모 자식관계의 컴포넌트가 아닌, 한 컴포넌트의 ts file에 있는 변수를 다른 컴포넌트의 ts file로 이동하는 법을 알고 싶습니다. 
  //이를 하기 위해 서비스를 만들어 observable과 구독을 하는 방법도 시도했는데 실패했습니다..
  //home.component.ts의 open함수에서 this.par에 name 값을 저장하고, SurveyComponent를 open 하면서 그 컴포넌트에 this.par 변수의 값을 전달하고 싶습니다. 

  //이것이 해결되면, 그 이후에는 가져온 this.par 값에 따라, Survey 창의 내부 구조를 각각 다르게 설계하는 부분을 구현하고, 이를 서버와 연결하는 방법까지 구현해야 합니다.
  
  constructor(public modal: NgbActiveModal) { }
  
  ngOnInit(): void {
    
  }
  
}
