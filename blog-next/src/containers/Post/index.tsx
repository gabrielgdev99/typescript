import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { MainCointainer } from "../../components/MainContainer";
import { PostContainer } from "../../components/PostContainer";
import { PostCover } from "../../components/PostCover";
import { PostDetails } from "../../components/PostDetails";
import { Post } from "../../domain/posts/post";
import { SITE_NAME } from "../../config/app-config";

export type PostProps = {
  post: Post;
};

export const PostP = ({ post }: PostProps) => {
  const coverUrl = post.cover.formats.small.url;
  return (
    <>
      <Header />
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta name="description" content="Noticia do blog" />
      </Head>
      <MainCointainer>
        <Heading>{post.title}</Heading>

        <PostCover url={coverUrl} alt={post.title} />
        <PostDetails date={post.createdAt} />
        <PostContainer content={post.content} />
      </MainCointainer>
      <Footer />
    </>
  );
};
