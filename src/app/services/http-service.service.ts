import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  GetPlayers() {
    let _url: string = "http://demo4690221.mockable.io/getPlayersHistory";
    return this.http.get(_url);
  }
}
