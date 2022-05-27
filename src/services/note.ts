import { axiosInstance, configAuth } from "./api";

export interface Note {
  id: number;
  userId: number;
  readingId: number;
  chapter: number | null;
  page: number | null;
  placeInText: string | null;
  content: string;
  time: string;
}

export type NoteData = Omit<Note, "id" | "userId" | "readingId" | "time">;

async function create(token: string, readingId: number, data: NoteData) {
  return axiosInstance.post(
    `/readings/${readingId}/notes`,
    data,
    configAuth(token)
  );
}

async function get(token: string, readingId: number) {
  return axiosInstance.get(`/readings/${readingId}/notes`, configAuth(token));
}

export default { create, get };
