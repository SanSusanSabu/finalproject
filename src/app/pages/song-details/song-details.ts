import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.html',
  styleUrls: ['./song-details.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SongDetailsComponent implements OnInit {
  song: any;

  constructor() {
    this.song = history.state.product; 
  }

  ngOnInit(): void {}
}
