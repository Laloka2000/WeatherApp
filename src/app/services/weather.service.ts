import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>(enviroment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(enviroment.XRapidAPIHostHeaderName, enviroment.XRapidAPIHostHeaderValue)
      .set(enviroment.XRapidAPIKeyHeaderName, enviroment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
    })
  }
}
