import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('carousel') carouselElement: ElementRef | undefined;

  cards = [
    {
      title: 'Card 1',
      subtitle: 'The First Card',
      content: 'This is the description of the project blah blah blah<br><br>BLAH BLAH BLAH'
    },
    {
      title: 'Card 2',
      subtitle: 'The Second Card',
      content: 'This is the description of the project blah blah blah<br><br>BLAH BLAH BLAH'
    },
    {
      title: 'Card 3',
      subtitle: 'The Third Card',
      content: 'This is the description of the project blah blah blah<br><br>BLAH BLAH BLAH'
    },
    {
      title: 'Card 4',
      subtitle: 'The Fourth Card',
      content: 'This is the description of the project blah blah blah<br><br>BLAH BLAH BLAH'
    },
    {
      title: 'Card 5',
      subtitle: 'The Fifth Card',
      content: 'This is the description of the project blah blah blah<br><br>BLAH BLAH BLAH'
    }
  ];

  currentIndex = 0;
  translateXValue = 0;

  cardWidth = 250;
  cardMargin = 20;

  constructor(private renderer: Renderer2) { }

  prevCard(): void {
    if( this.currentIndex > 0 ) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cards.length - 1;
    }
    this.updateCarouselPosition();
  }

  nextCard(): void {
    if( this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarouselPosition();
  }

  updateCarouselPosition(): void {
    if(this.carouselElement) {
      this.translateXValue = -(this.currentIndex * (this.cardWidth + this.cardMargin));
      this.renderer.setStyle(this.carouselElement.nativeElement, 'transform', `translateX(${this.translateXValue}px)`);
    }
  }
}
