import { Component, DoCheck, } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

// This component is unused, so feel free to use it to
// demonstrate issues with child components, etc.

@Component({
  selector: 'some-component',
  templateUrl: './some.component.html',
  styleUrls: ['./app.component.css'],
})
export class SomeComponent {
  private name: string = 'ASDF';
  private subs = new Subscription();
  constructor(private dragulaService: DragulaService) {
    this.subs.add(this.dragulaService.drop("COPYABLE")
      .subscribe(() => {
        this.vamps3 = this.uniq(this.vamps3);
        console.log(this.vamps3);
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  private vamps3 = [7];

  private uniq(a) {
    const seen = {};
    const out = [];
    let len = a.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
      let item = a[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  }
}
