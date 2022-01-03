import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Item, ItemModel, ItemType} from "../../services/model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {ItemTypeResourceService} from "../../services/api-services/ item-type.service";
import {ItemModelResourceService} from "../../services/api-services/item-model.service";

@Component({
  selector: 'app-equipment-add-page',
  templateUrl: './equipment-add-page.page.html',
  styleUrls: ['./equipment-add-page.page.scss'],
})
export class EquipmentAddPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public typeArray: ItemType[];
  public modelArray: ItemModel[];
  public filteredModelArray: ItemModel[];


  /** @internal */
  showMobileMenu = true;

  /** @internal  */
  addItemForm = new FormGroup({
    itemType: new FormControl('', Validators.required),
    itemModel: new FormControl('', Validators.required),
    itemSN: new FormControl('', Validators.required),
    itemDescription: new FormControl('', Validators.required)
  })

  constructor(public router: Router,
              public state: CommonStateService,
              private toastController: ToastController,
              private actionSheetController: ActionSheetController,
              private activeRoute: ActivatedRoute,
              private itemService: ItemResourceService,
              private itemTypeService: ItemTypeResourceService,
              private itemModelService: ItemModelResourceService,

  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
    this.subscriptions.push(
      this.addItemForm.get("itemType").valueChanges.subscribe((value: ItemType) => {
        this.addItemForm.get("itemModel").patchValue(null);
        this.filteredModelArray = this.modelArray?.filter((model) => {
          return model?.item_type_id === value?.id;
        })
      })
    )

    /* TODO editmode
     this.activeRoute.queryParams.pipe(
      mergeMap(params => this.itemService.getItemByCode(params.id))
    ).subscribe(item =>{
      if(item === 'NOT_FOUND') return
      //patch-values
    });
    */

    this.itemTypeService.getList({}).subscribe( (types) => {
      this.typeArray = types;
    })

    this.itemModelService.getList({}).subscribe( (models) => {
      this.modelArray = models;
    })
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

  onSubmit() {
    if(this.addItemForm.invalid) {
      this.presentToast('Unvollständige Eingabe', 'danger')
      return;
    }
    const rawValues = this.addItemForm.getRawValue();

    const newItem: Item = {
      borrowed: false,
      description: rawValues.itemDescription,
      item_model_id: (rawValues.itemModel as ItemModel).id,
      item_type: (rawValues.itemType as ItemType).name,
      item_type_id: (rawValues.itemType as ItemType).id,
      model_name: (rawValues.itemModel as ItemModel).name,
      photo: "/",
      serial_number: rawValues.itemSN,
      status: "aktiv"
    } as Item;
    this.itemService.postItem(newItem).subscribe(result => {
      if(result !== 'INVALID_REQUIEST') {
        this.presentToast('Item angelegt', 'success').then(() => {
          this.router.navigate(['/tabs/dashboard'])
        })
      } else {
        this.presentToast('Unvollständige Eingabe', 'danger');
      }
    })
  }

  async presentToast(message: string, color: string) {
    const p = await this.toastController.create({message, color, duration:3000})
    await p.present();
  }



}
