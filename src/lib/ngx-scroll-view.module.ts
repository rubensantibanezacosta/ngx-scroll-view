import { ScrollViewDirective } from './directives/scroll-view.directive';
import { NgModule } from '@angular/core';
import { NgxScrollViewComponent } from './ngx-scroll-view.component';



@NgModule({
  declarations: [
    NgxScrollViewComponent,
    ScrollViewDirective
  ],
  imports: [
  ],
  exports: [
    NgxScrollViewComponent,
    ScrollViewDirective
  ]
})
export class NgxScrollViewModule { }
