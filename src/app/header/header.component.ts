import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  optionChoisie: string | undefined; // Initialisez avec une valeur par défaut

  setOption(option: string): void {
    this.optionChoisie = option;
  }
}
