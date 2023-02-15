import {Component, Input, OnInit} from '@angular/core';
import {UserComment} from "../../models/comment.model";
import {DEFAULT_COMMENT_1} from "../../test-data/comment/test-comments";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Status} from "../../models/status.enum";

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {

  @Input() comment: UserComment;

  commentForm: FormGroup;

  isCommentOpen: boolean = true;
  isCommentEdit: boolean = false;
  isCommentReplyOpen: boolean = false;
  isDeleteClicked: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.comment = DEFAULT_COMMENT_1;

    this.commentForm = this.formBuilder.group({
      reply: [''],
      edit: ['']
    });
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      reply: [''],
      edit: [this.comment.text]
    });
  }

  toggleCommentOpenClose(): void {
    this.isCommentOpen = !this.isCommentOpen;
  }

  onCommentEditOpen(): void {
    this.isCommentEdit = true;
    this.onCommentReplyClose();
    this.onDenyDelete();
  }

  onCommentEditClose(): void {
    this.edit.setValue(this.comment.text);
    this.isCommentEdit = false;
  }

  onCommentReplyOpen(): void {
    this.isCommentReplyOpen = true;
    this.onCommentEditClose();
    this.onDenyDelete();
  }

  onCommentReplyClose(): void {
    this.reply.setValue('');
    this.isCommentReplyOpen = false;
  }

  onClickDelete(): void {
    this.isDeleteClicked = !this.isDeleteClicked;
  }

  onConfirmDelete(): void {
    console.log("Submitted Delete");
    this.comment.text = "<Removed By User>";
    this.comment.audit.status = Status.DELETED;
  }

  onDenyDelete(): void {
    this.isDeleteClicked = false;
  }

  onSubmitEdit(): void {
    const editSubmission: string = this.edit.value;
    console.log("Submitted Edit", editSubmission);
    this.onCommentEditClose();
  }

  onSubmitReply(): void {
    const replySubmission: string = this.reply.value;
    console.log("Submitted Reply", replySubmission);
    this.onCommentReplyClose();
  }

  isCommentDeleted(): boolean {
    return this.comment.audit.status === Status.DELETED;
  }

  get reply(): FormControl {
    return this.commentForm.get('reply') as FormControl;
  }

  get edit(): FormControl {
    return this.commentForm.get('edit') as FormControl;
  }

}
