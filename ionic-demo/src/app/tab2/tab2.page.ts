import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(
    private camera: Camera,
    private router: Router,
    private imgSrv: ImageService
    ) { }

  protected takePicture(): void {
    this.camera.getPicture(this.options)
    .then((imageData) => {
      this.imgSrv.update(imageData);
      this.router.navigate(['tabs/tab3']);
    })
    .catch(e => {
      alert("error: " + JSON.stringify(e));
    });
  }

}
