import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public formValue: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit( form: NgForm ) {
    this.formValue = form.value.search;
    this.router.navigate(['/search', this.formValue]);
  }

}
