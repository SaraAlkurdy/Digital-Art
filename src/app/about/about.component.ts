import { Component, OnInit } from '@angular/core';
import { Image, LightboxService } from "ngx-photoswipe";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  galleryKey: string;

  constructor(private ls: LightboxService) { }

  ngOnInit() {
    this.ls.createGallery("galleryKey");
    const img = new Image();
    img.largeUrl = "assets/images/about.jpg";
    img.height = 3080;
    img.width = 2980;
    img.id = 0;
    img.size = `${img.width}x${img.height}`;
    img.thumbUrl = "assets/images/about.jpg";
    this.ls.addImage("galleryKey", img);

    setTimeout(() => {
      this.galleryKey = "galleryKey";
    }, 2000);
  }

  imagesLoaded(event: any): void {}

}
