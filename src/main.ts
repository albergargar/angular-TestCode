import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>New Serial Number {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  ngOnInit() {
    this.name = this.ConvertSerialNumber('0146A23040032020KX6E 6049 A47B4');
  }

  public ConvertSerialNumber(numeroPieza: string): string {
    const sn: string = numeroPieza;
    let newSn: string = numeroPieza;
    const position15: string = sn.substring(15, 16);

    console.log('len' + sn.length);
    console.log(position15);

    if (sn.length === 22 && position15 == '4') {
      newSn = sn.substring(0, 21).replace('0146A', '1');
    }

    if (sn.length === 30 || sn.length === 31) {
      if (position15 == '0') {
        newSn = sn.substring(0, 16).replace('0146A', '8');
      }
      if (position15 == '8') {
        if (
          sn.includes('AG9E') ||
          sn.includes('EJ7E') ||
          sn.includes('FB5E') ||
          sn.includes('LR3E')
        ) {
          newSn = sn.substring(0, 28);
        }
      }
    }

    console.log('New serial number: ' + newSn);

    return newSn;
  }
}

bootstrapApplication(App);
