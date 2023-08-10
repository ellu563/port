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

  hahmoVastaukset = {
    jimmy: 0,
    omar: 0,
    avon: 0,
    bubbles: 0
  };

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

      // uutta 
      const nykyinenKysymys = this.kysymykset[this.nykyinenKysymysIndeksi];

      for (const vaihtoehto of nykyinenKysymys.vaihtoehdot) {
        if (vaihtoehto.teksti === vastaus) {
          if (nykyinenKysymys.kysymys.includes('kulmakioskin ryöstöstä')) {
            if (vaihtoehto.teksti === 'Yrittämässä saada varasta kiinni.') {
              this.hahmoVastaukset.jimmy++;
            } else if (vaihtoehto.teksti === 'Ohikulkumatkalla ja jäät katsomaan tapahtumia.') {
              this.hahmoVastaukset.bubbles++;
            } else if (vaihtoehto.teksti === 'Sinulla saattoi ehkä olla jotain tekemistä asian kanssa.') {
              this.hahmoVastaukset.avon++;
            } else if (vaihtoehto.teksti === 'Olit ryöstäjä.') {
              this.hahmoVastaukset.omar++;
            }
          } else if (nykyinenKysymys.kysymys.includes('Joku yrittää ryöstää sinut kadulla')) {
            if (vaihtoehto.teksti === 'Soitat poliisille.') {
              this.hahmoVastaukset.jimmy++;
            } else if (vaihtoehto.teksti === 'Soitat kaverit apuun.') {
              this.hahmoVastaukset.avon++;
            } else if (vaihtoehto.teksti === 'Ryöstät itse ryöstäjän.') {
              this.hahmoVastaukset.omar++;
            } else if (vaihtoehto.teksti === 'Yrität juosta karkuun.') {
              this.hahmoVastaukset.bubbles++;
            }
          } else if (nykyinenKysymys.kysymys.includes('Muut ihmiset ovat mielestäsi...')) {
            if (vaihtoehto.teksti === 'Yleensä mukavia ja ystävällisiä.') {
              this.hahmoVastaukset.jimmy++;
            } else if (vaihtoehto.teksti === 'Riippuu aina henkilöstä.') {
              this.hahmoVastaukset.bubbles++;
            } else if (vaihtoehto.teksti === 'Useimmiten töykeitä.') {
              this.hahmoVastaukset.avon++;
            } else if (vaihtoehto.teksti === 'Et voi sietää heitä.') {
              this.hahmoVastaukset.omar++;
            }
          } else if (nykyinenKysymys.kysymys.includes('Uusi asukas muuttaa naapurustoosi')) {
            if (vaihtoehto.teksti === 'Yrität olla isompi ihminen ja unohtaa asian.') {
              this.hahmoVastaukset.bubbles++;
            } else if (vaihtoehto.teksti === 'Pyydät naapuria olemaan hieman kohteliaampi.') {
              this.hahmoVastaukset.jimmy++;
            } else if (vaihtoehto.teksti === 'Varoitat naapuria tylystä käytöksestä.') {
              this.hahmoVastaukset.omar++;
            } else if (vaihtoehto.teksti === 'Näytät uudelle naapurille oman paikkansa.') {
              this.hahmoVastaukset.avon++;
            }
          } else if (nykyinenKysymys.kysymys.includes('Olet varastanut käynnissä olevan auton')) {
            if (vaihtoehto.teksti === 'Kaverisi yllyttänyt sinut siihen.') {
              this.hahmoVastaukset.bubbles++;
            } else if (vaihtoehto.teksti === 'Sinun on saatava rahaa auton myynnistä.') {
              this.hahmoVastaukset.avon++;
            } else if (vaihtoehto.teksti === 'Et normaalisti varastaisi autoa, mutta sinulla on käynnissä hätätilanne joka vaatii sitä.') {
              this.hahmoVastaukset.jimmy++;
            } else if (vaihtoehto.teksti === 'Auto on luultavasti jonkun rikkaan kuka ei kaipaa sitä, joten näit tilaisuutesi tulleen.') {
              this.hahmoVastaukset.omar++;
            }
          } else if (nykyinenKysymys.kysymys.includes('Sinun on valvottava syyn X takia koko yö')) {
            if (vaihtoehto.teksti === 'Juot kahvia ja yrität pysyä hereillä.') {
              this.hahmoVastaukset.avon++;
            } else if (vaihtoehto.teksti === 'Saatat torkahtaa välillä, mutta saat valvottua melkein koko yön.') {
              this.hahmoVastaukset.jimmy++;
            } else if (vaihtoehto.teksti === 'Lepuutat silmiäsi puolet yöstä.') {
              this.hahmoVastaukset.omar++;
            } else if (vaihtoehto.teksti === 'Nukahdat vahingossa koko yöksi.') {
              this.hahmoVastaukset.bubbles++;
            }
          }
        }
      }
      this.nykyinenKysymysIndeksi++;
    } else {
      // kuka saa eniten pisteitä
      const enitenPisteita = Math.max(
        this.hahmoVastaukset.jimmy,
        this.hahmoVastaukset.omar,
        this.hahmoVastaukset.avon,
        this.hahmoVastaukset.bubbles
      );

      if (enitenPisteita === this.hahmoVastaukset.jimmy) {
        this.tulos = 'Olet Jimmy McNulty.';
      } else if (enitenPisteita === this.hahmoVastaukset.omar) {
        this.tulos = 'Olet Omat Little.';
      } else if (enitenPisteita === this.hahmoVastaukset.avon) {
        this.tulos = 'Olet Avon Barksdale.';
      } else if (enitenPisteita === this.hahmoVastaukset.bubbles) {
        this.tulos = 'Olet Bubbles.';
      }
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
