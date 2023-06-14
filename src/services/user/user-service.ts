import { api } from "@/lib/axios";
import { User } from "./user";

const ENDPOINT = "users";

export const addNewUserMutation = async (data: User) => {
  await api.post(ENDPOINT, data);
};
