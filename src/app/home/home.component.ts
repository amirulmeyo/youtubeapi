import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoSuggestions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchVideoSuggestions();
  }

  fetchVideoSuggestions() {
    const API_KEY = 'AIzaSyBGfh1pjvElN4mNs2016HryQn7G2vwkL6Y';
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=${API_KEY}`;
    this.http.get(API_URL).subscribe((data: any) => {
      this.videoSuggestions = data.items;
    });
  }
}
