import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {UserService} from "../services/user.service";
import {CommonModule} from "@angular/common";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  isDropdownVisible: boolean = false;
  protected user : User = this.userService.getUser();
  constructor(private userService: UserService, private eRef: ElementRef) {}

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownVisible = false;
    }
  }
  logout(){
    this.userService.logout();
  }

  ngOnInit(): void {
  }
}
