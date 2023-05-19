import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private weatherService: WeatherService){

  }

  weatherData?: weatherData;
  temperature: string = '';

  ngOnInit(): void{
    this.getWeatherData(this.temperature);
  }


  onSubmit(){
    this.getWeatherData(this.temperature);
    this.temperature = 'Washington';
  }


  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
