import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, Footer, Header],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuPage {
  categories = ['All', 'Bakery', 'Brews', 'Juices', 'Grill'];
  selectedCategory = signal('All');

  menuItems = [
    { name: 'Macaron', price: '₹180', cat: 'Bakery', desc: '48-hour fermented, French butter.', img: 'https://i.pinimg.com/736x/2c/dc/12/2cdc128fc31465ea13851d733775cd62.jpg' },
    { name: 'Spanish Latte', price: '₹240', cat: 'Brews', desc: 'Double shot espresso with condensed milk.', img: 'https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg' },
    { name: 'Emerald Detox', price: '₹210', cat: 'Juices', desc: 'Cold-pressed kale, green apple, and mint.', img: 'https://i.pinimg.com/736x/55/cd/58/55cd58f69ac7a845eb4b047077a26fca.jpg' },
    { name: 'Signature Alfahm', price: '₹450', cat: 'Grill', desc: 'Slow-grilled over natural oak charcoal.', img: 'https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg' },
    // Add more items...
  ];

  // This computed signal handles the filtering automatically
  filteredItems = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.menuItems : this.menuItems.filter(i => i.cat === cat);
  });

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }
}