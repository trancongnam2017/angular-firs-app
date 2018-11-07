import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.scss']
})
export class ContactImageDetailComponent implements OnInit {

  avatar: any = {};
  constructor() { }

  ngOnInit() {
    this.avatar.url = 'https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png';
  }

}
