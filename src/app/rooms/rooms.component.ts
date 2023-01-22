import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
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
  totalRooms: 20,
  avaliableRooms:10,
  bookedRooms:5,
}
roomList :RoomList[]= [{
  roomnumber:1,
  roomType:"Deluxe Room",
  amenities:"Air Conditioner, Free Wifi, TV, Bathroom, Kitchen",
  price:500,
  photos:"https://images.unsplash.com/photo-1674082540761-440dc1b2326b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  checkinTime:new Date("11-Nov-2021"),
  checkoutTime:new Date("12-nov-2021")
},
{
  roomnumber:2,
  roomType:"Deluxe Room",
  amenities:"Air Conditioner, Free Wifi, TV, Bathroom, Kitchen",
  price:1000,
  photos:"https://images.unsplash.com/photo-1674082540761-440dc1b2326b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  checkinTime:new Date("11-Nov-2021"),
  checkoutTime:new Date("12-nov-2021")
},
{
  roomnumber:3,
  roomType:"private Suite ",
  amenities:"Air Conditioner, Free Wifi, TV, Bathroom, Kitchen",
  price:15000,
  photos:"https://images.unsplash.com/photo-1674082540761-440dc1b2326b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  checkinTime:new Date("11-Nov-2021"),
  checkoutTime:new Date("12-nov-2021")
}]
toogle(){
this.hideRooms =!this.hideRooms
}
}
