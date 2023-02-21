import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Chapter} from "../models/chapter.model";
import {MOCK_CHAPTER} from "../mock-data/mock-chapter";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor() { }

  getChapter(storyId: number, chapterNumber: number): Observable<Chapter> {
    const mockChapter: Observable<Chapter> = of(MOCK_CHAPTER);
    return mockChapter;
  }

}
