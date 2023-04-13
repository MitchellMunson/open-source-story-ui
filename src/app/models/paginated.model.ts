
export interface IPaginatedInfo {
  currentPage: number;
  endPage: number;
  isFirstPage(): boolean;
  isLastPage(): boolean;
  getRange(): number[];
}

export interface IPaginated<Type> extends IPaginatedInfo {
  currentElements: Type[];
}

export class Paginated<Type> implements IPaginated<Type> {
  currentPage: number;
  endPage: number;
  currentElements: Type[];

  constructor(currentPage: number, endPage: number, currentElements: Type[]) {
    if(!endPage || endPage < 1) {
      this.endPage = 1;
      this.currentPage = 1;
    }
    else {
      this.endPage = endPage;
    }

    if(!currentPage || currentPage < 1) {
      this.currentPage = 1;
    }
    else if(endPage < currentPage) {
      this.currentPage = endPage;
    }
    else {
      this.currentPage = currentPage;
    }

    this.currentElements = currentElements;
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.endPage;
  }

  getRange(): number[] {

    if(!this.currentPage || !this.endPage) {
      return [];
    }

    const maxPageLength: number = 7;
    const previousMaxPageLength: number = 3;
    const afterMaxPageLength: number = 3;

    let beforeLength: number = previousMaxPageLength;
    if((this.endPage - this.currentPage) <= afterMaxPageLength) {
      beforeLength = maxPageLength - (this.endPage - this.currentPage) - 1;
    }

    let afterLength: number = afterMaxPageLength;
    if(this.currentPage <= previousMaxPageLength) {
      afterLength = maxPageLength - this.currentPage;
    }

    let startPoint = Math.max(this.currentPage - beforeLength, 1);
    let endPoint = Math.min(this.currentPage + afterLength, this.endPage);

    let range: number[] = [];
    for(let index = 0, currentPaginate = startPoint; currentPaginate <= endPoint; ++currentPaginate, ++index) {
      range[index] = currentPaginate;
    }

    return range;
  }

}
