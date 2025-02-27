import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

// card interface
interface Card {
  id: number,
  title: string;
  frontImage: string;
  backImage: string;
  flipped: boolean;
  matched: boolean;
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
    /* animations card-flip */
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'perspective(1000px) rotateY(0deg) scaleX(-1)'
      })),
      transition('default => flipped', animate('300ms ease-out')),
      transition('flipped => default', animate('300ms ease-in'))
    ])
  ],
})

export class GameComponent implements OnInit {

  cards: Card[] = [];

  // slide
  shouldSlide = true;

  // logiikkaa varten
  selectedCards: any[] = [];
  matchedCards: any[] = [];

  constructor() {
    this.loadCards();
  }

  loadCards() {
    this.cards = [
      { id: 1, title: 'Mansikka', backImage: 'assets/imgs/mansikki.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
      { id: 2, title: 'Mustikka', backImage: 'assets/imgs/mustikki.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
      { id: 3, title: 'Fruit', backImage: 'assets/imgs/granaatti.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
      { id: 4, title: 'Marja', backImage: 'assets/imgs/marjat.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },

      { id: 5, title: 'Mansikka', backImage: 'assets/imgs/mansikki.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
      { id: 6, title: 'Mustikka', backImage: 'assets/imgs/mustikki.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
      { id: 7, title: 'Fruit', backImage: 'assets/imgs/granaatti.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
      { id: 8, title: 'Marja', backImage: 'assets/imgs/marjat.jpg', frontImage: 'assets/imgs/lollipop.jpg', flipped: false, matched: false },
    ];
  }

  // kutsutaan shuffleCards()-metodia ennen korttien tilan nollaamista
  ngOnInit(): void {
    this.shuffleCards();
    this.cards.forEach((card) => {
      card.flipped = false;
    });
  }

  // shuffleCards()-metodi käyttää Fisher-Yates-algoritmia 
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // uudelleen peli, sekoitetaan kortit
  startGame(): void {
    this.shuffleCards();
    this.resetCards();
  }

  // uudelleen peli
  resetCards(): void {
    this.cards.forEach((card) => {
      card.flipped = false;
      card.matched = false;
    });
  }

  selectCard(card: any) {
    if (!card.flipped && this.selectedCards.length < 2) {
      card.flipped = true;
      this.selectedCards.push(card);

      if (this.selectedCards.length === 2) {
        this.checkForMatch();
      }
    }
  }

  // etsi vastaava
  checkForMatch() {
    if (
      this.selectedCards[0].backImage === this.selectedCards[1].backImage &&
      this.selectedCards[0].id !== this.selectedCards[1].id
    ) {
      this.selectedCards[0].matched = true;
      this.selectedCards[1].matched = true;
      this.selectedCards = [];
      this.checkForWin();
    } else {
      setTimeout(() => {
        this.selectedCards.forEach((card) => {
          card.flipped = false;
        });

        this.selectedCards = [];
      }, 1000);
    }
  }

  checkForWin() {
    const matchedCount = this.cards.filter((card) => card.matched).length;
    if (matchedCount === this.cards.length) {
      if (matchedCount === this.cards.length) {
        /* laitetaan pieni viive niin onnittelut eivät tule liian ajoissa */
        setTimeout(() => {
          alert('Onneksi olkoon, voitit pelin!');
          this.startGame();
        }, 1000);
      }
    }
  }

}
