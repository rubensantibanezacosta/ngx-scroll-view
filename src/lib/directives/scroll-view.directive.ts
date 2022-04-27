import { NgxScrollViewService } from '../ngx-scroll-view.service';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ConfigObject } from '../config-object';



@Directive({
  selector: '[scrollView]',
})
export class ScrollViewDirective {

  @Output() beforeView = new EventEmitter();
  @Output() afterView=  new EventEmitter();
  @Input('scrollView') scrollView: any = new ConfigObject();

  element: ElementRef;
  constructor(elementr: ElementRef, private scrollViewService: NgxScrollViewService) {
    this.element = elementr;

  }
  ngOnInit(): void {
    let configObject = {
      delay: "0.0s",
      time: "1s",
      origin: "bottom",
      distance: "20%"
    }
    this.scrollViewService.pre.subscribe((event) => {
      if (event.target.getAttribute("data")==this.element.nativeElement.getAttribute("data")) {
        this.beforeView.emit(event.target);
      }
      
    });
    this.scrollViewService.pos.subscribe((event) => {
      if (event.target.getAttribute("data") == this.element.nativeElement.getAttribute("data")) {
        this.afterView.emit(event.target);
      }
    });


    this.scrollView.delay ? configObject.delay = this.scrollView.delay : null;
    this.scrollView.time ? configObject.time = this.scrollView.time : null;
    this.scrollView.origin ? configObject.origin = this.scrollView.origin : null;
    this.scrollView.distance ? configObject.distance = this.scrollView.distance : null;

    this.element.nativeElement.style.opacity = "0";
    this.scrollViewService.basicAppear(this.element.nativeElement, configObject);
  }
}
