import { Component } from '@angular/core';
import { ChocolateData } from 'src/type';
import { ChocolateService } from 'src/app/services/chocolate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { imageLinks } from 'src/app/utils/helpers';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      this.image = imageLinks[+id - 1];
      this.chocolateService.getChocolateData().subscribe((chocolates) => {
        this.chocolate = chocolates.find((chocolate) => chocolate.id == id);
        this.pricesData = chocolates.find(
          (chocolate) => chocolate.id == id
        )?.prices;
      });
    });
  }
}
