import { Component } from '@angular/core';
import { ChocolateService } from 'src/app/services/chocolate.service';
import { ChocolateData } from 'src/type';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss'],
})
export class ChocolateListComponent {
  chocolates: ChocolateData[] = [];

  constructor(private chocolateService: ChocolateService) {}
  ngOnInit(): void {
    this.chocolateService
      .getChocolateData()
      .subscribe((chocolates) => (this.chocolates = chocolates));
  }
}
