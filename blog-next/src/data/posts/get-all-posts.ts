import { POSTS_URL } from "../../config/app-config";
import { Post, StrapiPostResponse } from "../../domain/posts/post";
import { fetchJson } from "../../utils/fetch-json";

export const getAllPosts = async (query = ""): Promise<Post[]> => {
  const url = query ? `${POSTS_URL}&${query}` : POSTS_URL;
  const json = await fetchJson<StrapiPostResponse>(url);

  return json.data;
};
