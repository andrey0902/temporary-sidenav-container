import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() isOpen;
    @Input() iconOnly = false;
    public menus = menus;

    constructor() { }

    ngOnInit() {
    }

}
