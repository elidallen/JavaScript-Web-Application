export function fetchJokeByCategory(category, jokeContainer) {
  return new Promise(async (resolve, reject) => {
    const url = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=${category}`;
    const headers = {
      accept: "application/json",
      "X-RapidAPI-Key": "17b8fddb2dmsh203b2ad9f88c817p14aa23jsne38b2ed7d224",
      "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
    };

    try {
      const response = await fetch(url, { method: "GET", headers });
      if (response.ok) {
        const result = await response.json();
        jokeContainer.innerHTML = `<p>${result.value}</p>`;
        resolve(result.value);
      } else {
        jokeContainer.innerHTML = `<p>Error: Failed to fetch a Chuck Norris joke.</p>`;
        reject("Failed to fetch a Chuck Norris joke.");
      }
    } catch (error) {
      console.error(error);
      jokeContainer.innerHTML = `<p>Error: Failed to fetch a Chuck Norris joke.</p>`;
      reject(error);
    }
  });
}