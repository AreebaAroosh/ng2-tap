/// <reference path="../../tsd.d.ts" />

import {
  // Component, View,
  Directive, OnInit, OnDestroy,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

let template = require('../../demo/components/tap/tap-demo.html');

@Directive({
  selector: '[ng2-tap]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onMouseLeave()',
    '(mouseover)': 'onMouseEnter()',
    '(mouseout)': 'onMouseLeave()'
  }
})

export class Tap {
  constructor(private element:ElementRef) {

  }

  onMouseEnter() {
    console.log('Enter');
    this.outline('#f00 solid 1px');
  }

  onMouseLeave() {
    console.log('Leave');
    this.outline();
  }


  private outline(outline:string = '') {
    this.element.nativeElement.style.outline = outline;
  }


  /* public сlick(evt) {
   console.log(evt);
   } */

}

export const tap:Array<any> = [Tap];
