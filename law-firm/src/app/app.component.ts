import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, NavigationStart } from '@angular/router';
import { Directive } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {  
        }
      }