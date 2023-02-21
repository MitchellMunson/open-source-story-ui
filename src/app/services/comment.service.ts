import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserComment} from "../models/comment.model";
import {MOCK_COMMENTS} from "../mock-data/mock-comments";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly STORY_COMMENTS_PATH: string;
  private readonly CHAPTER_COMMENTS_PATH: string;
  private readonly HEADER: HttpHeaders;
  constructor(private http: HttpClient) {
    this.STORY_COMMENTS_PATH = 'comments/story';
    this.CHAPTER_COMMENTS_PATH = 'comments/chapter';

    this.HEADER = new HttpHeaders()
      .append(
        'Content-Type',
        'application/json'
      );
  }

  getStoryComments(storyId: number): Observable<UserComment[]> {

    //TODO: Uncomment when backend setup.
    // const storyCommentsParams = new HttpParams()
    //   .append('storyId', 'storyId');
    // this.http.get<UserComment[]>(this.STORY_COMMENTS_PATH, {
    //   headers: this.HEADER,
    //   params: storyCommentsParams
    // });

    const mockComments: Observable<UserComment[]> = of(MOCK_COMMENTS);
    return mockComments;
  }

  getChapterComments(storyId: number, chapterNumber: number): Observable<UserComment[]> {

    //TODO: Uncomment when backend setup.
    // const chapterCommentsParams = new HttpParams()
    //   .append('storyId', storyId)
    //   .append('chapterNumber', chapterNumber);
    // this.http.get<UserComment[]>(this.CHAPTER_COMMENTS_PATH, {
    //   headers: this.HEADER,
    //   params: chapterCommentsParams
    // });

    const mockComments: Observable<UserComment[]> = of(MOCK_COMMENTS);
    return mockComments;
  }

}
