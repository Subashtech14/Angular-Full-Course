import { Component } from '@angular/core';
import { Room } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
hotelname:string='Hilton Hotel'

numberofRooms:number= 10;

hideRooms =false;

rooms:Room ={
  // totalRooms: 20,
  // avaliableRooms:10,
  // bookedRooms:5,
}
toogle(){
this.hideRooms =!this.hideRooms
}
}
