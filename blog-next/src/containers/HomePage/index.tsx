import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainCointainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { Post } from "../../domain/posts/post";
import { Container } from "./styles";

export type HomePageProps = {
  posts: Post[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainCointainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainCointainer>
      <Footer />
    </>
  );
}
