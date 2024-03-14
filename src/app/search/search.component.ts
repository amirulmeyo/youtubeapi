import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) { }

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      const API_KEY = 'AIzaSyBGfh1pjvElN4mNs2016HryQn7G2vwkL6Y';
      const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${this.searchQuery}&key=${API_KEY}`;
      this.http.get(API_URL).subscribe((data: any) => {
        this.searchResults = data.items;
        console.log(data); // Log the response data to the console for debugging
      }, error => {
        console.error('Error fetching search results:', error); // Log any errors to the console
      });
    }
  }

  advancedSearch() {
    // Implement advanced search functionality
    console.log('Performing advanced search');
  }
}
