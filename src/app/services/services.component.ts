import { Component, OnInit } from '@angular/core';
import { Image, LightboxService } from "ngx-photoswipe";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  galleryKey: string;

  constructor(private ls2: LightboxService, private ls1: LightboxService, private ls3: LightboxService) { }

  ngOnInit() {
    this.ls2.createGallery("galleryKey2");
    const img = new Image();
    img.largeUrl = "assets/images/work-2.jpg";
    img.height = 3296;
    img.width = 4934;
    img.id = 0;
    img.size = `${img.width}x${img.height}`;
    img.thumbUrl = "assets/images/work-2.jpg";
    this.ls2.addImage("galleryKey2", img);

    this.ls1.createGallery("galleryKey1")
    const img2 = new Image();
    img2.largeUrl = "assets/images/work-1.jpg";
    img2.height = 3296;
    img2.width = 4934;
    img2.id = 0;
    img2.size = `${img.width}x${img.height}`;
    img2.thumbUrl = "assets/images/work-1.jpg";
    this.ls1.addImage("galleryKey1", img2);

    this.ls3.createGallery("galleryKey3")
    const img3 = new Image();
    img3.largeUrl = "assets/images/work-3.jpg";
    img3.height = 3296;
    img3.width = 4934;
    img3.id = 0;
    img3.size = `${img.width}x${img.height}`;
    img3.thumbUrl = "assets/images/work-3.jpg";
    this.ls3.addImage("galleryKey3", img3);

    setTimeout(() => {
      this.galleryKey = "galleryKey2";
    }, 2000);
  }

  imagesLoaded(event: any): void {}

}
