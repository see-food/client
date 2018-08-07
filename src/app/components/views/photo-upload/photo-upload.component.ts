import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { environment } from '../../../../environments/environment';
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
  
  feedback: String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    }
  }

  submit() {
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item, response) => {
      this.router.navigate([`/photo/wait/${JSON.parse(response).photo._id}`])
    };
  }

}
