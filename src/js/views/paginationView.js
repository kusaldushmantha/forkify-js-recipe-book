import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    console.log(this._data.page);
    const numberOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (this._data.page === 1 && numberOfPages > 1) {
      return `
      <button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }

    if (this._data.page === numberOfPages && numberOfPages > 1) {
      return `
        <button data-goto="${
          this._data.page - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>
        `;
    }

    if (this._data.page < numberOfPages) {
      return `
        <button data-goto="${
          this._data.page - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>
        <button data-goto="${
          this._data.page + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }

    return;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (event) {
      const btn = event.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }
}

export default new PaginationView();
