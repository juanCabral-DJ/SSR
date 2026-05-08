import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle("About Page");
    this.meta.updateTag({ name: "description", content: "este es el about page" })
    this.meta.updateTag({ name: "keywords", content: "hola, juan, about page, cabral, creando, ssr" })
    this.meta.updateTag({ name: "og:title", content: "About Page" })
  }
}
