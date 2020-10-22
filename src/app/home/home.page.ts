import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild("ioninput") ionInputExample: IonInput;
  @ViewChild('normalinput', { read: ElementRef }) normalInputExample: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.ionInputExample.getInputElement().then(nativeInputInsideIonInput => {
      this.renderer.addClass(nativeInputInsideIonInput, "aqua-marine");
      this.renderer.setStyle(nativeInputInsideIonInput,'font-size','x-large');
      console.log('ion-input: ', nativeInputInsideIonInput);      
    });

    const ni = this.normalInputExample.nativeElement;
    this.renderer.addClass(ni, "aqua-marine");
    this.renderer.setStyle(ni,'font-size','x-large');
    console.log('ni: ', ni);
  }
}
