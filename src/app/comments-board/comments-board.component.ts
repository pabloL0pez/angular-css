import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments-board',
  templateUrl: './comments-board.component.html',
  styleUrls: ['./comments-board.component.scss']
})
export class CommentsBoardComponent implements OnInit {

  @Input() comments: Comment[] = [];
  slicedComments: Comment[] = [];
  currentPage: number = 1;
  lastPage: number = 999;

  COMMENTS_PER_PAGE = 3;

  constructor() { }

  ngOnInit() {
    this.lastPage = Math.ceil(this.comments.length / this.COMMENTS_PER_PAGE);
    this.sliceComments();
  }

  updateCurrentPage(increment: number) {
    this.currentPage += increment;
    this.sliceComments();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.sliceComments();
  }

  sliceComments() {
    let startIndex = (this.currentPage - 1) * this.COMMENTS_PER_PAGE;
    this.slicedComments = this.comments.slice(startIndex, startIndex + this.COMMENTS_PER_PAGE);
  }
}
