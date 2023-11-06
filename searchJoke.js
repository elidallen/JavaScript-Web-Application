// searchJoke.js
export async function searchJoke(query, jokeContainer) {
    if (!query) {
      jokeContainer.innerHTML = `<p>Please enter a search query.</p>`;
      return;
    }
  
    const url = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${query}`;
    const headers = {
      accept: "application/json",
      "X-RapidAPI-Key": "17b8fddb2dmsh203b2ad9f88c817p14aa23jsne38b2ed7d224", // Replace with your RapidAPI key
      "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
    };
  
    try {
      const response = await fetch(url, { method: "GET", headers });
      if (response.ok) {
        const result = await response.json();
        if (result.total > 0) {
          jokeContainer.innerHTML = `<p>${result.result[0].value}</p>`;
        } else {
          jokeContainer.innerHTML = `<p>No Chuck Norris jokes found for the query.</p>`;
        }
      } else {
        jokeContainer.innerHTML = `<p>Error: Failed to search for Chuck Norris jokes.</p>`;
      }
    } catch (error) {
      console.error(error);
      jokeContainer.innerHTML = `<p>Error: Failed to search for Chuck Norris jokes.</p>`;
    }
  }