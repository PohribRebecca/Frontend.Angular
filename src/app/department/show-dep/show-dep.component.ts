import {  Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepList:any=[];

  ModalTitle !: string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;
  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  
  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


deleteClick(item:any){
  if(confirm("Are you sure?")){
    this.service.deleteDep(item.DepartmentId).subscribe(data=>{
      alert(data.toString());
    this.refreshDepList();})
  }
}

  refreshDepList(){
    this.service.getDepList().subscribe(data=>
      {
        this.DepList=data;
        this.DepartmentListWithoutFilter=data;
      });
  }

  Filter(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepList = this.DepartmentListWithoutFilter.filer(function (el:any){
      return el.DepartmentId.toString().toLowerCase().includes(
        DepartmentIdFilter.toString().trim().toLocaleLowerCase()
        )
        &&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLocaleLowerCase()
        )
        });
  }
  sortResult(prop:any, asc:any)
{
  this.DepList = this.DepartmentListWithoutFilter.sort(function(a:any,b:any){
    if(asc){
      return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
  }else{
    return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
  }
})
}

}