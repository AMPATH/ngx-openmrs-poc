import { Component, OnInit } from '@angular/core';
import { VERSION } from '../../environments/version';

@Component({
  selector: 'build-version',
  template: `<p class="text-right text-bold">v{{version}}`
})
export class BuildVersionComponent implements OnInit {
  public version: string;
  public buildDate: Date;

  constructor() {
  }

  public ngOnInit() {
    this.loadVersion();
  }

  public loadVersion() {

    try {
        this.version = VERSION.version + VERSION.hash;
    } catch (e) {
    }
  }
}
