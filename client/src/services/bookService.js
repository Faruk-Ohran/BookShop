import axios from "axios";

async function getBooksFromDb() {
  try {
    let books = await axios.get("/api");
    return books.data;
  } catch (error) {
    return false;
  }
}

export { getBooksFromDb };
