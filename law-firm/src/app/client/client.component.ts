import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    constructor(private route: ActivatedRoute){}
    private id: any;      

   ngOnInit() {
    this.id = this.route.snapshot.params.get('id'); 
    console.log("printing id: " + this.id);
  }
  }
