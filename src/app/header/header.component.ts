import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  toggle = false;

constructor(private vacationData : AppHttpService){
  this.vacationData.cast.subscribe((data) => {
    console.log('data', data)
  })
  
}

showToggle() {
  this.toggle = !this.toggle
}



}
