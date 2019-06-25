import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: 'auto',
      })),
      state('closed', style({
        width: '0',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class SidemenuItemComponent implements OnInit {

    @Input() menu;
    @Input() isOpen: boolean;
    @Input() iconOnly: boolean;
    @Input() secondaryMenu = false;

    constructor() { }

    ngOnInit() {
    }

    openLink() {
        this.menu.open = !this.menu.open;
    }

    checkForChildMenu() {
        return this.menu && this.menu.sub;
    }

}
