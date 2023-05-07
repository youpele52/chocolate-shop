import { Component, Input } from '@angular/core';
import { ChocolateData } from 'src/type';

@Component({
  selector: 'app-chocolate-item',
  templateUrl: './chocolate-item.component.html',
  styleUrls: ['./chocolate-item.component.scss'],
})
export class ChocolateItemComponent {
  @Input() chocolate: ChocolateData | undefined;
}
