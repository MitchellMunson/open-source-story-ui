import {max} from "rxjs";

export interface IPaginatedInfo {
  currentPage: number;
  endPage: number;
  isFirstPage(): boolean;
  isLastPage(): boolean;
  getRange(distanceFromCurrentPage: number): number[];
}

export interface IPaginated<Type> extends IPaginatedInfo {
  currentElements: Type[];
}

export class Paginated<Type> implements IPaginated<Type> {
  currentPage: number;
  endPage: number;
  currentElements: Type[];

  constructor(currentPage: number, endPage: number, currentElements: Type[]) {
    this.currentPage = currentPage;
    this.endPage = endPage;
    this.currentElements = currentElements;
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.endPage;
  }

  getRange(distanceFromCurrentPage: number): number[] {

    if(!this.currentPage || !this.endPage) {
      return [];
    }

    const maxPagination = (distanceFromCurrentPage * 2) + 1;

    if(this.isFirstPage()) {
      return Array(distanceFromCurrentPage).fill(0).map((x,i)=>i + 1);
    }
    else if(this.isLastPage()) {
      return Array(distanceFromCurrentPage)
        .fill(0)
        .map((x,i)=> (this.endPage + i + 1) - distanceFromCurrentPage);
    }
    else {
      const startPoint = Math.max(this.currentPage - distanceFromCurrentPage, 1);
      const endPoint = Math.min(this.currentPage + distanceFromCurrentPage, this.endPage);

      let range: number[] = [];
      for(let index = 0, currentPaginate = startPoint; currentPaginate <= endPoint; ++currentPaginate, ++index) {
        range[index] = currentPaginate;
      }

      return range;
    }
  }

}
