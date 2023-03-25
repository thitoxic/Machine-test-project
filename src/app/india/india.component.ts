import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent {
  indiaDestinations: any[] = []
  constructor(private vacationData: AppHttpService){
    this.vacationData.getData().subscribe((data : any) => {
      this.indiaDestinations =  data.GIT && data.GIT[1].COUNTRY;
    })

  }
}
