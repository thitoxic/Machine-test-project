import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  toggle = false;
  corporateTours : any[] = []

constructor(private vacationData : AppHttpService){
  this.vacationData.cast.subscribe((data: any) => {
    this.corporateTours = data.CORPORATE && data.CORPORATE[0].TYPE
  })
  
}

showToggle() {
  this.toggle = !this.toggle
}



}
