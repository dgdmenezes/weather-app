import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from './../../../../models/interfaces/weatherDatas.interface';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})

export class WeatherCardComponent {
//Dados da previsão do tempo recebido pelo componente pai
    @Input() weatherDatasInput!: weatherDatas;

minTemperatureIcon = faTemperatureLow;
maxTemperatureIcon = faTemperatureHigh;
humidityIcon = faDroplet
windIcon = faWind;

}

