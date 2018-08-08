import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../services/photos.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: any

  constructor(private photosService: PhotosService) { }
  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    this.photosService.getPhotosByUser().subscribe(photos => {
      this.photos = photos
    })
  }

  deletePhoto(id) {
    this.photosService.deletePhotoById(id).subscribe()
    this.photos = this.photos.filter(e => e._id != id)
  }
}
