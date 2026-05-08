import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle("Contact Page");
    this.meta.updateTag({ name: "description", content: "este es el Contact page" })
    this.meta.updateTag({ name: "keywords", content: "hola, juan, Contact page, cabral, creando, ssr" })
    this.meta.updateTag({ name: "og:title", content: "Contact Page" })
  }
}
