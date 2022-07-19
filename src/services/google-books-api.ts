import axios from "axios";

export interface Book {
  title: string;
  author?: string;
  imageUrl?: string;
  numPages?: number;
}

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export async function searchBook(query: string) {
  return axiosInstance.get(`?q=${query}`);
}
