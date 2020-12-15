import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-your-doctors',
  templateUrl: './know-your-doctors.component.html',
  styleUrls: ['./know-your-doctors.component.css']
})
export class KnowYourDoctorsComponent implements OnInit {

  public items = [
    {
      title: "F",
      path: "https://placeimg.com/350/150/any/sepia"
    },
    {
      title: "Q",
      path: "https://placeimg.com/350/150/any/grayscale"
    },
    {
      title: "W",
      path: "https://placeimg.com/350/150/tech/grayscale"
    },
    {
      title: "E",
      path: "https://placeimg.com/350/150/people"
    },
    {
      title: "T",
      path: "https://placeimg.com/350/150/nature"
    },
    {
      title: "Y",
      path: "https://placeimg.com/350/150/arch"
    }
  ];

  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor() { }

  ngOnInit(): void {
    this.slides = this.chunk(this.items, 3);

  }
}
