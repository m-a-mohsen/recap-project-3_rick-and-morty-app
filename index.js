const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// fetch

export async function fetchCharacters() {
  try {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.results.map((character) => {
      console.log(character);

      // const characterName = character.name;
      const characterPicture = character.image;
      const characterName = character.name;
      // status unknown
      const characterStatus = character.status;
      const characterType = character.type;
      const characterOccurrences = characterOccurrences.length;
      console.log(characterPicture);
      console.log(characterName);
      console.log(characterStatus);
      console.log(characterType);

      // run function for card creation with all parameters
    });
  } catch (error) {
    console.log("error: ", error);
  }
}

fetchCharacters();
