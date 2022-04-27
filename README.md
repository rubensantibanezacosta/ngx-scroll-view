# ngx-scroll-view - [Angular](http://angular.io/)

Ngx scroll view is a Typescript library for easily animating elements as they enter/leave the viewport.

## Dependencies

- [Angular](https://angular.io) (_requires_ Angular 13+)

## Versions

- _**[Version - 0.0.3](https://www.npmjs.com/package/ngx-scroll-view)**_ - _Basic and custom animations_
- _**[Version - 0.1.1](https://www.npmjs.com/package/ngx-scroll-view)**_ - _Pre-animation and pos-animation triggers added_

## Installation

Install above dependencies via _npm_, run:

```shell
npm install --save ngx-scroll-view
```

---

Once installed you need to import the main module:

```ts
import {NgxScrollViewModule} from 'ngx-scroll-view';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxScrollViewModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

The library uses only one directive: `scrollView`.

### ScrollView Directive

---

Use this directive to reveal a **single DOM element** upon scroll.

##### Basic Usage

```html
<div class="item" scrollView>..</div>
```

##### With Custom Options

You can also pass in a custom configuration object to the directive.

```html
<div class="item" [scrollView]="{delay:'2s', origin:'left'}">..</div>
```

This will override the default configuration used when revealing this particular element.

When no configuration is passed in, the directive uses the default configuration defined at component or at application level.

Configuration options list:

- `delay : "0.5s",`
- ` time : "1s",`
- `origin : "bottom",` - _e.g.(`"top"`, `"bottom"`, `"right"`, `"left"`)_
- `distance : "20px",`

You can use like css atributes.

##### Triggers

You can add event listeners like Angular native event listeners, and then you can execute your custom function:

```html
<div
  class="item"
  scrollView
  (beforeView)="yourCustomFunction($event)"
  (afterView)="yourCustomFunction($event)"
>
  ..
</div>
```

Inside **$event** parameter, you will have the element that is triggering the listeners.

---

## Credits

_[ngx-scroll-view](https://www.npmjs.com/package/ngx-scroll-view)_ - is built by [Ruben Santibañez Acosta](https://github.com/rubensantibanezacosta). Put a :star2: in **[Github](https://github.com/rubensantibanezacosta/ngx-scroll-view)** Please!
