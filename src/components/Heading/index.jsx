import P from "prop-types";
import * as Styled from "./styles";

export const Heading = ({ children }) => {
  return (
    <Styled.CustomTitle>
      <h1>{children}</h1>
    </Styled.CustomTitle>
  );
};

Heading.protTypes = {
  children: P.node.isRequired,
};
