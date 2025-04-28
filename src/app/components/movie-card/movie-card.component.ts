import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  @Input() imgArr: any = []


}
