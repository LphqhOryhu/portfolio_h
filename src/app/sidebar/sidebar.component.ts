import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
})
export class SidebarComponent {
  @Input() isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
