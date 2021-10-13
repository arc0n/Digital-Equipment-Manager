import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Item} from "../../services/model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";
import {ActionSheetController} from "@ionic/angular";
import {mergeMap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";
import {ItemResourceService} from "../../services/api-services/item-resource.service";

@Component({
  selector: 'app-equipment-add-page',
  templateUrl: './equipment-add-page.page.html',
  styleUrls: ['./equipment-add-page.page.scss'],
})
export class EquipmentAddPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private item: Item;

  /** @internal */
  showMobileMenu = true;

  /** @internal  */
  addItemForm = new FormGroup({
    itemType: new FormControl(''),
    itemModel: new FormControl(''),
    itemSN: new FormControl(''),
    itemComment: new FormControl('')
  })

  constructor(public router: Router,
              public state: CommonStateService,
              private actionSheetController: ActionSheetController,
              private activeRoute: ActivatedRoute,
              private itemService: ItemResourceService
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
    this.activeRoute.queryParams.pipe(
      mergeMap(params => this.itemService.getItemByCode(params.id))
    ).subscribe(item =>{
      this.item = item;
      console.log("fetched item: ", item)
    });

    this.addItemForm.valueChanges.subscribe((rawFormValues) => {
      console.log(rawFormValues);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  backButtonClicked() {
    this.router.navigate(['/'])
  }

  //* Setzt Formular auf Standard zurück */
  resetForm() {
    this.addItemForm.reset();
  }

  onSubmit($event: any) {
    this.addItemForm.valueChanges.subscribe(v => {
      console.log("submitted values: "+v);
    });
  }
}
