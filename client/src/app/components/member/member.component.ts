import {Component, OnInit} from '@angular/core';
import { IMember } from '../../shared/models/member';
import { MemberService } from '../../shared/services/member.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-members',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  members: IMember[] = []
  Members: IMember[][] = [];
  degree_list = ["Prof","PhD","MS","Intern","Alumni"];

  displayedColumns: string[] = [
    'index', 'name', 'role', 'degree', 'employment', 'email', 'is_alumni', 'image_path', 'actions'
  ];

  constructor(private ms: MemberService) { }

  ngOnInit(): void {

    this.ms.getAll().subscribe(members => {
       this.members = members.sort((a, b) => a.index - b.index);
       this.Members = this.degree_list.map(element => this.members.filter(a => a.degree === element));
    });

  }
  
  
}

