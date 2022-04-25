import { Injectable } from '@angular/core';
import { ConfigObject } from './config-object';

@Injectable({
  providedIn: 'root'
})
export class NgxScrollViewService {

  constructor() { }

  state: boolean = false;
  counter=0;

  basicAppear(element: HTMLElement, configObject: ConfigObject) {
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
        console.log(entry.isVisible);
        if (entry.isIntersecting && this.state == false) {
          let data=entry.target.getAttribute("data");
          //animations appear
          element.style.animation = `slideInAppear${data} ${configObject.time} ease-in-out forwards ${configObject.delay}`;

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
}
