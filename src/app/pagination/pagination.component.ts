import {Component, Input} from '@angular/core';
import {IPaginatedInfo} from "../models/paginated.model";
import {EMPTY_PAGINATED_INFO} from "../mock-data/mock-paginated";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() paginated: IPaginatedInfo;

  constructor() {
    this.paginated = EMPTY_PAGINATED_INFO;
  }

  onPaginate(value: number): void {
    console.log('Old Paginate Value {}, New Paginate Value {}', this.paginated.currentPage, value);
    this.paginated.currentPage = value;
  }

}
