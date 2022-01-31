import { Component, OnInit } from '@angular/core';
import { BookstoreService } from "src/app/bookstore.service";
import { Book } from "src/app/book"
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})

export class ViewbooksComponent implements OnInit {
  books: Book[] = [];

  constructor(public _service:BookstoreService, public _route:Router) { }

  ngOnInit(): void {
	this.getbooks();
  }

  getbooks() {
	this._service.getBooksFromServer().subscribe(
		data => this.books = data,
	)
  }

  RedirectToAddBook() {
	this._route.navigate(['/addbook'])
  }

}
