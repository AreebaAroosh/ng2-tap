/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {tap} from '../../../components/index';

// webpack html imports
let template = require('./tap-demo.html');


@Component({
  selector: 'tap-demo'
})
@View({
  template: template,
  directives: [tap, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TapDemo {
  constructor() {
    console.log('foo demo');
  }

}
