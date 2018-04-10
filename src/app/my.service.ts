import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyService {

  constructor (
    private http: Http
  ) {}


  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=d4f23bb2d419405ea344b4540c815424')
    .map((res:Response) => res.json());
    
  }
console(){
  var req = new Request('https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d4f23bb2d419405ea344b4540c815424');
  fetch(req)
  .then(function(response) {
    console.log(response.json());
  })
}

}

