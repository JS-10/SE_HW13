import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http:HttpClient) { }

  getBooksFromServer():Observable<any>{
	return this._http.get<any>("http://localhost:8081/bookStore");
  }
  
  addBookToServer():Observable<any>{
	return this._http.post<any>("http://localhost:8081/bookStore",Observable);
  }
  
  deleteBookFromServer():Observable<any>{
	return this._http.delete<any>("http://localhost:8081/bookStore");
  }
  
  getOldestBookFromServer():Observable<any>{
	return this._http.get<any>("http://localhost:8081/bookStore/oldest");
  }
  
  getLatestBooksFromServer():Observable<any>{
	return this._http.get<any>("http://localhost:8081/bookStore/latest");
  }
}
