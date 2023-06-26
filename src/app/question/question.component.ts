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
      kysymys: 'Uutislähetyksessä kerrotaan kulmakioskin ryöstöstä, oletko sinä...',
      vaihtoehdot: [
        { teksti: 'Yrittämässä saada varasta kiinni.', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Ohikulkumatkalla ja jäät katsomaan tapahtumia.', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Sinulla saattoi ehkä olla jotain tekemistä asian kanssa.', kuvaUrl: 'assets/images/ang.png' },
        { teksti: 'Olit ryöstäjä.', kuvaUrl: 'assets/images/ang.png' }
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
        { teksti: 'Yleensä mukavia ja ystävällisiä.', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Riippuu aina henkilöstä.', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Useimmiten töykeitä.', kuvaUrl: 'assets/images/pekkull.jpg' },
        { teksti: 'Et voi sietää heitä.', kuvaUrl: 'assets/images/pekkull.jpg' }
      ]
    },
    {
      kysymys: 'Uusi asukas muuttaa naapurustoosi ja käyttäytyy ylimielisesti sinua kohtaan, sinä...',
      vaihtoehdot: [
        { teksti: 'Yrität olla isompi ihminen ja unohtaa asian.', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Pyydät naapuria olemaan hieman kohteliaampi.', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Varoitat naapuria tylystä käytöksestä.', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Näytät uudelle naapurille oman paikkansa.', kuvaUrl: 'assets/images/super.jpg' }
      ]
    },
    {
      kysymys: 'Olet varastanut käynnissä olevan auton, mikä näistä kuvaa sinua parhaiten...',
      vaihtoehdot: [
        { teksti: 'Kaverisi yllyttänyt sinut siihen.', kuvaUrl: 'assets/images/birtd-email.png' },
        { teksti: 'Sinun on saatava rahaa auton myynnistä.', kuvaUrl: 'assets/images/birtd-email.png' },
        { teksti: 'Et normaalisti varastaisi autoa, mutta sinulla on käynnissä hätätilanne joka vaatii sitä.', kuvaUrl: 'assets/images/birtd-email.png' },
        { teksti: 'Auto on luultavasti jonkun rikkaan kuka ei kaipaa sitä, joten näit tilaisuutesi tulleen.', kuvaUrl: 'assets/images/birtd-email.png' }
      ]
    },
    {
      kysymys: 'Sinun on valvottava syyn X takia koko yö, sinä...',
      vaihtoehdot: [
        { teksti: 'Juot kahvia ja yrität pysyä hereillä.', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Saatat torkahtaa välillä, mutta saat valvottua melkein koko yön.', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Lepuutat silmiäsi puolet yöstä.', kuvaUrl: 'assets/images/super.jpg' },
        { teksti: 'Nukahdat vahingossa koko yöksi.', kuvaUrl: 'assets/images/super.jpg' }
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
