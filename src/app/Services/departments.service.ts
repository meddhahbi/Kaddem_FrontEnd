import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http : HttpClient) { }

  public getDepartments(){

    return this.http.get(`${baseUrl}/departement`);
    

  }


  public addDepartment(depatement:any){

    return this.http.post(`${baseUrl}/depatement/add/`,depatement);

  }

  updateDepartment(depatement:any){
  
    return this.http.put(`${baseUrl}/depatement/update`, depatement);

  }

  deleteDepartment(id:any){

    return this.http.delete(`${baseUrl}/depatement/delete/${id}`);
  }



  getDepartment(id:any){


    return this.http.get(`${baseUrl}/depatement/${id}`);

  }
}
