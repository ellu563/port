import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  cards: Card[] = [
    { id: 1, title: 'Kissa', frontImage: 'assets/images/kortti.png', backImage: 'assets/images/kullerssoni.jpg', flipped: false },
    { id: 2, title: 'Koira', frontImage: 'assets/images/kortti.png', backImage: 'assets/images/pekkull.jpg', flipped: false },
    { id: 3, title: 'Lehmä', frontImage: 'assets/images/kortti.png', backImage: 'assets/images/kulssi.jpg', flipped: false },
    { id: 4, title: 'Pöllö', frontImage: 'assets/images/kortti.png', backImage: 'assets/images/olut.png', flipped: false },
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
