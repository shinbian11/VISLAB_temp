import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { MemberComponent } from './components/member/member.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ResearchComponent } from './components/research/research.component';
import { CourseComponent } from './components/course/course.component';
import { SubComponent } from './components/sub/sub.component';
import { ResearchListComponent } from './components/research-list/research-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MembersListComponent } from './components/members-list/members-list.component';
import { ChartComponent } from './components/chart/chart.component';
import { BannerComponent } from './components/banner/banner.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    MemberComponent,
    PublicationComponent,
    ResearchComponent,
    CourseComponent,
    SubComponent,
    ResearchListComponent,
    MembersListComponent,
    ChartComponent,
    BannerComponent,
    CoursesListComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
