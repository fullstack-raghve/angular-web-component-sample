import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent implements OnChanges, OnInit {
  title = 'angular-web-components';
  @Input() appInput: any; // --> app-input
  @Output() appOutput = new EventEmitter(); // --> Custom event in DOM

  ngOnChanges(changes: SimpleChanges): void {
    console.log('input val--',changes['appInput']);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.appOutput.emit('output');
    },1000);
  }

  slotChanged(evt: Event) {
    const assigned = (evt.target as HTMLSlotElement).assignedNodes();
    if (assigned.length) {
      console.log('slot--',assigned[0]);
    }
  }
}
