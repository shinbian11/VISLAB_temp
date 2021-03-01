import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MemberComponent } from './components/member/member.component';
import { CourseComponent } from './components/course/course.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ResearchComponent } from './components/research/research.component';
import { EventComponent } from './components/event/event.component';
import {BannerComponent} from './components/banner/banner.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivate: [AuthGuard], component: MemberComponent },
      { path: 'members', canActivate: [AuthGuard], component: MemberComponent },
      { path: 'publications', canActivate: [AuthGuard], component: PublicationComponent },
      { path: 'research', canActivate: [AuthGuard], component: ResearchComponent },
      { path: 'courses', canActivate: [AuthGuard], component: CourseComponent, },
      { path: 'events', canActivate: [AuthGuard], component: EventComponent },
      { path: 'banners', canActivate: [AuthGuard], component: BannerComponent },
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
