import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl='http://localhost:61898/api';
readonly PhotoUrl='http://localhost:61898/Photos';

  constructor(private http:HttpClient) {  }
  
  //functie prin care se ia lista departamentelor - consuma metoda get
  getDepList():Observable<any[]>{
      return this.http.get<any>(this.APIurl+"/department");
    }

  //functie de consumare a post-ului (adaugare departament)
  addDep(val:any){
    return this.http.post(this.APIurl+"/Department",val);
  }

  //functie de consumare a put-ului (modificare departament)
  updateDep(val:any){
    return this.http.put(this.APIurl+"/Department",val);
  }

  //functie de consumare a delete-ului (stergere departament)
  deleteDep(val:any){
    return this.http.delete(this.APIurl+"/Department/"+val);
  }

  //mai jos idem pt employee

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Employee");
  }

  addEmp(val:any){
    return this.http.post(this.APIurl+"/Employee/",val);
  }

  updateEmp(val:any){
    return this.http.put(this.APIurl+'/Employee/',val);
  }

  deleteEmp(val:any){
    return this.http.delete(this.APIurl+'/Employee/'+val);
  }

  UploadPhoto(val:any)
  {
  return this.http.post(this.APIurl+'/Employee/SaveFile',val);
  }

  getAllDepNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/Employee/GetAllDepartmentNames');
  }

}
