import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

interface Card {
  id: number,
  title: string;
  frontImage: string;
  backImage: string;
  flipped: boolean;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  /* slideriä varten, slide in left */
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.7s ease', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
    /* animations card-flip tanne */
  ],
})

export class GameComponent implements OnInit {

  shouldSlide = true;

  cards: Card[] = [
    { id: 1, title: 'Kissa', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/kullerssoni.jpg', flipped: false },
    { id: 2, title: 'Koira', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/pekkull.jpg', flipped: false },
    { id: 3, title: 'Lehmä', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/kulssi.jpg', flipped: false },
    { id: 4, title: 'Pöllö', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/olut.png', flipped: false },

    { id: 5, title: 'Kissa', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/kullerssoni.jpg', flipped: false },
    { id: 6, title: 'Koira', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/pekkull.jpg', flipped: false },
    { id: 7, title: 'Lehmä', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/kulssi.jpg', flipped: false },
    { id: 8, title: 'Pöllö', frontImage: 'assets/images/tikkari.jpg', backImage: 'assets/images/olut.png', flipped: false },
  ];

  flippedCards: Card[] = [];
  matchedCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectCard(card: Card) {

    card.flipped = !card.flipped;
  }
}
