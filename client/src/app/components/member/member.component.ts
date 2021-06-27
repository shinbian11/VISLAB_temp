import { Component, OnInit } from '@angular/core';
import { SubComponent } from '../sub/sub.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
