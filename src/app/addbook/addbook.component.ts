import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Book } from "src/app/book"
import { BookstoreService } from "src/app/bookstore.service";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book: Book = {
      id: 0,
      name: '',
      author: '',
      year: 0,
      price: 0
  };

  constructor(public _service:BookstoreService) { }
 
  ngOnInit(): void {
	this.addbookFormSubmit();
  }
  
  addbookFormSubmit() {
	this._service.addBookToServer().subscribe(
		data => this.book = data	
	)
  }

}
