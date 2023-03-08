import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PotentialTag, Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  getPotentialTags(tagFragment: string): Observable<PotentialTag[]> {

    const mockPotentialTags: PotentialTag[] = [
      {
        tagId: 0, 
        tagName: 'Twigs',
        tagGroupDescription: 'Nature', 
        numOfTagUsages: 10
      },
      {
        tagId: 2, 
        tagName: 'Twine',
        tagGroupDescription: 'Clothing', 
        numOfTagUsages: 13
      },
      {
        tagId: 3, 
        tagName: 'Twinkie',
        tagGroupDescription: 'Food', 
        numOfTagUsages: 3004
      },
      {
        tagId: 4, 
        tagName: 'Twins',
        tagGroupDescription: 'Familial', 
        numOfTagUsages: 402
      },
    ];

    const mockTags: Observable<PotentialTag[]> = of(mockPotentialTags);
    return mockTags;
  }


}
