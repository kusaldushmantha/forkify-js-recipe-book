import icons from 'url:../../img/icons.svg';
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find the recipe for the provided query';
  _successMessage = '';

  _generateMarkup() {
    return this._data
      .map(result => this._generateMarkupPreview(result))
      .join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
      <a class="preview__link preview__link" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `;
  }
}

export default new ResultsView();