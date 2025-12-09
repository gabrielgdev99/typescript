import { ContentBlock } from "../../domain/posts/post";
import { Container } from "./styled";

export type PostContainerProps = {
  content: ContentBlock[];
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return (
    <Container>
      {content.map((block, index) => {
        if (block.type !== "paragraph") {
          return null;
        }
        const text = block.children.map((child) => child.text).join("");
        if (!text.trim()) {
          return null;
        }
        return <p key={index}>{text}</p>;
      })}
    </Container>
  );
};
