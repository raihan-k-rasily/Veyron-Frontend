import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [Header, Footer, CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  activeStrip = 1;

  strips = [
    {
      id: 1,
      title: "Signature Alfahm",
      subtitle: "Charcoal Grilled",
      video: "video/Grilled.mp4",
      desc: "Slow-cooked over natural wood coal for that authentic smoky flavor."
    },
    {
      id: 2,
      title: "The Shawarma",
      subtitle: "Levantine Classic",
      video: "video/Shawarma.mp4",
      desc: "Perfectly shaved meat wrapped in our house-made kubboos."
    },
    {
      id: 3,
      title: "Veyron Brews",
      subtitle: "Chai & Coffee",
      video: "video/Coffee & Brews.mp4",
      desc: "From the strongest Sulaimani to the creamiest Spanish Latte."
    },
    {
      id: 4,
      title: "Pure Sips",
      subtitle: "Fresh Juices",
      video: "video/Juices.mp4",
      desc: "Cold-pressed seasonal fruits to refresh your soul."
    }
  ];

  menuItems = [
  {
    name: 'Charcoal Alfahm',
    price: '₹ 450',
    description: 'Perfectly charred chicken marinated in Arabian spices.',
    image: 'https://i.pinimg.com/736x/86/29/80/862980306eee0a294344f78bf0b9e32b.jpg',
    delay: 0
  },
  {
    name: 'Veyron Shawarma',
    price: '₹ 180',
    description: 'Classic Levant style with pickled veggies and toum.',
    image: 'https://i.pinimg.com/736x/bf/5e/0c/bf5e0c43d2cd804ed42a2b190026b312.jpg',
    delay: 100
  },
  {
    name: 'Peri-Peri Shawaii',
    price: '₹ 480',
    description: 'Rotisserie chicken with a spicy African bird-eye chili kick.',
    image: 'https://i.pinimg.com/1200x/60/f8/50/60f85083e0679d1b29f39b0d00f82c0e.jpg',
    delay: 200
  },
  {
    name: 'Avocado Bliss',
    price: '₹ 220',
    description: 'Thick, creamy artisanal juice made from premium orchards.',
    image: 'https://i.pinimg.com/736x/b4/be/84/b4be84aab830bde22d9be3ffbc0eda3c.jpg',
    delay: 300
  }
];

  setActive(id: number) {
    this.activeStrip = id;
  }

  playVideo(video: HTMLVideoElement, id: number) {
    video.muted = true;
    this.activeStrip = id;
    video.play();
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
    video.currentTime = 0; // optional reset
  }
}