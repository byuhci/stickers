import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataloaderService } from '../dataloader.service';

@Component({
  selector: 'app-dataview',
  template: `
    <app-databar *ngFor="let dims of dimensions" [_height]="databarHeight" [dataset]="dataset" [dims]="dims"></app-databar>
  `,
  styles: []
})
export class DataviewComponent implements OnInit {
  databarHeight = 400;
  dimensions = [[0,1,2], [3,4,5], [6,7,8], [9,10,11]];
  dataset: string;

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private dataloader: DataloaderService) { }

  ngOnInit() {
    this.dataset = this.route.snapshot.paramMap.get('dataset');
    this.dataloader.setDataset(this.dataset);
    console.info('dataview init', this);
  }

}