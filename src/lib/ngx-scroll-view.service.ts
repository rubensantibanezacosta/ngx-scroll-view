import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ConfigObject } from './config-object';

@Injectable({
  providedIn: 'root'
})
export class NgxScrollViewService {
  public pre: Subject<any> = new Subject<any>();
  public pos: Subject<any> = new Subject<any>();

  constructor() { }

  state: boolean = false;
  counter = 0;

  async basicAppear(element: HTMLElement, configObject: ConfigObject) {
    element.setAttribute("data", this.counter.toString());
    let dynamicStyles = null;

    function addAnimation(element) {
      if (!dynamicStyles) {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);
      }

      dynamicStyles.sheet.insertRule(element, dynamicStyles.length);
    }

    let translate: string;
    let distance: string;


    switch (configObject.origin) {
      case "bottom":
        translate = "translateY";
        distance = configObject.distance;
        break;

      case "top":
        translate = "translateY";
        distance = "-" + configObject.distance;
        break;

      case "left":
        translate = "translateX";
        distance = "-" + configObject.distance;
        break;

      case "right":
        translate = "translateX";
        distance = configObject.distance;
        break;

      default:
        break;
    }

    addAnimation(`
                @keyframes slideInAppear${this.counter} {
                                  0% {
                                  transform: ${translate}(${distance});
                                  opacity: 0;
                                  }

                                100% {
                                transform: ${translate}(0);
                                opacity: 1;
                                }
                }               
    `);


    /*   addAnimation(`
                  @keyframes slideOutDissappear{
  
                                  0% {
                                  transform: translateY(0);
                                  opacity: 1;
                                  }
                                  98% {
                                    transform: translateX(20vw);
                                    opacity: 0;
                                    }
                                  100% {
                                  transform: translateY(0);
                                  opacity: 0;
                  }               
      `); */



    const functionObserver = (entries, _observer) => {

      entries.forEach(entry => {
        if (entry.isIntersecting && this.state == false) {
          let data = entry.target.getAttribute("data");

          //pre-show
          if (!entry.target.getAttribute("data-animation-state")) {
            entry.target.setAttribute("data-animation-state", 0);
            this.pre.next({ target: entry.target, state: "pre" })
          }

          //animations appear
          element.style.animation = `slideInAppear${data} ${configObject.time} ease-in-out forwards ${configObject.delay}`;
          //post-show
          if ( entry.target.getAttribute("data-animation-state") == 0) {
            entry.target.setAttribute("data-animation-state", 1);
            setTimeout(() => {
              this.pos.next(
                { target: entry.target, state: "pos" })
            },
              this.toMS(entry.target.style.animationDuration))

          }


        } else {
          //reset animation


        }
      });
    }
    const observer = new IntersectionObserver(functionObserver, {
      root: null,
      rootMargin: '20%',
      threshold: 0.8,
    });
    observer.observe(element);
    this.counter++;
  }

  /*   statePreShow(entry){
      )}
  
    statePostShow(entry,timeOut){
      return new Observable(observer => {
        setTimeout(() => {
          let id=entry.target.getAttribute("id");
          id?observer.next({id:id,state:1}):null;
        }, timeOut);
    })}
   */

  toMS(cssTime: string) {
    return parseFloat(cssTime) * (/\ds$/.test(cssTime) ? 1000 : 1);
  }
}
