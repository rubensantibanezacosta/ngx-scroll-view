
# ngx-scroll-view - [Angular](http://angular.io/) 


Ngx scroll view is a Typescript library for easily animating elements as they enter/leave the viewport.


## Dependencies

* [Angular](https://angular.io) (*requires* Angular 13+)


## Installation

Install above dependencies via *npm*. In particular for `ScrollReveal JS`, run:

```shell
npm install --save ngx-scroll-view
```

---

Once installed you need to import the main module:



```ts
import {NgxScrollView} from 'ngx-scroll-view';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxScrollView],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

The library uses only one directive: `scrollView`.

### scrollView Directive

---

Use this directive to reveal a **single DOM element** upon scroll.

##### Basic Usage

```html
    <div class="item" scrollView>..</div>
```

##### With Custom Options

You can also pass in a custom configuration object to the directive.

```html
    <div class="item" [scrollView]="{delay:'2s', origin:'left'}" >..</div>
```

This will override the default configuration used when revealing this particular element.

When no configuration is passed in, the directive uses the default configuration defined at component or at application level.

Configuration options list: 

- delay = "0.5s";
-  time = "1s";
-  origin = "bottom";   e.g.["top", "bottom", "right", "left"]
-  distance = "20px";

 You can use like css atributes.


---

## Credits

`ngx-scroll-view` is built by **Ruben Santibañez Acosta**. Thanks to him for the great work!# ngx-scroll-view
# ngx-scroll-view
