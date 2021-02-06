import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Hello World';
  name = '';
  welcomeMessageFromService:string;

  
  //ActivatedRoute
  constructor(private route: ActivatedRoute, public welcomeDataService : WelcomeDataService) { }

  ngOnInit(): void {
    
    
    //Capture the parameter name from the routing
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorld().subscribe(

     response => this.handleSucessfullResponse(response),
     error => this.handleErrorResponse(error)
    );
    
  }
  handleSucessfullResponse(response) {
    console.log(response);
    console.log(response.name);
    this.welcomeMessageFromService = response.name;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message
  }

}
