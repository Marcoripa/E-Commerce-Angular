import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  
  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {}

  // onSubmit(form: NgForm) {
  //   console.log('You are navigating to', form.value.search)
  //   this.router.navigate(['search', form.value.search]);
  // }

  newMessage() {
    this.data.changeMessage('jewelery');
  }
}
