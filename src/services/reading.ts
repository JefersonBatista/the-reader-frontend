import { axiosInstance, configAuth } from "./api";

export interface Reading {
  id: number;
  userId: number;
  title: string;
  author?: string;
  imageUrl?: string;
  startDate: string;
  endDate?: string;
  numChapters?: number;
  numPages?: number;
  currentPage?: number;
}

export type ReadingData = Omit<
  Reading,
  "id" | "userId" | "currentPage" | "startDate" | "endDate"
>;

async function create(token: string, data: ReadingData) {
  return axiosInstance.post("/readings", data, configAuth(token));
}

async function get(token: string) {
  return axiosInstance.get("/readings", configAuth(token));
}

export default { create, get };
