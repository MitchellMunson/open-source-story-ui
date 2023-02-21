import {Component, Input, OnInit} from '@angular/core';
import {UserComment} from "../../models/comment.model";
import {Status} from "../../models/status.enum";
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute} from "@angular/router";

;

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() isStory: boolean = false;
  @Input() isChapter: boolean = false;

  @Input() comments: UserComment[];

  constructor(private commentService: CommentService,
              private route: ActivatedRoute) {
    this.comments = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const storyId: number = +params['storyId'];

      if(this.isStory) {
        this.commentService.getStoryComments(storyId).subscribe(
          comments => this.comments = comments
        );
      }
      else if(this.isChapter) {
        const commentNumber: number = +params['chapterNumber'];
        this.commentService.getChapterComments(storyId, commentNumber).subscribe(
          comments => this.comments = comments
        );
      }
    });
  }

  isCommentsBlockHidden(): boolean {
    return !this.comments || this.comments.length === 0;
  }

}
