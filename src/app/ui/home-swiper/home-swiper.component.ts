import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home-swiper',
  templateUrl: './home-swiper.component.html',
  styleUrls: ['./home-swiper.component.scss'],
})
export class SwiperComponent implements OnInit {

  slideIndex = 1;
  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }


  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1]['style'].display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}