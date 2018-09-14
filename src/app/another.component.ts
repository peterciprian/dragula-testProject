import { Component, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

// This component is unused, so feel free to use it to
// demonstrate issues with child components, etc.

@Component({
  selector: 'another-component',
  templateUrl: './another.component.html',
  styleUrls: ['./app.component.css'],
})
export class AnotherComponent {
  vamps = [
    { id: 1, name: "Bad Vamp" },
    { id: 2, name: "Petrovitch the Slain" },
    { id: 3, name: "Bob of the Everglades" },
    { id: 4, name: "The Optimistic Reaper" }
  ];

  vamps2 = [
    { id: 5, name: "Dracula" },
    { id: 6, name: "Kurz" },
    { id: 7, name: "Vladislav" },
    { id: 8, name: "Deacon" }
  ];


  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('COPYABLE', {
      /* removeOnSpill: (el: Element, source:Element): boolean =>{
        return source.className === 'copyTo';
      } */
      removeOnSpill: true,
      copy: (el, source) => {
        return source.className === 'container';
      },
      copyItem: (item) => { return item.id },
      accepts: (el, target, source, sibling) => { return target.className === 'copyTo' }
    });
  }
}
