import {Component, OnInit} from '@angular/core';
import {moveItemInArray, CdkDragDrop} from '@angular/cdk/drag-drop';
import {Member} from '../../models/member';
import {MemberService} from '../../services/member.service';
import { cloneDeep } from 'lodash-es';
import {environment} from '../../../environments/environment';
import { NgbModal,NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';

@Component({
  selector: 'app-members',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {
  apiUrl = environment.apiUrl;  // use symbolic link in production
  members: Member[] = [];
  displayedColumns: string[] = [
    'index', 'name', 'role', 'degree', 'employment', 'email', 'is_alumni', 'image_path', 'actions'
  ];

  MODALS : {[page: string]: any} = {
    member : SurveyComponent
  }

  constructor(private ms: MemberService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.ms.getAll().subscribe(members => {
      this.members = members.sort((a, b) => a.index - b.index);
    });
  }


  onDrop(event: CdkDragDrop<Member[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.members.forEach((m, i) => {
      m.updated = m.index !== i + 1;
      m.index = i + 1;
    });
    this.members = cloneDeep(this.members); // refresh table
    // TODO: update index in database for each updated member
  }

  onSurvey(page : string) : void {
    const modalRef = this.modalService.open(this.MODALS[page]);
    modalRef.componentInstance.renderPage = page; //이렇게 하면 page가 SurveyComponent에 전달됨!
  }

}
