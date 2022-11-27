import { Component, OnInit,ViewChild,Inject,TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CurdtableService } from '../../../service/curdtable.service';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder} from '@angular/forms';
interface curdTableData {
  id: number;
  name: string;
  price: number;
  stock: number;
  discount: number;
  detail: string;

}

@Component({
  selector: 'app-curdproject',
  templateUrl: './curdproject.component.html',
  styleUrls: ['./curdproject.component.css']
})
export class CurdprojectComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'name', 'price', 'stock', 'discount', 'detail','edit','delete'];
  public CurdData = [] ;
  curdTable : MatTableDataSource<any>;
  public modalTitle ='';
  public btnTxt ='';
  curdForm: FormGroup;
   
  constructor( 
    private CurdtableService:CurdtableService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
   ) { }

  ngOnInit(): void {
    this.curdForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z-.' ]*$"),Validators.maxLength(100)]],
      detail:  [null, [Validators.required,Validators.maxLength(100)]],
      price: [null, [Validators.required, Validators.pattern("[0-9.-]")]],
      stock: [null, [Validators.required, Validators.pattern("[0-9.-]")]],
      discount: [null, [Validators.required, Validators.pattern("[0-9.-]")]],
    });
    this.getData();
  }

    getData(){
    this.CurdtableService.getData()
      .subscribe(    (res:any) => {
        this.curdTable = new MatTableDataSource(res.data);
        this.curdTable.paginator = this.paginator;
      });
    }

 
  saveData()
  {     
    if(this.btnTxt === 'Update')
    {
      this.CurdtableService.updateProduct(this.curdForm.value)
      .subscribe(response => {
        this.getData();
        alert('Data Updated');
      });
    }
    else
    {
      this.CurdtableService.addProduct(this.curdForm.value)
      .subscribe(response => {
        this.getData();
        alert('Data Added');
      });
    }
    
  }
  openModal(btnVal ,rowData)
  {
    if(btnVal == 'add')
    {
      this.modalTitle="Add Data";
      this.btnTxt="Add";
      this.curdForm.setValue({
        id : '',
        name : '',
        price : '',
        stock : '',
        discount : '',
        detail : '',
      });
      const dialogRef = this.dialog.open(this.callAPIDialog );
      dialogRef.afterClosed();
    }
    else
    {
      this.modalTitle="Update Data";
      this.btnTxt="Update";    
      this.curdForm.setValue({
        id : rowData.id,
        name : rowData.name,
        price : rowData.price,
        stock : rowData.stock,
        discount : rowData.discount,
        detail : rowData.detail,
      });
     
      const dialogRef = this.dialog.open(this.callAPIDialog);
    
    }   
  }


  closeModal(): void {
   
  }
    deleteRecord(id)
    {
      this.CurdtableService.deleteProduct(id)
        .subscribe(response => {
          this.getData();
          alert('Data Deleted');
         } );
    }
  }
         
    
  

   
 

  // @Component({
  //   selector: 'modal',
  //   templateUrl: './modal.component.html',
  //   styleUrls: ['./curdproject.component.css']
  // })
  // export class modalDiv {
  //   constructor(
  //     private CurdtableService:CurdtableService,
  //     public dialogRef: MatDialogRef<modalDiv>,
  //     @Inject(MAT_DIALOG_DATA) public data,
  //   ) {}
  //   public modalTitle ='Add Data';
  //   public  btnText ='Add';
   
  
  //   closeModal(): void {
  //     this.dialogRef.close();
  //   }
   

   
  // }
