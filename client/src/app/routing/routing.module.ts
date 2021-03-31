import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MemberComponent } from '../components/member/member.component';
import { PublicationComponent } from '../components/publication/publication.component';
import { ResearchComponent } from '../components/research/research.component';
import { CourseComponent } from '../components/course/course.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MemberComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'publications', component: PublicationComponent },
  { path: 'courses', component: CourseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
