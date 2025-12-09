import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainCointainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { Post } from "../../domain/posts/post";
import { Container } from "./styles";
import { SITE_NAME } from "../../config/app-config";

export type HomePageProps = {
  posts: Post[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu blog de tecnologia." />
      </Head>
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
