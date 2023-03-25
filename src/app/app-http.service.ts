import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  
  private _myreply = new BehaviorSubject<any[]>([]);
  public cast = this._myreply.asObservable();

  constructor(
    private http: HttpClient 
  ) { }

  apiURL = 'https://api.kesari.in/route/webHeaderMenu/'
  

  getData(){
    return this.http.get(this.apiURL).pipe(map((result :any)=> {
      return result
    } ))
  }

  
  editRes(nextRes : any) {
    this._myreply.next(nextRes);
  }

}
