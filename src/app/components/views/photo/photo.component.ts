import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photoId: string;
  photo: any;

  constructor(private photoService: PhotosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.photoId = params['id'])
    this.photoService.getPhotoById(this.photoId).subscribe(photo=> {
      this.photo = photo
      console.log(this.photo);
    })
  }

}
