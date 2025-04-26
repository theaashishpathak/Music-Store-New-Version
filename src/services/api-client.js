import axios from "axios";

export async function getSongs(termName) {
  const URL = `https://itunes.apple.com/search?term=${termName}&limit=500&country=in`;

  try {
    const response = await axios.get(URL);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
// import axios from "axios";

// export async function getSongs(termName) {
//   const URL = `https://itunes.apple.com/search?term=${termName}&limit=500&country=in`;
// //   const URL = `(link unavailable);
//   try {
//     const response = await axios.get(URL);
//     const songs = response.data.results;
//     const container = document.querySelector(".container");
//     songs.forEach((song, index) => {
//       if (index < 4) { // Only display the first 4 songs
//         const songElement = document.createElement("div");
//         songElement.classList.add("song");
//         songElement.innerHTML = `
//           <h2>${song.trackName}</h2>
//           <p>${song.artistName}</p>
//         `;
//         container.appendChild(songElement);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching songs:", error);
//   }
// }
