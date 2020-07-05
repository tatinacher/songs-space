import { request } from "lib/request";

export type User = {
  name: string;
  description: string;
  id: string;
};

export const signUp = (user: User): Promise<User> =>
  request({
    url: `/signup`,
    method: "post"
  });
