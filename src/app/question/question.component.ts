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
      kysymys: 'Kysymys 1',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto 1', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Vaihtoehto 2', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Vaihtoehto 3', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Vaihtoehto 4', kuvaUrl: 'assets/images/ang.png' }
      ]
    },
    {
      kysymys: 'Kysymys 2',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto A', kuvaUrl: 'assets/images/ts.png' },
        { teksti: 'Vaihtoehto B', kuvaUrl: 'assets/images/ts.png' },
        { teksti: 'Vaihtoehto C', kuvaUrl: 'assets/images/ts.png' },
        { teksti: 'Vaihtoehto D', kuvaUrl: 'assets/images/ts.png' }
      ]
    },
    {
      kysymys: 'Kysymys 3',
      vaihtoehdot: [
        { teksti: 'Vaihtoehto A', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Vaihtoehto B', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Vaihtoehto C', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Vaihtoehto D', kuvaUrl: 'assets/images/pekkull.jpg' }
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
