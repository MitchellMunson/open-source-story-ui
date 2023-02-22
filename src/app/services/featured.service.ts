import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_FEATURED } from '../mock-data/mock-featured';
import { Featured } from '../models/featured.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  private readonly FEATURED_PATH: string;

  private readonly HEADER: HttpHeaders;

  constructor(private http: HttpClient) {
    this.FEATURED_PATH = 'featured';

    this.HEADER = new HttpHeaders()
      .append(
        'Content-Type',
        'application/json'
      );
  }

  getFeatured(): Observable<Featured> {

    // TODO: Uncomment when backend setup.
    // this.http.get<Featured[]>(this.FEATURED_PATH, {
    //   headers: this.HEADER,
    // });

    const mockFeatured: Observable<Featured> = of(MOCK_FEATURED);
    return mockFeatured;
  }
}
