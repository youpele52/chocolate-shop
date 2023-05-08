import { Component } from '@angular/core';
import { ChocolateData } from 'src/type';
import { ChocolateService } from 'src/app/services/chocolate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getRandomInt, imageLinks } from 'src/app/utils/helpers';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private chocolateService: ChocolateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  chocolate: ChocolateData | undefined;
  pricesData: ChocolateData['prices'] | undefined;
  image: string | undefined;

  ngOnInit(): void {
    this.image = imageLinks[getRandomInt(10)];

    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      this.chocolateService.getChocolateData().subscribe((chocolates) => {
        this.chocolate = chocolates.find((chocolate) => chocolate.id == id);
        this.pricesData = chocolates.find(
          (chocolate) => chocolate.id == id
        )?.prices;
      });
    });
  }
}
