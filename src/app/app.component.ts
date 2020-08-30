import { HttpServiceService } from './services/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  PlayersData: any;
  SearchName: string = "";

  constructor(private service: HttpServiceService) { }


  ngOnInit() {
    this.service.GetPlayers().subscribe(data => {
      this.PlayersData = data;
      console.log(data);
      
    })
  }
}
