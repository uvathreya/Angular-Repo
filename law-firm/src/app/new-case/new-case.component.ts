import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgIf } from '@angular/common/src/directives/ng_if';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.css']
})
export class NewCaseComponent implements OnInit {
  open: boolean;
  selected: any;

  constructor(private router: Router) { }
  SelectedClient :any;
  AllClients: any= [{id:1, name:"Client-1"},
  {id:2, name:"Client-2"},
  {id:3, name:"Client-3"}];
  
  ngOnInit() {
  }

  onChange(selClientName) {        
      console.log("Selected Client is: " + selClientName);
      if (selClientName == "New client")  {
        this.router.navigateByUrl("/new-client");
      } else {
        for(let client of this.AllClients)  {
          if (client.name == selClientName) {
            let navigationExtras: NavigationExtras = { queryParams: {'id': client.id}}
            this.router.navigate(['/client'], navigationExtras);
          }
        }        
      }
      } 
}

