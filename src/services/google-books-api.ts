import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export async function searchBook(query: string) {
  return axiosInstance.get(`?q=${query}`);
}
