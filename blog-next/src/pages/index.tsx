import { Post } from "../domain/posts/post";
import { getAllPosts } from "../data/posts/get-all-posts";
import HomePage from "../containers/HomePage";

export type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <HomePage posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts("sort=id:desc");

  return {
    props: { posts },
  };
};
