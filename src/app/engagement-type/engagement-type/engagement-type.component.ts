import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TypeItemComponent } from '../type-item/type-item.component';
import { MatInkBar } from '../ink-bar.directive';
import { MatTrianglekBar } from '../type-item/triangle.directive';
import { ItemsService } from '../shared/items.service';
import { IInkBarHost } from '../../ink-bar/shared/models/ink-bar-host';
import { InkListenerDirective } from '../../ink-bar/shared/directives/ink-listener.directive';

@Component({
  selector: 'app-engagement-type',
  templateUrl: './engagement-type.component.html',
  styleUrls: ['./engagement-type.component.scss'],
  providers: [
    ItemsService
  ]
})
export class EngagementTypeComponent implements OnInit, AfterViewInit, IInkBarHost {
  @ViewChildren(InkListenerDirective) public _inkListener: QueryList<InkListenerDirective>;

  public selectedType: any;
  public typeList = [
    {
      id: 1,
      type: 'survey',
      status: false
    },
    {
      id: 2,
      type: 'games',
      status: false
    },
    {
      id: 3,
      type: 'stamp_instant',
      status: false
    },
    {
      id: 4,
      type: 'reward',
      status: false
    }
  ];
  constructor(public itemsService: ItemsService) {
  }

  public getInkListeners(): any {
    return this._inkListener;
  }

  ngOnInit() {
  }

  public setTypeEngagement(type: any, index: number): void {
    // this.selectedType = type;
    // if (type.id === 1) {
    //   this.typeList.push(    {
    //     id: ids++,
    //     type: 'test',
    //     status: false
    //   });
    // }
    //  console.log(type);
    //  const el = this.listButtons.toArray()[index].el.nativeElement;
    // const el = this.itemsService.getSelectedElement(index);
    //  this._matInkBar.alignToElement(el);
    //  this._matTriangleBar.alignToElement(el);
  }

  ngAfterViewInit(): void {
  }
}
