import { Component, OnInit } from '@angular/core';

interface VastausVaihtoehto {
  teksti: string;
}

interface Kysymys {
  kysymys: string;
  kysymysKuvaUrl: string;
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

  constructor() {
  }


  kysymykset: Kysymys[] = [
    {
      kysymys: 'Uutislähetyksessä kerrotaan kulmakioskin ryöstöstä, oletko sinä...',
      kysymysKuvaUrl: 'assets/imgs/wire-1.jpg',
      vaihtoehdot: [
        { teksti: 'Yrittämässä saada varasta kiinni.' },
        { teksti: 'Ohikulkumatkalla ja jäät katsomaan tapahtumia.' },
        { teksti: 'Sinulla saattoi ehkä olla jotain tekemistä asian kanssa.' },
        { teksti: 'Olit ryöstäjä.' }
      ]
    },
    {
      kysymys: 'Joku yrittää ryöstää sinut kadulla, mitä teet?',
      kysymysKuvaUrl: 'assets/imgs/wire-3.jpg',
      vaihtoehdot: [
        { teksti: 'Soitat poliisille.' },
        { teksti: 'Soitat kaverit apuun.' },
        { teksti: 'Ryöstät itse ryöstäjän.' },
        { teksti: 'Yrität juosta karkuun.' }
      ]
    },
    {
      kysymys: 'Muut ihmiset ovat mielestäsi...',
      kysymysKuvaUrl: 'assets/imgs/wire-4.jpg',
      vaihtoehdot: [
        { teksti: 'Yleensä mukavia ja ystävällisiä.' },
        { teksti: 'Riippuu aina henkilöstä.' },
        { teksti: 'Useimmiten töykeitä.' },
        { teksti: 'Et voi sietää heitä.' }
      ]
    },
    {
      kysymys: 'Uusi asukas muuttaa naapurustoosi ja käyttäytyy ylimielisesti sinua kohtaan, sinä...',
      kysymysKuvaUrl: 'assets/imgs/wire-5.jpg',
      vaihtoehdot: [
        { teksti: 'Yrität olla isompi ihminen ja unohtaa asian.' },
        { teksti: 'Pyydät naapuria olemaan hieman kohteliaampi.' },
        { teksti: 'Varoitat naapuria tylystä käytöksestä.' },
        { teksti: 'Näytät uudelle naapurille oman paikkansa.' }
      ]
    },
    {
      kysymys: 'Olet varastanut käynnissä olevan auton, mikä näistä kuvaa sinua parhaiten...',
      kysymysKuvaUrl: 'assets/imgs/wire-6.jpg',
      vaihtoehdot: [
        { teksti: 'Kaverisi yllyttänyt sinut siihen.' },
        { teksti: 'Sinun on saatava rahaa auton myynnistä.' },
        { teksti: 'Et normaalisti varastaisi autoa, mutta sinulla on käynnissä hätätilanne joka vaatii sitä.' },
        { teksti: 'Auto on luultavasti jonkun rikkaan kuka ei kaipaa sitä, joten näit tilaisuutesi tulleen.' }
      ]
    },
    {
      kysymys: 'Sinun on valvottava syyn X takia koko yö, sinä...',
      kysymysKuvaUrl: 'assets/imgs/wire-7.jpg',
      vaihtoehdot: [
        { teksti: 'Juot kahvia ja yrität pysyä hereillä.' },
        { teksti: 'Saatat torkahtaa välillä, mutta saat valvottua melkein koko yön.' },
        { teksti: 'Lepuutat silmiäsi puolet yöstä.' },
        { teksti: 'Nukahdat vahingossa koko yöksi.' }
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
      // siirrytään seuraavaan vasta tässä vaiheessa
      console.log("Tulokset: ")
      console.log("avon: " + this.hahmoVastaukset.avon);
      console.log("bubbles: " + this.hahmoVastaukset.bubbles);
      console.log("jimmy: " + this.hahmoVastaukset.jimmy);
      console.log("omar: " + this.hahmoVastaukset.omar);
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
        this.tulos = 'Olet Jimmy McNulty - lannistumaton ja kompromissiton. Omaat vahvan omistautumisen ja halun paljastaa totuus, vaikka se tarkoittaisi ristiriitoja vallitsevan järjestelmän kanssa. Älykkyytesi ja intohimosi voivat toisinaan johdattaa sinut vaikeisiin tilanteisiin, mutta et pelkää haastaa epäkohtia.';
      } else if (enitenPisteita === this.hahmoVastaukset.omar) {
        this.tulos = 'Olet Omar Little - rohkea ja mystinen. Sinulla on vahva oikeudentunto ja kunnioitat omia sääntöjäsi. Pelkäämättömyytesi ja älykkyytesi tekevät sinusta arvaamattoman ja kunnioitetun hahmon. Sinulla on moraalisia periaatteita ja kykyä toimia omalla tavallasi.';
      } else if (enitenPisteita === this.hahmoVastaukset.avon) {
        this.tulos = 'Olet Avon Barksdale - karismaattinen ja määrätietoinen. Sinulla on kyky johtaa ja viedä asioita eteenpäin tiukalla kurilla. Vaikka toimit omalla tavallasi, sinulla on oma moraalikoodisi. Valta ja strategia ohjaavat toimintaasi, ja sinua kunnioitetaan johtajana.';
      } else if (enitenPisteita === this.hahmoVastaukset.bubbles) {
        this.tulos = 'Olet Bubbles - sydämellinen ja selviytyjä. Kamppailet vaikeuksien kanssa, mutta säilytät toiveikkuuden ja halun parantua. Olet herkkä ja auttavainen, ja ihmiset pitävät sinusta lämpimän luonteesi takia. Tarinasi kertoo toivosta ja taistelusta vaikeiden olosuhteiden keskellä.';
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
    this.hahmoVastaukset.avon = 0;
    this.hahmoVastaukset.bubbles = 0;
    this.hahmoVastaukset.omar = 0;
    this.hahmoVastaukset.jimmy = 0;
  }

  aloitaKysely() {
    if (!this.kyselyAloitettu) {
      this.kyselyAloitettu = true;
    }
  }
}
