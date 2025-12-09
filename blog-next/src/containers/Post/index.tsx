import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { MainCointainer } from "../../components/MainContainer";
import { PostContainer } from "../../components/PostContainer";
import { PostCover } from "../../components/PostCover";
import { PostDetails } from "../../components/PostDetails";
import { Post } from "../../domain/posts/post";

export type PostProps = {
  post: Post;
};

export const PostP = ({ post }: PostProps) => {
  const coverUrl = post.cover.formats.small.url;
  return (
    <>
      <Header />
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
