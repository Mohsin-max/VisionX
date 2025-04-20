import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

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

  ]

}
