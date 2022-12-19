import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";
let book;

const getBook = async () => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const responseJson = await response.json();

    if (responseJson.error) {
      showResponseMessage(responseJson.message);
    } else {
      book = responseJson.categories;
    }
  } catch (error) {
    showResponseMessage(error);
  }
};

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("club-list");
  getBook();

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(book, searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;