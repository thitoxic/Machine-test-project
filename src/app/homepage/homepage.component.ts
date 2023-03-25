import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  popularDestins : any[] = [];
  constructor(private vacationData: AppHttpService){
    this.vacationData.getData().subscribe((data : any) => {
        this.vacationData.editRes(data);
        data.CRUISE_APP.filter((image : any)=>{
          if(image.images){
            if(image.images.search("image.kesari") !== -1){
              this.popularDestins.push(image)
            }
          }
        })
    })

  }
  
}
