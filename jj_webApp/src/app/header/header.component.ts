import { Component,Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatTabsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = "Jiu-Jitsu Encyclopedia";

}
