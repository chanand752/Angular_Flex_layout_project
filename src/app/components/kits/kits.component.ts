import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';



@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css']
})
export class KitsComponent implements OnInit {

  addKit: boolean = false;
  addItem: boolean = false;
  togglevalue = 'N';
  togglevalueEdit = 'N';
  enableInputFileds: boolean = false;
  imagecontent:any;
  imgFile:any;
  previewImage:string="false";
  imagedupurl:any;
  paramOptions: any;
  imagecontentAdd:any;
  imgFileAdd:any;
  previewImageAdd:string="false";
  imagedupurlAdd:any;
  paramOptionsAdd: any;

  columns = [
    {
      name: 'Supplier Part Id',
      key: 'supplierPartId',
      sortable: true 
    },
    {
      name: 'Title',
      key: 'itemDescription', 
      sortable: true 
    },
    {
      name: 'Quantity',
      key: 'itemQty', 
      sortable: true 
    }
  ];

  rows= [];

  totalKitItems=[];
  searchItems=[];
  public addModel = {
    supplierPartId: '',
    itemDescription:'',
    itemQty: ''
  };
  public editModel = {
    itemQty: 0
  };
  uniqueId:any;
  i: any = 0;
  kitName = new FormControl('', []);
  kitDescription = new FormControl('', []);
  enableAdd: boolean = true;
  enableEditAdd: boolean = true;

  addKitItem:boolean = false;
  maximumNumber:number = 0;
  editKitDescription = '';
  noItem:boolean = false;
  itemExists:boolean = false;
  isItemPublished:boolean = false;
  searchWord:string = '';
  updatedItemArr = [];
  addItemArr = [];
  removeItemArr = [];
  isKitExist:boolean = false;

  ColumnMode = ColumnMode;
  constructor() { 
    
  this.fetch(data => {
    this.rows = data;
    this.rows.forEach(row => {
      row['edit'] = false;
    });

    this.totalKitItems = this.rows;
    console.log(this.totalKitItems)
    this.searchItems = this.rows;
    console.log(this.searchItems)

    console.log("respnse data",this.rows)
    console.log(this.rows[0].kitName)
    console.log(this.rows[1].items[1].supplierPartId)
   
  });
  }

  ngOnInit(): void {

  }
  fetch(cb) {
 
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/kits.json`);
  
    req.onload = () => {
      const rows = JSON.parse(req.response);
  
      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }
  
      cb(rows);
    };
  
    req.send();
    
  }
  enableAddItem() {
    this.addItem = true;
    const staticRow = {
      supplierPartId : '',
      itemDescription : '',
      itemQty : '',
      id : ''
    }
    this.rows.push(staticRow);
    this.rows = [...this.rows];
  }
  
  getDescription() {
    if (!this.addModel['itemDescription'] && this.addModel['supplierPartId']) {
      // this.shoppingService.getCatalogItemDetailsById(this.addModel['supplierPartId'].trim()).subscribe(item => {
      //   if (item && item['products'].length > 0) {
      //     let details = item['products'][0];
      //     if(details.isPublishedWB == "Y" &&
      //         details.isDraft == "N" && details.isArchivedWB == "N") {
      //       this.addModel['itemDescription'] = item['products'][0].shortName;
      //     } else {
      //       this.isItemPublished = true;
      //     }
      //   } else {
      //     this.noItem = true;
      //   }
      // })
    }
  }

  addKitRow() {
    let findDuplicates = [];
    this.enableAdd = true;
    findDuplicates = this.rows.filter(item => {
      return item.supplierPartId.toLowerCase() == this.addModel['supplierPartId'].toLowerCase()
    });
    if(findDuplicates.length > 0) {
      this.itemExists = true;
    } else {
      this.addModel['id'] = this.rows.length + 1;
      this.rows.unshift(this.addModel);
      this.rows = [...this.rows];
      this.addModel = {
        supplierPartId : '',
        itemQty: '',
        itemDescription: ''
      }
    }
  }

  saveKitRow(row) {
    if(this.editModel['itemQty'] != 0) {
      this.uniqueId = null;
      this.rows.map(x => {
        if (row && row.supplierPartId === x.supplierPartId) {
          x.itemQty = this.editModel.itemQty;
          return x;
        }
      });
    }
  }

  removeKitRow(row) {
    let itemIndex = this.rows.findIndex(id => id.id == row.id);
    this.rows.splice(itemIndex, 1);
    this.rows = [...this.rows];
  }


  addRow(kit) {
    /*// this.i=this.i+1;
    this.rows.unshift(this.addModel);
    this.rows = [...this.rows];
    console.log(this.rows);*/
    let findDuplicates = [];
    this.enableEditAdd = true;
    findDuplicates = kit['items'].filter(item => {
      return item.supplierPartId.toLowerCase() == this.addModel['supplierPartId'].toLowerCase()
    });
    if(findDuplicates.length > 0) {
      this.itemExists = true;
    } else {

      this.totalKitItems.map(x => {
        if (x.kitId === kit.kitId) {
          this.addModel['id'] = this.maximumNumber + 1;
          x.items.unshift(this.addModel);
          x.items = [...x['items']];
        }
      });
      let json = {
        'supplierPartId': this.addModel['supplierPartId'],
        'itemDescription': this.addModel['itemDescription'],
        'itemQty': this.addModel['itemQty']
      };
      this.addItemArr.push(json);

      this.addModel = {
        supplierPartId: '',
        itemDescription: '',
        itemQty: ''
      }
    }
  }

  updateRemoveItem(row,kits) {
    this.totalKitItems.forEach((x) => {
      if (kits.kitId === x.kitId) {
        for (let i = 0; i < x.items.length; i++) {
          if (x.items[i].id === row.id) {
            x.items.splice(i, 1);
            x.items = [...x['items']];
          }
        }
      }
    });
    let filterAddedData = this.addItemArr.filter(id => id.supplierPartId === row.supplierPartId);
    let filterUpdatedData = this.updatedItemArr.filter(id => id.supplierPartId === row.supplierPartId);
    if (filterAddedData.length == 0 && filterUpdatedData.length == 0) {
      let json = {
        'supplierPartId': row.supplierPartId,
        'itemDescription': row.itemDescription,
        'itemQty': row.itemQty,
        'id': row.id
      }
      this.removeItemArr.push(json);
    } else {
      if (filterAddedData.length > 0) {
        this.addItemArr.forEach((item, i) => {
          if (item.supplierPartId === row.supplierPartId) {
            this.addItemArr.splice(i, 1);
          }
        });
      }
      if (filterUpdatedData.length > 0) {
        this.updatedItemArr.forEach((item, i) => {
          if (item.supplierPartId === row.supplierPartId) {
            this.updatedItemArr.splice(i, 1);
          }
        });
      }
    }

  }

  editRow(row, index) {
    this.uniqueId = row.id;
    this.editModel = {
      'itemQty': row.itemQty,
    };
  }

  saveRow(row) {
    this.uniqueId = null;
    this.totalKitItems.map(x => {
      x.items.map(y => {
        if (row && row.supplierPartId === y.supplierPartId) {
          y.itemQty = this.editModel.itemQty;
          return y;
        }
      })

    });
    let updateJson = {
      "supplierPartId":row.supplierPartId,
      "itemQty": this.editModel.itemQty,
      "itemDescription":row.itemDescription,
      "id":row.id
    };


    if(this.updatedItemArr.length == 0) {
      this.updatedItemArr.push(updateJson);
    } else {
      let filterData = this.updatedItemArr.filter(item => item.id == row.id);
      if(filterData.length != 0) {
        filterData.forEach((item, i) => {
          if (item.id === row.id) {
            this.updatedItemArr.splice(i, 1);
            this.updatedItemArr.push(updateJson);
          }
        })
      } else {
        this.updatedItemArr.push(updateJson);
      }
    }
    // this.enableEdit=true;
    // this.enableSave=false;
  }



  enableAddKit() {
    this.enableAdd=true;
    this.kitName.reset();
    this.kitDescription.reset();
    this.rows = [];
    this.addKit = true;
    this.togglevalue = 'N';
    this.imgFile = '';
    this.addModel = {supplierPartId:'',itemDescription:'', itemQty:''};
    this.editModel = {itemQty:0};
    this.noItem = false;
    this.itemExists = false;
    this.isItemPublished = false;
    this.addItem = false;
    this.cancelChanges();
  }


  disableError() {
    this.addModel['itemDescription'] = '';
    this.addModel['itemQty'] = '';
    this.noItem = false;
    this.isItemPublished = false;
    this.itemExists = false;
  }

  saveNewKit() {
    if(this.kitName.value) {
      // this.sharedService.loaderItem(true);
      this.addItem = false;
      this.addKit = false;
      // this.imagecontent = '';
      this.rows.splice(this.rows.length - 1, 1);
      let data = {
        'kitName': this.kitName.value,
        'kitDescription': this.kitDescription.value,
        'published': this.togglevalue,
        'addItem': this.rows
      };
      // this.shoppingService.addNewKit(this.imgFileAdd, data).subscribe(res => {
      //   // this.onLoadingData();
      //   this.imgFileAdd = '';
      //   this.imagecontentAdd = '';
      //   this.previewImageAdd = 'false';
      // })
    }
    // this.kitsRes.push(data);
    // console.log(this.kitsRes);
  }

  cancelNewKit() {
    this.addItem = false;
    this.addKit = false;
    this.isKitExist = false;
    this.noItem = false;
    this.isItemPublished = false;
    this.itemExists = false;
    this.imgFileAdd = '';
    this.imagecontentAdd = '';
    this.previewImageAdd = 'false';
    this.togglevalue = 'N';
    this.addModel = {
      supplierPartId : '',
      itemDescription: '',
      itemQty : ''
    }
    this.editModel = {
      itemQty : 0
    }
  }

  toggle(event) {
    this.togglevalue=event.checked ? 'Y' : 'N';
  }

  toggleEdit(event, kit) {
    this.togglevalueEdit=event.checked ? 'Y' : 'N';
    if(kit) {
      this.totalKitItems.map(x => {
        if (x.kitName === kit.kitName) {
          x.published = this.togglevalueEdit;
        }
      })
    }
  }

  checkFields() {
    if (this.addModel['supplierPartId'] && this.addModel['itemDescription'] && this.addModel['itemQty']
        && parseInt(this.addModel['itemQty']) != 0) {
      this.enableAdd = false;
      this.enableEditAdd = false;
    } else {
      this.enableAdd = true;
      this.enableEditAdd = true;
    }
  }

  enableEdit(data) {
    this.enableEditAdd=true;
    this.addKit = false;
    this.noItem = false;
    this.isItemPublished = false;
    this.itemExists = false;
    this.isKitExist = false;
    this.imgFile = '';
    this.addModel ={
      supplierPartId : '',
      itemDescription: '',
      itemQty : ''
    };
    this.editModel = {
      itemQty : 0
    }
    let staticRow = {
      supplierPartId: '',
      id: '',
      itemDescription: '',
      itemQty: '',
    };
    this.editKitDescription = data.kitDescription;
    this.togglevalue = data.published;
    if(data.kitImg !== null && data.kitImg !== 'NA' && data.kitImg){
      this.imagecontent = data.kitImg+'?'+Math.random();
      this.imagedupurl=data.kitImg+'?'+Math.random();
      this.previewImage="true";
    }
    else{
      this.previewImage = "false";
    }
    let max;
    this.totalKitItems.forEach(row => {
      if(row.kitId === data.kitId) {
        row['edit'] = true;
        row.items.push(staticRow);
        row.items = [...row['items']];
      } else {
        row['edit'] = false;
        let findEmptyRowIndex = row.items.findIndex(x => !x.supplierPartId );
        if(findEmptyRowIndex > -1) {
          row.items.splice(findEmptyRowIndex, 1);
        }
      }
      row.items.map(y => {
        if(max == null || y['id'] > max) {
          max = y['id'];
        }
      });
      this.maximumNumber = max;
    });
  }

  cancelChanges() {
    this.addItemArr = [];
    this.updatedItemArr = [];
    this.removeItemArr = [];
    this.imgFile = '';
    // this.onLoadingData();
    this.totalKitItems.forEach((row,i) => {
      if(!row.items.supplierPartId && !row.items.itemQty && row['edit']) {
        row.items.splice(row.items.length - 1, 1);
        row['edit'] = false;
      }
    });
  }

  saveChanges(kit) {
    // this.sharedService.loaderItem(true);
    this.totalKitItems.forEach((row,i) => {
      if(!row.items.supplierPartId && !row.items.itemQty && row['edit']) {
        row.items.splice(row.items.length - 1, 1);
        row['edit'] = false;
      }
    });
    const reqObj = {
      "kitName": kit.kitName,
      "kitDescription":this.editKitDescription,
      "published":kit.published == 'Y' ? 'Y' : 'N',
      "kitId":kit.kitId,
      "addItem":this.addItemArr,
      "updateItem": this.updatedItemArr,
      "deleteItem": this.removeItemArr
    };
    // this.shoppingService.editKit(this.imgFile, reqObj).subscribe( res => {
    //   this.addItemArr = [];
    //   this.updatedItemArr = [];
    //   this.removeItemArr = [];
    //   this.onLoadingData();
    //   this.toasterService.showSuccess(`Success: kit ${kit.kitName} updated`);
    // }, err => {
    //   this.toasterService.showSuccess(`Failed: kit ${kit.kitName} not updated`);

    // });
  }

  uploadActionAdd() {
    // let dialogRef=this.dialog.open(ImageCropperModalComponent, {
    //   height:'70%',
    //   width: '50%'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result != 123 && result != undefined) {

    //     if(result.image)  this.imagecontentAdd = result.image;
    //     else this.previewImageAdd= "false";
    //     this.imgFileAdd = result.files;
    //     this.paramOptionsAdd = result.options;
    //     this.previewImageAdd="true";
    //   }
    //   else{

    //     if(this.imagedupurlAdd) this.previewImageAdd="true";
    //     else this.previewImageAdd="false";
    //   }
    // })
  }

  uploadAction() {
    // let dialogRef=this.dialog.open(ImageCropperModalComponent, {
    //   height:'70%',
    //   width: '50%'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result != 123 && result != undefined) {

    //     if(result.image)  this.imagecontent = result.image;
    //     else this.previewImage= "false";
    //     this.imgFile = result.files;
    //     this.paramOptions = result.options;
    //     this.previewImage="true";
    //   }
    //   else{

    //     if(this.imagedupurl) this.previewImage="true";
    //     else this.previewImage="false";
    //   }
    // })
  }
  validateKitName() {
    if(this.kitName.value) {
      let filterduplicateName = this.totalKitItems.find(name => {
        return name.kitName.trim().toLowerCase() === this.kitName.value.toString().trim().toLowerCase()
      });
      if (filterduplicateName) {
        this.isKitExist = true;
      } else {
        this.isKitExist = false;
      }
    }
  }

  disablekitNameError() {
    this.isKitExist = false;
  }

  searchKit() {
    if (this.searchWord) {
      this.totalKitItems = this.rows.filter(item => item.kitName.toLowerCase().match(
          this.searchWord.toString().toLowerCase()));
          console.log(this.searchWord)
    } else {
      this.totalKitItems = this.searchItems;
    }
  }

  deleteKit(kitId:any) {
    this.totalKitItems = this.totalKitItems.filter(item => item.kitId !== kitId)
    console.log(this.totalKitItems)
    return this.totalKitItems
   
  }

}
