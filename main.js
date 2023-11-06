import { fetchJokeByCategory } from './fetchByCategory.js';
import { searchJoke } from './searchJoke.js';

const jokeButton = document.getElementById("get-joke");
const categoryDropdown = document.getElementById("category");
const searchButton = document.getElementById("search-joke");
const searchInput = document.getElementById("search");
const jokeContainer = document.getElementById("joke-container");

// Add a click event listener to the "Get a Chuck Norris Joke" button
jokeButton.addEventListener("click", () => {
  const selectedCategory = categoryDropdown.value;
  fetchJokeByCategory(selectedCategory, jokeContainer);
});

// Add a click event listener to the "Search" button
searchButton.addEventListener("click", () => {
  const searchQuery = searchInput.value;
  searchJoke(searchQuery, jokeContainer);
});