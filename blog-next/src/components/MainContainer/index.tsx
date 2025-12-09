import * as Styled from "./styled";

export type MainContainerProps = {
  children: React.ReactNode;
};

export const MainCointainer = ({ children }: MainContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
