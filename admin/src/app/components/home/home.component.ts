import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

interface IMenu {
  label: string;
  icon: string;
  postfix: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedItem: IMenu;
  menuItems: IMenu[] = [
    { label: 'members', icon: 'people', postfix: 'member', isSelected: true },
    { label: 'publications', icon: 'article', postfix: 'publication', isSelected: false },
    { label: 'research', icon: 'science', postfix: 'research', isSelected: false },
    { label: 'courses', icon: 'school', postfix: 'course', isSelected: false },
    { label: 'events', icon: 'event', postfix: 'event', isSelected: false },
    { label: 'banners', icon: 'wallpaper', postfix: 'banner', isSelected: false },
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router) {
    this.selectedItem = this.menuItems[0];
  }

  onSelectMenu(item: IMenu): void {
    this.selectedItem = item;
    this.menuItems.forEach((e) => e.isSelected = e.label === item.label);
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/login']).then();
  }
}