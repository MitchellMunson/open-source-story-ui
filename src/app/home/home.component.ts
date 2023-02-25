import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MOCK_FEATURED } from '../mock-data/mock-featured';
import { Featured, FeaturedChapter, FeaturedStory } from '../models/featured.model';
import { Pair } from '../models/pair.model';
import { FeaturedService } from '../services/featured.service';
import { EMPTY_FEATURED } from '../test-data/test-featured';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


}
