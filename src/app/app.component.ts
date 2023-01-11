import { Component, OnInit } from '@angular/core';
import { Apod } from './apod';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nasa-api';
  imgOfTheDay: string = '';

  constructor(public nasaService: NasaService) {}

  ngOnInit() {
    this.getImageOfTheDay();
  }

  getImageOfTheDay(): void {
    this.nasaService
      .getImageOfTheDay()
      .subscribe((data) => (this.imgOfTheDay = data));
  }
}
