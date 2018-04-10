import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MyService} from './my.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  news = {};
  constructor(private MyService: MyService) {
    this.MyService.getNews().subscribe(data => this.news = data);
    this.MyService.console();
  }




//   constructor(private http: HttpClient){
 
//   }

  
//   ngOnInit(): void {



//     var url = 'https://newsapi.org/v2/top-headlines?' +
//     'country=us&' +
//     'apiKey=d4f23bb2d419405ea344b4540c815424';
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
//   console.log(response.json());
// })


//   }
}
