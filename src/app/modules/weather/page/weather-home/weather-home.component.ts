import { weatherDatas } from './../../../../models/interfaces/weatherDatas.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$:Subject<void> = new Subject();
  initialCityName = "São Paulo"
  weatherDatas!:weatherDatas
  searchIcon = faMagnifyingGlass

  constructor(private weatherService:WeatherService){}


  ngOnInit(): void {
      this.getWeatherDatas(this.initialCityName);

  }

  getWeatherDatas(cityName:string):void{
  this.weatherService.getWeatherDatas(cityName)
  .pipe(takeUntil(this.destroy$))
  .subscribe({
    next: (response) =>{
      response && (this.weatherDatas = response)
      console.log(this.weatherDatas);
    },
    error:(err) =>{
      console.log(err);
    }
  })
  }



  onSubmit():void{
    this.getWeatherDatas(this.initialCityName);
    //console.log(`${process.env.API_KEY_OPENW}`);

    this.initialCityName=""

  }


  ngOnDestroy(): void {
   this.destroy$.next();
   this.destroy$.complete();
  }
}
