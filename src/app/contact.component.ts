import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class ContactComponent {
  @Input() name: string;
}
