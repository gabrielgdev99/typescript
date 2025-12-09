import { Date } from "../Date";
import { Container } from "./styled";

export type PostDetailsProps = {
  date: string;
};

export const PostDetails = ({ date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} />
    </Container>
  );
};
