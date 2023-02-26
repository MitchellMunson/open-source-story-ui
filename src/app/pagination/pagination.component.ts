import {Component, Input} from '@angular/core';
import {Paginated} from "../models/paginated.model";
import {EMPTY_PAGINATED_ANY} from "../mock-data/mock-paginated";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() paginated: Paginated<any>;

  constructor() {
    this.paginated = EMPTY_PAGINATED_ANY;
  }

  onPaginate(value: number): void {
    console.log('Old Paginate Value {}, New Paginate Value {}', this.paginated.currentPage, value);
    this.paginated.currentPage = value;
  }

}
