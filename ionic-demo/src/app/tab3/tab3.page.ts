import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  protected image: any;
  protected alt: string = 'test';

  constructor(private imgSrv: ImageService) {
    this.imgSrv.get().subscribe(img => {
      this.image = (<any>window).Ionic.WebView.convertFileSrc(img);
      this.alt = img.toString();
    });
   }

}
