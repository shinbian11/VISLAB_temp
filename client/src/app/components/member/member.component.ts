import {Component, OnInit} from '@angular/core';
import {IMember} from '../../shared/models/member';
import { MemberService } from '../../shared/services/member.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-members',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  members: IMember[] = [];
  displayedColumns: string[] = [
    'index', 'name', 'role', 'degree', 'employment', 'email', 'is_alumni', 'image_path', 'actions'
  ];

  constructor(private ms: MemberService) { }

  ngOnInit(): void {

    this.ms.getAll().subscribe(members => {
      this.members = members.sort((a, b) => a.index - b.index);
    });
    
  }

  list = ['Prof','PhD','MS','Intern'];
  Members = this.list.map(element => this.members.filter(r => r.degree === element));

}

