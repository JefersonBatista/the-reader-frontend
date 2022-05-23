import { axiosInstance, configAuth } from "./api";

export interface ReadingIntention {
  id: number;
  userId: number;
  title: string;
  author?: string;
  imageUrl?: string;
  priority: number;
  date: string;
}

export type ReadingIntentionData = Omit<
  ReadingIntention,
  "id" | "userId" | "priority" | "date"
>;

async function create(token: string, data: ReadingIntentionData) {
  return axiosInstance.post("/reading-intentions", data, configAuth(token));
}

async function get(token: string) {
  return axiosInstance.get("/reading-intentions", configAuth(token));
}

async function increasePriority(token: string, id: number) {
  return axiosInstance.patch(
    `/reading-intentions/${id}/increase-priority`,
    {},
    configAuth(token)
  );
}

async function decreasePriority(token: string, id: number) {
  return axiosInstance.patch(
    `/reading-intentions/${id}/decrease-priority`,
    {},
    configAuth(token)
  );
}

async function remove(token: string, id: number) {
  return axiosInstance.delete(
    `/reading-intentions/${id}/remove`,
    configAuth(token)
  );
}

export default { create, get, increasePriority, decreasePriority, remove };
