import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, Footer, Header],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  location = {
    name: 'Veyron flagship',
    city: 'Dubai Design District',
    address: 'Building 8, Waterfront Promenade, D3',
    phone: '+971 4 123 4567',
    email: 'hello@veyron.com',
    hours: [
      { day: 'Mon - Thu', time: '08:00 AM - 11:00 PM' },
      { day: 'Fri - Sun', time: '09:00 AM - 01:00 AM' }
    ]
  };
}
