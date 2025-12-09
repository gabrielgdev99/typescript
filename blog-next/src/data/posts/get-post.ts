import { POSTS_URL } from "../../config/app-config";
import { Post, StrapiPostResponse } from "../../domain/posts/post";
import { fetchJson } from "../../utils/fetch-json";

export const getPostBySlug = async (
  slug: string | string[],
): Promise<Post | null> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;

  const json = await fetchJson<StrapiPostResponse>(url);

  return json.data[0] ?? null;
};
