import { Component, Input } from '@angular/core';
import { imageLinks } from 'src/app/utils/helpers';
import { ChocolateData } from 'src/type';

@Component({
  selector: 'app-chocolate-item',
  templateUrl: './chocolate-item.component.html',
  styleUrls: ['./chocolate-item.component.scss'],
})
export class ChocolateItemComponent {
  @Input() chocolate: ChocolateData | undefined;
  image: string | undefined;

  ngOnInit() {
    if (this.chocolate) {
      this.image = imageLinks[+this.chocolate.id - 1];
    }
  }
}
