import { Component, Input } from '@angular/core';
import { ChocolateData, Price } from 'src/type';
import { round } from 'lodash';

interface PartialPrice {
  price: number;
  link: string;
  shop: string;
}

@Component({
  selector: 'app-chocolate-item-price',
  templateUrl: './chocolate-item-price.component.html',
  styleUrls: ['./chocolate-item-price.component.scss'],
})
export class ChocolateItemPriceComponent {
  @Input() prices: Price[] = [];
  @Input() currency: ChocolateData['currency'] | undefined;

  lowestPricePer100g: PartialPrice | undefined;
  averagePricePer100g: string | undefined;

  ngOnInit(): void {
    const pricePer100g: PartialPrice[] = [];

    this.prices.forEach((price) => {
      let pricePerUnit = price.price;
      if (price.unit === 'kg') {
        pricePerUnit /= price.amount * 1000;
      } else {
        pricePerUnit /= price.amount;
      }
      pricePer100g.push({
        price: round(pricePerUnit * 100, 2),
        link: price.link,
        shop: price.shop,
      });
    });

    // const lowestPrice
    const min = Math.min(...pricePer100g.map((item) => item.price));
    const lowestPricePer100g = pricePer100g.filter(
      (item) => item.price === min
    );

    this.lowestPricePer100g = lowestPricePer100g[0] ?? undefined;

    // average price
    const averagePricePer100g =
      pricePer100g.reduce((a, b) => a + b.price, 0) / pricePer100g.length;
    this.averagePricePer100g = averagePricePer100g
      ? ` ${round(averagePricePer100g, 2)}`
      : undefined;
  }
}
