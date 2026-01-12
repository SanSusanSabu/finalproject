import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  standalone: true,
  imports: [CommonModule],
})
export class Card implements OnInit {
  cards: any[] = [];

  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch general songs instead of a single artist
    this.api.getProducts('music').subscribe((data: any) => {
      this.cards = data.results.map((s: any) => ({
        id: s.trackId,
        title: s.trackName,
        text: s.artistName,
        image: s.artworkUrl100,
      }));
      this.cdr.detectChanges();
    });
  }

  viewProductDetails(product: any) {
    this.router.navigate(['/product', product.id], {
      state: { product },
    });
  }
}
