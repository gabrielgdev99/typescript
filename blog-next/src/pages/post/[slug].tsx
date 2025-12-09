import { GetStaticPaths, GetStaticProps } from "next";
import { getPostsCount } from "../../data/posts/count-all-posts";
import { getAllPosts } from "../../data/posts/get-all-posts";
import { getPostBySlug } from "../../data/posts/get-post";
import { Post } from "../../domain/posts/post";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export type DynamicPostProps = {
  post: Post;
};

export const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <article>
      <h1>{post.title}</h1>

      <BlocksRenderer content={post.content} />
    </article>
  );
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await getPostsCount();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DynamicPostProps> = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const post = await getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};
