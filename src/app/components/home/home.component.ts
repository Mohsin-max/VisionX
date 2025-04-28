import { Component } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  imgArray: any[] = [

    {
      img: 'https://image.tmdb.org/t/p/original//jhL4eTpccoZSVehhcR8DKLSBHZy.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//dg3OindVAGZBjlT3xYKqIAdukPL.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//fTrQsdMS2MUw00RnzH0r3JWHhts.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//nAxGnGHOsfzufThz20zgmRwKur3.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//sNx1A3822kEbqeUxvo5A08o4N7o.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//sNx1A3822kEbqeUxvo5A08o4N7o.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//sNx1A3822kEbqeUxvo5A08o4N7o.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//sNx1A3822kEbqeUxvo5A08o4N7o.jpg'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//sNx1A3822kEbqeUxvo5A08o4N7o.jpg'
    },

  ]


}
