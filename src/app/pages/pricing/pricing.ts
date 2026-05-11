import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export default class Pricing implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  // private platform_id = inject(PLATFORM_ID) saber si estamos del lado del cliente o server


  ngOnInit(): void {
    this.title.setTitle("Pricing Page");
    this.meta.updateTag({ name: "description", content: "este es el Pricing page" })
    this.meta.updateTag({ name: "keywords", content: "hola, juan, Pricing page, cabral, creando, ssr" })
    this.meta.updateTag({ name: "og:title", content: "Pricing Page" })
  }
}
