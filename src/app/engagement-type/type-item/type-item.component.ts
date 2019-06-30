import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.scss']
})
export class TypeItemComponent implements OnInit {
  @Input() public typeButton: any;
  @Input() public checkedType: any;

  @Output() public selectType = new EventEmitter<any>();

  constructor(public el: ElementRef,
              public itemsService: ItemsService) {
    this.itemsService.steState(el);
  }

  ngOnInit() {
  }

  public onSelectType(): void {
    this.selectType.emit(this.typeButton);
  }
}
