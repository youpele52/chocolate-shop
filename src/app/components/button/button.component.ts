import { Component, Input } from '@angular/core';

export interface Button {
  usage: 'primary' | 'secondary';
  htmlTag: 'button-tag' | 'a-tag';
  text: string;
  href: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: Button['text'] = '';
  @Input() htmlTag: Button['htmlTag'] = 'button-tag';
  @Input() usage?: Button['usage'];
  @Input() href?: Button['href'];
}
