import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ICarousel } from './interface';

@Component({
  selector: 'vm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() public data: ICarousel;
  @Input() public templateRef: TemplateRef<any>;
  @ViewChild('slidesContainer') public div;
  public slides: any[] = [];
  public minWidth: string;
  private slidePosition = 0;
  private currentPosition: number;
  private interval;
  constructor() {}

  public ngOnInit(): void {
    const clone = [...this.data.collection];
    this.createSlideItems(clone);
    this.carouselStart();
  }

  public carouselStop(): void {
    clearInterval(this.interval);
  }

  public carouselStart(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.data.delay);
  }

  public nextSlide(): void {
    if (this.slidePosition === this.slides.length - 1) {
      this.slidePosition = 0;
    } else {
      this.slidePosition++;
    }
    this.currentPosition = this.slidePosition * -100;
    this.div.nativeElement.style.left = `${this.currentPosition}%`;
  }

  public prevSlide(): void {
    if (this.slidePosition > 0) {
      this.currentPosition += 100;
      this.div.nativeElement.style.left = `${this.currentPosition}%`;
    }
  }

  private createSlideItems(clone): void {
    const { collection, itemsPerSlide } = this.data;
    this.minWidth = `min-width: ${100 / itemsPerSlide}%`;
    this.slides = collection
      .map(() => ({
        items: clone.splice(0, itemsPerSlide),
      }))
      .filter((obj) => obj.items.length);
  }
}
