import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Api } from './api';
import { SongDetailsComponent } from './pages/song-details/song-details'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],  
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, SongDetailsComponent]
})
export class App {
  protected readonly title = signal('project');
}
