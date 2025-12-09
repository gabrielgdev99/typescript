import { POSTS_URL } from "../../config/app-config";
import { StrapiPostResponse } from "../../domain/posts/post";
import { fetchJson } from "../../utils/fetch-json";

export const getPostsCount = async (): Promise<number> => {
  const url = `${POSTS_URL}?pagination[limit]=1`;
  const json = await fetchJson<StrapiPostResponse>(url);

  return json.meta.pagination.total;
};
