import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemElement } from './carousel-item-element.directive';
import { CarouselItemDirective } from './carousel-item.directive';

@Component({
  selector: 'app-carousel',
  exportAs: 'carousels',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() items: any;
  @Input() visibleItems: number = 3;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carouselsInner') private carouselsInner: ElementRef;
  // @ViewChildren("carouselsInner") ul: QueryList<any>;

  carouselWrapperStyle = {};
  private itemWidth: number = 0;
  private offsetLeft: number = 0;
  private player: AnimationPlayer;
  private currentSlide: number = 0;
  private timings: string = '250ms ease-in';
  private showControls: boolean = true;

  constructor(private animationBuilder: AnimationBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.offsetWidth;
      this.carouselWrapperStyle = {
        width: `${ (this.itemWidth + this.offsetLeft) * this.visibleItems }px`
      }
    }, 1000);

  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   console.log(window.innerWidth);
  //   this.visibleItems = 1;
  //   setTimeout(() => {
  //     this.itemWidth = window.innerWidth;
  //     this.carouselWrapperStyle = {
  //       width: `${ (this.itemWidth + this.offsetLeft) * this.visibleItems }px`
  //     }
  //   }, 1000);
  // }

  next() {
    if (this.currentSlide + 1 === this.items.length) {
      return;
    }

    console.log(this.currentSlide);
    console.log(this.visibleItems);
    console.log(this.items.length);

    this.currentSlide = (this.currentSlide + this.visibleItems) % this.items.length;

    // console.log("current Slide: ", this.currentSlide);

    const offset = this.currentSlide * this.itemWidth;

    const animation: AnimationFactory = this.animationBuilder.build([
      animate(this.timings, style({ transform: `translateX(-${ offset }px)` }))
    ]);

    this.player = animation.create(this.carouselsInner.nativeElement);
    this.player.play();
  }

  prev() {
    if (this.currentSlide === 0) return;

    this.currentSlide = ((this.currentSlide - 3) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.animationBuilder.build([
      animate(this.timings, style({ transform: `translateX(-${ offset }px)` }))
    ]);

    this.player = myAnimation.create(this.carouselsInner.nativeElement);
    this.player.play();
  }

}
