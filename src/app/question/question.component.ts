import { Component, OnInit } from '@angular/core';

interface VastausVaihtoehto {
  teksti: string;
  kuvaUrl: string;
}

interface Kysymys {
  kysymys: string;
  vaihtoehdot: VastausVaihtoehto[];
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  kysymykset: Kysymys[] = [
    {
      kysymys: 'blabla',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto 1', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Vaihtoehto 2', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Vaihtoehto 3', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Vaihtoehto 4', kuvaUrl: 'assets/images/ang.png' }
      ]
    },
    {
      kysymys: 'Joku yrittää ryöstää sinut kadulla, mitä teet?',
      vaihtoehdot: [
        { teksti: 'Soitat poliisille.', kuvaUrl: 'assets/images/ts.png' },
        { teksti: 'Soitat kaverit apuun.', kuvaUrl: 'assets/images/ts.png' },
        { teksti: 'Ryöstät itse ryöstäjän.', kuvaUrl: 'assets/images/ts.png' },
        { teksti: 'Yrität juosta karkuun.', kuvaUrl: 'assets/images/ts.png' }
      ]
    },
    {
      kysymys: 'Muut ihmiset ovat mielestäsi...',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto A', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Vaihtoehto B', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Vaihtoehto C', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Vaihtoehto D', kuvaUrl: 'assets/images/pekkull.jpg' }
      ]
    },
    {
      kysymys: 'Kysymys 4',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto A', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Vaihtoehto B', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Vaihtoehto C', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Vaihtoehto D', kuvaUrl: 'assets/images/super.jpg' }
      ]
    },
    {
      kysymys: 'Kysymys 5',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto A', kuvaUrl: 'assets/images/birtd-email.png' },
        { teksti: 'Vaihtoehto B', kuvaUrl: 'assets/images/birtd-email.png' },
        { teksti: 'Vaihtoehto C', kuvaUrl: 'assets/images/birtd-email.png' },
        { teksti: 'Vaihtoehto D', kuvaUrl: 'assets/images/birtd-email.png' }
      ]
    },
    {
      kysymys: 'Kysymys 6',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto A', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Vaihtoehto B', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Vaihtoehto C', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Vaihtoehto D', kuvaUrl: 'assets/images/super.jpg' }
      ]
    }
  ];

  nykyinenKysymysIndeksi = 0;
  vastaukset: string[] = [];
  tulos: string | null = null;
  kyselyAloitettu = false;

  ngOnInit(): void {
  }

  tallennaVastaus(vastaus: string) {
    this.vastaukset.push(vastaus);
    if (this.nykyinenKysymysIndeksi < this.kysymykset.length - 1) {
      this.nykyinenKysymysIndeksi++;
    } else {
      this.tulos = 'Tähän tulee tulos';
    }
  }

  siirryEdelliseenKysymykseen() {
    if (this.nykyinenKysymysIndeksi > 0) {
      this.nykyinenKysymysIndeksi--;
    }
  }

  siirrySeuraavaanKysymykseen() {
    if (this.nykyinenKysymysIndeksi < this.kysymykset.length - 1) {
      this.nykyinenKysymysIndeksi++;
    }
  }

  nollaaTulos() {
    this.vastaukset = [];
    this.tulos = null;
    this.nykyinenKysymysIndeksi = 0;
    this.kyselyAloitettu = false;
  }

  aloitaKysely() {
    this.kyselyAloitettu = true;
  }
}
