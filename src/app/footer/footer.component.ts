import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  overseasTravels : any[] = [];
  islands : any[] = []
  indianTours: any[] = []
  specialities: any[] = []
  constructor(private vacationData : AppHttpService){
    function capitalizeFirstLetter(string :any) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();;
  }

    this.vacationData.cast.subscribe((data : any) => {
      this.overseasTravels = data.CRUISE && data.CRUISE[0]?.TYPE
      
      data.FIT && data.FIT[5].COUNTRY.map((item:any)=>{
        let newItem = capitalizeFirstLetter(item)
        this.islands.push(newItem)
      })

      data.FIT && data.FIT[4].COUNTRY.map((item:any)=>{
        let newItem = capitalizeFirstLetter(item)
        this.indianTours.push(newItem)
      })

      this.specialities = data.SPECIALITY && data.SPECIALITY[0].TYPE


    })
  }
}
