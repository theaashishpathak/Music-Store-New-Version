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
