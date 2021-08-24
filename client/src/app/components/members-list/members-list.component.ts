import { Component, Input, OnInit } from '@angular/core';
import { IMember } from '../../shared/models/member';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})

export class MembersListComponent implements OnInit {

  @Input() memberList : IMember[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
