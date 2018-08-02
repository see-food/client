import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
import { PhotoService } from '../../services/photo.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {
  
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/api/pics/`,
    method: 'POST'
  });


  newPhoto = {
    username: '',
    filename: '',
    url: ''
  }
  feedback: String;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      console.log('forma', form);
      console.log('item', item)
    }
    this.uploader.uploadAll();
    console.log(this.uploader);
    this.uploader.onCompleteItem = () => this.router.navigate(['/login']);
  }

}
